import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { MediaAuthor } from '@/types/media';

interface ArticleMetaProps {
  author?: MediaAuthor;
  publishedAt: string;
  readTime: number;
  updatedAt?: string;
}

export const ArticleMeta = ({
  author,
  publishedAt,
  readTime,
  updatedAt,
}: ArticleMetaProps) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(document.title);
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      '_blank',
      'noopener'
    );
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${document.title} — ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='flex flex-wrap items-center justify-between gap-4 py-5 border-y border-gray-100'
    >
      {/* Author + meta */}
      <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500'>
        {author && (
          <>
            <div className='flex items-center gap-2.5'>
              <img
                src={author.image}
                alt={author.name}
                className='w-10 h-10 rounded-full object-cover ring-2 ring-gray-100'
              />
              <div>
                <span className='block font-semibold text-gray-900 text-sm'>
                  {author.name}
                </span>
                <span className='block text-xs text-gray-500'>{author.role}</span>
              </div>
            </div>

            <Separator orientation='vertical' className='h-8 hidden sm:block' />
          </>
        )}

        <span className='flex items-center gap-1.5'>
          <Calendar className='h-3.5 w-3.5' />
          {format(new Date(publishedAt), 'MMMM d, yyyy')}
          {updatedAt && updatedAt !== publishedAt && (
            <span className='text-gray-400 text-xs ml-1'>
              (updated {format(new Date(updatedAt), 'MMM d')})
            </span>
          )}
        </span>

        <span className='flex items-center gap-1.5'>
          <Clock className='h-3.5 w-3.5' />
          {readTime} min read
        </span>
      </div>

      {/* Share buttons */}
      <div className='flex items-center gap-1'>
        <span className='text-xs text-gray-400 mr-1 flex items-center gap-1'>
          <Share2 className='h-3.5 w-3.5' /> Share
        </span>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={shareTwitter}
              className='p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900'
              aria-label='Share on X (Twitter)'
            >
              <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
              </svg>
            </button>
          </TooltipTrigger>
          <TooltipContent>Share on X</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={shareWhatsApp}
              className='p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-[#25D366]'
              aria-label='Share on WhatsApp'
            >
              <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
              </svg>
            </button>
          </TooltipTrigger>
          <TooltipContent>Share on WhatsApp</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={copyLink}
              className='p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900'
              aria-label='Copy link'
            >
              {copied ? (
                <Check className='h-4 w-4 text-green-500' />
              ) : (
                <Copy className='h-4 w-4' />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent>{copied ? 'Copied!' : 'Copy link'}</TooltipContent>
        </Tooltip>
      </div>
    </motion.div>
  );
};
