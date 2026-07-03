import type { CmsAdapter, ArticleQuery, PaginatedResult } from './types';
import type { MediaArticle, MediaCategory } from '@/types/media';
import { mediaArticles } from '@/data/mediaData';

export class LocalCmsAdapter implements CmsAdapter {
  async getArticles(
    query: ArticleQuery = {}
  ): Promise<PaginatedResult<MediaArticle>> {
    const { category, search, limit = 12, offset = 0, featured, tags } = query;

    let results = [...mediaArticles];

    if (category) {
      results = results.filter((a) => a.category === category);
    }
    if (featured !== undefined) {
      results = results.filter((a) => a.featured === featured);
    }
    if (tags?.length) {
      results = results.filter((a) =>
        tags.some((tag) => a.tags.includes(tag))
      );
    }
    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    results = results.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    const total = results.length;
    const data = results.slice(offset, offset + limit);

    return { data, total, limit, offset, hasMore: offset + limit < total };
  }

  async getArticleBySlug(slug: string): Promise<MediaArticle | null> {
    return mediaArticles.find((a) => a.slug === slug) ?? null;
  }

  async getFeaturedArticles(limit = 3): Promise<MediaArticle[]> {
    return mediaArticles
      .filter((a) => a.featured)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  }

  async getRelatedArticles(slug: string, limit = 3): Promise<MediaArticle[]> {
    const article = mediaArticles.find((a) => a.slug === slug);
    if (!article) return [];

    if (article.relatedSlugs?.length) {
      const explicit = article.relatedSlugs
        .map((s) => mediaArticles.find((a) => a.slug === s))
        .filter((a): a is MediaArticle => !!a)
        .slice(0, limit);
      if (explicit.length >= limit) return explicit;
    }

    // Fall back to same-category articles, excluding self
    return mediaArticles
      .filter((a) => a.slug !== slug && a.category === article.category)
      .slice(0, limit);
  }

  async getArticlesByCategory(
    category: MediaCategory,
    limit = 10
  ): Promise<MediaArticle[]> {
    return mediaArticles
      .filter((a) => a.category === category)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  }
}
