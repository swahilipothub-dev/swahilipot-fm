import { useEffect } from 'react';
import type { ElementType } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Globe, Clock, Mic, Mail } from 'lucide-react';
import { getPresenterById } from '@/data/presentersData';
import { allShows, getCurrentShow } from '@/data/scheduleData';

const IconX = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

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

const IconLinkedIn = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const SocialLink = ({
  href,
  icon: Icon,
  label,
  hoverClass,
}: {
  href: string;
  icon: ElementType;
  label: string;
  hoverClass: string;
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={label}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${hoverClass}`}
  >
    <Icon className='h-4 w-4' />
    <span>{label}</span>
  </a>
);

const PresenterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const presenter = getPresenterById(id || '');

  useEffect(() => {
    if (!presenter) {
      navigate('/presenters');
    }
  }, [navigate, presenter]);

  if (!presenter) return null;

  const presenterShows = presenter.showIds
    ? allShows.filter((show) => presenter.showIds?.includes(show.id))
    : [];
  const currentShow = getCurrentShow();
  const isOnAir =
    currentShow && presenterShows.some((show) => show.id === currentShow.id);

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero */}
      <div className='relative min-h-[70vh] flex flex-col'>
        {/* Blurred background */}
        <div className='absolute inset-0 overflow-hidden'>
          {presenter.image ? (
            <img
              src={presenter.image}
              alt=''
              aria-hidden='true'
              className='w-full h-full object-cover scale-110 blur-2xl opacity-30'
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-[#2295e2]/20 to-black' />
          )}
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black' />
        </div>

        {/* Back button */}
        <div className='relative z-10 container mx-auto px-6 pt-8'>
          <button
            onClick={() => navigate(-1)}
            className='inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium group'
          >
            <ArrowLeft className='h-4 w-4 group-hover:-translate-x-1 transition-transform' />
            Back to Presenters
          </button>
        </div>

        {/* Hero content */}
        <div className='relative z-10 container mx-auto px-6 flex-1 flex items-end pb-16 pt-8'>
          <div className='flex flex-col md:flex-row items-end gap-8 w-full'>
            {/* Profile image */}
            <div className='relative flex-shrink-0 w-full md:w-72 lg:w-80'>
              <div className='w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-black/60 bg-slate-900/60'>
                {presenter.image ? (
                  <img
                    src={presenter.image}
                    alt={presenter.name}
                    className='w-full h-full object-contain'
                  />
                ) : (
                  <div className='w-full h-full bg-slate-800 flex items-center justify-center'>
                    <User className='h-20 w-20 text-slate-500' />
                  </div>
                )}
              </div>
              {isOnAir && (
                <div className='absolute -top-2 -right-2 flex items-center gap-1.5 bg-red-600 rounded-full px-3 py-1.5 shadow-lg'>
                  <span className='h-2 w-2 rounded-full bg-white animate-pulse' />
                  <span className='text-[11px] font-bold uppercase tracking-wider text-white'>
                    On Air
                  </span>
                </div>
              )}
            </div>

            {/* Name & meta */}
            <div className='flex-1'>
              <div className='inline-flex items-center gap-2 bg-[#2295e2]/15 border border-[#2295e2]/30 rounded-full px-4 py-1.5 mb-4'>
                <Mic className='h-3.5 w-3.5 text-[#2295e2]' />
                <span className='text-sm font-semibold text-[#2295e2] tracking-wide'>
                  {presenter.role}
                </span>
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4'>
                {presenter.name}
              </h1>

              <div className='flex flex-wrap gap-3 mb-6'>
                {presenterShows.length > 0 && (
                  <span className='inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/70'>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='h-3.5 w-3.5 text-[#2295e2]'>
                      <path d='M4.9 19.1C1 15.2 1 8.8 4.9 4.9' /><path d='M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5' /><circle cx='12' cy='12' r='2' /><path d='M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5' /><path d='M19.1 4.9C23 8.8 23 15.1 19.1 19' />
                    </svg>
                    {presenterShows.length} Show{presenterShows.length > 1 ? 's' : ''}
                  </span>
                )}
                {presenter.email && (
                  <a
                    href={`mailto:${presenter.email}`}
                    className='inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/70 hover:bg-white/20 transition-colors'
                  >
                    <Mail className='h-3.5 w-3.5 text-[#2295e2]' />
                    {presenter.email}
                  </a>
                )}
              </div>

              {presenter.socialLinks && (
                <div className='flex flex-wrap gap-2'>
                  {presenter.socialLinks.twitter && (
                    <SocialLink
                      href={presenter.socialLinks.twitter}
                      icon={IconX}
                      label='Twitter / X'
                      hoverClass='hover:bg-sky-500 hover:border-sky-500'
                    />
                  )}
                  {presenter.socialLinks.youtube && (
                    <SocialLink
                      href={presenter.socialLinks.youtube}
                      icon={IconYouTube}
                      label='YouTube'
                      hoverClass='hover:bg-red-600 hover:border-red-600'
                    />
                  )}
                  {presenter.socialLinks.instagram && (
                    <SocialLink
                      href={presenter.socialLinks.instagram}
                      icon={IconInstagram}
                      label='Instagram'
                      hoverClass='hover:bg-pink-600 hover:border-pink-600'
                    />
                  )}
                  {presenter.socialLinks.linkedin && (
                    <SocialLink
                      href={presenter.socialLinks.linkedin}
                      icon={IconLinkedIn}
                      label='LinkedIn'
                      hoverClass='hover:bg-blue-700 hover:border-blue-700'
                    />
                  )}
                  {presenter.socialLinks.website && (
                    <SocialLink
                      href={presenter.socialLinks.website}
                      icon={Globe}
                      label='Website'
                      hoverClass='hover:bg-emerald-600 hover:border-emerald-600'
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto space-y-12'>
          {/* About */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='h-8 w-1 bg-gradient-to-b from-[#2295e2] to-cyan-400 rounded-full' />
              <h2 className='text-2xl font-bold text-white'>About</h2>
            </div>
            <p className='text-white/70 text-lg leading-relaxed whitespace-pre-line'>
              {presenter.bio}
            </p>
          </div>

          {/* Shows */}
          {presenterShows.length > 0 && (
            <div>
              <div className='flex items-center gap-3 mb-8'>
                <div className='h-8 w-1 bg-gradient-to-b from-[#2295e2] to-cyan-400 rounded-full' />
                <h2 className='text-2xl font-bold text-white'>Shows</h2>
                <span className='ml-auto text-white/40 text-sm'>
                  {presenterShows.length} show{presenterShows.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className='grid gap-4'>
                {presenterShows.map((show) => {
                  const isCurrentShow = currentShow?.id === show.id;
                  return (
                    <div
                      key={show.id}
                      className={`relative flex gap-6 bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] ${
                        isCurrentShow
                          ? 'border-red-500/40'
                          : 'border-white/10 hover:border-[#2295e2]/30'
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 ${
                          isCurrentShow
                            ? 'bg-red-500'
                            : 'bg-gradient-to-b from-[#2295e2] to-cyan-400'
                        }`}
                      />
                      <div className='w-28 h-28 flex-shrink-0 ml-5 my-5 rounded-xl overflow-hidden'>
                        <img
                          src={show.image}
                          alt={show.title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex-1 py-5 pr-6'>
                        <div className='flex items-start justify-between gap-4 mb-1'>
                          <h3 className='text-xl font-bold text-white'>
                            {show.title}
                          </h3>
                          {isCurrentShow && (
                            <span className='flex-shrink-0 inline-flex items-center gap-1.5 bg-red-600/20 border border-red-500/30 rounded-full px-3 py-1 text-xs font-bold text-red-400 uppercase tracking-wider'>
                              <span className='h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse' />
                              Live Now
                            </span>
                          )}
                        </div>
                        <p className='text-white/50 text-sm mb-3 line-clamp-2'>
                          {show.description}
                        </p>
                        <div className='flex items-center gap-4'>
                          <span className='inline-flex items-center gap-1.5 text-xs text-white/40'>
                            <Clock className='h-3.5 w-3.5' />
                            {show.startTime} – {show.endTime}
                          </span>
                          <Link
                            to='/schedule'
                            className='text-xs font-semibold text-[#2295e2] hover:underline'
                          >
                            View Schedule →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PresenterDetail;
