import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Radio,
  Users,
  Zap,
  Globe,
  Music,
  Mic2,
  Heart,
  ArrowRight,
  Waves,
  Clock,
  Megaphone,
} from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedShowsSection from '@/components/home/FeaturedShowsSection';
import { featuredShows } from '@/data/homeData';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// Counter Component
const CounterCard = ({
  icon: Icon,
  endValue,
  label,
  description,
}: {
  icon: React.ComponentType<{ className: string }>;
  endValue: number;
  label: string;
  description: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible && !isHovering) return;

    let currentCount = 0;
    const increment = endValue / 30;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      currentCount += increment;
      if (currentCount >= endValue) {
        setCount(endValue);
        if (!isHovering) {
          clearInterval(intervalRef.current!);
        }
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isHovering, endValue]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setCount(0);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={ref}
      className='group scroll-animation relative cursor-pointer overflow-hidden rounded-2xl border border-[#1b1f68]/10 bg-gradient-to-br from-white via-white to-[#f0f7ff] p-8 shadow-sm ring-1 ring-black/[0.03] transition-all hover:border-[#00aeef]/40 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated top accent bar */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00aeef] via-[#1b1f68] to-[#f28c00]' />

      {/* Hover gradient shimmer */}
      <div
        className='pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-700 group-hover:opacity-100'
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(34, 149, 226, 0.1), transparent 50%)',
        }}
      />

      <motion.div
        className='relative z-10'
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='flex items-center gap-4 mb-6'>
          <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#00aeef]/20 to-[#00aeef]/10 group-hover:from-[#00aeef]/30 group-hover:to-[#00aeef]/20 transition-all'>
            <Icon className='h-6 w-6 text-[#00aeef]' />
          </div>
          <div>
            <h3 className='text-4xl font-bold bg-gradient-to-r from-[#00aeef] to-[#1b1f68] bg-clip-text text-transparent'>
              {count}
              {label === 'Continuous Broadcasting' ? '/' : ''}
              {label === 'Continuous Broadcasting' ? '7' : ''}
            </h3>
          </div>
        </div>
        <p className='text-sm font-semibold text-[#1b1f68] tracking-wide mb-2'>
          {label}
        </p>
        <p className='text-sm leading-relaxed text-gray-600'>{description}</p>
      </motion.div>
    </div>
  );
};

const Index = () => {
  // References for animations
  const featuresRef = useRef<HTMLDivElement>(null);

  // Add scroll animation observations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='flex flex-col gap-20 pb-24'>
      <HeroSection />

      {/* Radio Priorities Section */}
      <section className='container mx-auto px-4 py-4 md:px-6 md:py-6'>
        <div
          className='relative max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[#00aeef]/20 px-6 py-8 md:px-10 md:py-10'
          style={{
            backgroundImage: 'url(/images/coastal-radio-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-white/25 via-white/20 to-[#fff9f2]/30 rounded-3xl' />
          <div className='pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#00aeef]/15 blur-3xl' />
          <div className='pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#f28c00]/15 blur-3xl' />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className='relative z-10 mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'
          >
            <div>
              <span className='inline-block text-sm font-semibold text-[#00aeef] tracking-widest uppercase mb-3'>
                Coastal Radio
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-bold text-white'>
                A Classic Home for Coast Voices
              </h2>
              <p className='mt-3 max-w-2xl text-gray-200'>
                Tune in live, track today's lineup, and follow the stories
                shaping youth culture across the coast. Everything you need,
                without the extra noise.
              </p>
            </div>
            <Link
              to='/about'
              className='inline-flex items-center text-sm font-semibold text-[#1b1f68] transition-colors hover:text-[#00aeef]'
            >
              About Swahilipot FM
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className='relative z-10 mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b1f68]'
          >
            <span className='nowplaying-animation inline-flex h-3 items-end gap-1 text-[#00aeef]'>
              <span />
              <span />
              <span />
              <span />
            </span>
            On Frequency • Live 24/7
          </motion.div>

          <motion.div
            className='relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3'
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {[
              {
                Icon: Waves,
                title: 'Listen Live Now',
                body: 'Join the stream in one tap and stay connected to the station all day.',
                to: '/live',
                cta: 'Open Live Radio',
              },
              {
                Icon: Clock,
                title: "Today's Lineup",
                body: 'See who is on air now and what is coming next this week.',
                to: '/schedule',
                cta: 'View Full Schedule',
              },
              {
                Icon: Megaphone,
                title: 'Coastal Voices & Stories',
                body: 'Read local news, youth updates, and conversations from across the coast.',
                to: '/news',
                cta: 'Explore Newsroom',
              },
            ].map(({ Icon, title, body, to, cta }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.6,
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className='group relative rounded-2xl border border-[#00aeef]/35 bg-white/95 p-6 shadow-lg ring-1 ring-black/10 backdrop-blur-sm transition-all hover:border-[#00aeef]/60 hover:shadow-2xl overflow-hidden'
              >
                {/* Animated wave gradient background */}
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl'
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(34, 149, 226, 0.3) 0%, rgba(39, 29, 115, 0.3) 50%, rgba(233, 133, 35, 0.3) 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 6s ease infinite',
                  }}
                />

                <div className='relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00aeef]/10 transition-all group-hover:bg-[#00aeef]/20 group-hover:shadow-lg'>
                  <Icon className='h-5 w-5 text-[#00aeef] transition-colors' />
                </div>
                <h3 className='relative z-10 mb-2 font-semibold text-lg'>
                  {title}
                </h3>
                <p className='relative z-10 mb-5 text-sm leading-relaxed text-gray-600'>
                  {body}
                </p>
                <Link
                  to={to}
                  className='relative z-10 inline-flex items-center text-sm font-semibold text-[#1b1f68] transition-colors hover:text-[#00aeef]'
                >
                  {cta}
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights Section */}
      <section className='relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#eef6ff] to-[#f8fbff] py-20'>
        <div
          className='pointer-events-none absolute inset-0 opacity-30'
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(39,29,115,0.12) 1px, transparent 0)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className='container mx-auto px-4 md:px-6'>
          <div className='relative z-10 max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className='text-center mb-16'
            >
              <span className='inline-block text-sm font-semibold text-[#00aeef] tracking-widest uppercase mb-3'>
                Our Reach
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-bold'>
                By The Numbers
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-gray-600'>
                Real impact measured by listeners, talent, and programming that
                defines coastal radio culture
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {/* All cards - uniform size */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <CounterCard
                  icon={Users}
                  endValue={2000}
                  label='Active Listeners'
                  description='Growing community from the coast and beyond'
                  featured
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CounterCard
                  icon={Radio}
                  endValue={24}
                  label='Continuous Broadcasting'
                  description='Never miss a moment of your favorite shows'
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CounterCard
                  icon={Mic2}
                  endValue={15}
                  label='Professional Hosts'
                  description='Talented presenters bringing you quality content'
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CounterCard
                  icon={Music}
                  endValue={50}
                  label='Shows Per Week'
                  description='Diverse programming for every taste'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Motion Video Section */}
      <section className='w-full'>
        <div className='relative overflow-hidden bg-black'>
          <video
            className='h-[340px] md:h-[480px] lg:h-[560px] w-full object-cover pointer-events-none'
            src='/motion/mombasa%20malindi.mp4'
            autoPlay
            muted
            loop
            playsInline
            preload='metadata'
            disablePictureInPicture
            controlsList='nodownload nofullscreen noplaybackrate noremoteplayback'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40' />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white'
          >
            <span className='inline-block text-sm font-semibold text-[#00aeef] tracking-widest uppercase mb-3'>
              Mombasa • Malindi • Coast
            </span>
            <h2 className='font-display text-2xl md:text-4xl font-bold max-w-2xl'>
              Broadcasting the Sound and Soul of the Coast
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Featured Shows Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-[#fffefb] via-white to-[#f4f9ff] py-8'>
        <div className='pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00aeef]/30 to-transparent' />
        <div className='pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f28c00]/35 to-transparent' />
        <FeaturedShowsSection
          featuredShows={featuredShows}
          featuresRef={featuresRef}
        />
      </section>

      {/* Why Listen Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <div className='relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f0b2e] via-[#1a1454] to-[#1b1f68] px-6 py-14 md:px-12 md:py-20 shadow-2xl'>
          {/* Glow accents */}
          <div className='pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#00aeef]/25 blur-3xl' />
          <div className='pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[#f28c00]/20 blur-3xl' />
          <div className='pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl' />
          {/* Dot-grid texture */}
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.15]'
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className='relative z-10 text-center mb-14'
          >
            <span className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd0ff] backdrop-blur-sm'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#00aeef] animate-pulse' />
              The Difference
            </span>
            <h2 className='mt-5 font-display text-3xl md:text-5xl font-bold text-white'>
              Why Listen to Swahilipot FM?
            </h2>
            <p className='mt-4 max-w-2xl mx-auto text-white/60 text-lg'>
              Six reasons the coast keeps the dial locked on us.
            </p>
          </motion.div>

          <motion.div
            className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {[
              {
                Icon: Zap,
                title: 'Fresh Content Daily',
                body: 'Stay updated with breaking news, trending topics, and entertainment that matters to you.',
                hue: '#00aeef',
                span: 'lg:col-span-2',
              },
              {
                Icon: Globe,
                title: 'Community Connected',
                body: 'Hear stories from your neighbors, engage with your community, and be part of a movement.',
                hue: '#f28c00',
                span: 'lg:col-span-1',
              },
              {
                Icon: Music,
                title: 'All Your Favorite Music',
                body: 'Discover new tracks and enjoy your favorite songs, curated by expert DJs.',
                hue: '#f28c00',
                span: 'lg:col-span-1',
              },
              {
                Icon: Mic2,
                title: 'Engaging Talk Shows',
                body: 'Join conversations on relationships, politics, culture, and social issues that matter.',
                hue: '#00aeef',
                span: 'lg:col-span-2',
              },
              {
                Icon: Heart,
                title: 'Youth Empowerment',
                body: 'Support young talent and voices that inspire change in our coastal community.',
                hue: '#ff6b9d',
                span: 'lg:col-span-1',
              },
              {
                Icon: Users,
                title: 'Interactive Experience',
                body: 'Call in, send requests, participate in polls, and connect with our listeners worldwide.',
                hue: '#00aeef',
                span: 'lg:col-span-1',
              },
            ].map(({ Icon, title, body, hue, span }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.09] ${span}`}
              >
                {/* Glow that blooms behind the icon on hover */}
                <div
                  className='pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30'
                  style={{ backgroundColor: hue }}
                />

                {/* Ghost index number */}
                <span className='pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-bold select-none text-white/[0.06] transition-all duration-300 group-hover:text-white/[0.1] group-hover:-translate-y-1'>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Top accent line that sweeps in on hover */}
                <span
                  className='pointer-events-none absolute left-0 top-0 h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-full'
                  style={{ backgroundColor: hue }}
                />

                <div className='relative z-10'>
                  <div
                    className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3'
                    style={{
                      background: `linear-gradient(135deg, ${hue}, ${hue}99)`,
                    }}
                  >
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='font-semibold text-lg mb-2 text-white'>
                    {title}
                  </h3>
                  <p className='text-white/60 text-sm leading-relaxed max-w-md group-hover:text-white/75 transition-colors'>
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className='relative overflow-hidden max-w-3xl mx-auto bg-gradient-to-br from-[#151B54] to-[#1b1f68] rounded-3xl p-12 text-white text-center shadow-2xl'
        >
          <div className='absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#00aeef]/30 blur-3xl pointer-events-none' />
          <div className='absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f28c00]/20 blur-3xl pointer-events-none' />
          <div className='relative z-10'>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className='font-display text-3xl font-bold mb-4'
            >
              Ready to Join the Swahilipot FM Community?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className='mb-8 text-white/85'
            >
              Become part of a vibrant radio station that celebrates youth
              voices and community stories.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <Button
                asChild
                className='rounded-full bg-white text-[#1b1f68] hover:bg-gray-100 font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg'
              >
                <Link to='/live'>Listen Now</Link>
              </Button>
              <Button
                asChild
                className='rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-0.5'
              >
                <Link to='/contact'>Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
