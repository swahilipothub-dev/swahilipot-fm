import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import type { MediaAuthor, ArticlePublisher } from '@/types/media';

interface ArticleMetaProps {
  author?: MediaAuthor;
  publisher?: ArticlePublisher;
  publishedAt: string;
  readTime: number;
  updatedAt?: string;
}

export const ArticleMeta = ({
  author,
  publisher,
  publishedAt,
  readTime,
  updatedAt,
}: ArticleMetaProps) => {
  const dateLine = (
    <>
      {format(new Date(publishedAt), 'MMMM d, yyyy')}
      {updatedAt && updatedAt !== publishedAt && (
        <span className='ml-1 text-xs text-gray-400'>
          (updated {format(new Date(updatedAt), 'MMM d')})
        </span>
      )}
    </>
  );

  /* Official publication: event identity instead of an individual byline */
  if (publisher) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='border-y border-gray-100 py-6'
      >
        {/* Navy chip keeps the white logo artwork visible on the light page */}
        {publisher.url ? (
          <a
            href={publisher.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit the ${publisher.name} website`}
            className='inline-flex items-center rounded-xl bg-[#e98523] px-4 py-2.5 transition-all duration-200 hover:scale-[1.03] hover:opacity-90'
          >
            <img
              src={publisher.logo}
              alt='Pwani Innovation Week Logo'
              className='h-8 w-auto object-contain'
            />
          </a>
        ) : (
          <span className='inline-flex items-center rounded-xl bg-[#e98523] px-4 py-2.5'>
            <img
              src={publisher.logo}
              alt='Pwani Innovation Week Logo'
              className='h-8 w-auto object-contain'
            />
          </span>
        )}

        <p className='mt-3 text-sm font-semibold text-gray-900'>
          {publisher.name}
        </p>

        <p className='mt-1.5 flex flex-wrap items-center gap-x-2 text-sm text-gray-500'>
          <span className='flex items-center gap-1.5'>
            <Calendar className='h-3.5 w-3.5' />
            {dateLine}
          </span>
          <span aria-hidden className='text-gray-300'>
            •
          </span>
          <span className='flex items-center gap-1.5'>
            <Clock className='h-3.5 w-3.5' />
            {readTime} min read
          </span>
        </p>
      </motion.div>
    );
  }

  /* Individual byline */
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='flex flex-wrap items-center gap-4 border-y border-gray-100 py-5 text-sm text-gray-500'
    >
      {author && (
        <>
          <div className='flex items-center gap-2.5'>
            <img
              src={author.image}
              alt={author.name}
              className='h-10 w-10 rounded-full object-cover ring-2 ring-gray-100'
            />
            <div>
              {author.slug ? (
                <Link
                  to={`/news/authors/${author.slug}`}
                  className='block text-sm font-semibold text-gray-900 transition-colors hover:text-[#2295e2]'
                >
                  {author.name}
                </Link>
              ) : (
                <span className='block text-sm font-semibold text-gray-900'>
                  {author.name}
                </span>
              )}
              <span className='block text-xs text-gray-500'>{author.role}</span>
            </div>
          </div>

          <Separator orientation='vertical' className='hidden h-8 sm:block' />
        </>
      )}

      <span className='flex items-center gap-1.5'>
        <Calendar className='h-3.5 w-3.5' />
        {dateLine}
      </span>

      <span className='flex items-center gap-1.5'>
        <Clock className='h-3.5 w-3.5' />
        {readTime} min read
      </span>
    </motion.div>
  );
};
