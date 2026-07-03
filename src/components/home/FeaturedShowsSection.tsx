import React from 'react';
import { Link } from 'react-router-dom';
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

const FeaturedShowsSection: React.FC<FeaturedShowsSectionProps> = ({
  featuredShows,
  featuresRef,
}) => {
  return (
    <section className='container mx-auto px-4 md:px-6' ref={featuresRef}>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-12'>
          <h2 className='font-display text-3xl md:text-4xl font-bold'>
            Featured Shows
          </h2>
          <Link
            to='/schedule'
            className='flex items-center text-sm font-medium'
          >
            View all shows <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featuredShows.map((show, index) => (
            <div
              key={index}
              className='scroll-animation'
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className='overflow-hidden border-gray-200 transition-all duration-300 hover:shadow-md'>
                <div className='relative aspect-video overflow-hidden'>
                  <img
                    src={show.image}
                    alt={show.title}
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='chip bg-white/90 backdrop-blur-sm text-black mb-2'>
                      {show.time}
                    </div>
                    <h3 className='text-white text-xl font-bold'>
                      {show.title}
                    </h3>
                    <p className='text-white/90 text-sm'>{show.host}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowsSection;
