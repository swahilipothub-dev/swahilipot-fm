import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if the link is active
  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className='container mx-auto px-4 md:px-6 flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2'>
            <img
              src='/logos/swahilipot-fm-300.png'
              alt='Swahilipot FM Logo'
              height={100}
              width={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-4'>
            <Link
              to='/'
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About Us
            </Link>
            <Link
              to='/presenters'
              className={`nav-link ${isActive('/presenters') ? 'active' : ''}`}
            >
              Presenters
            </Link>
            <Link
              to='/schedule'
              className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}
            >
              Schedule
            </Link>
            <Link
              to='/contact'
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
            <Link
              to='/complaints'
              className={`nav-link ${isActive('/complaints') ? 'active' : ''}`}
            >
              File a complaint
            </Link>
            <div className='flex gap-3'>
              <Link to='https://www.youtube.com/@swahilipotfm' target='_blank'>
                <FaYoutube className='text-[#2295e2] h-6 w-6' />
              </Link>
              <Link to='https://x.com/swahilipotfm' target='_blank'>
                <FaXTwitter className='text-[#2295e2] h-6 w-6' />
              </Link>
              <Link
                to='https://whatsapp.com/channel/0029Vap3gSq7z4kc8n1ECO0P'
                target='_blank'
              >
                <FaWhatsapp className='text-[#2295e2] h-6 w-6' />
              </Link>
              <Link
                to='https://www.instagram.com/swahilipotfm/'
                target='_blank'
              >
                <FaInstagram className='text-[#2295e2] h-6 w-6' />
              </Link>
              <Link
                to='https://www.facebook.com/profile.php?id=100093582650835'
                target='_blank'
              >
                <FaFacebook className='text-[#2295e2] h-6 w-6' />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-full transition-colors hover:bg-gray-100'
            onClick={toggleMobileMenu}
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>
      </header>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className='fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 px-4 py-8'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className='flex flex-col space-y-6'>
            <Link
              to='/'
              className={`text-2xl font-medium ${isActive('/') ? 'text-black' : 'text-gray-600'}`}
            >
              Home
            </Link>
            <Link
              to='/presenters'
              className={`text-2xl font-medium ${isActive('/contact') ? 'text-black' : 'text-gray-600'}`}
            >
              Presenters
            </Link>
            <Link
              to='/schedule'
              className={`text-2xl font-medium ${isActive('/schedule') ? 'text-black' : 'text-gray-600'}`}
            >
              Schedule
            </Link>
            <Link
              to='/about'
              className={`text-2xl font-medium ${isActive('/about') ? 'text-black' : 'text-gray-600'}`}
            >
              About Us
            </Link>
            <Link
              to='/contact'
              className={`text-2xl font-medium ${isActive('/contact') ? 'text-black' : 'text-gray-600'}`}
            >
              Contact Us
            </Link>
            <Link
              to='/complaints'
              className={`text-2xl font-medium ${isActive('/complaints') ? 'text-black' : 'text-gray-600'}`}
            >
              File a complaint
            </Link>
            <div className='flex flex-row gap-3'>
              <Link to='https://www.youtube.com/@swahilipotfm' target='_blank'>
                <FaYoutube className='h-6 w-6' />
              </Link>
              <Link to='https://x.com/swahilipotfm' target=''>
                <FaXTwitter className='h-6 w-6' />
              </Link>
              <Link
                to='https://whatsapp.com/channel/0029Vap3gSq7z4kc8n1ECO0P'
                target='_blank'
              >
                <FaWhatsapp className='h-6 w-6' />
              </Link>
              <Link
                to='https://www.instagram.com/swahilipotfm/'
                target='_blank'
              >
                <FaInstagram className='h-6 w-6' />
              </Link>
              <Link
                to='https://www.facebook.com/profile.php?id=100093582650835'
                target='_blank'
              >
                <FaFacebook className='h-6 w-6' />
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
