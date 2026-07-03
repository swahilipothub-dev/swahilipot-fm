import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';
import { presenters } from '@/data/presentersData';
import { allShows, getCurrentShow, Show } from '@/data/scheduleData';

const IconYouTube = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
  </svg>
);

const IconInstagram = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
  </svg>
);

const IconX = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

const Presenters = () => {
  const currentShow = getCurrentShow();

  return (
    <div className='relative overflow-hidden min-h-screen bg-black'>
      <video
        className='absolute inset-0 h-full w-full object-cover opacity-25'
        src='/motion/logo.mp4'
        autoPlay
        muted
        loop
        playsInline
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/95' />

      <div className='relative z-10 container mx-auto px-4 py-20'>
        {/* Header */}
        <div className='mb-20 text-center'>
          <div className='inline-flex items-center gap-2 bg-[#2295e2]/10 border border-[#2295e2]/30 rounded-full px-5 py-2 mb-6'>
            <Radio className='h-4 w-4 text-[#2295e2]' />
            <span className='text-sm font-semibold text-[#2295e2] tracking-widest uppercase'>
              Swahilipot FM
            </span>
          </div>
          <h1 className='text-6xl md:text-7xl font-display font-extrabold mb-6 text-white leading-tight'>
            Meet Our{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2295e2] to-cyan-400'>
                Voices
              </span>
              <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2295e2] to-cyan-400 rounded-full' />
            </span>
          </h1>
          <p className='text-lg text-white/60 max-w-2xl mx-auto leading-relaxed'>
            The personalities, stories, and passions that power Swahilipot FM —
            Mombasa's heartbeat, every day.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {presenters.map((presenter) => {
            const presenterShows = (presenter.showIds || [])
              .map((id) => allShows.find((show) => show.id === id))
              .filter((show): show is Show => Boolean(show));
            const isOnAir =
              currentShow &&
              presenterShows.some((show) => show.id === currentShow.id);
            const presenterShow = isOnAir
              ? currentShow
              : presenterShows[0] || null;

            return (
              <Link
                key={presenter.id}
                to={`/presenters/${presenter.id}`}
                className='group relative block overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#2295e2]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2295e2]/10'
              >
                {/* Image */}
                <div className='relative h-80 overflow-hidden'>
                  <img
                    src={
                      presenter.image
                        ? presenter.image
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(presenter.name)}&background=2295e2&color=fff&size=640`
                    }
                    alt={presenter.name}
                    className='absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75'
                    loading='eager'
                    width={640}
                    height={640}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent' />

                  {isOnAir && (
                    <div className='absolute top-4 left-4 flex items-center gap-2 bg-red-600 rounded-full px-3 py-1.5 shadow-lg'>
                      <span className='h-2 w-2 rounded-full bg-white animate-pulse' />
                      <span className='text-[11px] font-bold uppercase tracking-wider text-white'>
                        On Air
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <span className='bg-[#2295e2] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
                      View Profile →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className='p-5'>
                  <p className='text-xs font-semibold text-[#2295e2] uppercase tracking-widest mb-1'>
                    {presenter.role}
                  </p>
                  <h3 className='text-xl font-bold text-white group-hover:text-[#2295e2] transition-colors duration-300 mb-3'>
                    {presenter.name}
                  </h3>

                  {presenterShow && (
                    <div className='flex items-start gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 mb-3'>
                      <Radio className='h-4 w-4 text-[#2295e2] mt-0.5 flex-shrink-0' />
                      <div>
                        <p className='text-xs text-white/40 mb-0.5'>Show</p>
                        <p className='text-sm font-medium text-white leading-tight'>
                          {presenterShow.title}
                        </p>
                        <p className='text-xs text-white/40 mt-0.5'>
                          {presenterShow.startTime} – {presenterShow.endTime}
                        </p>
                      </div>
                    </div>
                  )}

                  {presenter.socialLinks && (
                    <div className='flex gap-2 pt-3 border-t border-white/10'>
                      {presenter.socialLinks.youtube && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(presenter.socialLinks!.youtube, '_blank');
                          }}
                          className='p-1.5 rounded-full bg-white/10 hover:bg-red-600 transition-colors duration-200 cursor-pointer'
                        >
                          <IconYouTube className='h-3.5 w-3.5 text-white' />
                        </span>
                      )}
                      {presenter.socialLinks.instagram && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(presenter.socialLinks!.instagram, '_blank');
                          }}
                          className='p-1.5 rounded-full bg-white/10 hover:bg-pink-600 transition-colors duration-200 cursor-pointer'
                        >
                          <IconInstagram className='h-3.5 w-3.5 text-white' />
                        </span>
                      )}
                      {presenter.socialLinks.twitter && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(presenter.socialLinks!.twitter, '_blank');
                          }}
                          className='p-1.5 rounded-full bg-white/10 hover:bg-sky-500 transition-colors duration-200 cursor-pointer'
                        >
                          <IconX className='h-3.5 w-3.5 text-white' />
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom glow bar on hover */}
                <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2295e2] to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Presenters;
