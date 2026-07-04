/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Volume1, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getCurrentShow, Show } from '@/data/scheduleData';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentShow, setCurrentShow] = useState<Show | null>(getCurrentShow());

  useEffect(() => {
    const updateCurrentShow = () => {
      setCurrentShow(getCurrentShow());
    };

    updateCurrentShow();
    const interval = window.setInterval(updateCurrentShow, 15_000);
    return () => window.clearInterval(interval);
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    const audio = new Audio(
      'https://swahilipotfm.out.airtime.pro:8000/swahilipotfm_b?_ga=2.93354653.1019628599.1778995799-1485725630.1749199882&_gl=1*1uegnm9*_gcl_au*MTM0MTc3MDQ1MC4xNzc3NDYxNDc3*_ga*MTQ4NTcyNTYzMC4xNzQ5MTk5ODgy*_ga_R8CHSCXRQS*czE3Nzg5OTU3OTkkbzEyMCRnMSR0MTc3ODk5NTkyMSRqNjAkbDAkaDE2NzY5NzA2NDg'
    );
    audioRef.current = audio;
    audio.volume = volume / 100;

    return () => {
      audio.pause();
      audio.src = '';
      audio.remove();
    };
  }, []);

  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  // Get volume icon based on level
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className='h-5 w-5' />;
    if (volume < 50) return <Volume1 className='h-5 w-5' />;
    return <Volume2 className='h-5 w-5' />;
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 glass border-t border-gray-200 shadow-lg z-40 transition-all duration-300'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center py-3 md:py-4 gap-4'>
          {/* Station Info and Cover */}
          <div className='flex items-center gap-3 flex-1 min-w-0'>
            <div className='w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0'>
              {currentShow ? (
                <img
                  src={currentShow.image}
                  alt={currentShow.title}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='flex h-full w-full items-center justify-center bg-[#2295e2] text-white font-semibold'>
                  FM
                </div>
              )}
            </div>
            <div className='truncate'>
              <h4 className='font-medium text-sm truncate'>Swahilipot FM</h4>
              <div className='flex items-center gap-2'>
                <div className='nowplaying-animation h-3'>
                  <span className='mx-[1px]'></span>
                  <span className='mx-[1px]'></span>
                  <span className='mx-[1px]'></span>
                </div>
                <p className='text-xs text-gray-600 truncate'>
                  Now Playing: {currentShow?.title || 'Swahilipot FM Live'}
                </p>
              </div>
              {currentShow && (
                <p className='text-[11px] text-gray-500 truncate'>
                  Hosted by {currentShow.host}
                </p>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className='flex items-center gap-2 md:gap-4'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-[#2295e2] text-white transition-transform hover:scale-105'
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className='h-5 w-5' />
                    ) : (
                      <Play className='h-5 w-5' />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side='top'>
                  <p>{isPlaying ? 'Pause' : 'Play'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Volume Control */}
          <div className='hidden md:flex items-center gap-2 ml-4 w-36'>
            <button
              className='flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-200'
              onClick={() => handleVolumeChange([volume === 0 ? 80 : 0])}
              aria-label='Toggle mute'
            >
              {getVolumeIcon()}
            </button>
            <Slider
              value={[volume]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className='w-24'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
