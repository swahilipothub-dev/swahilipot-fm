/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer';
import Hero from '@/pages/hero';
import Header from '@/components/Header';
import ContactSection from './Contactsection'; 
import FrequencyDetails from '../components/FrequencyDetails';

const Home = () => {
  return (
    <>
      <Header />
      <FrequencyDetails />


      <main id='content' role='main' className='main-content'>
        {/* Content */}
        <div className='content-wrapper'>
          <div className='content-column'>
            <Hero />
          </div>
        </div>
        {/* End Content */}
      </main>
      <ContactSection /> {/* Ensure this component is imported */}
      <FrequencyDetails />
      <Footer />
      <style jsx>{`
        body, html, #__next {
          margin: 0;
          padding: 0;
          min-height: 100%;
          display: flex;
          flex-direction: column;
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
          margin-top: 100px;
          padding: 0 1rem;
          box-sizing: border-box.
        }
        .content-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%.
        }
        footer {
          flex-shrink: 0.
        }
      `}</style>
    </>
  );
}

export default Home;

