import type {
  AggregatedArticle,
  AggregatedCategory,
} from '@/types/aggregatedNews';
import { sourcesForCategory } from './sources';
import type { NewsSource } from './sources';

const FETCH_TIMEOUT_MS = 12_000;
/** How long a fetched feed is reused before hitting the network again */
const FEED_TTL_MS = 5 * 60 * 1000;
const MRSS_NS = 'http://search.yahoo.com/mrss/';

interface RawFeedItem {
  id: string;
  title: string;
  link: string;
  excerpt: string;
  image?: string;
  publishedAt: string;
}

/** Decode entities and drop markup without executing anything (DOMParser docs are inert) */
const stripHtml = (html: string): string =>
  new DOMParser()
    .parseFromString(html, 'text/html')
    .body.textContent?.replace(/\s+/g, ' ')
    .trim() ?? '';

const text = (parent: Element, tag: string): string =>
  parent.getElementsByTagName(tag)[0]?.textContent?.trim() ?? '';

const itemImage = (item: Element): string | undefined => {
  const media = item.getElementsByTagNameNS(MRSS_NS, 'content')[0];
  const url =
    media?.getAttribute('url') ??
    item.getElementsByTagName('enclosure')[0]?.getAttribute('url');
  return url || undefined;
};

const parseFeed = (xml: string): RawFeedItem[] => {
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  if (doc.getElementsByTagName('parsererror').length > 0) {
    throw new Error('Feed returned malformed XML');
  }

  return Array.from(doc.getElementsByTagName('item'))
    .map((item) => {
      const link = text(item, 'link');
      const pubDate = text(item, 'pubDate');
      const publishedAt = new Date(pubDate);

      return {
        id: text(item, 'guid') || link,
        title: stripHtml(text(item, 'title')),
        link,
        excerpt: stripHtml(text(item, 'description')),
        image: itemImage(item),
        publishedAt: Number.isNaN(publishedAt.getTime())
          ? new Date().toISOString()
          : publishedAt.toISOString(),
      };
    })
    .filter((item) => item.title && item.link);
};

/* Feeds are fetched at most once per TTL window, even when several
   categories share one feed (e.g. Sports and World Cup). */
const feedCache = new Map<
  string,
  { at: number; promise: Promise<RawFeedItem[]> }
>();

const loadFeed = (feedUrl: string): Promise<RawFeedItem[]> => {
  const cached = feedCache.get(feedUrl);
  if (cached && Date.now() - cached.at < FEED_TTL_MS) return cached.promise;

  const promise = (async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const res = await fetch(feedUrl, { signal: controller.signal });
      if (!res.ok) throw new Error(`Feed responded with ${res.status}`);
      return parseFeed(await res.text());
    } finally {
      clearTimeout(timer);
    }
  })();

  feedCache.set(feedUrl, { at: Date.now(), promise });
  // A failed fetch shouldn't poison the cache for the whole TTL
  promise.catch(() => {
    if (feedCache.get(feedUrl)?.promise === promise) feedCache.delete(feedUrl);
  });

  return promise;
};

const matchesKeywords = (item: RawFeedItem, keywords?: string[]): boolean => {
  if (!keywords?.length) return true;
  const haystack = `${item.title} ${item.excerpt}`.toLowerCase();
  return keywords.some((k) => haystack.includes(k.toLowerCase()));
};

const fromSource = async (source: NewsSource): Promise<AggregatedArticle[]> => {
  const items = await loadFeed(source.feedUrl);
  return items
    .filter((item) => matchesKeywords(item, source.keywords))
    .map((item) => ({
      ...item,
      sourceName: source.name,
      category: source.category,
    }));
};

/**
 * Latest headlines for a category, merged across all of its sources,
 * newest first and de-duplicated by link. Throws only when every source fails.
 */
export const fetchCategoryNews = async (
  category: AggregatedCategory
): Promise<AggregatedArticle[]> => {
  const sources = sourcesForCategory(category);
  const results = await Promise.allSettled(sources.map(fromSource));

  const fulfilled = results.filter(
    (r): r is PromiseFulfilledResult<AggregatedArticle[]> =>
      r.status === 'fulfilled'
  );
  if (sources.length > 0 && fulfilled.length === 0) {
    throw new Error(`All sources for ${category} are unavailable`);
  }

  const seen = new Set<string>();
  return fulfilled
    .flatMap((r) => r.value)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter((article) => {
      if (seen.has(article.link)) return false;
      seen.add(article.link);
      return true;
    });
};
