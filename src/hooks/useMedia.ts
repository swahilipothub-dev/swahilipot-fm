import { useQuery } from '@tanstack/react-query';
import { cms } from '@/lib/cms';
import type { ArticleQuery } from '@/lib/cms';
import type { MediaCategory } from '@/types/media';

const STALE_TIME = 1000 * 60 * 5;

export const useMediaArticles = (query?: ArticleQuery) =>
  useQuery({
    queryKey: ['media-articles', query],
    queryFn: () => cms.getArticles(query),
    staleTime: STALE_TIME,
    // Keep previous data visible while a new filtered query loads
    placeholderData: (prev) => prev,
  });

export const useMediaArticle = (slug: string) =>
  useQuery({
    queryKey: ['media-article', slug],
    queryFn: () => cms.getArticleBySlug(slug),
    staleTime: STALE_TIME,
    enabled: !!slug,
  });

export const useFeaturedArticles = (limit?: number) =>
  useQuery({
    queryKey: ['media-featured', limit],
    queryFn: () => cms.getFeaturedArticles(limit),
    staleTime: STALE_TIME,
  });

export const useRelatedArticles = (slug: string, limit?: number) =>
  useQuery({
    queryKey: ['media-related', slug, limit],
    queryFn: () => cms.getRelatedArticles(slug, limit),
    staleTime: STALE_TIME,
    enabled: !!slug,
  });

export const useArticlesByCategory = (
  category: MediaCategory,
  limit?: number
) =>
  useQuery({
    queryKey: ['media-by-category', category, limit],
    queryFn: () => cms.getArticlesByCategory(category, limit),
    staleTime: STALE_TIME,
  });
