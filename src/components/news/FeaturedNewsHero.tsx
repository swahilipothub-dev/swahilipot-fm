import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { CATEGORY_STYLES } from './categoryStyles';
import type { MediaArticle } from '@/types/media';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

interface FeaturedNewsHeroProps {
  article: MediaArticle;
}

export const FeaturedNewsHero = ({ article }: FeaturedNewsHeroProps) => (
  <motion.section initial='hidden' animate='show' aria-label='Featured story'>
    <Link
      to={`/news/${article.slug}`}
      className='group relative flex h-[480px] md:h-[560px] overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00aeef] focus-visible:ring-offset-2'
      aria-label={`Featured: ${article.title}`}
    >
      {/* Brand gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#1b1f68] via-[#0d66ab] to-[#00aeef]' />

      {article.coverIsPhoto ? (
        /* Full-bleed photo cover */
        <motion.img
          src={article.coverImage}
          alt=''
          className='absolute inset-0 w-full h-full object-cover'
          style={
            article.coverFocal
              ? {
                  objectPosition: `${article.coverFocal.x * 100}% ${article.coverFocal.y * 100}%`,
                }
              : undefined
          }
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ) : (
        <>
          {/* Logo as large watermark — bottom-right */}
          <motion.img
            src={article.coverImage}
            alt=''
            className='absolute -bottom-8 -right-8 w-72 h-72 object-contain opacity-10 pointer-events-none select-none'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {/* Subtle dot-grid texture overlay */}
          <div
            className='absolute inset-0 opacity-5'
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </>
      )}

      {/* Bottom fade for text readability */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          article.coverIsPhoto
            ? 'from-black/80 via-black/25 to-black/10'
            : 'from-black/60 via-transparent to-transparent'
        }`}
      />

      {/* Featured pill — top left */}
      <motion.div
        className='absolute top-6 left-6'
        custom={0.15}
        variants={fadeUp}
      >
        <span className='inline-flex items-center gap-1.5 bg-[#f28c00] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg'>
          <span className='relative flex h-1.5 w-1.5'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60' />
            <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-white' />
          </span>
          Featured
        </span>
      </motion.div>

      {/* Content */}
      <div className='relative mt-auto w-full p-6 md:p-10'>
        <motion.span
          custom={0.2}
          variants={fadeUp}
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${CATEGORY_STYLES[article.category] ?? 'bg-white/20 text-white'}`}
        >
          {article.category}
        </motion.span>

        <motion.h2
          custom={0.3}
          variants={fadeUp}
          className='font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 max-w-3xl group-hover:underline decoration-white/40 decoration-2 underline-offset-4'
        >
          {article.title}
        </motion.h2>

        {article.subtitle && (
          <motion.p
            custom={0.38}
            variants={fadeUp}
            className='text-white/75 text-base md:text-lg max-w-2xl hidden md:block mb-3 line-clamp-2'
          >
            {article.subtitle}
          </motion.p>
        )}

        <motion.div
          custom={0.45}
          variants={fadeUp}
          className='flex flex-wrap items-center gap-4 text-white/60 text-sm'
        >
          {article.author ? (
            <div className='flex items-center gap-2'>
              <img
                src={article.author.image}
                alt={article.author.name}
                className='w-6 h-6 rounded-full object-cover ring-1 ring-white/40'
              />
              <span className='text-white/80 font-medium'>
                {article.author.name}
              </span>
            </div>
          ) : (
            article.publisher && (
              <span className='text-white/80 font-medium'>
                {article.publisher.name}
              </span>
            )
          )}
          <span className='flex items-center gap-1.5'>
            <Calendar className='h-3.5 w-3.5' />
            {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
          </span>
          <span className='flex items-center gap-1.5'>
            <Clock className='h-3.5 w-3.5' />
            {article.readTime} min read
          </span>
          <span className='ml-auto hidden md:inline-flex items-center gap-1.5 font-semibold text-white group-hover:gap-2.5 transition-all'>
            Read Story <ArrowRight className='h-4 w-4' />
          </span>
        </motion.div>
      </div>
    </Link>
  </motion.section>
);
