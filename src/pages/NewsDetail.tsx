import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ArticleMeta } from '@/components/news/ArticleMeta';
import { ArticleContent } from '@/components/news/ArticleContent';
import { RelatedArticles } from '@/components/news/RelatedArticles';
import { LiveRadioBanner } from '@/components/news/LiveRadioBanner';
import { NewsletterSubscription } from '@/components/news/NewsletterSubscription';
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
        <Skeleton key={i} className={`h-5 ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`} />
      ))}
    </div>
  </div>
);

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, isError } = useMediaArticle(slug ?? '');

  if (isLoading) return <DetailSkeleton />;
  if (isError || !article) return <Navigate to='/news' replace />;

  const siteOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteOrigin}/news/${article.slug}`;
  const ogImage = article.seo?.ogImage ?? article.coverImage;

  return (
    <>
      <Helmet>
        <title>{article.seo?.title ?? `${article.title} | Swahilipot FM`}</title>
        <meta name='description' content={article.seo?.description ?? article.excerpt} />
        {article.seo?.keywords && (
          <meta name='keywords' content={article.seo.keywords.join(', ')} />
        )}
        <link rel='canonical' href={canonicalUrl} />
        <meta property='og:title' content={article.seo?.title ?? article.title} />
        <meta property='og:description' content={article.seo?.description ?? article.excerpt} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:type' content='article' />
        <meta property='article:published_time' content={article.publishedAt} />
        <meta property='article:section' content={article.category} />
        {article.tags.map((tag) => (
          <meta key={tag} property='article:tag' content={tag} />
        ))}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={article.seo?.title ?? article.title} />
        <meta name='twitter:description' content={article.seo?.description ?? article.excerpt} />
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
              : { '@type': 'Organization', name: 'Swahilipot FM' },
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

      <article className='container mx-auto px-4 md:px-6 py-12 mb-10' aria-label={article.title}>
        <div className='max-w-3xl mx-auto'>

          {/* Back link */}
          <Link
            to='/news'
            className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#271d73] transition-colors mb-8'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to News &amp; Stories
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Badge variant='secondary' className='mb-4'>{article.category}</Badge>

            <h1 className='font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4'>
              {article.title}
            </h1>

            {article.subtitle && (
              <p className='text-xl text-gray-500 mb-6 leading-relaxed'>
                {article.subtitle}
              </p>
            )}
          </motion.div>

          {/* Author + share meta */}
          <ArticleMeta
            author={article.author}
            publishedAt={article.publishedAt}
            readTime={article.readTime}
            updatedAt={article.updatedAt}
          />

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className='relative rounded-2xl overflow-hidden my-8 aspect-[16/9] md:aspect-[2/1] bg-gradient-to-br from-[#271d73] via-[#1e3a8a] to-[#2295e2] flex items-center justify-center'
          >
            {article.coverIsPhoto ? (
              <img
                src={article.coverImage}
                alt={article.title}
                className='absolute inset-0 w-full h-full object-cover'
                loading='eager'
              />
            ) : (
              <>
                <div className='absolute inset-0 opacity-5' style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className='relative w-40 h-40 object-contain opacity-90 drop-shadow-2xl'
                  loading='eager'
                />
              </>
            )}
          </motion.div>

          {/* Article body */}
          <ArticleContent content={article.content} />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-2'
          >
            {article.tags.map((tag) => (
              <Badge key={tag} variant='outline' className='text-xs rounded-full'>
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Live radio banner */}
          <div className='mt-10'>
            <LiveRadioBanner />
          </div>

          {/* Related articles — rendered in a wider container */}
        </div>

        {/* Full-width related articles */}
        <div className='max-w-7xl mx-auto px-0 md:px-0'>
          <RelatedArticles slug={article.slug} />
        </div>

        {/* Newsletter */}
        <div className='max-w-3xl mx-auto mt-14'>
          <NewsletterSubscription />
        </div>
      </article>
    </>
  );
};

export default NewsDetail;
