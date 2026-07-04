/** Categories whose stories are aggregated from external publishers */
export type AggregatedCategory =
  'Politics' | 'Business' | 'Sports' | 'World Cup';

export const AGGREGATED_CATEGORIES: AggregatedCategory[] = [
  'Politics',
  'Business',
  'Sports',
  'World Cup',
];

export const isAggregatedCategory = (
  value: string
): value is AggregatedCategory =>
  (AGGREGATED_CATEGORIES as string[]).includes(value);

/** A headline curated from an external publisher; clicking opens the original article */
export interface AggregatedArticle {
  id: string;
  title: string;
  /** Canonical URL on the publisher's website */
  link: string;
  excerpt: string;
  image?: string;
  publishedAt: string;
  sourceName: string;
  category: AggregatedCategory;
}
