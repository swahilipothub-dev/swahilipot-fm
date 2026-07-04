import React from 'react';
import { Clock, Radio, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Show } from '@/data/scheduleData';

interface ShowCardProps {
  show: Show;
}

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  return (
    <Card className='overflow-hidden border-gray-200 transition-all duration-300 hover:shadow-lg h-full'>
      <div className='relative aspect-video overflow-hidden bg-gray-100'>
        <img
          src={show.image}
          alt={show.title}
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
        <div className='absolute bottom-4 left-4 right-4'>
          <div className='inline-flex items-center justify-center px-2 py-1 mb-2 bg-white text-black text-xs font-medium rounded-full'>
            <Clock className='mr-1 h-3 w-3' />
            {formatTime(show.startTime)} - {formatTime(show.endTime)}
          </div>
        </div>
      </div>

      <CardContent className='p-5'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold line-clamp-1'>{show.title}</h3>
          <span className='bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded'>
            {show.category}
          </span>
        </div>

        <p className='text-sm text-gray-600 mb-2'>
          <span className='font-medium'>Host:</span> {show.host}
        </p>

        <p className='text-sm text-gray-700 line-clamp-3 mb-4'>
          {show.description}
        </p>

        {show.tags && (
          <div className='flex flex-wrap gap-1 mb-2'>
            {show.tags.map((tag) => (
              <span
                key={tag}
                className='inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-800'
              >
                {tag === 'Music' ? <Music className='mr-1 h-3 w-3' /> : null}
                {tag === 'Talk' ? <Radio className='mr-1 h-3 w-3' /> : null}
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShowCard;
