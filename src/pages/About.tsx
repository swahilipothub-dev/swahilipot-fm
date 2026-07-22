import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Music, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className='flex flex-col gap-20 pb-24'>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <video
          className='absolute inset-0 h-full w-full object-cover'
          src='/motion/logo.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative container mx-auto px-4 md:px-6 py-16 md:py-24'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center'>
            <div className='flex-1 space-y-6 text-white'>
              <div className='inline-block px-3 py-1 bg-[#271d73] text-white text-xs font-medium rounded-full mb-2'>
                About Swahilipot FM
              </div>
              <h1 className='font-display text-4xl md:text-5xl font-bold'>
                The Voice of Your Community
              </h1>
              <p className='text-lg text-white/90'>
                Swahilipot FM empowers youth by providing a platform for diverse
                voices, fostering community engagement, and nurturing talent
                through mentorship.
              </p>
              <Button
                asChild
                className='rounded-full bg-[#271d73] text-white hover:bg-[#2295e2]'
              >
                <Link to='/contact'>
                  Connect with us <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
            <div className='flex-1 relative'>
              <div className='aspect-[4/3] rounded-2xl overflow-hidden'>
                <img
                  src='/studio/studio-mixer.png'
                  alt='Radio Studio'
                  className='w-full h-full object-cover'
                  loading='lazy'
                  decoding='async'
                />
              </div>

              {/* Floating stats */}
              <div className='absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-sm border border-white/20'>
                <div className='flex gap-4'>
                  <div className='text-center'>
                    <p className='text-3xl font-bold'>24/7</p>
                    <p className='text-xs text-gray-600'>Broadcast</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-3xl font-bold'>2k+</p>
                    <p className='text-xs text-gray-600'>Listeners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='container mx-auto px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
            <div className='relative'>
              <div className='rounded-2xl overflow-hidden shadow-lg'>
                <img
                  src='/studio/spfm_about.jpg'
                  alt='Radio History'
                  className='w-full aspect-[4/3] object-cover'
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <div className='absolute -bottom-8 -right-4 w-32 h-32 rounded-full bg-[#2295e2] p-3'>
                <div className='w-full h-full rounded-full border-4 border-white flex items-center justify-center text-white'>
                  <div className='text-center'>
                    <p className='text-xl font-bold'>EST.</p>
                    <p className='text-2xl font-bold'>2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <h2 className='font-display text-3xl font-bold'>Our Story</h2>
              <p className='text-gray-600'>
                At Swahilipot FM, we believe in the power of young voices. Our
                station is a dynamic, vibrant platform designed by youth, for
                youth, to inspire, entertain, and inform. We cater to a diverse
                audience, bringing fresh perspectives on music, culture, social
                issues, and more.
              </p>
              <p className='text-gray-600'>
                Our mission at Swahilipot Radio Station is to empower young
                voices by providing a platform for creative expression,
                education, and community engagement. We strive to nurture the
                talents of young individuals, providing a space where they can
                express themselves freely and creatively. We aim to foster a
                sense of community, encourage dialogue on important issues, and
                celebrate the talents and achievements of youth from all
                backgrounds.
              </p>
              <p className='text-gray-600'>
                Our vision is to empower the next generation's voice, our youth
                online radio station serves a vibrant hub where creativity,
                expression and innovation converge. Picture a digital stage
                where young talent shines, ideas flourish and perspectives
                collide in a symphony of energy and enthusiasm. Through curated
                playlists, dynamic discussions, and interactive programming, we
                cultivate a community where every voice is heard, every story is
                valued, and every dream is amplified. Together we shape the
                soundtrack of tomorrow, inspiring and empowering youth to make
                waves and spark change in their world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className='bg-gray-50 py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='font-display text-3xl md:text-4xl font-bold mb-4'>
                Our Values
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                At the core of everything we do are these fundamental principles
                that guide our work.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white'>
                  <Award className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Quality</h3>
                <p className='text-gray-600'>
                  We are committed to excellence in everything we produce, from
                  our broadcasts to our events.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white'>
                  <Users className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Community</h3>
                <p className='text-gray-600'>
                  We believe in the power of radio to bring people together and
                  strengthen community bonds.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white'>
                  <Music className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Diversity</h3>
                <p className='text-gray-600'>
                  We celebrate a wide range of voices, perspectives, and musical
                  expressions.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white'>
                  <Star className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Creativity</h3>
                <p className='text-gray-600'>
                  We embrace new and different styles of art while honoring
                  radio's rich traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-[#271d73] text-white'>
        <div className='container mx-auto px-4 md:px-6 py-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-6'>
              Join the Swahilipot FM Community
            </h2>
            <p className='text-lg text-gray-300 mb-8'>
              Whether you're a listener, advertiser, or potential team member,
              we'd love to connect with you.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                size='lg'
                className='rounded-full font-medium bg-white text-black hover:bg-gray-100 h-12 px-8'
              >
                <Link to='/contact'>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
