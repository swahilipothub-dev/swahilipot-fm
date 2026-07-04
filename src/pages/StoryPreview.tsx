import { useEffect } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalNewsCard } from '@/components/news/ExternalNewsCard';
import { LiveRadioBanner } from '@/components/news/LiveRadioBanner';
import { CATEGORY_STYLES } from '@/components/news/categoryStyles';
import {
  useAggregatedNews,
  useAggregatedStory,
} from '@/hooks/useAggregatedNews';
import { sourceForUrl } from '@/lib/news/sources';
import type { AggregatedCategory } from '@/types/aggregatedNews';

const PreviewSkeleton = () => (
  <div className='container mx-auto px-4 md:px-6 py-12 max-w-[760px] mb-10 space-y-6'>
    <Skeleton className='h-4 w-28 rounded-full' />
    <Skeleton className='h-5 w-24 rounded-full' />
    <div className='space-y-2'>
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-4/5' />
    </div>
    <Skeleton className='w-full aspect-[16/9] rounded-2xl' />
    <div className='space-y-3'>
      <Skeleton className='h-5 w-full' />
      <Skeleton className='h-5 w-3/4' />
    </div>
    <Skeleton className='h-12 w-72 rounded-full' />
  </div>
);

const MoreFromCategory = ({
  category,
  excludeLink,
}: {
  category: AggregatedCategory;
  excludeLink: string;
}) => {
  const { data: articles } = useAggregatedNews(category, 4);
  const more = (articles ?? [])
    .filter((a) => a.link !== excludeLink)
    .slice(0, 3);

  if (more.length === 0) return null;

  return (
    <section aria-label={`More in ${category}`} className='mt-14 space-y-5'>
      <h2 className='font-display text-2xl font-bold border-b border-gray-200 pb-3'>
        More in {category}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {more.map((article, i) => (
          <ExternalNewsCard
            key={article.id}
            article={article}
            index={i}
            variant='compact'
          />
        ))}
      </div>
    </section>
  );
};

const StoryPreview = () => {
  const [searchParams] = useSearchParams();
  const src = searchParams.get('src') ?? '';

  const { article, isLoading } = useAggregatedStory(src);

  // Jumping between previews keeps the same route; reset the reading position
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [src]);

  if (!src) return <Navigate to='/news' replace />;
  if (isLoading) return <PreviewSkeleton />;

  /* Story rotated out of the feed — still offer the original when the
     link belongs to a registered publisher (never link to arbitrary URLs) */
  if (!article) {
    const knownSource = sourceForUrl(src);
    return (
      <div className='container mx-auto px-4 md:px-6 py-16 max-w-[760px] mb-10'>
        <div className='text-center py-16 bg-gray-50 rounded-2xl px-6'>
          <p className='text-gray-500 text-lg mb-6'>
            This story is no longer among our latest headlines.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Button
              asChild
              variant='outline'
              className='rounded-full border-gray-300 text-[#271d73]'
            >
              <Link to='/news'>
                <ArrowLeft className='h-4 w-4 mr-1.5' /> Back to News
              </Link>
            </Button>
            {knownSource && (
              <Button
                asChild
                className='rounded-full bg-[#271d73] hover:bg-[#2295e2] text-white'
              >
                <a href={src} target='_blank' rel='noopener noreferrer'>
                  Read the full story
                  <ExternalLink className='h-4 w-4 ml-1.5' />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const publishedDate = new Date(article.publishedAt);

  return (
    <>
      <Helmet>
        <title>{`${article.title} | Swahilipot FM`}</title>
        <meta name='description' content={article.excerpt} />
        <meta name='robots' content='noindex' />
      </Helmet>

      <div className='container mx-auto px-4 md:px-6 py-10 md:py-14 mb-10'>
        <div className='mx-auto max-w-[760px]'>
          <Link
            to='/news'
            className='mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#271d73]'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to News &amp; Stories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span
              className={`inline-block rounded-full px-3.5 py-1 text-xs font-semibold ${
                CATEGORY_STYLES[article.category] ?? 'bg-gray-100 text-gray-700'
              }`}
            >
              {article.category}
            </span>

            <h1 className='mt-5 mb-5 font-display text-[32px] font-bold leading-[1.15] tracking-tight md:text-[42px] md:leading-[1.1]'>
              {article.title}
            </h1>

            <p className='mb-7 flex flex-wrap items-center gap-x-2 border-y border-gray-100 py-4 text-sm text-gray-500'>
              <span className='flex items-center gap-1.5'>
                <Calendar className='h-3.5 w-3.5' />
                {format(publishedDate, 'MMMM d, yyyy · h:mm a')}
              </span>
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='overflow-hidden rounded-2xl'
          >
            {article.image ? (
              <div className='aspect-[16/9] overflow-hidden bg-gray-100'>
                <img
                  src={article.image}
                  alt={article.title}
                  className='h-full w-full object-cover'
                  loading='eager'
                />
              </div>
            ) : (
              <div className='flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#271d73] to-[#2295e2]'>
                <Newspaper aria-hidden className='h-16 w-16 text-white/70' />
              </div>
            )}
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {article.excerpt && (
              <p className='mt-8 text-lg leading-relaxed text-gray-700 md:text-xl'>
                {article.excerpt}
              </p>
            )}

            <p className='mt-6 text-xs text-gray-400'>
              <a
                href={article.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Continue reading the full story (opens in a new tab)'
                className='inline-flex items-center gap-1 transition-colors hover:text-[#2295e2]'
              >
                Continue reading
                <ExternalLink className='h-3 w-3' />
              </a>
              <span aria-hidden className='mx-2 text-gray-300'>
                ·
              </span>
              Source: {article.sourceName}
            </p>

            <div className='mt-10'>
              <LiveRadioBanner />
            </div>
          </motion.div>
        </div>

        <div className='mx-auto max-w-5xl'>
          <MoreFromCategory
            category={article.category}
            excludeLink={article.link}
          />
        </div>
      </div>
    </>
  );
};

export default StoryPreview;
