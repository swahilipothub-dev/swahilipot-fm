import type {
  MediaArticle,
  MediaAuthorProfile,
  MediaCategory,
} from '@/types/media';

export interface ArticleQuery {
  category?: MediaCategory;
  search?: string;
  limit?: number;
  offset?: number;
  featured?: boolean;
  tags?: string[];
  authorSlug?: string;
  excludeSlugs?: string[];
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
  getAuthorBySlug(slug: string): Promise<MediaAuthorProfile | null>;
  getArticlesByAuthor(
    slug: string,
    query?: Omit<ArticleQuery, 'authorSlug'>
  ): Promise<PaginatedResult<MediaArticle>>;
  getArticlesByCategory(
    category: MediaCategory,
    limit?: number
  ): Promise<MediaArticle[]>;
}
