import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { format, formatDistanceToNowStrict, differenceInHours } from 'date-fns';
import { CATEGORY_STYLES } from './categoryStyles';
import type { AggregatedArticle } from '@/types/aggregatedNews';

interface ExternalNewsCardProps {
  article: AggregatedArticle;
  index?: number;
  variant?: 'default' | 'compact';
}

/** Fresh headlines read as "2 hours ago"; older ones fall back to a date */
const publishedLabel = (publishedAt: string): string => {
  const date = new Date(publishedAt);
  return Math.abs(differenceInHours(new Date(), date)) < 24
    ? formatDistanceToNowStrict(date, { addSuffix: true })
    : format(date, 'MMM d, yyyy');
};

export const ExternalNewsCard = ({
  article,
  index = 0,
  variant = 'default',
}: ExternalNewsCardProps) => {
  const isCompact = variant === 'compact';
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = article.image && !imageFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className='h-full'
    >
      <Link
        to={`/news/story?src=${encodeURIComponent(article.link)}`}
        aria-label={`${article.title} — from ${article.sourceName}`}
        className='group block h-full'
      >
        <Card className='overflow-hidden h-full flex flex-col border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300'>
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-[#271d73] to-[#2295e2] flex items-center justify-center ${
              isCompact ? 'aspect-[16/9]' : 'aspect-[4/3]'
            }`}
          >
            {showImage ? (
              <img
                src={article.image}
                alt=''
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                loading='lazy'
                onError={() => setImageFailed(true)}
              />
            ) : (
              <Newspaper
                aria-hidden
                className='h-14 w-14 text-white/70 drop-shadow-lg transition-transform duration-500 group-hover:scale-110'
              />
            )}
          </div>

          <div className='p-5 flex flex-col flex-1'>
            <div className='flex items-center justify-between gap-2 mb-3'>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  CATEGORY_STYLES[article.category] ??
                  'bg-gray-100 text-gray-700'
                }`}
              >
                {article.category}
              </span>
              <span className='text-xs text-gray-400 flex items-center gap-1 shrink-0'>
                <Calendar className='h-3 w-3' />
                {publishedLabel(article.publishedAt)}
              </span>
            </div>

            <h3 className='font-bold text-lg leading-tight mb-2 group-hover:text-[#2295e2] transition-colors line-clamp-2'>
              {article.title}
            </h3>

            {!isCompact && article.excerpt && (
              <p className='text-gray-600 text-sm mb-4 flex-1 line-clamp-3'>
                {article.excerpt}
              </p>
            )}

            <div className='flex items-center justify-between gap-2 mt-auto pt-4 border-t border-gray-100'>
              <span className='text-[11px] text-gray-400 truncate'>
                {article.sourceName}
              </span>
              <span className='text-xs font-semibold text-[#271d73] group-hover:text-[#2295e2] transition-colors flex items-center gap-1 shrink-0'>
                Read More
                <ArrowRight className='h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5' />
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
