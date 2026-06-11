import React, { useRef } from 'react';
import { ArrowLeft, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Video = () => {
  const iframeRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if ((iframeRef.current as any).webkitRequestFullscreen) {
        (iframeRef.current as any).webkitRequestFullscreen();
      } else if ((iframeRef.current as any).mozRequestFullScreen) {
        (iframeRef.current as any).mozRequestFullScreen();
      } else if ((iframeRef.current as any).msRequestFullscreen) {
        (iframeRef.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div className='container md:min-h-screen mb-12 mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Button variant='ghost' className='rounded-full pl-3' asChild>
          <Link to='/'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl md:text-3xl font-bold'>Livestream</h1>
        <Button
          onClick={handleFullscreen}
          variant='outline'
          size='sm'
          className='flex items-center gap-2'
        >
          <Maximize className='h-4 w-4' />
          Fullscreen
        </Button>
      </div>

      <div
        ref={iframeRef}
        className='aspect-video w-full overflow-hidden rounded-lg bg-black'
      >
        <iframe
          src='https://player.restream.io/?token=fa9ad276b97e439f9acee5f0faf00b92&autoplay=1'
          className='w-full h-full border-0'
          allow='autoplay'
          title='Swahilipot FM Live Stream'
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
