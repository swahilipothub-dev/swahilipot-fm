import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Users, Zap, Globe, Music, Mic2, Heart, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedShowsSection from '@/components/home/FeaturedShowsSection';
import { featuredShows } from '@/data/homeData';
import { Button } from '@/components/ui/button';

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
          <div className='scroll-animation'>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-6'>
              About Swahilipot FM
            </h2>
            <p className='text-gray-600 mb-4'>
              Swahilipot FM is the voice of the coastal youth community. Broadcasting 24/7, we deliver a dynamic mix of music, news, talk shows, and entertainment designed specifically for the modern African listener.
            </p>
            <p className='text-gray-600 mb-6'>
              Our mission is to empower young voices, foster community engagement, and provide a platform where diverse perspectives can be heard and celebrated. We believe in the power of radio to connect, inspire, and create change.
            </p>
            <Button asChild className='rounded-full bg-[#2295e2] text-white hover:bg-[#271d73]'>
              <Link to='/about'>
                Learn More About Us <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
          <div className='scroll-animation relative'>
            <img
              src='/studio/spfm_about.jpg'
              alt='Studio'
              className='rounded-2xl shadow-lg'
            />
          </div>
        </div>
      </section>

      {/* Stats/Highlights Section */}
      <section className='bg-gray-50 py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-16 text-center'>
              By The Numbers
            </h2>
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
            disablePictureInPicture
            controlsList='nodownload nofullscreen noplaybackrate noremoteplayback'
          />
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
          <h2 className='font-display text-3xl md:text-4xl font-bold mb-16 text-center'>
            Why Listen to Swahilipot FM?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='scroll-animation'>
              <div className='flex items-start gap-4'>
                <Zap className='h-6 w-6 text-[#2295e2] flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Fresh Content Daily</h3>
                  <p className='text-gray-600'>Stay updated with breaking news, trending topics, and entertainment that matters to you.</p>
                </div>
              </div>
            </div>
            <div className='scroll-animation'>
              <div className='flex items-start gap-4'>
                <Globe className='h-6 w-6 text-[#2295e2] flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Community Connected</h3>
                  <p className='text-gray-600'>Hear stories from your neighbors, engage with your community, and be part of a movement.</p>
                </div>
              </div>
            </div>
            <div className='scroll-animation'>
              <div className='flex items-start gap-4'>
                <Music className='h-6 w-6 text-[#2295e2] flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-lg mb-2'>All Your Favorite Music</h3>
                  <p className='text-gray-600'>Discover new tracks and enjoy your favorite songs, curated by expert DJs.</p>
                </div>
              </div>
            </div>
            <div className='scroll-animation'>
              <div className='flex items-start gap-4'>
                <Mic2 className='h-6 w-6 text-[#2295e2] flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Engaging Talk Shows</h3>
                  <p className='text-gray-600'>Join conversations on relationships, politics, culture, and social issues that matter.</p>
                </div>
              </div>
            </div>
            <div className='scroll-animation'>
              <div className='flex items-start gap-4'>
                <Heart className='h-6 w-6 text-[#2295e2] flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Youth Empowerment</h3>
                  <p className='text-gray-600'>Support young talent and voices that inspire change in our coastal community.</p>
                </div>
              </div>
            </div>
            <div className='scroll-animation'>
              <div className='flex items-start gap-4'>
                <Users className='h-6 w-6 text-[#2295e2] flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Interactive Experience</h3>
                  <p className='text-gray-600'>Call in, send requests, participate in polls, and connect with our listeners worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto bg-[#151B54] rounded-2xl p-12 text-white text-center scroll-animation'>
          <h2 className='font-display text-3xl font-bold mb-4'>
            Ready to Join the Swahilipot FM Community?
          </h2>
          <p className='mb-8 text-white/90'>
            Become part of a vibrant radio station that celebrates youth voices and community stories.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild className='rounded-full bg-white text-[#271d73] hover:bg-gray-200 font-medium transition-all duration-300 hover:-translate-y-0.5'>
              <Link to='/live'>Listen Now</Link>
            </Button>
            <Button asChild className='rounded-full border-2 border-white text-white hover:bg-white/10 font-medium transition-all duration-300 hover:-translate-y-0.5'>
              <Link to='/contact'>Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Import the Schedule icon for the button
import { Calendar as Schedule } from 'lucide-react';

export default Index;
