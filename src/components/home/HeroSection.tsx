import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getCurrentShow, Show } from '@/data/scheduleData';

// Headline split into words so each can animate in independently. The "#1"
// token is highlighted in brand blue and given an extra pop.
const HEADLINE_WORDS = ['The', "Coast's", '#1', 'Radio', 'Station'];

// Each word flies in from its OWN direction — far left, top, deep bottom,
// right — spinning and scaled out of a blur, then springs into place. The
// effect: the sentence visibly *assembles* from scattered pieces.
const WORD_ENTRANCES = [
  { x: -320, y: -60, rotate: -22, scale: 0.6 }, // "The"     — sweeps in from far left
  { x: -40, y: -240, rotate: 12, scale: 0.7 }, // "Coast's" — drops from the top
  { x: 30, y: 260, rotate: -16, scale: 0.3 }, // "#1"      — punches up from below, small → pop
  { x: 60, y: 240, rotate: 14, scale: 0.7 }, // "Radio"   — rises from the bottom
  { x: 340, y: -50, rotate: 20, scale: 0.6 }, // "Station" — flies in from far right
];

// Slightly larger stagger so the eye can track each piece arriving, but tight
// enough that they overlap and converge into one motion.
const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

// Spring transform gives a physical overshoot-and-settle (the "depth"),
// while opacity/blur resolve on a quick tween so words don't linger fuzzy.
const wordVariant = {
  hidden: (dir: { x: number; y: number; rotate: number; scale: number }) => ({
    opacity: 0,
    x: dir.x,
    y: dir.y,
    rotate: dir.rotate,
    scale: dir.scale,
    filter: 'blur(14px)',
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 110,
      damping: 13,
      mass: 0.9,
      opacity: { duration: 0.45 },
      filter: { duration: 0.55 },
    },
  },
};

// How long a fully-formed sentence holds before it re-forms. Long enough to
// read the headline AND glance at the rotating banner behind it.
const REFORM_INTERVAL = 7200;

// How long each background banner stays before crossfading to the next.
const BANNER_INTERVAL = 5500;

const SHOW_BANNERS = [
  '/show-banners/breakfast-club.jpeg',
  '/show-banners/swahilipot-cafe.jpeg',
  '/show-banners/swahilipot-aroma.png',
  '/show-banners/swahilipot-drive.png',
  '/show-banners/mikuki-ya-maneno.png',
  '/show-banners/beyond-balot.jpeg',
  '/show-banners/kickoff.png',
  '/show-banners/the-saturday-night-wave.png',
  '/show-banners/swahilipot-mixes.png',
  '/show-banners/the-night-shift.png',
  '/show-banners/teenz-connect.png',
  '/show-banners/jamvi-la-vijembe.png',
];

// CTA buttons rise in one after another once the headline has assembled, so
// the call-to-action feels like the payoff of the intro rather than static.
const ctaContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const ctaItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentShow, setCurrentShow] = useState<Show | null>(getCurrentShow());

  // Bumping this key remounts the animated text so the reveal replays —
  // the sentence "re-forms" on a loop without needing a page refresh.
  const [cycle, setCycle] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentShow(getCurrentShow());
    }, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  // Preload every banner up front so the crossfade never waits on a
  // network fetch mid-transition (that stall is what read as a black hang).
  useEffect(() => {
    SHOW_BANNERS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(
      () => setCycle((c) => c + 1),
      REFORM_INTERVAL
    );
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  // Advance the background banner on a timer, but pause while the tab is
  // hidden so we're not animating off-screen.
  useEffect(() => {
    if (prefersReducedMotion) return;

    let id = 0;
    const start = () => {
      id = window.setInterval(() => {
        setBannerIndex((i) => (i + 1) % SHOW_BANNERS.length);
      }, BANNER_INTERVAL);
    };
    const stop = () => window.clearInterval(id);

    const onVisibility = () => (document.hidden ? stop() : start());
    if (!document.hidden) start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [prefersReducedMotion]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <section
      className='relative min-h-[640px] md:min-h-[820px] flex items-center justify-center overflow-hidden'
      ref={heroRef}
    >
      {/* Background slideshow — desktop/tablet only. Each banner slides fully
          into view at natural scale (no zoom-crop), is shown whole, then slides
          out for the next. Black backdrop keeps edges clean mid-slide. */}
      <div className='absolute inset-0 hidden md:block w-full h-full overflow-hidden bg-black'>
        {prefersReducedMotion ? (
          <img
            src={SHOW_BANNERS[0]}
            alt='Swahilipot FM show'
            className='w-full h-full object-cover'
            loading='eager'
            decoding='async'
          />
        ) : (
          <AnimatePresence initial={false}>
            <motion.img
              key={bannerIndex}
              src={SHOW_BANNERS[bannerIndex]}
              alt='Swahilipot FM show'
              className='absolute inset-0 w-full h-full object-cover will-change-transform'
              loading='eager'
              decoding='async'
              initial={{ x: '100%', opacity: 0.4 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '-100%', opacity: 0.4 }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            />
          </AnimatePresence>
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30'></div>
      </div>

      {/* Mobile fallback — looping brand motion clip instead of the carousel,
          which leaves awkward whitespace on narrow viewports */}
      <div className='absolute inset-0 md:hidden w-full h-full overflow-hidden flex items-center justify-center'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src='/motion/logo.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
        />
        <div className='absolute inset-0 bg-black/55'></div>
      </div>

      {/* Subtle brand-color glow for energy without extra asset weight */}
      <div className='absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#00aeef]/30 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#f28c00]/20 blur-3xl pointer-events-none' />

      {/* Content */}
      <div className='relative z-10 text-center text-white px-6 py-12'>
        <div className='max-w-2xl mx-auto'>
          <div className='inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-white/20 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white'>
            <span className='relative flex h-2 w-2 mr-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500'></span>
            </span>
            {getGreeting()} • We're live on air
          </div>
          {prefersReducedMotion ? (
            <>
              <h1 className='font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6'>
                The Coast's <span className='text-[#00aeef]'>#1</span> Radio
                Station
              </h1>
              <p className='text-lg md:text-xl text-gray-200 mb-8'>
                Your daily mix of breaking news, youth conversations, music
                culture, and community stories from the Coast and beyond.
              </p>
            </>
          ) : (
            <>
              <motion.h1
                key={`headline-${cycle}`}
                variants={headlineContainer}
                initial='hidden'
                animate='show'
                aria-label="The Coast's #1 Radio Station"
                className='font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 flex flex-wrap justify-center gap-x-[0.28em] gap-y-1'
              >
                {HEADLINE_WORDS.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={WORD_ENTRANCES[i]}
                    variants={wordVariant}
                    className={
                      word === '#1'
                        ? 'inline-block will-change-transform text-[#00aeef] drop-shadow-[0_0_18px_rgba(34,149,226,0.55)]'
                        : 'inline-block will-change-transform'
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                key={`subtext-${cycle}`}
                initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0.95, ease: 'easeOut' }}
                className='text-lg md:text-xl text-gray-200 mb-8'
              >
                Your daily mix of breaking news, youth conversations, music
                culture, and community stories from the Coast and beyond.
              </motion.p>
            </>
          )}

          {/* On Air Now — a live, tappable pill that jumps to the stream. The
              title swaps with a slide/fade as the schedule rolls over. */}
          <div className='mb-8 flex justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.35, ease: 'easeOut' }}
            >
              <Link
                to='/live'
                aria-label={`On air now: ${currentShow ? currentShow.title : 'Swahilipot FM Live'}. Tap to watch live.`}
                className='group relative inline-flex items-center gap-3 pl-4 pr-2 py-2 rounded-2xl bg-white/10 border border-[#00aeef]/40 backdrop-blur-sm text-left transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 animate-live-glow'
              >
                <div className='nowplaying-animation h-4 text-[#00aeef] shrink-0'>
                  <span className='mx-[1px]'></span>
                  <span className='mx-[1px]'></span>
                  <span className='mx-[1px]'></span>
                </div>
                <div className='relative'>
                  <p className='flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white/60 leading-none mb-0.5'>
                    <span className='relative flex h-1.5 w-1.5'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500'></span>
                    </span>
                    On Air Now
                  </p>
                  <AnimatePresence mode='wait'>
                    <motion.p
                      key={currentShow ? currentShow.title : 'live'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className='text-sm font-semibold text-white leading-tight'
                    >
                      {currentShow ? currentShow.title : 'Swahilipot FM Live'}
                    </motion.p>
                  </AnimatePresence>
                </div>
                {/* Play affordance — makes it unmistakable that this is the
                    live action (tap to watch the stream). */}
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-[#00aeef] text-white shrink-0 transition-transform duration-300 group-hover:scale-110'>
                  <Play className='h-4 w-4 fill-current ml-0.5' />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            variants={ctaContainer}
            initial='hidden'
            animate='show'
          >
            <motion.div
              variants={ctaItem}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size='lg'
                className='group rounded-full font-medium bg-[#00aeef] hover:bg-[#1d7cc0] h-12 px-8 text-white shadow-lg shadow-[#00aeef]/30'
                asChild
              >
                <Link to='/schedule'>
                  <Sparkles className='mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110' />
                  Explore the Schedule
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={ctaItem}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size='lg'
                variant='outline'
                className='group rounded-full font-medium border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white h-12 px-8 bg-transparent'
                asChild
              >
                <Link to='/presenters'>
                  <Radio className='mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110' />
                  Meet Our Presenters
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
