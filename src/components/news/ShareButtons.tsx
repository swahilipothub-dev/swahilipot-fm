import { useState } from 'react';
import { Check, Link2, Mail } from 'lucide-react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

interface ShareButtonsProps {
  title: string;
  url: string;
}

const openPopup = (href: string) =>
  window.open(href, '_blank', 'noopener,noreferrer,width=600,height=540');

/**
 * Floating share panel: a vertical rail beside the article on desktop,
 * a floating pill above the audio player on mobile.
 */
export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actions = [
    {
      label: 'Share on Facebook',
      icon: <FaFacebookF className='h-4 w-4' />,
      onClick: () =>
        openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`),
    },
    {
      label: 'Share on LinkedIn',
      icon: <FaLinkedinIn className='h-4 w-4' />,
      onClick: () =>
        openPopup(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        ),
    },
    {
      label: 'Share on WhatsApp',
      icon: <FaWhatsapp className='h-4 w-4' />,
      onClick: () =>
        openPopup(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`),
    },
    {
      label: 'Share on X',
      icon: <FaXTwitter className='h-4 w-4' />,
      onClick: () =>
        openPopup(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        ),
    },
    {
      label: 'Email this story',
      icon: <Mail className='h-4 w-4' />,
      onClick: () => {
        window.location.href = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
      },
    },
    {
      label: copied ? 'Link copied' : 'Copy link',
      icon: copied ? (
        <Check className='h-4 w-4 text-green-500' />
      ) : (
        <Link2 className='h-4 w-4' />
      ),
      onClick: copyLink,
    },
  ];

  const buttonClass =
    'flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00aeef] hover:text-[#00aeef] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00aeef]';

  return (
    <>
      {/* Desktop: vertical rail beside the article */}
      <div
        className='absolute -left-24 top-0 bottom-0 hidden w-12 justify-center lg:flex'
        aria-label='Share this story'
      >
        <div className='sticky top-32 flex h-fit flex-col gap-2.5'>
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              aria-label={action.label}
              title={action.label}
              className={`${buttonClass} h-10 w-10`}
            >
              {action.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: floating pill above the audio player */}
      <div
        className='fixed bottom-24 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur lg:hidden'
        aria-label='Share this story'
      >
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            aria-label={action.label}
            className='flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#00aeef]'
          >
            {action.icon}
          </button>
        ))}
      </div>
    </>
  );
};
