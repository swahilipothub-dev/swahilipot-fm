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
  Headphones,
  CalendarDays,
  Newspaper,
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
      className='scroll-animation relative min-w-[260px] snap-start cursor-pointer overflow-hidden rounded-2xl border border-[#271d73]/10 bg-white/90 p-8 shadow-sm ring-1 ring-black/[0.03] transition-shadow hover:shadow-lg'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2295e2] via-[#271d73] to-[#e98523]' />
      <div className='flex items-center gap-4 mb-4'>
        <Icon className='h-8 w-8 text-[#2295e2]' />
        <h3 className='text-2xl font-bold'>
          {count}
          {label === 'Continuous Broadcasting' ? '/' : ''}
          {label === 'Continuous Broadcasting' ? '7' : ''}
        </h3>
      </div>
      <p className='text-gray-600'>{label}</p>
      <p className='text-sm text-gray-500 mt-2'>{description}</p>
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
        <div className='relative max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[#2295e2]/20 px-6 py-8 md:px-10 md:py-10' style={{ backgroundImage: 'url(/images/coastal-radio-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 rounded-3xl' />
          <div className='pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#2295e2]/10 blur-3xl' />
          <div className='pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#e98523]/10 blur-3xl' />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className='relative z-10 mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'
          >
            <div>
              <span className='inline-block text-sm font-semibold text-[#2295e2] tracking-widest uppercase mb-3'>
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
              className='inline-flex items-center text-sm font-semibold text-[#271d73] transition-colors hover:text-[#2295e2]'
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
            className='relative z-10 mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#271d73]'
          >
            <span className='nowplaying-animation inline-flex h-3 items-end gap-1 text-[#2295e2]'>
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
                Icon: Headphones,
                title: 'Listen Live Now',
                body: 'Join the stream in one tap and stay connected to the station all day.',
                to: '/live',
                cta: 'Open Live Radio',
              },
              {
                Icon: CalendarDays,
                title: "Today's Lineup",
                body: 'See who is on air now and what is coming next this week.',
                to: '/schedule',
                cta: 'View Full Schedule',
              },
              {
                Icon: Newspaper,
                title: 'Coastal Voices & Stories',
                body: 'Read local news, youth updates, and conversations from across the coast.',
                to: '/news',
                cta: 'Explore Newsroom',
              },
            ].map(({ Icon, title, body, to, cta }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className='group rounded-2xl border border-[#2295e2]/35 bg-white/95 p-6 shadow-lg ring-1 ring-black/10 backdrop-blur-sm transition-all hover:border-[#2295e2]/50 hover:shadow-xl'
              >
                <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2295e2]/10 transition-colors group-hover:bg-[#2295e2]/15'>
                  <Icon className='h-5 w-5 text-[#2295e2] transition-colors' />
                </div>
                <h3 className='mb-2 font-semibold text-lg'>{title}</h3>
                <p className='mb-5 text-sm leading-relaxed text-gray-600'>{body}</p>
                <Link
                  to={to}
                  className='inline-flex items-center text-sm font-semibold text-[#271d73] transition-colors hover:text-[#2295e2]'
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
        <div className='pointer-events-none absolute inset-0 opacity-30' style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(39,29,115,0.12) 1px, transparent 0)', backgroundSize: '26px 26px' }} />
        <div className='container mx-auto px-4 md:px-6'>
          <div className='relative z-10 max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <span className='inline-block text-sm font-semibold text-[#2295e2] tracking-widest uppercase mb-3'>
                Our Reach
              </span>
              <h2 className='font-display text-3xl md:text-4xl font-bold'>
                By The Numbers
              </h2>
            </div>
            <div className='flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 snap-x snap-mandatory'>
              <CounterCard
                icon={Radio}
                endValue={24}
                label='Continuous Broadcasting'
                description='Never miss a moment of your favorite shows'
              />
              <CounterCard
                icon={Users}
                endValue={2000}
                label='Active Listeners'
                description='Growing community from the coast and beyond'
              />
              <CounterCard
                icon={Mic2}
                endValue={15}
                label='Professional Hosts'
                description='Talented presenters bringing you quality content'
              />
              <CounterCard
                icon={Music}
                endValue={50}
                label='Shows Per Week'
                description='Diverse programming for every taste'
              />
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
            <span className='inline-block text-sm font-semibold text-[#2295e2] tracking-widest uppercase mb-3'>
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
        <div className='pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2295e2]/30 to-transparent' />
        <div className='pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e98523]/35 to-transparent' />
        <FeaturedShowsSection
          featuredShows={featuredShows}
          featuresRef={featuresRef}
        />
      </section>

      {/* Why Listen Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <div className='max-w-7xl mx-auto rounded-3xl border border-[#271d73]/10 bg-[#fcfdff] px-6 py-10 md:px-10 md:py-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <span className='inline-block text-sm font-semibold text-[#2295e2] tracking-widest uppercase mb-3'>
              The Difference
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold'>
              Why Listen to Swahilipot FM?
            </h2>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
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
                accent: 'group-hover:border-[#2295e2]/30',
              },
              {
                Icon: Globe,
                title: 'Community Connected',
                body: 'Hear stories from your neighbors, engage with your community, and be part of a movement.',
                accent: 'group-hover:border-[#271d73]/25',
              },
              {
                Icon: Music,
                title: 'All Your Favorite Music',
                body: 'Discover new tracks and enjoy your favorite songs, curated by expert DJs.',
                accent: 'group-hover:border-[#e98523]/35',
              },
              {
                Icon: Mic2,
                title: 'Engaging Talk Shows',
                body: 'Join conversations on relationships, politics, culture, and social issues that matter.',
                accent: 'group-hover:border-[#2295e2]/30',
              },
              {
                Icon: Heart,
                title: 'Youth Empowerment',
                body: 'Support young talent and voices that inspire change in our coastal community.',
                accent: 'group-hover:border-[#e98523]/35',
              },
              {
                Icon: Users,
                title: 'Interactive Experience',
                body: 'Call in, send requests, participate in polls, and connect with our listeners worldwide.',
                accent: 'group-hover:border-[#271d73]/25',
              },
            ].map(({ Icon, title, body, accent }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-5 shadow-sm ring-1 ring-black/[0.03] transition-all hover:bg-gray-50 hover:shadow-md ${accent}`}
              >
                <div className='h-10 w-10 rounded-xl bg-[#2295e2]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2295e2]/15 transition-colors'>
                  <Icon className='h-5 w-5 text-[#2295e2] transition-colors' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-1.5'>{title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
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
          className='relative overflow-hidden max-w-3xl mx-auto bg-gradient-to-br from-[#151B54] to-[#271d73] rounded-3xl p-12 text-white text-center shadow-2xl'
        >
          <div className='absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#2295e2]/30 blur-3xl pointer-events-none' />
          <div className='absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#e98523]/20 blur-3xl pointer-events-none' />
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
                className='rounded-full bg-white text-[#271d73] hover:bg-gray-100 font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg'
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
