import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaGalleryImage } from '@/types/media';

interface ArticleGalleryProps {
  images: MediaGalleryImage[];
  articleTitle: string;
}

export const ArticleGallery = ({ images, articleTitle }: ArticleGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => {
          if (prev === null) return prev;
          return prev === 0 ? images.length - 1 : prev - 1;
        });
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => {
          if (prev === null) return prev;
          return prev === images.length - 1 ? 0 : prev + 1;
        });
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, images.length]);

  if (!images.length) return null;

  const goPrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section className='mt-12' aria-label='Article image gallery'>
      <h2 className='font-display text-2xl md:text-3xl font-bold mb-6'>
        Photo Gallery
      </h2>

      <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
        {images.map((image, index) => (
          <figure key={`${image.url}-${index}`} className='mb-4 break-inside-avoid'>
            <button
              type='button'
              onClick={() => setActiveIndex(index)}
              className='group block w-full overflow-hidden rounded-2xl bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2295e2] focus-visible:ring-offset-2'
              aria-label={`Open gallery image ${index + 1} of ${images.length}`}
            >
              <img
                src={image.url}
                alt={image.alt ?? image.caption ?? `${articleTitle} image ${index + 1}`}
                loading='lazy'
                className='h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
              />
            </button>
            {(image.caption || image.credit) && (
              <figcaption className='mt-2 px-1 text-sm text-gray-500'>
                {image.caption}
                {image.credit && (
                  <span className='mt-1 block text-xs uppercase tracking-wider text-gray-400'>
                    Photo: {image.credit}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8'
          role='dialog'
          aria-modal='true'
          aria-label='Expanded gallery image'
        >
          <button
            type='button'
            aria-label='Close image viewer'
            onClick={() => setActiveIndex(null)}
            className='absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:top-6'
          >
            <X className='h-5 w-5' />
          </button>

          {images.length > 1 && (
            <button
              type='button'
              aria-label='Previous image'
              onClick={goPrev}
              className='absolute left-3 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6'
            >
              <ChevronLeft className='h-6 w-6' />
            </button>
          )}

          <figure className='mx-auto max-h-[92vh] max-w-6xl'>
            <img
              src={images[activeIndex].url}
              alt={
                images[activeIndex].alt ??
                images[activeIndex].caption ??
                `${articleTitle} image ${activeIndex + 1}`
              }
              className='max-h-[78vh] w-auto max-w-full rounded-xl object-contain'
            />
            {(images[activeIndex].caption || images[activeIndex].credit) && (
              <figcaption className='mt-3 text-center text-sm text-gray-200'>
                {images[activeIndex].caption}
                {images[activeIndex].credit && (
                  <span className='ml-2 text-gray-300'>
                    Photo: {images[activeIndex].credit}
                  </span>
                )}
              </figcaption>
            )}
            {images.length > 1 && (
              <p className='mt-2 text-center text-xs uppercase tracking-wider text-gray-400'>
                {activeIndex + 1} / {images.length}
              </p>
            )}
          </figure>

          {images.length > 1 && (
            <button
              type='button'
              aria-label='Next image'
              onClick={goNext}
              className='absolute right-3 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6'
            >
              <ChevronRight className='h-6 w-6' />
            </button>
          )}
        </div>
      )}
    </section>
  );
};
