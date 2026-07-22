import type { CmsAdapter, ArticleQuery, PaginatedResult } from './types';
import type { MediaArticle, MediaCategory } from '@/types/media';
import { mediaArticles } from '@/data/mediaData';
import {
  articlesByCategory,
  featuredArticles,
  filterArticles,
  relatedArticles,
} from './articleFilters';

export class LocalCmsAdapter implements CmsAdapter {
  async getArticles(
    query: ArticleQuery = {}
  ): Promise<PaginatedResult<MediaArticle>> {
    return filterArticles(mediaArticles, query);
  }

  async getArticleBySlug(slug: string): Promise<MediaArticle | null> {
    return mediaArticles.find((a) => a.slug === slug) ?? null;
  }

  async getFeaturedArticles(limit = 3): Promise<MediaArticle[]> {
    return featuredArticles(mediaArticles, limit);
  }

  async getRelatedArticles(slug: string, limit = 3): Promise<MediaArticle[]> {
    return relatedArticles(mediaArticles, slug, limit);
  }

  async getArticlesByCategory(
    category: MediaCategory,
    limit = 10
  ): Promise<MediaArticle[]> {
    return articlesByCategory(mediaArticles, category, limit);
  }
}
