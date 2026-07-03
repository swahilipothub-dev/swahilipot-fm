import type { MediaArticle, MediaCategory } from '@/types/media';

export interface ArticleQuery {
  category?: MediaCategory;
  search?: string;
  limit?: number;
  offset?: number;
  featured?: boolean;
  tags?: string[];
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export interface CmsAdapter {
  getArticles(query?: ArticleQuery): Promise<PaginatedResult<MediaArticle>>;
  getArticleBySlug(slug: string): Promise<MediaArticle | null>;
  getFeaturedArticles(limit?: number): Promise<MediaArticle[]>;
  getRelatedArticles(slug: string, limit?: number): Promise<MediaArticle[]>;
  getArticlesByCategory(
    category: MediaCategory,
    limit?: number
  ): Promise<MediaArticle[]>;
}
