import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

const queryClient = new QueryClient();

const App = () => (
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
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
