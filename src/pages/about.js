import React from 'react';
import Header from "./header";
import Footer from "./footer";
import ContactSection from './Contactsection';

const About = () => (
    <>
    <Header />
    <main className="content">
      {/* Content */}
      <div className="container content-space-1 content-space-md-2">
        {/* Card */}
        <div className="card card-lg">
          {/* Header */}
  
          <div className="card-header bg-primary-dark position-relative overflow-hidden">
            <h1 className="card-title h2 text-white">Swahilipot FM</h1>
            <p className="card-text text-white">
              Frequency @ 91.7 fm (sauti ya vijana)
            </p>
          </div>
          
          {/* End Header */}
          {/* Card Body */}
        </div>
      </div>
    {/* Description */}
    <div className="container content-space-0">
      <div className="w-lg-75 mx-lg-auto">
        <div className="row">
          <div className="col-sm-4 mb-5">
            {/* Info */}
            <div className="me-sm-3">
              <h3 className="text-primary">75%</h3>
              <p className="mb-0">motivates the youths</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-5">
            {/* Info */}
            <div className="me-sm-3">
              <h3 className="text-primary">95%</h3>
              <p className="mb-0">are youth listeners</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
          <div className="col-sm-4 mb-5">
            {/* Info */}
            <div className="me-sm-3">
              <h3 className="text-primary">24 hours</h3>
              <p className="mb-0">
                station running online
              </p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
    {/* End Description */}
    </div>
          <div className="my-5">
          <img
            className="img-fluid"
            src="../assets/img/900x600/img1.jpg"
            alt="Image Description"
           />
          </div>
          <div className="card-body">
            <div className="mb-7">
              <h4>Introduction</h4>
              <p>
                At Swahilipot FM , we believe in the power of young voices. Our station is a dynamic , vibrant platform
                designed by youth , for youth , to inspire , entertain , and inform. We cater to a diverse audience ,
                bringing fresh perspectives on music , culture , social issues and more. 
              </p>
            </div>
            <div className="mb-7">
              <h4>Our Mission</h4>
              <p>
                Our mission at Swahilipot Radio Station is to empower young voices by providing a platform for creative 
                expression , education and community engagement. We strive to nature the talents of young individuals , 
                providing a space where they can express themselves freely and creatively. We aim to forster a sense of
                community , encourage dialogue on important issues , and celebrate the talents and achievements of youth
                from all backgrounds.
              </p> 
            </div>
            <div className="mb-7">
              <h4>Our Vision</h4>
              <p>
                Our vision is to empower the next generation&apos;s voice, our youth online radio station serves a vibrant hub
                where creativity, expression and innovation converge. Picture a digital stage where young talent shines,
                ideas florish and perspectives collide in a symphony of energy and enthusiasm. Through currated playlists,
                dynamic discussions, and interactive programming , we cultivate a community where every voice is heard,
                every story is valued,  and every dream is amplified. Together we shape the sioundtrack of tomorrow, 
                inspiring and empowering youth to make waves and spark change in their world.
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
              <h4>History and Background</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or
                receive content. You retain ownership of any intellectual property
                rights that you hold in that content. In short, what belongs to
                you stays yours.
              </p>
              <div className="mb-7">
              <h4>Team and Contributors</h4>
              <p>
              This online youth radio station has a diverse team of professionals, volunteers, 
              and interns, all dedicated to creating engaging content.They work tirelessly to 
              ensure smooth operations and high-quality programming.Their diverse talents enrich 
              the station&apos;s offerings, fostering a vibrant community atmosphere and generating 
              dynamic shows, interviews, and music playlists. 
              </p>
              <div className="mb-7"></div>
              <h4>Programming</h4>
              <p>
              Swahilipot FM radio station might offer a variety of programs catering
              to its target audience. Here are some potential program ideas:
              </p>
              </div> 
    {/* Card */}
    <div className="container content-space-1">
      <div className="w-lg-75 mx-lg-auto">
        {/* Heading */}
        <div className="text-center mb-7">
          <h3>Programs of Swahilipot FM</h3>
        </div>
        {/* End Heading */}
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-4">
            {/* Card */}
            <a
              className="card card-transition card-bordered shadow-none h-100"
            >
              <div className="card-body">
                <h6 className="card-title">Music Shows:</h6>
                <li>Top 40 Countdown.</li>
                <li>Genre-specific shows (pop, rock, hip-hop, etc.)</li>
                <li>Underground/Indie Music Spotlight.</li>
                <li>DJ Mixes and Mashups.</li>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4 mb-4">
            {/* Card */}
            <a
              className="card card-transition card-bordered shadow-none h-100"
            >
              <div className="card-body">
                <h6 className="card-title">Talk Shows:</h6>
                <li>Language Learning Sessions.</li>
                <li>Interviews with young artists, activists, entrepreneurs, etc.</li>
                <li>Current Events and News Analysis from a youth perspective.</li>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4 mb-4">
            {/* Card */}
            <a
              className="card card-transition card-bordered shadow-none h-100"
            >
              <div className="card-body">
                <h6 className="card-title">Educational Programs:</h6>
                <li>Language Learning Sessions.</li>
                <li>Science and Technology Updates.</li>
                <li>Career Guidance and Skill Development Workshops.</li>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4 mb-4 ">
            {/* Card */}
            <a
              className="card card-transition card-bordered shadow-none h-100"
            >
              <div className="card-body">
                <h6 className="card-title">Entertainment:</h6>
                <li>Movie Reviews and Discussions.</li>
                <li>Book Club Discussions.</li>
                <li>Gaming News and Reviews.</li>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4 mb-4 ">
            {/* Card */}
            <a
              className="card card-transition card-bordered shadow-none h-100"
            >
              <div className="card-body">
                <h6 className="card-title">Youth Culture:</h6>
                <li>Fashion and Style Trends.</li>
                <li>Youth Lifestyle and Wellness Tips.</li>
                <li>Social Media Trends and Influencer Spotlights.</li>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4 mb-4">
            {/* Card */}
            <a
              className="card card-transition card-bordered shadow-none h-100"
            >
              <div className="card-body">
                <h6 className="card-title">Creative Expression:</h6>
                <li>Poetry Readings and Open Mic Sessions.</li>
                <li>Storytelling and Narrative Shows.</li>
                <li>Creative Writing Workshops.</li>
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
                <h6 className="card-title">Community Engagement:</h6>
                <li>Local Events and Activities Coverage.</li>
                <li>Volunteer Opportunities and Community Service Spotlights.</li>
                <li>listener Call-ins and Interaction Segments.</li>
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
                <h6 className="card-title">Interactive Shows:</h6>
                <li>Quizzes and Trivia Games.</li>
                <li>Polls and Surveys on Youth Topics.</li>
                <li>Challenges and Competitions (e.g talent shows, art competition).</li>
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
                <li>Mental Health Awareness Discussions.</li>
                <li>Fitness and Nutrition Tips.</li>
                <li>Yoga and Meditation Sessions.</li>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>  
    </div>
    {/* End Card */}
        
              <p>These programs can be tailored to suit the interests and needs
                 of the station&apos;ion effectively engaged with its community
              through active social media, organizing local events, offering internships,
              and prioritizing listener-driven content. This approach fostered face-to-face
              connections, strengthened bonds, and empowered youth voices, fostering a sense
              of belonging and ownership among its listeners.
              </p>
              </div>
            <div className="mb-7">
            <h4>Values and Philosophy</h4>
              <p>
              Swahilipot FM radio station embraces values rooted in empowerment, inclusivity, 
              and creativity. Its philosophy revolves around providing a platform where young voices 
              can flourish and be heard, regardless of background or experience. The station prioritizes
              authenticity, valuing diverse perspectives and encouraging expression in all forms, from music
              to spoken word. It champions community engagement, seeking to build connections and inspire 
              positive change through its programming and outreach efforts. Additionally, the station fosters 
              a culture of learning and growth, nurturing talent through mentorship and providing opportunities 
              for skill development. Ultimately, the station strives to be a beacon of inspiration and empowerment, 
              empowering youth to shape their narratives and make meaningful contributions to the world around them.
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
            src="../assets/img/900x600/img3.jpg"
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
              Additionally, the station support local talent, thereby fostering creativity, 
              empowerment, and positive change within its community.
                </p>
            </div>
            <div className="mb-7">
            <h4>Legal Information</h4>
              <p>
                Swahilipot FM youth radio station adheres to copyright laws, broadcasting regulations, 
              data protection, journalistic integrity, and labor laws to operate ethically and sustainably. 
              The station obtains necessary permits, safeguard listener information, uphold journalistic integrity, 
              and protect minors&apos; rights and safety. By staying vigilant, the station can minimize risks and 
              ensure sustainable operations.
              </p>
            </div>
            <div className="mb-7">
            <h4>Contact Information</h4>
              <p>
              The Swahilipot FM youth radio station offer convenient communication channels through email addresses, 
              social media profiles, dedicated phone lines, and application forms. It also provide contact 
              information for relevant departments, allowing individuals to connect with the station and join 
              its vibrant community of young broadcasters and enthusiasts.
              </p>
            </div> 
          </div>
          {/* End Card Body */}
        </div>
        {/* End Card */}
      {/* End Content */}
      </main>
      <ContactSection />
    <Footer />
    <style jsx>{`
        .content {
          padding-top: 100px; /* Adjust this value according to your header height */
          padding-bottom: 60px; /* Adjust this value according to your footer height */
          min-height: 100vh; /* Ensures the content area takes up at least the full height of the viewport */
          box-sizing: border-box;
        }
      `}
      </style> 
    </>
  );
  
  export default About ;

