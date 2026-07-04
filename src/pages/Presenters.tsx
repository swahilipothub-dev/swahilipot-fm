import { Link } from 'react-router-dom';
import { presenters } from '@/data/presentersData';
import { allShows, getCurrentShow, Show } from '@/data/scheduleData';

const Presenters = () => {
  return (
    <div className='relative overflow-hidden min-h-screen'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        src='/motion/logo.mp4'
        autoPlay
        muted
        loop
        playsInline
      />
      <div className='absolute inset-0 bg-black/60' />

      <div className='relative z-10 container mx-auto px-4 py-16'>
        {/* Header Section */}
        <div className='mb-16 text-center'>
          <p className='text-sm font-semibold text-white/80 mb-4 tracking-widest uppercase'>
            WE ARE FEW
          </p>
          <h1 className='text-5xl md:text-6xl font-display font-bold mb-6 text-white'>
            <span className='text-blue-300'>Our Presenters</span>
          </h1>
          <p className='text-lg text-white/80 max-w-2xl mx-auto'>
            Meet the voices and personalities that bring Swahilipot FM to life
            every day
          </p>
        </div>

        {/* Presenters Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {presenters.map((presenter) => {
            const presenterShows = (presenter.showIds || [])
              .map((id) => allShows.find((show) => show.id === id))
              .filter((show): show is Show => Boolean(show));
            const currentShow = getCurrentShow();
            const presenterShow =
              currentShow &&
              presenterShows.some((show) => show.id === currentShow.id)
                ? currentShow
                : presenterShows[0] || null;

            return (
              <div
                key={presenter.id}
                className='group scroll-animation overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
              >
                <div className='relative h-96 overflow-hidden'>
                  <img
                    src={
                      presenter.image
                        ? presenter.image
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(presenter.name)}&background=2295e2&color=fff&size=640`
                    }
                    alt={presenter.name}
                    className='absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105'
                    loading='eager'
                    fetchPriority='high'
                    decoding='async'
                    width={640}
                    height={640}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent' />
                  <div className='absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white'>
                    {presenter.role}
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent'>
                    <h3 className='text-2xl font-semibold text-white'>
                      {presenter.name}
                    </h3>
                  </div>
                </div>

                <div className='px-6 py-6 bg-slate-950/80'>
                  {presenterShow ? (
                    <div className='mb-5 rounded-3xl border border-white/10 bg-black/60 p-4 text-left'>
                      <p className='text-sm font-semibold text-white'>Show</p>
                      <p className='mt-2 text-lg font-semibold text-white'>
                        {presenterShow.title}
                      </p>
                      <p className='text-sm text-slate-300'>
                        Host: {presenterShow.host}
                      </p>
                      <p className='text-sm text-slate-500 mt-1'>
                        {presenterShow.startTime} — {presenterShow.endTime}
                      </p>
                    </div>
                  ) : null}
                  <Link
                    to={`/presenters/${presenter.id}`}
                    className='inline-flex items-center justify-center rounded-full bg-[#2295e2] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f78c4]'
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Presenters;
