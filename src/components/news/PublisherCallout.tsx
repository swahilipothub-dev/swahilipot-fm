import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { ArticlePublisher } from '@/types/media';

interface PublisherCalloutProps {
  publisher: ArticlePublisher;
}

/**
 * Editorial brand callout linking to the publisher's official website.
 * Sits between the hero image and the article body.
 */
export const PublisherCallout = ({ publisher }: PublisherCalloutProps) => {
  if (!publisher.url) return null;

  const brandName = publisher.shortName ?? publisher.name;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25 }}
      className='mx-auto mt-10 flex max-w-[760px] justify-center'
    >
      <a
        href={publisher.url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Visit the official ${brandName} website`}
        className='group flex max-w-full cursor-pointer flex-col items-center gap-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 px-10 py-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-gray-900/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1f68]/30 focus-visible:ring-offset-2 md:px-14'
      >
        {/* Brand plate keeps the white logo artwork visible on the light page */}
        <span className='inline-flex items-center rounded-xl bg-[#f28c00] px-5 py-3 transition-transform duration-300 ease-out group-hover:scale-[1.02]'>
          <img
            src={publisher.logo}
            alt={`${brandName} official logo`}
            className='h-8 w-auto object-contain md:h-10'
            loading='lazy'
          />
        </span>

        <span className='flex items-center gap-1.5 text-xs tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-gray-500 md:text-[13px]'>
          Official {brandName} website
          <ExternalLink aria-hidden className='h-3 w-3' />
        </span>
      </a>
    </motion.aside>
  );
};
