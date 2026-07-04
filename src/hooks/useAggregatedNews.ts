import { useQuery, useQueries } from '@tanstack/react-query';
import { fetchCategoryNews } from '@/lib/news/rss';
import { AGGREGATED_CATEGORIES } from '@/types/aggregatedNews';
import type {
  AggregatedArticle,
  AggregatedCategory,
} from '@/types/aggregatedNews';

const STALE_TIME = 1000 * 60 * 5;

export const useAggregatedNews = (
  category: AggregatedCategory,
  limit?: number
) =>
  useQuery({
    queryKey: ['aggregated-news', category],
    queryFn: () => fetchCategoryNews(category),
    staleTime: STALE_TIME,
    retry: 1,
    select: limit
      ? (articles: AggregatedArticle[]) => articles.slice(0, limit)
      : undefined,
  });

/** Look up a single aggregated story by its publisher link, across all category feeds */
export const useAggregatedStory = (link: string) => {
  const results = useQueries({
    queries: AGGREGATED_CATEGORIES.map((cat) => ({
      queryKey: ['aggregated-news', cat],
      queryFn: () => fetchCategoryNews(cat),
      staleTime: STALE_TIME,
      retry: 1,
    })),
  });

  const article = results
    .flatMap((r) => r.data ?? [])
    .find((a) => a.link === link);

  return {
    article,
    isLoading: !article && results.some((r) => r.isLoading),
  };
};

/**
 * Headline search across aggregated categories (all of them, or a single one).
 * Feeds are cached by React Query, so typing filters instantly client-side.
 */
export const useAggregatedSearch = (
  search: string,
  category?: AggregatedCategory
) => {
  const categories = category ? [category] : AGGREGATED_CATEGORIES;

  const results = useQueries({
    queries: categories.map((cat) => ({
      queryKey: ['aggregated-news', cat],
      queryFn: () => fetchCategoryNews(cat),
      staleTime: STALE_TIME,
      retry: 1,
    })),
  });

  const q = search.trim().toLowerCase();
  const seen = new Set<string>();
  const articles = results
    .flatMap((r) => r.data ?? [])
    .filter((a) => {
      if (seen.has(a.link)) return false;
      seen.add(a.link);
      return (
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
      );
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return {
    articles,
    isLoading: results.some((r) => r.isLoading),
    isError: results.every((r) => r.isError),
  };
};
