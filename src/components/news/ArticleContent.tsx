import { motion } from 'framer-motion';
import type { ContentBlock } from '@/types/media';
import { SWAHILIPOT_SOCIALS } from '@/data/socialLinks';

const blockVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

/* Official profiles that @mentions in captions link out to */
const CAPTION_HANDLES: Record<string, string> = {
  '@swahilipotfm': SWAHILIPOT_SOCIALS.instagram,
};

/* Render caption text, turning #hashtags and known @handles into links */
const renderCaption = (caption: string) =>
  caption.split(/(\s+)/).map((token, i) => {
    if (token.startsWith('#') && token.length > 1) {
      return (
        <a
          key={i}
          href={`https://x.com/hashtag/${token.slice(1)}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#2295e2] font-medium hover:underline'
        >
          {token}
        </a>
      );
    }
    const handleUrl = CAPTION_HANDLES[token.toLowerCase()];
    if (handleUrl) {
      return (
        <a
          key={i}
          href={handleUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#271d73] font-medium hover:underline'
        >
          {token}
        </a>
      );
    }
    return <span key={i}>{token}</span>;
  });

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className='text-gray-700 leading-relaxed text-base md:text-[17px]'>
          {block.content}
        </p>
      );

    case 'heading':
      return (
        <h2 className='font-display text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-900 scroll-mt-24'>
          {block.content}
        </h2>
      );

    case 'subheading':
      return (
        <h3 className='font-display text-xl font-semibold mt-7 mb-3 text-gray-900'>
          {block.content}
        </h3>
      );

    case 'quote':
      return (
        <blockquote className='relative my-8 pl-6 border-l-4 border-[#2295e2] bg-gradient-to-r from-[#2295e2]/5 to-transparent rounded-r-xl py-4 pr-4'>
          <span className='absolute top-2 left-4 text-[#2295e2]/20 font-serif text-6xl leading-none select-none'>
            "
          </span>
          <p className='relative text-gray-700 italic text-lg md:text-xl leading-relaxed font-medium'>
            {block.content}
          </p>
        </blockquote>
      );

    case 'image':
      return (
        <figure className='my-8'>
          <img
            src={block.content}
            alt={block.caption ?? ''}
            className='w-full rounded-2xl object-cover shadow-md'
            loading='lazy'
          />
          {block.caption && (
            <figcaption className='text-center text-sm text-gray-500 mt-3'>
              {renderCaption(block.caption)}
            </figcaption>
          )}
        </figure>
      );

    case 'list':
      return (
        <div className='my-5'>
          {block.content && (
            <p className='text-gray-700 mb-3 text-base md:text-[17px] font-medium'>
              {block.content}
            </p>
          )}
          <ul className='space-y-2.5'>
            {block.items?.map((item, i) => (
              <li
                key={i}
                className='flex items-start gap-3 text-gray-700 text-base md:text-[17px] leading-relaxed'
              >
                <span className='mt-1.5 h-2 w-2 rounded-full bg-[#2295e2] shrink-0' />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
};

interface ArticleContentProps {
  content: ContentBlock[];
}

export const ArticleContent = ({ content }: ArticleContentProps) => (
  <motion.div
    initial='hidden'
    animate='show'
    transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
    className='space-y-5'
  >
    {content.map((block, i) => (
      <motion.div
        key={i}
        variants={blockVariants}
        transition={{ duration: 0.4 }}
      >
        {renderBlock(block, i)}
      </motion.div>
    ))}
  </motion.div>
);
