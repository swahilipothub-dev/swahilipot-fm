export type MediaCategory =
  | 'Technology'
  | 'Innovation'
  | 'Community'
  | 'Events'
  | 'Youth Stories'
  | 'Creative Arts'
  | 'FM Shows';

export const MEDIA_CATEGORIES: MediaCategory[] = [
  'Technology',
  'Innovation',
  'Community',
  'Events',
  'Youth Stories',
  'Creative Arts',
  'FM Shows',
];

export type ContentBlockType =
  | 'paragraph'
  | 'heading'
  | 'subheading'
  | 'quote'
  | 'image'
  | 'list';

export interface ContentBlock {
  type: ContentBlockType;
  content: string;
  items?: string[];
  caption?: string;
}

export interface MediaAuthor {
  name: string;
  role: string;
  image: string;
}

export interface ArticleSeo {
  title?: string;
  description?: string;
  ogImage?: string;
  keywords?: string[];
}

export interface MediaArticle {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: ContentBlock[];
  coverImage: string;
  /** When true, coverImage is a real photograph rendered full-bleed instead of the logo-on-gradient treatment */
  coverIsPhoto?: boolean;
  /** Optional byline; stories without one are published under the station itself */
  author?: MediaAuthor;
  publishedAt: string;
  updatedAt?: string;
  category: MediaCategory;
  tags: string[];
  featured: boolean;
  readTime: number;
  relatedSlugs?: string[];
  seo?: ArticleSeo;
}
