import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCurrentShow } from '@/data/scheduleData';

export const LiveRadioBanner = () => {
  const currentShow = getCurrentShow();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className='rounded-2xl bg-gradient-to-r from-[#1b1f68] via-[#0d66ab] to-[#00aeef] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-5'
    >
      <div className='flex items-center gap-4'>
        {/* Pulsing live indicator */}
        <div className='relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 shrink-0'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20' />
          <Radio className='h-5 w-5 text-white relative z-10' />
        </div>

        <div>
          <div className='flex items-center gap-2 mb-0.5'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75' />
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500' />
            </span>
            <p className='text-white/70 text-xs font-semibold uppercase tracking-widest'>
              Live Now
            </p>
          </div>
          <p className='font-bold text-lg leading-tight'>
            {currentShow?.title ?? 'Swahilipot FM'}
          </p>
          {currentShow?.host && (
            <p className='text-white/65 text-sm'>with {currentShow.host}</p>
          )}
        </div>
      </div>

      <Button
        asChild
        className='rounded-full bg-white text-[#1b1f68] hover:bg-white/90 font-semibold px-6 shrink-0 shadow-lg hover:-translate-y-0.5 transition-all duration-200'
      >
        <Link to='/live'>Tune In Live →</Link>
      </Button>
    </motion.div>
  );
};
