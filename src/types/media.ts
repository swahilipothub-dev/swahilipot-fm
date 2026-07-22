export type MediaCategory =
  | 'Technology'
  | 'Innovation'
  | 'Community'
  | 'Events'
  | 'Youth Stories'
  | 'Creative Arts'
  | 'FM Shows'
  | 'Politics'
  | 'Business'
  | 'Sports'
  | 'Music';

export const MEDIA_CATEGORIES: MediaCategory[] = [
  'Technology',
  'Innovation',
  'Community',
  'Events',
  'Youth Stories',
  'Creative Arts',
  'FM Shows',
  'Politics',
  'Business',
  'Sports',
  'Music',
];

export type ContentBlockType =
  'paragraph' | 'heading' | 'subheading' | 'quote' | 'image' | 'list' | 'stats';

export interface ArticleStat {
  value: string;
  label: string;
}

export interface ContentBlock {
  type: ContentBlockType;
  content: string;
  items?: string[];
  caption?: string;
  /** Attribution line for pull quotes, e.g. the speaker's name */
  attribution?: string;
  /** Figures rendered as editorial statistic cards for 'stats' blocks */
  stats?: ArticleStat[];
}

export interface MediaAuthor {
  name: string;
  role: string;
  image: string;
}

/** Official event or organisation identity shown in place of an individual byline */
export interface ArticlePublisher {
  name: string;
  /** Plain brand name without qualifiers like "Official", used in alt/aria text */
  shortName?: string;
  logo: string;
  url?: string;
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
  /** Editor-chosen focal point (0–1, from the CMS hotspot) keeping the subject visible in cropped frames */
  coverFocal?: { x: number; y: number };
  /** Natural aspect ratio (width ÷ height) of the cover photo */
  coverAspect?: number;
  /** Editorial caption shown under the hero image */
  coverCaption?: string;
  /** Photo credit shown under the hero caption */
  coverCredit?: string;
  /** Individual byline; omit for official publications */
  author?: MediaAuthor;
  /** Official event/organisation identity shown instead of an author */
  publisher?: ArticlePublisher;
  publishedAt: string;
  updatedAt?: string;
  category: MediaCategory;
  tags: string[];
  featured: boolean;
  readTime: number;
  relatedSlugs?: string[];
  seo?: ArticleSeo;
}
