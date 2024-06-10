import React from 'react';
import Header from './header';
import Footer from './footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="content">
        <h1>About Page</h1>
        <p>This is the about page content.</p>
      </main>
      <Footer />
      <style jsx>{`
        .content {
          padding-top: 100px; /* Adjust this value according to your header height */
          padding-bottom: 60px; /* Adjust this value according to your footer height */
          min-height: 100vh; /* Ensures the content area takes up at least the full height of the viewport */
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default AboutPage;
