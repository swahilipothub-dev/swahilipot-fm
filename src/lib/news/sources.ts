import type { AggregatedCategory } from '@/types/aggregatedNews';

/**
 * A single external feed powering an aggregated category.
 * To add a provider, append an entry here — no frontend changes needed.
 */
export interface NewsSource {
  id: string;
  /** Publisher name shown on cards */
  name: string;
  category: AggregatedCategory;
  /** RSS/Atom feed to pull headlines from */
  feedUrl: string;
  /** Category landing page on the publisher's website */
  homepage: string;
  /**
   * Optional keyword filter (case-insensitive, matched against title + excerpt).
   * Lets a broad feed power a narrower category until a dedicated feed exists.
   */
  keywords?: string[];
}

export const NEWS_SOURCES: NewsSource[] = [
  {
    id: 'standard-politics',
    name: 'The Standard',
    category: 'Politics',
    feedUrl: 'https://www.standardmedia.co.ke/rss/politics.php',
    homepage: 'https://www.standardmedia.co.ke/category/3/politics',
  },
  {
    id: 'standard-business',
    name: 'The Standard',
    category: 'Business',
    feedUrl: 'https://www.standardmedia.co.ke/rss/business.php',
    homepage: 'https://www.standardmedia.co.ke/business',
  },
  {
    id: 'standard-sports',
    name: 'The Standard',
    category: 'Sports',
    feedUrl: 'https://www.standardmedia.co.ke/rss/sports.php',
    homepage: 'https://www.standardmedia.co.ke/sports',
  },
  {
    // The Standard has no dedicated World Cup feed; filter the sports feed
    id: 'standard-worldcup',
    name: 'The Standard',
    category: 'World Cup',
    feedUrl: 'https://www.standardmedia.co.ke/rss/sports.php',
    homepage: 'https://www.standardmedia.co.ke/worldcup',
    keywords: ['world cup', 'fifa', 'mundial'],
  },
];

export const sourcesForCategory = (
  category: AggregatedCategory
): NewsSource[] => NEWS_SOURCES.filter((s) => s.category === category);

const hostOf = (url: string): string | null => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
};

/** Match an article URL back to its registered publisher — used to keep outbound links allowlisted */
export const sourceForUrl = (url: string): NewsSource | undefined => {
  const host = hostOf(url);
  if (!host) return undefined;
  return NEWS_SOURCES.find((s) => hostOf(s.homepage) === host);
};
