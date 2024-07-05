import React from 'react';
import Header from '@/components/header';
import Footer from "../components/footer";
import ContactSection from './Contactsection';
import FrequencyDetails from '../components/FrequencyDetails';
import style from '../components/FrequencyDetails.module.css'

const About = () => (
  <section className="content-space-t-4">
    <Header />

    <main className="content">
      <div className="container content-space-1 content-space-md-2">
        <div className="card card-lg">
          <div className="card-header bg-info position-relative overflow-hidden">
            <h1 className="card-title h2 text-white">Swahilipot FM</h1>
            <p className="card-text text-white">
              <FrequencyDetails />
            </p>
          </div>
          <div className="card-body">
            <div className="mb-7">
              <h4>Introduction</h4>
              <p>
                At Swahilipot FM, we believe in the power of young voices. Our station is a dynamic, vibrant platform designed by youth, for youth, to inspire, entertain, and inform. We cater to a diverse audience, bringing fresh perspectives on music, culture, social issues, and more.
              </p>
            </div>
            <div className="mb-7">
              <h4>Our Mission</h4>
              <p>
                Our mission at Swahilipot Radio Station is to empower young voices by providing a platform for creative expression, education, and community engagement. We strive to nurture the talents of young individuals, providing a space where they can express themselves freely and creatively. We aim to foster a sense of community, encourage dialogue on important issues, and celebrate the talents and achievements of youth from all backgrounds.
              </p>
            </div>
            <div className="mb-7">
              <h4>Our Vision</h4>
              <p>
                Our vision is to empower the next generation&apos;s voice, our youth online radio station serves a vibrant hub
                where creativity, expression and innovation converge. Picture a digital stage where young talent shines,
                ideas flourish and perspectives collide in a symphony of energy and enthusiasm. Through curated playlists,
                dynamic discussions, and interactive programming, we cultivate a community where every voice is heard,
                every story is valued, and every dream is amplified. Together we shape the soundtrack of tomorrow,
                inspiring and empowering youth to make waves and spark change in their world.
              </p>
            </div>
            <div className="my-5">
              <img
                className="img-fluid"
                src="../assets/img/900x600/img1.jpg"
                alt="Image Description"
              />
            </div>
            <div className="mb-7">
              <h4>History and Background</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.
              </p>
            </div>
            <div className="mb-7">
              <h4>Team and Contributors</h4>
              <p>
                This online youth radio station has a diverse team of professionals, volunteers,
                and interns, all dedicated to creating engaging content. They work tirelessly to
                ensure smooth operations and high-quality programming. Their diverse talents enrich
                the station&apos;s offerings, fostering a vibrant community atmosphere and generating
                dynamic shows, interviews, and music playlists.
              </p>
            </div>
            <div className="mb-7">
              <h4>Programming</h4>
              <p>
                Swahilipot FM radio station offers a variety of programs catering to its target audience. Here are some potential program ideas:
              </p>
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4">
              {/* Card */}
              <a
                className="card card-transition card-bordered shadow-none h-100"
              >
                <div className="card-body">
                  <h6 className="card-title">Interactive Shows:</h6>
                  <ul>
                    <li>Quizzes and Trivia Games.</li>
                    <li>Polls and Surveys on Youth Topics.</li>
                    <li>Challenges and Competitions (e.g talent shows, art competition).</li>
                  </ul>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4">
              {/* Card */}
              <a
                className="card card-transition card-bordered shadow-none h-100"
              >
                <div className="card-body">
                  <h6 className="card-title">Health and Wellness:</h6>
                  <ul>
                    <li>Mental Health Awareness Discussions.</li>
                    <li>Fitness and Nutrition Tips.</li>
                    <li>Yoga and Meditation Sessions.</li>
                  </ul>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Card */}
        <p>
          These programs can be tailored to suit the interests and needs
          of the station&apos;s community effectively engaged with its community
          through active social media, organizing local events, offering internships,
          and prioritizing listener-driven content. This approach fosters face-to-face
          connections, strengthens bonds, and empowers youth voices, fostering a sense
          of belonging and ownership among its listeners.
        </p>
      </div>
      <div className="mb-7">
        <h4>Values and Philosophy</h4>
        <p>
          Swahilipot FM radio station embraces values rooted in empowerment, inclusivity, and creativity. Its philosophy revolves around providing a platform where young voices can flourish and be heard, regardless of background or experience. The station prioritizes authenticity, valuing diverse perspectives and encouraging expression in all forms, from music to spoken word. It champions community engagement, seeking to build connections and inspire positive change through its programming and outreach efforts. Additionally, the station fosters a culture of learning and growth, nurturing talent through mentorship and providing opportunities for skill development. Ultimately, the station strives to be a beacon of inspiration and empowerment, empowering youth to shape their narratives and make meaningful contributions to the world around them.
        </p>
      </div>
      <div className="mb-7">
        <h4>How to Get Involved</h4>
        <p>
          Engaging with an online youth radio station offers a chance for young enthusiasts to channel their passion
          for broadcasting and community engagement. Opportunities include volunteering, internships, content contributions,
          attending events, offering technical assistance, and aspiring hosts or DJs. By actively participating and demonstrating
          dedication, individuals can become integral members of the station&apos;s team and contribute to its vibrant community.
        </p>
      </div>
      <div className="my-5">
        <img
          className="img-fluid"
          src="../assets/img/900x600/img2.jpg"
          alt="Image Description"
        />
      </div>
      <div className="mb-7">
        <h4>Testimonials and Feedback</h4>
        <p>
          The online youth radio station is praised for its inclusive programming,
          community engagement, and impact on personal growth and skill development.
          Testimonials frequently highlight the station&apos;s impact on personal growth
          and skill development, with volunteers and interns expressing gratitude for
          the hands-on learning experiences and mentorship opportunities provided.
          Additionally, the station supports local talent, thereby fostering creativity,
          empowerment, and positive change within its community.
        </p>
      </div>
      <div className="mb-7">
        <h4>Legal Information</h4>
        <p>
          Swahilipot FM youth radio station adheres to copyright laws, broadcasting regulations,
          data protection, journalistic integrity, and labor laws to operate ethically and sustainably.
          The station obtains necessary permits, safeguards listener information, upholds journalistic integrity,
          and protects minors&apos; rights and safety. By staying vigilant, the station can minimize risks and
          ensure sustainable operations.
        </p>
      </div>
      <div className="mb-7">
        <h4>Contact Information</h4>
        <p>
          Swahilipot FM youth radio station offers convenient communication channels through email addresses, social media profiles, dedicated phone lines, and application forms. It also provides contact information for relevant departments, allowing individuals to connect with the station and join its vibrant community of young broadcasters and enthusiasts.
        </p>
      </div>
    </main>
    <ContactSection />
    <Footer />
  </section>
);

export default About;

