import { motion } from 'framer-motion';
import type { ContentBlock } from '@/types/media';

const blockVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const renderBlock = (block: ContentBlock) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className='text-[17px] leading-[1.85] text-gray-700 md:text-lg md:leading-[1.85]'>
          {block.content}
        </p>
      );

    case 'heading':
      return (
        <h2 className='mt-14 mb-2 scroll-mt-24 font-display text-[26px] font-bold tracking-tight text-gray-900 md:text-[32px]'>
          {block.content}
        </h2>
      );

    case 'subheading':
      return (
        <h3 className='mt-10 mb-1 font-display text-xl font-semibold text-gray-900 md:text-2xl'>
          {block.content}
        </h3>
      );

    case 'quote':
      return (
        <figure className='relative my-14 pl-8 md:pl-10'>
          <span
            aria-hidden
            className='absolute left-0 top-1 bottom-1 w-1 rounded-full bg-[#2295e2]'
          />
          <span
            aria-hidden
            className='pointer-events-none absolute -top-8 left-6 select-none font-serif text-7xl leading-none text-[#2295e2]/15 md:left-8'
          >
            &ldquo;
          </span>
          <blockquote className='relative font-display text-xl font-medium leading-relaxed text-gray-900 md:text-2xl md:leading-relaxed'>
            &ldquo;{block.content}&rdquo;
          </blockquote>
          {block.attribution && (
            <figcaption className='mt-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
              &mdash; {block.attribution}
            </figcaption>
          )}
        </figure>
      );

    case 'image':
      return (
        <figure className='my-10'>
          <img
            src={block.content}
            alt={block.caption ?? ''}
            className='w-full rounded-2xl object-cover shadow-sm'
            loading='lazy'
          />
          {block.caption && (
            <figcaption className='mt-3 text-center text-sm text-gray-500'>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'stats':
      return (
        <div className='my-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4'>
          {block.stats?.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className='rounded-2xl border border-gray-100 bg-gray-50 px-4 py-6 text-center'
            >
              <div className='font-display text-3xl font-bold tracking-tight text-[#271d73] md:text-4xl'>
                {stat.value}
              </div>
              <div className='mt-1.5 text-xs font-medium uppercase tracking-wider text-gray-500'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      );

    case 'list':
      return (
        <div className='my-6'>
          {block.content && (
            <p className='mb-3 text-[17px] font-medium leading-[1.85] text-gray-700 md:text-lg'>
              {block.content}
            </p>
          )}
          <ul className='space-y-3'>
            {block.items?.map((item, i) => (
              <li
                key={i}
                className='flex items-start gap-3 text-[17px] leading-[1.75] text-gray-700 md:text-lg'
              >
                <span className='mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#2295e2]' />
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
    className='space-y-7'
  >
    {content.map((block, i) => (
      <motion.div
        key={i}
        variants={blockVariants}
        transition={{ duration: 0.4 }}
      >
        {renderBlock(block)}
      </motion.div>
    ))}
  </motion.div>
);
