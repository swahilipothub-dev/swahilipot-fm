import React from 'react';
import Header from '@/components/Header';
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
                    {/*<img
                      className="card-img"
                      src="../assets/img/600x400/img2.jpg"
                      alt="Image Description"
                    />*/}
                    <div className="card-body">
                      <h5 className="card-title">Education</h5>
                      <p className="card-text">
                        Find the latest Education news on Swahilipot FM
                      </p>
                      <a className="card-link" href="#">
                        Get More News  <i className="bi-chevron-right small ms-1" />
                      </a>
                    </div>
                  </div>
                {/* End Card */}
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
                  <div className="card h-100 p-2">
                    {/*<img
                      className="card-img"
                      src="../assets/img/600x400/img1.jpg"
                      alt="Image Description"
                    />*/}
                    <div className="card-body">
                      <h5 className="card-title">Politics</h5>
                      <p className="card-text">
                        Find the latest politics news right here on Swahilipot FM
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
                    {/*<img
                      className="card-img"
                      src="../assets/img/0V6A4434.jpg"
                      alt="Image Description"
                    />*/}
                    <div className="card-body">
                      <h5 className="card-title">Sports</h5>
                      <p className="card-text">
                        Find the latest Sports news here on Swahilipot FM
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
              {/* Info 
              <div className="text-center">
                <p className="mb-0">Want to read more?</p>
                <a className="link" href="#">
                  Explore Swahilipot FM News <i className="bi-chevron-right small ms-1" />
                </a>
              </div>
              */}
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
            `}
          </style>
    </section>
  );
};

export default NewsPage;