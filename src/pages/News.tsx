import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FeaturedNewsHero } from '@/components/news/FeaturedNewsHero';
import { NewsCard } from '@/components/news/NewsCard';
import { NewsCategorySection } from '@/components/news/NewsCategorySection';
import { NewsFilter } from '@/components/news/NewsFilter';
import { NewsletterSubscription } from '@/components/news/NewsletterSubscription';
import { useMediaArticles, useFeaturedArticles } from '@/hooks/useMedia';
import { MEDIA_CATEGORIES } from '@/types/media';
import type { MediaCategory } from '@/types/media';

const HeroSkeleton = () => (
  <Skeleton className='w-full h-[480px] md:h-[560px] rounded-3xl' />
);

const GridSkeleton = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className='space-y-3' aria-hidden>
        <Skeleton className='w-full aspect-[4/3] rounded-xl' />
        <Skeleton className='h-4 w-24 rounded-full' />
        <Skeleton className='h-5 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    ))}
  </div>
);

const News = () => {
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get('cat') ?? 'All';
  const search = searchParams.get('q') ?? '';
  const isFiltering = !!search || activeCategory !== 'All';

  const { data: featuredData, isLoading: featuredLoading } =
    useFeaturedArticles(1);
  const featuredArticle = featuredData?.[0];

  const { data: articlesResult, isLoading: articlesLoading } = useMediaArticles(
    {
      category:
        activeCategory !== 'All'
          ? (activeCategory as MediaCategory)
          : undefined,
      search: search || undefined,
      limit: 12,
    }
  );

  const allArticles = articlesResult?.data ?? [];
  const total = articlesResult?.total ?? 0;

  // In default view exclude featured to avoid duplicate
  const gridArticles = isFiltering
    ? allArticles
    : allArticles.filter((a) => a.slug !== featuredArticle?.slug);

  const clearFilters = () => {
    window.history.replaceState(null, '', '/news');
  };

  return (
    <>
      <Helmet>
        <title>News &amp; Stories | Swahilipot FM</title>
        <meta
          name='description'
          content='Editorial features, community voices, and cultural stories from Swahilipot FM — covering youth, innovation, creative arts, and FM shows from the Kenyan coast.'
        />
        <meta
          property='og:title'
          content='News &amp; Stories | Swahilipot FM'
        />
        <meta
          property='og:description'
          content='The editorial voice of Swahilipot FM — community stories, youth voices, and coastal creativity.'
        />
        <meta property='og:type' content='website' />
      </Helmet>

      <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 mb-10'>
        <div className='max-w-7xl mx-auto space-y-10'>
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className='flex flex-col md:flex-row md:items-end justify-between gap-4'
          >
            <div>
              <span className='text-[#2295e2] text-sm font-semibold uppercase tracking-widest'>
                Swahilipot FM
              </span>
              <h1 className='font-display text-4xl md:text-5xl font-bold mt-1'>
                News &amp; Stories
              </h1>
              <p className='text-gray-600 mt-2 max-w-xl'>
                Editorial features, community voices, and cultural stories from
                Mombasa and the Kenyan coast.
              </p>
            </div>
          </motion.div>

          {/* Featured hero — only in default state */}
          {!isFiltering && (
            <>
              {featuredLoading ? (
                <HeroSkeleton />
              ) : (
                featuredArticle && (
                  <FeaturedNewsHero article={featuredArticle} />
                )
              )}
            </>
          )}

          {/* Search + category filter */}
          <NewsFilter
            totalResults={isFiltering ? total : undefined}
            isLoading={articlesLoading}
          />

          <Separator />

          {isFiltering ? (
            /* Filtered view — single unified grid */
            <section aria-label='Stories'>
              <AnimatePresence mode='wait'>
                {articlesLoading ? (
                  <motion.div
                    key='skeleton'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <GridSkeleton />
                  </motion.div>
                ) : gridArticles.length === 0 ? (
                  <motion.div
                    key='empty'
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center py-16 bg-gray-50 rounded-2xl'
                  >
                    <p className='text-gray-500 text-lg mb-4'>
                      No stories found for that filter.
                    </p>
                    <Button
                      variant='ghost'
                      className='text-[#271d73] hover:text-[#2295e2]'
                      onClick={clearFilters}
                    >
                      Clear filters
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key='grid'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  >
                    {gridArticles.map((article, i) => (
                      <NewsCard
                        key={article.slug}
                        article={article}
                        index={i}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          ) : (
            /* Default view — a section per editorial category with stories */
            <div className='space-y-12'>
              {MEDIA_CATEGORIES.map((category) => (
                <NewsCategorySection
                  key={category}
                  category={category}
                  excludeSlug={featuredArticle?.slug}
                />
              ))}
            </div>
          )}

          {/* Newsletter */}
          <NewsletterSubscription />
        </div>
      </div>
    </>
  );
};

export default News;
