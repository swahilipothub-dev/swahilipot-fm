import type { MediaArticle, MediaCategory } from '@/types/media';
import type { ArticleQuery, PaginatedResult } from './types';

/** Shared in-memory query helpers used by adapters that hold a full article list */

export const sortByNewest = (articles: MediaArticle[]): MediaArticle[] =>
  [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

export function filterArticles(
  articles: MediaArticle[],
  query: ArticleQuery = {}
): PaginatedResult<MediaArticle> {
  const {
    category,
    search,
    limit = 12,
    offset = 0,
    featured,
    tags,
    authorSlug,
    excludeSlugs,
  } = query;

  let results = articles;

  if (category) {
    results = results.filter((a) => a.category === category);
  }
  if (featured !== undefined) {
    results = results.filter((a) => a.featured === featured);
  }
  if (tags?.length) {
    results = results.filter((a) => tags.some((tag) => a.tags.includes(tag)));
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
  if (authorSlug) {
    results = results.filter((a) => a.author?.slug === authorSlug);
  }
  if (excludeSlugs?.length) {
    const excluded = new Set(excludeSlugs);
    results = results.filter((a) => !excluded.has(a.slug));
  }

  results = sortByNewest(results);

  const total = results.length;
  const data = results.slice(offset, offset + limit);

  return { data, total, limit, offset, hasMore: offset + limit < total };
}

export function featuredArticles(
  articles: MediaArticle[],
  limit = 3
): MediaArticle[] {
  const featured = sortByNewest(articles.filter((a) => a.featured));
  if (featured.length > 0) {
    return featured.slice(0, limit);
  }
  return sortByNewest(articles).slice(0, limit);
}

export function relatedArticles(
  articles: MediaArticle[],
  slug: string,
  limit = 3
): MediaArticle[] {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return [];

  if (article.relatedSlugs?.length) {
    const explicit = article.relatedSlugs
      .map((s) => articles.find((a) => a.slug === s))
      .filter((a): a is MediaArticle => !!a)
      .slice(0, limit);
    if (explicit.length >= limit) return explicit;
  }

  // Fall back to same-category articles, excluding self
  return articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}

export function articlesByCategory(
  articles: MediaArticle[],
  category: MediaCategory,
  limit = 10
): MediaArticle[] {
  return sortByNewest(articles.filter((a) => a.category === category)).slice(
    0,
    limit
  );
}
