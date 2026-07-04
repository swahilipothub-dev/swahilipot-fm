import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getScheduleByDay } from '@/data/scheduleData';
import ScheduleHeader from '@/components/schedule/ScheduleHeader';
import ShowCard from '@/components/schedule/ShowCard';
import TimelineView from '@/components/schedule/TimelineView';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const scheduleByDay = getScheduleByDay();

  // Set the current day as default on component mount
  useEffect(() => {
    const today = new Date();
    const dayIndex = today.getDay();
    // Convert from Sunday-based (0) to Monday-based (0)
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    setSelectedDay(days[(dayIndex + 6) % 7]);
  }, []);

  // Get shows for the selected day
  const currentDaySchedule = scheduleByDay.find(
    (day) => day.name === selectedDay
  );
  const showsForSelectedDay = currentDaySchedule
    ? currentDaySchedule.shows
    : [];

  return (
    <div>
      <section className='mb-10 scroll-animation'>
        <div className='relative overflow-hidden bg-black mx-auto w-full'>
          <video
            className='h-[260px] md:h-[360px] lg:h-[420px] w-full object-cover pointer-events-none'
            src='/motion/spfm%20motion.mp4'
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList='nodownload nofullscreen noplaybackrate noremoteplayback'
          />
        </div>
      </section>

      <div className='container mx-auto px-4 md:px-6 py-2 md:py-6 scroll-animation'>
        {/* Header section */}
        <ScheduleHeader
          selectedDay={selectedDay}
          onDayChange={setSelectedDay}
        />

        {/* Main content with tabs for different views */}
        <div className='mb-8'>
          <Tabs defaultValue='grid' className='w-full'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='font-display text-2xl font-bold'>
                {selectedDay}'s Shows
              </h2>

              <TabsList>
                <TabsTrigger value='grid'>Grid View</TabsTrigger>
                <TabsTrigger value='timeline'>Timeline</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='grid'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {showsForSelectedDay.map((show) => (
                  <div key={show.id} className='scroll-animation'>
                    <ShowCard show={show} />
                  </div>
                ))}

                {showsForSelectedDay.length === 0 && (
                  <div className='col-span-full bg-gray-50 border border-gray-200 rounded-lg p-8 text-center'>
                    <p className='text-gray-500'>
                      No shows scheduled for this day.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value='timeline'>
              <TimelineView shows={showsForSelectedDay} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Weekly overview section */}
        <div className='mt-16'>
          <h2 className='font-display text-2xl font-bold mb-6'>
            Weekly Overview
          </h2>
          <div className='overflow-x-auto pb-4'>
            <div className='min-w-[800px]'>
              <div className='grid grid-cols-7 gap-4'>
                {scheduleByDay.map((day) => (
                  <div key={day.name} className='text-center scroll-animation'>
                    <div
                      className={`font-medium p-2 mb-2 rounded-lg ${
                        day.name === selectedDay
                          ? 'bg-[#2295e2] text-white'
                          : 'bg-gray-100 text-black'
                      }`}
                    >
                      {day.name}
                    </div>
                    <div className='space-y-2'>
                      {day.shows
                        .filter((show) => show.id !== 'the-friday-rave')
                        .map((show) => (
                          <div
                            key={show.id}
                            className='p-2 text-xs bg-white border border-gray-200 rounded shadow-sm cursor-pointer hover:shadow-md transition-shadow'
                            onClick={() => setSelectedDay(day.name)}
                          >
                            <p className='font-medium truncate'>{show.title}</p>
                            <p className='text-gray-500'>
                              {show.startTime.substring(0, 5)}
                            </p>
                          </div>
                        ))}
                      {day.shows.filter((show) => show.id !== 'the-friday-rave')
                        .length === 0 && (
                        <div className='p-2 text-xs text-gray-400 border border-dashed border-gray-200 rounded'>
                          No shows
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
