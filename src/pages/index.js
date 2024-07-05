import Footer from '@/components/Footer';
import Hero from '@/pages/hero';
import Header from '@/components/Header';
import ContactSection from './Contactsection'; 
import FrequencyDetails from '../components/FrequencyDetails';

const Home = () => {
  return (
    <section className="content-space-t-4">
      <Header />
      
      <main id='content' role='main' className='main-content'>
        <div className='content-wrapper'>
          <div className='content-column'>
            <Hero />
            {/* Include other content components here */}
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />

      <style jsx>{`
        body, html, #__next {
          margin: 0;
          padding: 0;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between; /* Ensure footer stays at bottom */
        }
        #__next {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        header {
          flex-shrink: 0;
        }
        .main-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          box-sizing: border-box;
        }
        .content-wrapper {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto; /* Center content horizontally */
          padding: 0 1rem;
          box-sizing: border-box;
        }
        .content-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        footer {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}

export default Home;
