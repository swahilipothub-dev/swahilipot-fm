import Footer from '@/components/Footer'
import Hero from '@/pages/hero'
import Header from '@/components/Header'
import ContactSection from './Contactsection'
import VideoPlayer from '@/components/VideoPlayer'

const Home = () => {
  return (
    <section className='content-space-t-7'>
      <Header />
      <main
        id='content'
        role='main'
        className='main-content'
      >
        <div className='content-wrapper'>
          <div className='content-column'>
            <Hero />
            <VideoPlayer />
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </section>
  )
}

export default Home
