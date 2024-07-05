import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import ContactSection from './Contactsection';
import UpcomingEvents from '../components/UpcomingEvents';


const NewsPage = () => {
    return (
           <section className="content-space-t-1">
            <Header />

            <main className="content">

  {/* Blog */}

  <div className="container content-space-1">

    {/* Heading */}
    <div className="w-lg-65 text-center mx-lg-auto mb-7">
      <h3>What&apos;s New at Swahilipot FM</h3>
      <p className="fs-5">
      Welcome to Swahilipot FM news portal! Stay updated with the latest news across various categories.
      </p>
    </div>
    {/* End Heading */}
    <div className="row mb-5 mb-sm-5">
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <div className="card h-100 p-2">
          <img
            className="card-img"
            src="../assets/img/600x400/img2.jpg"
            alt="Image Description"
          />
          <div className="card-body">
            <h5 className="card-title">Education</h5>
            <p className="card-text">
            KUCCPS has opened the portal for 2024 KCSE students to change their institutions they were placed in. According to the placement service, applicants will also be able to make changes to the options of courses
            they had chosen earlier as long as they meet the cut off points and the institutions, they are applying to allow it.
            </p>
            <a className="card-link" href="#">
              Get More News  <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <div className="card h-100 p-2">
          <img
            className="card-img"
            src="../assets/img/600x400/img1.jpg"
            alt="Image Description"
          />
          <div className="card-body">
            <h5 className="card-title">Politics</h5>
            <p className="card-text">
            Mtoeni apo basi! The deputy president has been under sharp criticism over his calls for Mt Kenya unity.
            His juniors within the governing Kenya Kwanza coalition have been castigating him for what they argued was advancing politics of ethnicity.
            They have now been invited to the challenge of impeaching him if they deem him unfit to be the deputy president.
            </p>
            <a className="card-link" href="#">
              Get More News  <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <div className="card h-100 p-2">
          <img
            className="card-img"
            src="../assets/img/600x400/img3.jpg"
            alt="Image Description"
          />
          <div className="card-body">
            <h5 className="card-title">Sports</h5>
            <p className="card-text">
            𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋: Ballon d’Or ceremony will take place on the 28th of October this year… and it will be at the Théâtre du Châtelet in Paris! ✨
            𝐖𝐡𝐨 𝐝𝐞𝐬𝐞𝐫𝐯𝐞𝐬 𝐭𝐨 𝐰𝐢𝐧 𝐭𝐡𝐞 𝐁𝐚𝐥𝐥𝐨𝐧 𝐝’𝐎𝐫 𝐭𝐡𝐢𝐬 𝐲𝐞𝐚𝐫? 👀
            </p>
            <a className="card-link" href="#">
              Get More News <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* Info */}
    <div className="text-center">
      <p className="mb-0">Want to read more?</p>
      <a className="link" href="#">
        Explore Swahilipot FM News <i className="bi-chevron-right small ms-1" />
      </a>
    </div>
    {/* End Info */}
  </div>
  {/* End Blog */}
  <UpcomingEvents />
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
      `}</style>
</section>
    );
};

export default NewsPage;