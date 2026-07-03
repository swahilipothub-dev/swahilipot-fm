import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Show {
  title: string;
  host: string;
  time: string;
  image: string;
}

interface FeaturedShowsSectionProps {
  featuredShows: Show[];
  featuresRef: React.RefObject<HTMLDivElement>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const FeaturedShowsSection: React.FC<FeaturedShowsSectionProps> = ({
  featuredShows,
  featuresRef,
}) => {
  return (
    <section className='container mx-auto px-4 md:px-6' ref={featuresRef}>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-end justify-between mb-12 gap-4'>
          <div>
            <span className='inline-block text-sm font-semibold text-[#2295e2] tracking-widest uppercase mb-3'>
              On The Airwaves
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold'>
              Featured Shows
            </h2>
          </div>
          <Link
            to='/schedule'
            className='group flex items-center text-sm font-semibold text-[#271d73] shrink-0 whitespace-nowrap'
          >
            View all shows
            <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {featuredShows.map((show, index) => (
            <motion.div key={index} variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
              <Card className='group overflow-hidden border-gray-200 transition-shadow duration-300 hover:shadow-xl'>
                <div className='relative aspect-[4/5] overflow-hidden'>
                  <img
                    src={show.image}
                    alt={show.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <div className='chip bg-white/90 backdrop-blur-sm text-black mb-2'>
                      {show.time}
                    </div>
                    <h3 className='text-white text-xl font-bold leading-snug'>
                      {show.title}
                    </h3>
                    <p className='text-white/80 text-sm mt-0.5 line-clamp-1'>{show.host}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedShowsSection;
