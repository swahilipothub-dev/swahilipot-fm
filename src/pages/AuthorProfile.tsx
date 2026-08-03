import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  FileText,
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { NewsCard } from '@/components/news/NewsCard';
import { useArticlesByAuthor, useMediaAuthor } from '@/hooks/useMedia';

const AuthorProfileSkeleton = () => (
  <div className='container mx-auto px-4 md:px-6 py-12 max-w-6xl mb-10 space-y-6'>
    <Skeleton className='h-4 w-32 rounded-full' />
    <div className='flex flex-col md:flex-row md:items-center gap-6'>
      <Skeleton className='h-28 w-28 rounded-full' />
      <div className='space-y-2 flex-1'>
        <Skeleton className='h-8 w-72' />
        <Skeleton className='h-4 w-52' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <Skeleton className='h-24 rounded-xl' />
      <Skeleton className='h-24 rounded-xl' />
      <Skeleton className='h-24 rounded-xl' />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className='h-72 rounded-xl' />
      ))}
    </div>
  </div>
);

const socialConfig = [
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'x', label: 'X', icon: Twitter },
  { key: 'facebook', label: 'Facebook', icon: Facebook },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'github', label: 'GitHub', icon: Github },
  { key: 'website', label: 'Website', icon: Globe },
] as const;

const AuthorProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: author,
    isLoading: authorLoading,
    isError: authorError,
  } = useMediaAuthor(slug ?? '');
  const { data: articleResult, isLoading: articlesLoading } =
    useArticlesByAuthor(slug ?? '', { limit: 24 });

  if (authorLoading) return <AuthorProfileSkeleton />;
  if (authorError || !author) return <Navigate to='/news' replace />;

  const articles = articleResult?.data ?? [];
  const totalArticles = articleResult?.total ?? 0;

  const socialLinks = socialConfig
    .map((item) => ({
      ...item,
      href: author.socialLinks?.[item.key],
    }))
    .filter((item) => !!item.href);

  const earliest = articles
    .map((article) => new Date(article.publishedAt).getTime())
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b)[0];

  const latest = articles
    .map((article) => new Date(article.publishedAt).getTime())
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => b - a)[0];

  return (
    <>
      <Helmet>
        <title>{author.name} | Author Profile | Swahilipot FM</title>
        <meta
          name='description'
          content={
            author.bio ??
            `Read stories and updates written by ${author.name} on Swahilipot FM.`
          }
        />
      </Helmet>

      <section className='container mx-auto px-4 md:px-6 py-12 md:py-16 mb-10'>
        <div className='mx-auto max-w-6xl space-y-8'>
          <Link
            to='/news'
            className='inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#271d73]'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to News &amp; Stories
          </Link>

          <div className='rounded-3xl bg-gradient-to-br from-[#f3f8ff] via-white to-[#fdf6ec] p-6 md:p-8'>
            <div className='flex flex-col gap-6 md:flex-row md:items-start'>
              <img
                src={author.image}
                alt={author.name}
                className='h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md'
              />

              <div className='flex-1'>
                <p className='text-xs font-semibold uppercase tracking-widest text-[#2295e2]'>
                  Author Profile
                </p>
                <h1 className='mt-1 font-display text-3xl md:text-4xl font-bold text-gray-900'>
                  {author.name}
                </h1>
                <p className='mt-1 text-sm font-medium text-gray-600'>
                  {author.role}
                </p>

                {author.bio && (
                  <p className='mt-4 max-w-3xl text-gray-700 leading-relaxed'>
                    {author.bio}
                  </p>
                )}

                {socialLinks.length > 0 && (
                  <div className='mt-5 flex flex-wrap items-center gap-2'>
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.key}
                          href={social.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:border-[#2295e2] hover:text-[#2295e2]'
                          aria-label={`${author.name} on ${social.label}`}
                        >
                          <Icon className='h-3.5 w-3.5' />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Card className='p-5 border-gray-200'>
              <p className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
                Total Articles
              </p>
              <p className='mt-2 font-display text-3xl font-bold text-[#271d73]'>
                {totalArticles}
              </p>
            </Card>
            <Card className='p-5 border-gray-200'>
              <p className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
                First Publication
              </p>
              <p className='mt-2 text-sm font-semibold text-gray-900'>
                {earliest ? new Date(earliest).toLocaleDateString() : 'N/A'}
              </p>
            </Card>
            <Card className='p-5 border-gray-200'>
              <p className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
                Latest Publication
              </p>
              <p className='mt-2 text-sm font-semibold text-gray-900'>
                {latest ? new Date(latest).toLocaleDateString() : 'N/A'}
              </p>
            </Card>
          </div>

          <div className='space-y-5'>
            <div className='flex items-center justify-between'>
              <h2 className='font-display text-2xl md:text-3xl font-bold'>
                Articles by {author.name}
              </h2>
              <span className='inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600'>
                <FileText className='h-3.5 w-3.5' />
                {totalArticles} total
              </span>
            </div>

            {articlesLoading ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className='h-72 rounded-xl' />
                ))}
              </div>
            ) : articles.length === 0 ? (
              <Card className='p-8 text-center border-gray-200'>
                <p className='text-gray-500'>
                  No published stories for this author yet.
                </p>
              </Card>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {articles.map((article, index) => (
                  <NewsCard
                    key={article.slug}
                    article={article}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorProfile;
