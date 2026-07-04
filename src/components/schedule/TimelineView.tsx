import React from 'react';
import { Clock } from 'lucide-react';
import { Show } from '@/data/scheduleData';

interface TimelineViewProps {
  shows: Show[];
}

const TimelineView: React.FC<TimelineViewProps> = ({ shows }) => {
  // Format time for display
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // Sort shows by start time
  const sortedShows = [...shows].sort((a, b) =>
    a.startTime.localeCompare(b.startTime)
  );

  return (
    <div className='mt-8'>
      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-[28px] top-6 bottom-6 w-0.5 bg-gray-200'></div>

        {/* Shows on timeline */}
        <div className='space-y-8'>
          {sortedShows.map((show) => (
            <div key={show.id} className='relative pl-16'>
              {/* Time indicator */}
              <div className='absolute left-0 top-0 bg-white flex items-center justify-center'>
                <div className='bg-[#2295e2] text-white rounded-full w-14 h-14 flex items-center justify-center z-10'>
                  <Clock className='w-6 h-6' />
                </div>
              </div>

              {/* Show content */}
              <div className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md'>
                <div className='flex flex-col md:flex-row'>
                  {/* Image */}
                  <div className='md:w-1/4 h-[120px] md:h-auto overflow-hidden'>
                    <img
                      src={show.image}
                      alt={show.title}
                      className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                  </div>

                  {/* Content */}
                  <div className='p-5 md:w-3/4'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between mb-2'>
                      <h3 className='text-xl font-bold'>{show.title}</h3>
                      <div className='text-sm font-medium text-gray-600 mt-1 md:mt-0'>
                        {formatTime(show.startTime)} -{' '}
                        {formatTime(show.endTime)}
                      </div>
                    </div>

                    <p className='text-sm text-gray-700 mb-2'>
                      <span className='font-medium'>Host:</span> {show.host}
                    </p>

                    <p className='text-sm text-gray-600 mb-3 line-clamp-2'>
                      {show.description}
                    </p>

                    <div className='flex flex-wrap gap-1'>
                      <span className='inline-block px-2 py-1 text-xs font-medium bg-[#2295e2] text-white rounded-full'>
                        {show.category}
                      </span>

                      {show.tags &&
                        show.tags.map((tag) => (
                          <span
                            key={tag}
                            className='inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full'
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {sortedShows.length === 0 && (
            <div className='bg-gray-50 border border-gray-200 rounded-lg p-8 text-center'>
              <p className='text-gray-500'>No shows scheduled for this day.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;
