import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { CATEGORY_STYLES } from './categoryStyles';
import type { MediaArticle } from '@/types/media';

interface NewsCardProps {
  article: MediaArticle;
  index?: number;
  variant?: 'default' | 'compact';
}

export const NewsCard = ({
  article,
  index = 0,
  variant = 'default',
}: NewsCardProps) => {
  const isCompact = variant === 'compact';
  const articleHref = `/news/${article.slug}`;
  const authorHref = article.author?.slug
    ? `/news/authors/${article.author.slug}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className='h-full'
    >
      <Card className='group overflow-hidden h-full flex flex-col border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300'>
        <Link to={articleHref} className='block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2295e2] focus-visible:ring-offset-2'>
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-[#271d73] to-[#2295e2] flex items-center justify-center ${isCompact ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
          >
            <img
              src={article.coverImage}
              alt={article.title}
              className={
                article.coverIsPhoto
                  ? 'absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  : 'w-24 h-24 object-contain opacity-90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110'
              }
              style={
                article.coverIsPhoto && article.coverFocal
                  ? {
                      objectPosition: `${article.coverFocal.x * 100}% ${article.coverFocal.y * 100}%`,
                    }
                  : undefined
              }
              loading='lazy'
            />
            {article.featured && (
              <span className='absolute top-3 left-3 bg-[#e98523] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full'>
                Featured
              </span>
            )}
          </div>
        </Link>

        <div className='p-5 flex flex-col flex-1'>
          <div className='flex items-center justify-between gap-2 mb-3'>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${CATEGORY_STYLES[article.category] ?? 'bg-gray-100 text-gray-700'}`}
            >
              {article.category}
            </span>
            <span className='text-xs text-gray-400 flex items-center gap-1 shrink-0'>
              <Clock className='h-3 w-3' />
              {article.readTime} min
            </span>
          </div>

          <Link to={articleHref} className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2295e2] focus-visible:ring-offset-2'>
            <h3 className='font-bold text-lg leading-tight mb-2 group-hover:text-[#2295e2] transition-colors line-clamp-2'>
              {article.title}
            </h3>
          </Link>

          {!isCompact && (
            <p className='text-gray-600 text-sm mb-4 flex-1 line-clamp-3'>
              {article.excerpt}
            </p>
          )}

          <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100'>
            {article.author ? (
              <div className='flex items-center gap-2 min-w-0'>
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className='w-5 h-5 rounded-full object-cover shrink-0'
                />
                {authorHref ? (
                  <Link
                    to={authorHref}
                    className='text-xs text-gray-500 truncate transition-colors hover:text-[#2295e2]'
                    aria-label={`View profile for ${article.author.name}`}
                  >
                    {article.author.name}
                  </Link>
                ) : (
                  <span className='text-xs text-gray-500 truncate'>
                    {article.author.name}
                  </span>
                )}
              </div>
            ) : (
              article.publisher && (
                <span className='text-xs text-gray-500 truncate'>
                  {article.publisher.name}
                </span>
              )
            )}
            <span className='text-xs text-gray-400 flex items-center gap-1 shrink-0 ml-auto'>
              <Calendar className='h-3 w-3' />
              {format(new Date(article.publishedAt), 'MMM d')}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
