import type { CmsAdapter, ArticleQuery, PaginatedResult } from './types';
import type {
  ContentBlock,
  MediaArticle,
  MediaAuthor,
  MediaCategory,
} from '@/types/media';
import { MEDIA_CATEGORIES } from '@/types/media';
import { mediaArticles } from '@/data/mediaData';
import {
  articlesByCategory,
  featuredArticles,
  filterArticles,
  relatedArticles,
} from './articleFilters';

// Defaults match swahilipot-fm-cms/sanity.config.ts; override via .env if needed
const PROJECT_ID =
  (import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined) ?? 'y0gzeipk';
const DATASET =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) ?? 'production';
// apicdn serves reads from Sanity's edge cache — no token needed for public datasets
const QUERY_URL = `https://${PROJECT_ID}.apicdn.sanity.io/v2024-01-01/data/query/${DATASET}`;

const FALLBACK_COVER = '/logos/swahilipot-fm-300.png';

interface SanitySpan {
  text?: string;
}

interface SanityBlock {
  _type: string;
  style?: string;
  listItem?: string;
  children?: SanitySpan[];
}

interface SanityArticle {
  slug: string;
  title: string;
  subtitle?: string | null;
  excerpt?: string | null;
  body?: SanityBlock[] | null;
  cover?: {
    url?: string | null;
    hotspot?: { x?: number | null; y?: number | null } | null;
    aspect?: number | null;
  } | null;
  author?: {
    name?: string | null;
    role?: string | null;
    image?: string | null;
  } | null;
  publishedAt?: string | null;
  createdAt: string;
  category?: string | null;
  tags?: (string | null)[] | null;
  featured?: boolean | null;
  readTime?: number | null;
  relatedSlugs?: (string | null)[] | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    ogImage?: string | null;
  } | null;
}

const PROJECTION = `{
  "slug": slug.current,
  title,
  "subtitle": subheadline,
  excerpt,
  body,
  "cover": featuredImage{
    "url": asset->url,
    "hotspot": hotspot{x, y},
    "aspect": asset->metadata.dimensions.aspectRatio
  },
  "author": author->{name, role, "image": photo.asset->url},
  publishedAt,
  "createdAt": _createdAt,
  "category": category->title,
  tags,
  featured,
  "readTime": readingTime,
  "relatedSlugs": relatedArticles[]->slug.current,
  "seo": seo{"title": metaTitle, "description": metaDescription, "ogImage": socialImage.asset->url}
}`;

const LIST_QUERY = `*[_type == "article" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc)${PROJECTION}`;

const blockText = (block: SanityBlock): string =>
  (block.children ?? []).map((span) => span.text ?? '').join('');

/** Flatten Portable Text into the site's editorial ContentBlock format */
function toContentBlocks(
  body: SanityBlock[] | null | undefined
): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  for (const block of body ?? []) {
    if (block._type !== 'block') continue;
    const text = blockText(block).trim();
    if (!text) continue;

    // Consecutive list items collapse into a single list block
    if (block.listItem) {
      const last = blocks[blocks.length - 1];
      if (last?.type === 'list' && last.items) {
        last.items.push(text);
      } else {
        blocks.push({ type: 'list', content: '', items: [text] });
      }
      continue;
    }

    const style = block.style ?? 'normal';
    const type: ContentBlock['type'] =
      style === 'blockquote'
        ? 'quote'
        : style === 'h1' || style === 'h2'
          ? 'heading'
          : style.startsWith('h')
            ? 'subheading'
            : 'paragraph';
    blocks.push({ type, content: text });
  }
  return blocks;
}

const isMediaCategory = (
  value: string | null | undefined
): value is MediaCategory =>
  !!value && (MEDIA_CATEGORIES as string[]).includes(value);

function estimateReadTime(blocks: ContentBlock[]): number {
  const words = blocks.reduce(
    (sum, b) =>
      sum +
      b.content.split(/\s+/).filter(Boolean).length +
      (b.items?.join(' ').split(/\s+/).filter(Boolean).length ?? 0),
    0
  );
  return Math.max(1, Math.round(words / 200));
}

/** Route image delivery through Sanity's CDN pipeline — right format, sane size */
const imageUrl = (url: string, params: string) =>
  `${url}?${params}&auto=format&q=80`;

function toMediaArticle(raw: SanityArticle): MediaArticle {
  const content = toContentBlocks(raw.body);
  const author: MediaAuthor | undefined = raw.author?.name
    ? {
        name: raw.author.name,
        role: raw.author.role ?? 'Swahilipot FM',
        image: raw.author.image
          ? imageUrl(raw.author.image, 'w=200&h=200&fit=crop')
          : FALLBACK_COVER,
      }
    : undefined;

  const coverUrl = raw.cover?.url;
  const hotspot = raw.cover?.hotspot;
  const coverFocal =
    typeof hotspot?.x === 'number' && typeof hotspot?.y === 'number'
      ? { x: hotspot.x, y: hotspot.y }
      : undefined;

  return {
    slug: raw.slug,
    title: raw.title,
    subtitle: raw.subtitle ?? undefined,
    excerpt:
      raw.excerpt ??
      content.find((b) => b.type === 'paragraph')?.content.slice(0, 180) ??
      '',
    content,
    coverImage: coverUrl ? imageUrl(coverUrl, 'w=1600') : FALLBACK_COVER,
    coverIsPhoto: !!coverUrl,
    coverFocal,
    coverAspect: raw.cover?.aspect ?? undefined,
    author,
    publishedAt: raw.publishedAt ?? raw.createdAt,
    category: isMediaCategory(raw.category) ? raw.category : 'Community',
    tags: raw.tags?.filter((t): t is string => !!t) ?? [],
    featured: raw.featured ?? false,
    readTime: raw.readTime ?? estimateReadTime(content),
    relatedSlugs: raw.relatedSlugs?.filter((s): s is string => !!s),
    seo: raw.seo
      ? {
          title: raw.seo.title ?? undefined,
          description: raw.seo.description ?? undefined,
          ogImage: raw.seo.ogImage ?? undefined,
        }
      : undefined,
  };
}

async function fetchQuery<T>(query: string): Promise<T> {
  const url = new URL(QUERY_URL);
  url.searchParams.set('query', query);
  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Sanity API error: ${res.status} ${res.statusText}`);
  }
  const { result } = (await res.json()) as { result: T };
  return result;
}

const CACHE_TTL = 60_000;

/**
 * Serves studio-published articles merged with the hand-authored local ones
 * (Sanity wins on slug conflicts). The full list is small and CDN-cached, so
 * fetching it once per TTL keeps filtering, search and pagination behaviour
 * identical to the local adapter.
 */
export class SanityCmsAdapter implements CmsAdapter {
  private cache: { at: number; promise: Promise<MediaArticle[]> } | null = null;

  private allArticles(): Promise<MediaArticle[]> {
    const now = Date.now();
    if (this.cache && now - this.cache.at < CACHE_TTL) {
      return this.cache.promise;
    }
    const promise = fetchQuery<SanityArticle[]>(LIST_QUERY)
      .then((raw) => {
        const fromSanity = raw.map(toMediaArticle);
        const slugs = new Set(fromSanity.map((a) => a.slug));
        return [
          ...fromSanity,
          ...mediaArticles.filter((a) => !slugs.has(a.slug)),
        ];
      })
      .catch((err) => {
        // Sanity unreachable (network, CORS, outage) — keep the bundled
        // articles on the site and retry on the next cache expiry
        console.warn(
          'Sanity CMS unavailable, serving local articles only:',
          err
        );
        this.cache = null;
        return mediaArticles;
      });
    this.cache = { at: now, promise };
    return promise;
  }

  async getArticles(
    query: ArticleQuery = {}
  ): Promise<PaginatedResult<MediaArticle>> {
    return filterArticles(await this.allArticles(), query);
  }

  async getArticleBySlug(slug: string): Promise<MediaArticle | null> {
    return (await this.allArticles()).find((a) => a.slug === slug) ?? null;
  }

  async getFeaturedArticles(limit = 3): Promise<MediaArticle[]> {
    return featuredArticles(await this.allArticles(), limit);
  }

  async getRelatedArticles(slug: string, limit = 3): Promise<MediaArticle[]> {
    return relatedArticles(await this.allArticles(), slug, limit);
  }

  async getArticlesByCategory(
    category: MediaCategory,
    limit = 10
  ): Promise<MediaArticle[]> {
    return articlesByCategory(await this.allArticles(), category, limit);
  }
}
