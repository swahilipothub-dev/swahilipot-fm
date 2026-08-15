import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getScheduleByDay } from '@/data/scheduleData';
import ScheduleHeader from '@/components/schedule/ScheduleHeader';
import ShowCard from '@/components/schedule/ShowCard';
import TimelineView from '@/components/schedule/TimelineView';
import { Clock } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const scheduleByDay = getScheduleByDay();
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    setSearchParams({ day });

    // Bring users to the selected day's full shows when choosing from cards.
    const showsSection = document.getElementById('selected-day-shows');
    if (showsSection) {
      showsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Set selected day from URL if provided, otherwise default to today.
  useEffect(() => {
    const dayFromUrl = searchParams.get('day');
    if (dayFromUrl === selectedDay) {
      return;
    }

    if (dayFromUrl && days.includes(dayFromUrl)) {
      setSelectedDay(dayFromUrl);
      return;
    }

    const today = new Date();
    const dayIndex = today.getDay();
    // Convert from Sunday-based (0) to Monday-based (0)
    const todayName = days[(dayIndex + 6) % 7];
    setSelectedDay(todayName);
    setSearchParams({ day: todayName }, { replace: true });
  }, [searchParams, selectedDay, setSearchParams, days]);

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
          onDayChange={handleDayChange}
        />

        {/* Main content with tabs for different views */}
        <div id='selected-day-shows' className='mb-8'>
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

        {/* Weekly Broadcasting Schedule Section */}
        <div className='mt-20 scroll-animation'>
          {/* Premium Header with Live Clock */}
          <div className='bg-gradient-to-br from-[#271d73] via-[#1a1452] to-[#0f0b2e] rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden'>
            {/* Decorative background elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-[#2295e2]/10 rounded-full blur-3xl -mr-48 -mt-48'></div>
            <div className='absolute bottom-0 left-0 w-80 h-80 bg-[#2295e2]/5 rounded-full blur-3xl -ml-40 -mb-40'></div>

            <div className='relative z-10'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8'>
                <div>
                  <h2 className='font-display text-3xl md:text-4xl font-bold text-white mb-2'>
                    Weekly Broadcasting Schedule
                  </h2>
                  <p className='text-[#a0a8d8] text-lg'>
                    Your complete guide to Swahili Pot FM programming
                  </p>
                </div>

                {/* Live Clock */}
                <div className='flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 min-w-max'>
                  <div className='flex items-center justify-center gap-2 mb-2'>
                    <div className='w-2 h-2 bg-[#2295e2] rounded-full animate-pulse'></div>
                    <span className='text-white/70 text-sm font-medium'>
                      LIVE
                    </span>
                  </div>
                  <div className='text-4xl md:text-5xl font-bold text-[#2295e2] font-mono tracking-wider'>
                    {currentTime.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: true,
                    })}
                  </div>
                  <div className='text-white/60 text-xs mt-2'>
                    {currentTime.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className='text-[#c0c8e8] text-base leading-relaxed max-w-2xl'>
                Tune in throughout the week to catch all your favorite shows.
                From energizing morning sessions to relaxing evening programs,
                we deliver premium content 24/7.
              </p>
            </div>
          </div>

          {/* Weekly Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {scheduleByDay.map((day) => {
              const isCurrentDay =
                new Date().toLocaleString('en-US', { weekday: 'long' }) ===
                  day.name ||
                (day.name === 'Monday' && new Date().getDay() === 1) ||
                (day.name === 'Tuesday' && new Date().getDay() === 2) ||
                (day.name === 'Wednesday' && new Date().getDay() === 3) ||
                (day.name === 'Thursday' && new Date().getDay() === 4) ||
                (day.name === 'Friday' && new Date().getDay() === 5) ||
                (day.name === 'Saturday' && new Date().getDay() === 6) ||
                (day.name === 'Sunday' && new Date().getDay() === 0);

              const showCount = day.shows.length;
              const topShows = day.shows.slice(0, 3);

              return (
                <div
                  key={day.name}
                  onClick={() => handleDayChange(day.name)}
                  className={`scroll-animation group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isCurrentDay
                      ? 'ring-2 ring-[#2295e2] shadow-2xl shadow-[#2295e2]/30'
                      : 'hover:shadow-xl'
                  }`}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 ${
                      isCurrentDay
                        ? 'bg-gradient-to-br from-[#2295e2]/20 to-[#2295e2]/5'
                        : 'bg-gradient-to-br from-white to-gray-50 group-hover:from-gray-50'
                    }`}
                  ></div>

                  {/* Live badge */}
                  {isCurrentDay && (
                    <div className='absolute top-4 right-4 z-20'>
                      <div className='flex items-center gap-1.5 bg-[#2295e2] text-white px-3 py-1.5 rounded-full text-xs font-semibold'>
                        <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
                        ON AIR
                      </div>
                    </div>
                  )}

                  <div className='relative z-10 p-6'>
                    {/* Day header */}
                    <div className='mb-6'>
                      <h3
                        className={`text-2xl font-bold mb-1 ${
                          isCurrentDay ? 'text-[#2295e2]' : 'text-[#271d73]'
                        }`}
                      >
                        {day.name}
                      </h3>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`h-1 w-12 rounded-full ${
                            isCurrentDay ? 'bg-[#2295e2]' : 'bg-gray-300'
                          }`}
                        ></div>
                        <span
                          className={`text-sm font-medium ${
                            isCurrentDay ? 'text-[#2295e2]' : 'text-gray-600'
                          }`}
                        >
                          {showCount} shows
                        </span>
                      </div>
                    </div>

                    {/* Shows list */}
                    <div className='space-y-3 mb-6'>
                      {topShows.length > 0 ? (
                        topShows.map((show) => (
                          <div key={show.id} className='group/show'>
                            <div className='flex items-start gap-3'>
                              <div
                                className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                                  isCurrentDay ? 'bg-[#2295e2]' : 'bg-gray-400'
                                }`}
                              ></div>
                              <div className='flex-1 min-w-0'>
                                <p
                                  className={`font-semibold text-sm truncate group-hover/show:text-[#2295e2] transition-colors ${
                                    isCurrentDay
                                      ? 'text-[#271d73]'
                                      : 'text-gray-800'
                                  }`}
                                >
                                  {show.title}
                                </p>
                                <p className='text-xs text-gray-500 mt-0.5'>
                                  {show.startTime.substring(0, 5)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className='text-sm text-gray-400 italic'>
                          No shows scheduled
                        </p>
                      )}

                      {showCount > 3 && (
                        <div className='pt-2 border-t border-gray-200'>
                          <p className='text-xs font-medium text-[#2295e2]'>
                            +{showCount - 3} more show
                            {showCount - 3 !== 1 ? 's' : ''}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDayChange(day.name);
                      }}
                      className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        isCurrentDay
                          ? 'bg-[#2295e2] text-white hover:bg-[#2295e2]/90 shadow-lg shadow-[#2295e2]/30'
                          : 'bg-gray-100 text-[#271d73] hover:bg-[#2295e2] hover:text-white'
                      }`}
                    >
                      {isCurrentDay ? 'View Today' : `View ${day.name}`}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
