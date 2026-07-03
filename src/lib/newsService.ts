import type { NewsArticle, NewsCategory } from '@/types/news';

interface NewsFeed {
  name: string;
  url: string;
  defaultCategory: NewsCategory;
}

interface NewsCache {
  date: string;
  articles: NewsArticle[];
}

const NEWS_CACHE_KEY = 'spfm-news-cache-v1';
const CATEGORY_FALLBACK_IMAGES: Record<NewsCategory, string> = {
  Politics:
    'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
  Business:
    'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
  Technology:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  Sports:
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
  General:
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
};

const NEWS_FEEDS: NewsFeed[] = [
  {
    name: 'Tuko',
    url: 'https://www.tuko.co.ke/rss/',
    defaultCategory: 'General',
  },
  {
    name: 'The Standard',
    url: 'https://www.standardmedia.co.ke/rss/headlines.php',
    defaultCategory: 'General',
  },
  {
    name: 'Citizen Digital',
    url: 'https://www.citizen.digital/rss',
    defaultCategory: 'General',
  },
  {
    name: 'Nation Africa',
    url: 'https://nation.africa/kenya/rss',
    defaultCategory: 'General',
  },
  {
    name: 'BBC',
    url: 'https://feeds.bbci.co.uk/news/world/rss.xml',
    defaultCategory: 'Politics',
  },
  {
    name: 'BBC',
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml',
    defaultCategory: 'Business',
  },
  {
    name: 'BBC',
    url: 'https://feeds.bbci.co.uk/news/technology/rss.xml',
    defaultCategory: 'Technology',
  },
  {
    name: 'BBC',
    url: 'https://feeds.bbci.co.uk/sport/rss.xml',
    defaultCategory: 'Sports',
  },
  {
    name: 'Al Jazeera',
    url: 'https://www.aljazeera.com/xml/rss/all.xml',
    defaultCategory: 'Politics',
  },
  {
    name: 'Al Jazeera',
    url: 'https://www.aljazeera.com/xml/rss/all.xml?section=sport',
    defaultCategory: 'Sports',
  },
];

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ').trim();

const getTagText = (item: Element, selectors: string[]): string => {
  for (const selector of selectors) {
    const node = item.querySelector(selector);
    const content = node?.textContent?.trim();
    if (content) {
      return content;
    }
  }
  return '';
};

const extractImageUrl = (
  item: Element,
  fallbackText: string
): string | null => {
  const mediaContent =
    item.querySelector('media\\:content')?.getAttribute('url') ||
    item.querySelector('content')?.getAttribute('url');
  if (mediaContent) {
    return mediaContent;
  }

  const enclosure = item.querySelector('enclosure')?.getAttribute('url');
  if (enclosure) {
    return enclosure;
  }

  const descriptionImage = fallbackText.match(
    /<img[^>]+src=['"]([^'"]+)['"]/i
  )?.[1];
  if (descriptionImage) {
    return descriptionImage;
  }

  return null;
};

const detectCategory = (
  title: string,
  excerpt: string,
  feedDefault: NewsCategory,
  rawCategory: string
): NewsCategory => {
  const bag = `${title} ${excerpt} ${rawCategory}`.toLowerCase();

  if (
    /(election|parliament|government|senate|president|policy|politic|diplomacy|governor|cabinet)/.test(
      bag
    )
  ) {
    return 'Politics';
  }

  if (
    /(economy|market|stock|trade|business|finance|startup|bank|shilling|inflation|revenue)/.test(
      bag
    )
  ) {
    return 'Business';
  }

  if (
    /(technology|tech|software|ai|digital|internet|app|cyber|device|innovation)/.test(
      bag
    )
  ) {
    return 'Technology';
  }

  if (
    /(sport|football|soccer|rugby|athletics|tennis|basketball|premier league|fifa|olympic)/.test(
      bag
    )
  ) {
    return 'Sports';
  }

  return feedDefault;
};

const parseFeedXml = (feed: NewsFeed, xmlString: string): NewsArticle[] => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, 'application/xml');
  const parserError = xml.querySelector('parsererror');
  if (parserError) {
    return [];
  }

  const items = Array.from(xml.querySelectorAll('item'));
  return items
    .map((item, index) => {
      const title = getTagText(item, ['title']);
      const rawDescription = getTagText(item, [
        'description',
        'content\\:encoded',
      ]);
      const excerpt = stripHtml(rawDescription).slice(0, 220);
      const url = getTagText(item, ['link']);
      const publishedAt = getTagText(item, ['pubDate', 'published', 'updated']);
      const rawCategory = getTagText(item, ['category']);

      if (!title || !url) {
        return null;
      }

      return {
        id: `${feed.name}-${index}-${title}`.toLowerCase().replace(/\s+/g, '-'),
        title,
        excerpt: excerpt || 'Tap to read the full article from the source.',
        url,
        image: extractImageUrl(item, rawDescription),
        publishedAt: publishedAt || new Date().toISOString(),
        source: feed.name,
        category: detectCategory(
          title,
          excerpt,
          feed.defaultCategory,
          rawCategory
        ),
      } satisfies NewsArticle;
    })
    .filter((article): article is NewsArticle => article !== null);
};

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const getCachedNews = (): NewsCache | null => {
  try {
    const cached = localStorage.getItem(NEWS_CACHE_KEY);
    if (!cached) {
      return null;
    }
    return JSON.parse(cached) as NewsCache;
  } catch {
    return null;
  }
};

const setCachedNews = (articles: NewsArticle[]) => {
  try {
    const payload: NewsCache = { date: getTodayKey(), articles };
    localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Intentionally swallow cache write failures.
  }
};

const fetchWithProxyFallback = async (feedUrl: string): Promise<string> => {
  const proxyUrls = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
    `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`,
  ];

  for (const url of proxyUrls) {
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        continue;
      }
      const text = await response.text();
      if (text.includes('<rss') || text.includes('<feed')) {
        return text;
      }
    } catch {
      // Try next proxy endpoint.
    }
  }

  throw new Error(`Unable to fetch feed: ${feedUrl}`);
};

const sortByNewest = (articles: NewsArticle[]) =>
  [...articles].sort((a, b) => {
    const aTime = new Date(a.publishedAt).getTime();
    const bTime = new Date(b.publishedAt).getTime();
    return bTime - aTime;
  });

const dedupeArticles = (articles: NewsArticle[]) => {
  const map = new Map<string, NewsArticle>();
  for (const article of articles) {
    const key = article.url || article.title.toLowerCase();
    if (!map.has(key)) {
      map.set(key, article);
    }
  }
  return Array.from(map.values());
};

export const getDailyNewsArticles = async (): Promise<NewsArticle[]> => {
  const cached = getCachedNews();
  const today = getTodayKey();
  if (cached && cached.date === today && cached.articles.length > 0) {
    return cached.articles;
  }

  const settled = await Promise.allSettled(
    NEWS_FEEDS.map(async (feed) => {
      const xmlString = await fetchWithProxyFallback(feed.url);
      return parseFeedXml(feed, xmlString);
    })
  );

  const parsed = settled
    .filter(
      (result): result is PromiseFulfilledResult<NewsArticle[]> =>
        result.status === 'fulfilled'
    )
    .flatMap((result) => result.value);

  const finalArticles = sortByNewest(dedupeArticles(parsed)).slice(0, 80);
  if (finalArticles.length > 0) {
    const withImages = finalArticles.map((article) => ({
      ...article,
      image: article.image || CATEGORY_FALLBACK_IMAGES[article.category],
    }));
    setCachedNews(withImages);
    return withImages;
  }

  if (cached?.articles?.length) {
    return cached.articles;
  }

  return [];
};
