import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { useRelatedArticles } from '@/hooks/useMedia';
import { NewsCard } from './NewsCard';

interface RelatedArticlesProps {
  slug: string;
}

export const RelatedArticles = ({ slug }: RelatedArticlesProps) => {
  const { data: articles = [], isLoading } = useRelatedArticles(slug, 3);

  if (!isLoading && articles.length === 0) return null;

  return (
    <section className='mt-16 pt-10 border-t border-gray-100'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className='font-display text-2xl md:text-3xl font-bold mb-8'
      >
        More Stories
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='space-y-3'>
                <Skeleton className='w-full aspect-[4/3] rounded-xl' />
                <Skeleton className='h-4 w-24 rounded-full' />
                <Skeleton className='h-5 w-full' />
                <Skeleton className='h-4 w-3/4' />
              </div>
            ))
          : articles.map((article, i) => (
              <NewsCard key={article.slug} article={article} index={i} />
            ))}
      </div>
    </section>
  );
};
