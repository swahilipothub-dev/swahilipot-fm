import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScheduleHeaderProps {
  selectedDay: string;
  onDayChange: (day: string) => void;
}

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({
  selectedDay,
  onDayChange,
}) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Get current day name
  const getCurrentDay = () => {
    const date = new Date();
    const dayIndex = date.getDay();
    // Convert from Sunday-based (0) to Monday-based (0)
    return days[(dayIndex + 6) % 7];
  };

  return (
    <div className='relative overflow-hidden mb-10 bg-gradient-to-r from-gray-100 to-white rounded-xl p-8 border border-gray-200'>
      <div className='absolute right-0 top-0 w-1/3 h-full opacity-5'>
        <Clock className='w-full h-full' />
      </div>

      <div className='relative z-10'>
        <div className='inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-gray-200 rounded-full text-sm font-medium bg-white'>
          <Calendar className='mr-2 h-4 w-4' />
          Weekly Schedule
        </div>

        <h1 className='font-display text-3xl md:text-4xl font-bold tracking-tight mb-6'>
          Our Broadcasting Schedule
        </h1>

        <p className='text-lg text-gray-700 mb-8 max-w-3xl'>
          Tune in to your favorite shows throughout the week. From morning talk
          shows to late night music sessions, we've got something for everyone.
        </p>

        <div className='flex flex-wrap gap-2'>
          {days.map((day) => (
            <Button
              key={day}
              variant={selectedDay === day ? 'default' : 'outline'}
              className={`rounded-full ${selectedDay === day ? 'bg-[#00aeef] hover:bg-[#00aeef]/70 text-white' : ''}`}
              onClick={() => onDayChange(day)}
            >
              {day}
            </Button>
          ))}
          <Button
            variant='outline'
            className='rounded-full ml-2'
            onClick={() => onDayChange(getCurrentDay())}
          >
            Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleHeader;
