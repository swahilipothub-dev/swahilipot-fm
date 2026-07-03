import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Radio, Users, Zap, Globe, Music, Mic2, Heart, ArrowRight } from 'lucide-react';
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
      className='scroll-animation bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer min-w-[260px] snap-start'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center gap-4 mb-4'>
        <Icon className='h-8 w-8 text-[#2295e2]' />
        <h3 className='text-2xl font-bold'>{count}{label === 'Continuous Broadcasting' ? '/' : ''}{label === 'Continuous Broadcasting' ? '7' : ''}</h3>
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

      {/* About Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className='inline-block text-sm font-semibold text-[#2295e2] tracking-widest uppercase mb-3'
            >
              Who We Are
            </motion.span>
            <motion.h2 variants={fadeUp} className='font-display text-3xl md:text-4xl font-bold mb-6'>
              About Swahilipot FM
            </motion.h2>
            <motion.p variants={fadeUp} className='text-gray-600 mb-4'>
              Swahilipot FM is the voice of the coastal youth community. Broadcasting 24/7, we deliver a dynamic mix of music, news, talk shows, and entertainment designed specifically for the modern African listener.
            </motion.p>
            <motion.p variants={fadeUp} className='text-gray-600 mb-6'>
              Our mission is to empower young voices, foster community engagement, and provide a platform where diverse perspectives can be heard and celebrated. We believe in the power of radio to connect, inspire, and create change.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild className='rounded-full bg-[#2295e2] text-white hover:bg-[#271d73] transition-all duration-300 hover:-translate-y-0.5 shadow-md'>
                <Link to='/about'>
                  Learn More About Us <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='relative'
          >
            <div className='absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#2295e2]/20 to-[#e98523]/20 -z-10 blur-xl' />
            <img
              src='/studio/spfm_about.jpg'
              alt='Studio'
              className='rounded-2xl shadow-xl w-full aspect-[4/3] object-cover'
              loading='lazy'
            />
            <div className='absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3'>
              <Radio className='h-8 w-8 text-[#2295e2]' />
              <div>
                <p className='font-bold text-lg leading-none'>24/7</p>
                <p className='text-xs text-gray-500'>Live Broadcasting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights Section */}
      <section className='bg-gray-50 py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-7xl mx-auto'>
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
      <FeaturedShowsSection
        featuredShows={featuredShows}
        featuresRef={featuresRef}
      />

      {/* Why Listen Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
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
              { Icon: Zap,   title: 'Fresh Content Daily',      body: 'Stay updated with breaking news, trending topics, and entertainment that matters to you.' },
              { Icon: Globe, title: 'Community Connected',       body: 'Hear stories from your neighbors, engage with your community, and be part of a movement.' },
              { Icon: Music, title: 'All Your Favorite Music',   body: 'Discover new tracks and enjoy your favorite songs, curated by expert DJs.' },
              { Icon: Mic2,  title: 'Engaging Talk Shows',       body: 'Join conversations on relationships, politics, culture, and social issues that matter.' },
              { Icon: Heart, title: 'Youth Empowerment',         body: 'Support young talent and voices that inspire change in our coastal community.' },
              { Icon: Users, title: 'Interactive Experience',    body: 'Call in, send requests, participate in polls, and connect with our listeners worldwide.' },
            ].map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className='group flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all'
              >
                <div className='h-10 w-10 rounded-xl bg-[#2295e2]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2295e2] transition-colors'>
                  <Icon className='h-5 w-5 text-[#2295e2] group-hover:text-white transition-colors' />
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-1.5'>{title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>{body}</p>
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
              Become part of a vibrant radio station that celebrates youth voices and community stories.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <Button asChild className='rounded-full bg-white text-[#271d73] hover:bg-gray-100 font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg'>
                <Link to='/live'>Listen Now</Link>
              </Button>
              <Button asChild className='rounded-full border-2 border-white text-white hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-0.5'>
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
