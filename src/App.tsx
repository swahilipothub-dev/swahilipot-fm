import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';
import Live from './pages/Live';
import Presenters from './pages/Presenters';
import PresenterDetail from './pages/PresenterDetail';
import MusicSurveyForm from '@/pages/MusicSurveyForm.tsx';
import ComplaintsPage from './pages/Complaints';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import AuthorProfile from './pages/AuthorProfile';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Swahilipot FM</title>
      <meta
        name='description'
        content='Swahilipot FM delivers live radio, news, music, and community stories from the Kenyan Coast.'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=5'
      />
      <meta property='og:title' content='Swahilipot FM' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/og-image.png' />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode='wait'>
            <Layout>
              <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/live' element={<Live />} />
                <Route path='/presenters' element={<Presenters />} />
                <Route path='/presenters/:id' element={<PresenterDetail />} />
                <Route path='/survey-form' element={<MusicSurveyForm />} />
                <Route path='/complaints' element={<ComplaintsPage />} />
                <Route path='/news' element={<News />} />
                <Route path='/news/authors/:slug' element={<AuthorProfile />} />
                <Route path='/news/:slug' element={<NewsDetail />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Layout>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
