export type NewsCategory =
  | 'Politics'
  | 'Business'
  | 'Technology'
  | 'Sports'
  | 'General';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  image: string | null;
  publishedAt: string;
  source: string;
  category: NewsCategory;
}
