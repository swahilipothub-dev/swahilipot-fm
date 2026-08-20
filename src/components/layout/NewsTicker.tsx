import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { SWAHILIPOT_SOCIALS } from '@/data/socialLinks';

const ARTICLE_PATH = '/news/piw-2026-global-partnerships-launch';

const TICKER_ITEMS = [
  'Swahilipot Hub unveils the 7th Pwani Innovation Week at a high-level breakfast in Nairobi',
  'PIW 2026: 26th to 31st October, Mombasa',
  '12,000 young people trained across Kwale, Kilifi and Mombasa',
  'Celebrating 10 years of Swahilipot',
  '#PIW2026',
];

const SOCIALS = [
  { icon: FaYoutube, href: SWAHILIPOT_SOCIALS.youtube, label: 'YouTube' },
  { icon: FaXTwitter, href: SWAHILIPOT_SOCIALS.x, label: 'X' },
  { icon: FaInstagram, href: SWAHILIPOT_SOCIALS.instagram, label: 'Instagram' },
  { icon: FaFacebook, href: SWAHILIPOT_SOCIALS.facebook, label: 'Facebook' },
  {
    icon: FaWhatsapp,
    href: SWAHILIPOT_SOCIALS.whatsapp,
    label: 'WhatsApp Channel',
  },
];

const NewsTicker = () => (
  <div
    className='news-ticker relative flex w-full items-stretch bg-[#1b1f68] text-white overflow-hidden border-b border-white/10'
    role='region'
    aria-label='Pwani Innovation Week news'
  >
    {/* Fixed label */}
    <div className='flex items-center gap-2 bg-[#f28c00] px-3 md:px-4 shrink-0 z-10'>
      <span className='relative flex h-2 w-2'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70' />
        <span className='relative inline-flex h-2 w-2 rounded-full bg-white' />
      </span>
      <span className='text-[11px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap'>
        PIW 2026
      </span>
    </div>

    {/* Scrolling strip */}
    <div className='relative flex-1 overflow-hidden'>
      <div className='animate-news-ticker flex w-max items-center'>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className='flex items-center'
            aria-hidden={copy === 1}
          >
            {TICKER_ITEMS.map((item, i) => (
              <span key={`${copy}-${i}`} className='flex items-center'>
                <Link
                  to={ARTICLE_PATH}
                  className='whitespace-nowrap py-2 text-xs md:text-sm text-white/90 hover:text-white transition-colors'
                  tabIndex={copy === 1 ? -1 : 0}
                >
                  {item}
                </Link>
                <span className='px-5 text-[#f28c00] text-[9px]' aria-hidden>
                  ●
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Official socials */}
    <div className='hidden md:flex items-center gap-3 px-4 border-l border-white/15 shrink-0 z-10'>
      {SOCIALS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Swahilipot FM on ${label}`}
          className='text-white/70 hover:text-[#f28c00] transition-colors'
        >
          <Icon className='h-3.5 w-3.5' />
        </a>
      ))}
    </div>
  </div>
);

export default NewsTicker;
