import Footer from '@/components/Footer';
import Hero from '@/pages/hero';
import Header from '../components/header';
import ContactSection from './Contactsection'; 

const Home = () => {
  return (
    <section className="content-space-t-7">
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

    </section>
  );
}

export default Home;
