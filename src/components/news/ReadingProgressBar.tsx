import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin brand-coloured bar that fills as the reader scrolls.
 * It sits flush under the fixed navigation bar and tracks the header's
 * height as it compacts on scroll, so the two always move as one unit.
 */
export const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [top, setTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const update = () =>
      setTop(Math.max(header.getBoundingClientRect().bottom, 0));

    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className='fixed left-0 right-0 z-40 h-1 origin-left bg-[#00aeef]'
      style={{ scaleX, top }}
    />
  );
};
