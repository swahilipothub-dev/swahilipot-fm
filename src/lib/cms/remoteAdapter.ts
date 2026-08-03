import type { CmsAdapter, ArticleQuery, PaginatedResult } from './types';
import type {
  MediaArticle,
  MediaAuthorProfile,
  MediaCategory,
} from '@/types/media';

// Set VITE_CMS_ENDPOINT in your .env file to point at your CMS REST API.
// Expected contract:
//   GET /articles          → PaginatedResult<MediaArticle>
//   GET /articles/:slug    → MediaArticle
//   GET /articles/featured → MediaArticle[]
//   GET /articles/:slug/related → MediaArticle[]
const BASE_URL = (import.meta.env.VITE_CMS_ENDPOINT as string) ?? '';

export class RemoteCmsAdapter implements CmsAdapter {
  private async request<T>(
    path: string,
    params?: Record<string, string>
  ): Promise<T> {
    if (!BASE_URL) {
      throw new Error(
        'VITE_CMS_ENDPOINT is not set. Add it to your .env file to use the remote CMS adapter.'
      );
    }
    const url = new URL(`${BASE_URL}${path}`);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString(), {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`CMS API error: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<T>;
  }

  async getArticles(
    query: ArticleQuery = {}
  ): Promise<PaginatedResult<MediaArticle>> {
    const params: Record<string, string> = {};
    if (query.category) params.category = query.category;
    if (query.search) params.search = query.search;
    if (query.limit !== undefined) params.limit = String(query.limit);
    if (query.offset !== undefined) params.offset = String(query.offset);
    if (query.featured !== undefined) params.featured = String(query.featured);
    if (query.tags?.length) params.tags = query.tags.join(',');
    if (query.authorSlug) params.authorSlug = query.authorSlug;
    if (query.excludeSlugs?.length)
      params.excludeSlugs = query.excludeSlugs.join(',');
    return this.request<PaginatedResult<MediaArticle>>('/articles', params);
  }

  async getArticleBySlug(slug: string): Promise<MediaArticle | null> {
    return this.request<MediaArticle>(`/articles/${slug}`);
  }

  async getFeaturedArticles(limit = 3): Promise<MediaArticle[]> {
    return this.request<MediaArticle[]>('/articles/featured', {
      limit: String(limit),
    });
  }

  async getRelatedArticles(slug: string, limit = 3): Promise<MediaArticle[]> {
    return this.request<MediaArticle[]>(`/articles/${slug}/related`, {
      limit: String(limit),
    });
  }

  async getAuthorBySlug(slug: string): Promise<MediaAuthorProfile | null> {
    try {
      return await this.request<MediaAuthorProfile>(`/authors/${slug}`);
    } catch {
      const result = await this.getArticles({ authorSlug: slug, limit: 1 });
      return result.data[0]?.author ?? null;
    }
  }

  async getArticlesByAuthor(
    slug: string,
    query: Omit<ArticleQuery, 'authorSlug'> = {}
  ): Promise<PaginatedResult<MediaArticle>> {
    try {
      const params: Record<string, string> = {};
      if (query.search) params.search = query.search;
      if (query.limit !== undefined) params.limit = String(query.limit);
      if (query.offset !== undefined) params.offset = String(query.offset);
      if (query.tags?.length) params.tags = query.tags.join(',');
      if (query.excludeSlugs?.length) {
        params.excludeSlugs = query.excludeSlugs.join(',');
      }
      return await this.request<PaginatedResult<MediaArticle>>(
        `/authors/${slug}/articles`,
        params
      );
    } catch {
      return this.getArticles({ ...query, authorSlug: slug });
    }
  }

  async getArticlesByCategory(
    category: MediaCategory,
    limit = 10
  ): Promise<MediaArticle[]> {
    const result = await this.getArticles({ category, limit });
    return result.data;
  }
}
