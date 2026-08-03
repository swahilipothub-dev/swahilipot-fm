import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { NewsCard } from '@/components/news/NewsCard';
import { useArticlesByCategory } from '@/hooks/useMedia';
import type { MediaCategory } from '@/types/media';

interface NewsCategorySectionProps {
  category: MediaCategory;
  excludeSlugs?: string[];
}

export const NewsCategorySection = ({
  category,
  excludeSlugs = [],
}: NewsCategorySectionProps) => {
  const { data: articles, isLoading } = useArticlesByCategory(category, 4);

  const excluded = new Set(excludeSlugs);
  const visible = (articles ?? []).filter((a) => !excluded.has(a.slug));

  if (!isLoading && visible.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      aria-label={category}
      className='space-y-5'
    >
      <div className='flex items-center justify-between border-b border-gray-200 pb-3'>
        <h2 className='font-display text-2xl font-bold flex items-center gap-3'>
          <span className='w-2 h-6 rounded-sm bg-[#2295e2]' />
          {category}
        </h2>
        <Link
          to={`/news?cat=${encodeURIComponent(category)}`}
          className='text-sm font-semibold text-[#271d73] hover:text-[#2295e2] flex items-center gap-1 shrink-0'
        >
          See all <ArrowRight className='h-3.5 w-3.5' />
        </Link>
      </div>

      {isLoading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className='space-y-3' aria-hidden>
              <Skeleton className='w-full aspect-[16/9] rounded-xl' />
              <Skeleton className='h-4 w-24 rounded-full' />
              <Skeleton className='h-5 w-full' />
            </div>
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {visible.map((article, i) => (
            <NewsCard
              key={article.slug}
              article={article}
              index={i}
              variant='compact'
            />
          ))}
        </div>
      )}
    </motion.section>
  );
};
