import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { CATEGORY_STYLES } from './categoryStyles';
import type { MediaArticle } from '@/types/media';

interface FeaturedNewsSliderProps {
  articles: MediaArticle[];
  autoSlideMs?: number;
}

export const FeaturedNewsSlider = ({
  articles,
  autoSlideMs = 5000,
}: FeaturedNewsSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const normalized = useMemo(() => articles.slice(0, 8), [articles]);

  useEffect(() => {
    if (normalized.length <= 1 || paused) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % normalized.length);
    }, autoSlideMs);

    return () => window.clearInterval(id);
  }, [normalized.length, autoSlideMs, paused]);

  useEffect(() => {
    if (activeIndex > normalized.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, normalized.length]);

  if (!normalized.length) return null;

  const active = normalized[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? normalized.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % normalized.length);
  };

  return (
    <section
      aria-roledescription='carousel'
      aria-label='Featured stories carousel'
      className='relative'
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          goPrev();
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          goNext();
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(event) => {
        const x = event.changedTouches[0]?.clientX;
        setTouchStartX(typeof x === 'number' ? x : null);
        setTouchEndX(null);
      }}
      onTouchMove={(event) => {
        const x = event.changedTouches[0]?.clientX;
        setTouchEndX(typeof x === 'number' ? x : null);
      }}
      onTouchEnd={() => {
        if (touchStartX === null || touchEndX === null) return;
        const distance = touchStartX - touchEndX;
        if (Math.abs(distance) < 40) return;
        if (distance > 0) {
          goNext();
        } else {
          goPrev();
        }
      }}
      tabIndex={0}
    >
      <div className='relative h-[500px] overflow-hidden rounded-3xl md:h-[580px]'>
        {normalized.map((article, index) => {
          const isActive = index === activeIndex;
          return (
            <Link
              key={article.slug}
              to={`/news/${article.slug}`}
              className='absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2295e2] focus-visible:ring-offset-2'
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              <motion.div
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.02,
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className='absolute inset-0'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-[#271d73] via-[#1e3a8a] to-[#2295e2]' />

                {article.coverIsPhoto && (
                  <img
                    src={article.coverImage}
                    alt=''
                    className='absolute inset-0 h-full w-full object-cover'
                    style={
                      article.coverFocal
                        ? {
                            objectPosition: `${article.coverFocal.x * 100}% ${article.coverFocal.y * 100}%`,
                          }
                        : undefined
                    }
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${article.coverIsPhoto ? 'from-black/80 via-black/30 to-black/20' : 'from-black/65 via-black/20 to-transparent'}`}
                />

                <div className='absolute left-0 right-0 top-0 flex justify-between p-5 md:p-8'>
                  <span className='inline-flex items-center gap-1.5 rounded-full bg-[#e98523] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white'>
                    Featured
                  </span>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_STYLES[article.category] ?? 'bg-white/20 text-white'}`}
                  >
                    {article.category}
                  </span>
                </div>

                <div className='absolute inset-x-0 bottom-0 p-6 md:p-10'>
                  <h2 className='max-w-3xl font-display text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl'>
                    {article.title}
                  </h2>

                  {article.subtitle && (
                    <p className='mt-3 max-w-2xl text-sm text-white/80 md:text-lg line-clamp-2'>
                      {article.subtitle}
                    </p>
                  )}

                  <div className='mt-4 flex flex-wrap items-center gap-3 text-sm text-white/75'>
                    {article.author ? (
                      <span className='font-medium text-white/90'>
                        {article.author.name}
                      </span>
                    ) : (
                      article.publisher && (
                        <span className='font-medium text-white/90'>
                          {article.publisher.name}
                        </span>
                      )
                    )}
                    <span className='inline-flex items-center gap-1.5'>
                      <Calendar className='h-3.5 w-3.5' />
                      {format(new Date(article.publishedAt), 'MMMM d, yyyy')}
                    </span>
                    <span className='inline-flex items-center gap-1.5'>
                      <Clock className='h-3.5 w-3.5' />
                      {article.readTime} min read
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {normalized.length > 1 && (
        <>
          <div className='pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-4'>
            <button
              type='button'
              aria-label='Previous featured story'
              onClick={goPrev}
              className='pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#271d73] transition hover:bg-white'
            >
              <ArrowLeft className='h-4 w-4' />
            </button>
            <button
              type='button'
              aria-label='Next featured story'
              onClick={goNext}
              className='pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#271d73] transition hover:bg-white'
            >
              <ArrowRight className='h-4 w-4' />
            </button>
          </div>

          <div className='mt-4 flex items-center justify-center gap-2' role='tablist' aria-label='Featured story slides'>
            {normalized.map((article, index) => (
              <button
                key={article.slug}
                type='button'
                role='tab'
                aria-selected={index === activeIndex}
                aria-label={`Go to featured story ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[#2295e2]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </>
      )}

      <div className='sr-only' aria-live='polite'>
        Showing featured story {activeIndex + 1} of {normalized.length}: {active.title}
      </div>
    </section>
  );
};
