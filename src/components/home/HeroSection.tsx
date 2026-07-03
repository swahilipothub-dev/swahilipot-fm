import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  const showBanners = [
    '/show-banners/breakfast-club.jpeg',
    '/show-banners/swahilipot-cafe.jpeg',
    '/show-banners/swahilipot-aroma.png',
    '/show-banners/swahilipot-drive.png',
    '/show-banners/mikuki-ya-maneno.png',
    '/show-banners/beyond-balot.jpeg',
    '/show-banners/request-hour.png',
    '/show-banners/kickoff.png',
    '/show-banners/saturday rave.jpeg',
    '/show-banners/swahilipot-mixes.png',
    '/show-banners/the-night-shift.png',
    '/show-banners/teenz-connect.png',
  ];

  return (
    <section
      className='relative min-h-[600px] md:min-h-[800px] flex items-center justify-center'
      ref={heroRef}
    >
      {/* Background Carousel */}
      <div className='absolute md:opacity-1 inset-0 w-full h-full overflow-hidden'>
        <Slider {...settings} className='w-full h-full'>
          {showBanners.map((image, index) => (
            <div key={index} className='w-full h-full'>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </Slider>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>
      {/* Added this to counter the issue with large whitespace when banners can't fit for smaller screens. This shows a theme blue background with the radio logo */}
      <div className='absolute md:opacity-0 opacity-1 inset-0 w-full h-full overflow-hidden flex items-center justify-center'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src='/motion/logo.mp4'
          autoPlay
          muted
          loop
          playsInline
        />
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
      </div>
      {/* Content */}
      <div className='relative z-10 text-center text-white px-6'>
        <div className='max-w-xl mx-auto'>
          <div className='inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-200 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-black'>
            <span className='relative flex h-2 w-2 mr-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500'></span>
            </span>
            {getGreeting()} • We're live on air
          </div>
          <h1 className='font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6'>
            Swahilipot FM Experience
          </h1>
          <p className='text-lg md:text-xl text-gray-200 mb-8'>
            Your daily mix of breaking news, youth conversations, music
            culture, and community stories from the Coast and beyond.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='rounded-full font-medium bg-white text-black hover:bg-gray-300 h-12 px-8'
              asChild
            >
              <Link to='/live'>
                <Play className='mr-2 h-4 w-4' />
                Watch Live
              </Link>
            </Button>
            <Button
              size='lg'
              className='rounded-full font-medium bg-[#271d73] hover:bg-[#2295e2] border-white h-12 px-8 text-white'
              asChild
            >
              <Link to='/presenters'>Meet Our Presenters</Link>
            </Button>
            <Button
              size='lg'
              className='rounded-full font-medium bg-[#271d73] hover:bg-[#2295e2] border-white h-12 px-8 text-white'
              asChild
            >
              <Link to='/schedule'>
                <Sparkles className='mr-2 h-4 w-4' />
                Explore the Schedule
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
