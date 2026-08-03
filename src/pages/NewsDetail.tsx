import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { ArticleMeta } from '@/components/news/ArticleMeta';
import { PublisherCallout } from '@/components/news/PublisherCallout';
import { ArticleContent } from '@/components/news/ArticleContent';
import { ArticleGallery } from '@/components/news/ArticleGallery';
import { ArticleTags } from '@/components/news/ArticleTags';
import { ReadingProgressBar } from '@/components/news/ReadingProgressBar';
import { ShareButtons } from '@/components/news/ShareButtons';
import { RelatedArticles } from '@/components/news/RelatedArticles';
import { LiveRadioBanner } from '@/components/news/LiveRadioBanner';
import { NewsletterSubscription } from '@/components/news/NewsletterSubscription';
import { CATEGORY_STYLES } from '@/components/news/categoryStyles';
import { useMediaArticle } from '@/hooks/useMedia';

const DetailSkeleton = () => (
  <div className='container mx-auto px-4 md:px-6 py-12 max-w-3xl mb-10 space-y-6'>
    <Skeleton className='h-4 w-28 rounded-full' />
    <Skeleton className='h-5 w-24 rounded-full' />
    <div className='space-y-2'>
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-4/5' />
    </div>
    <div className='flex gap-3 items-center'>
      <Skeleton className='h-10 w-10 rounded-full' />
      <div className='space-y-1.5'>
        <Skeleton className='h-4 w-32' />
        <Skeleton className='h-3 w-24' />
      </div>
    </div>
    <Skeleton className='w-full h-72 rounded-2xl' />
    <div className='space-y-4'>
      {Array.from({ length: 7 }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-5 ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  </div>
);

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, isError } = useMediaArticle(slug ?? '');

  if (isLoading) return <DetailSkeleton />;
  if (isError || !article) return <Navigate to='/news' replace />;

  const siteOrigin =
    typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteOrigin}/news/${article.slug}`;
  const ogImage = article.seo?.ogImage ?? article.coverImage;

  return (
    <>
      <Helmet>
        <title>
          {article.seo?.title ?? `${article.title} | Swahilipot FM`}
        </title>
        <meta
          name='description'
          content={article.seo?.description ?? article.excerpt}
        />
        {article.seo?.keywords && (
          <meta name='keywords' content={article.seo.keywords.join(', ')} />
        )}
        <link rel='canonical' href={canonicalUrl} />
        <meta
          property='og:title'
          content={article.seo?.title ?? article.title}
        />
        <meta
          property='og:description'
          content={article.seo?.description ?? article.excerpt}
        />
        <meta property='og:image' content={ogImage} />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:type' content='article' />
        <meta property='article:published_time' content={article.publishedAt} />
        <meta property='article:section' content={article.category} />
        {article.tags.map((tag) => (
          <meta key={tag} property='article:tag' content={tag} />
        ))}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={article.seo?.title ?? article.title}
        />
        <meta
          name='twitter:description'
          content={article.seo?.description ?? article.excerpt}
        />
        <meta name='twitter:image' content={ogImage} />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: article.title,
            description: article.excerpt,
            image: ogImage,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt ?? article.publishedAt,
            author: article.author
              ? {
                  '@type': 'Person',
                  name: article.author.name,
                  jobTitle: article.author.role,
                }
              : {
                  '@type': 'Organization',
                  name: article.publisher?.name ?? 'Swahilipot FM',
                  ...(article.publisher?.url && { url: article.publisher.url }),
                },
            publisher: {
              '@type': 'Organization',
              name: 'Swahilipot FM',
              logo: {
                '@type': 'ImageObject',
                url: `${siteOrigin}/logos/swahilipot-fm-300.png`,
              },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          })}
        </script>
      </Helmet>

      <ReadingProgressBar />

      <article
        className='container mx-auto px-4 md:px-6 py-10 md:py-14 mb-10'
        aria-label={article.title}
      >
        {/* Header — kept to a comfortable reading measure */}
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

            <h1 className='mt-5 mb-5 font-display text-[34px] font-bold leading-[1.15] tracking-tight md:text-5xl md:leading-[1.1]'>
              {article.title}
            </h1>

            {article.subtitle && (
              <p className='mb-7 text-lg leading-relaxed text-gray-500 md:text-xl'>
                {article.subtitle}
              </p>
            )}
          </motion.div>

          <ArticleMeta
            author={article.author}
            publisher={article.publisher}
            publishedAt={article.publishedAt}
            readTime={article.readTime}
            updatedAt={article.updatedAt}
          />
        </div>

        {/* Hero image — wider than the text column for editorial presence */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className='mx-auto mt-8 max-w-5xl'
        >
          {article.coverIsPhoto ? (
            <>
              {/* Natural aspect ratio, height-capped — the reader sees the whole photo */}
              <div className='overflow-hidden rounded-2xl bg-gray-100 md:rounded-3xl'>
                <img
                  src={article.coverImage}
                  alt={article.coverCaption ?? article.title}
                  className='mx-auto max-h-[600px] w-auto max-w-full'
                  loading='eager'
                />
              </div>
              {(article.coverCaption || article.coverCredit) && (
                <figcaption className='mx-auto mt-4 max-w-[760px] text-sm leading-relaxed text-gray-500'>
                  {article.coverCaption}
                  {article.coverCredit && (
                    <span className='mt-1 block text-xs uppercase tracking-wider text-gray-400'>
                      Photo: {article.coverCredit}
                    </span>
                  )}
                </figcaption>
              )}
            </>
          ) : (
            <div className='relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#271d73] via-[#1e3a8a] to-[#2295e2] md:aspect-[2/1] md:rounded-3xl'>
              <div
                className='absolute inset-0 opacity-5'
                style={{
                  backgroundImage:
                    'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <img
                src={article.coverImage}
                alt={article.title}
                className='relative h-40 w-40 object-contain opacity-90 drop-shadow-2xl'
                loading='eager'
              />
            </div>
          )}
        </motion.figure>

        {/* Editorial brand callout — official publisher website */}
        {article.publisher && (
          <PublisherCallout publisher={article.publisher} />
        )}

        {/* Body — immersive reading column with floating share rail */}
        <div className='relative mx-auto mt-10 max-w-[720px] md:mt-14'>
          <ShareButtons title={article.title} url={canonicalUrl} />

          <ArticleContent content={article.content} />

          {article.gallery?.length ? (
            <ArticleGallery
              images={article.gallery}
              articleTitle={article.title}
            />
          ) : null}

          <ArticleTags tags={article.tags} />

          <div className='mt-12'>
            <LiveRadioBanner />
          </div>
        </div>

        {/* Related stories — full-width section */}
        <div className='mx-auto max-w-7xl'>
          <RelatedArticles slug={article.slug} />
        </div>

        {/* Newsletter */}
        <div className='mx-auto mt-14 max-w-[720px]'>
          <NewsletterSubscription />
        </div>
      </article>
    </>
  );
};

export default NewsDetail;
