import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import Header from './Header';
import NewsTicker from './NewsTicker';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className='min-h-screen flex flex-col bg-white text-black'>
      <div className='sticky top-0 z-50 w-full'>
        <Header />
        <NewsTicker />
      </div>
      <main className='flex-1 pb-10 main-content'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <AudioPlayer />
    </div>
  );
};

export default Layout;
