import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from './Contactsection';
import UpcomingEvents from '../components/UpcomingEvents';
import { getAllPosts } from './api/posts';

export async function getStaticProps() {
  const allPostsData = getAllPosts();
  return {
    props: {
      allPostsData
    }
  };
}

const NewsPage = ({ allPostsData }) => {
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
            {allPostsData.map((post) => (
              <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5" key={post.slug}>
                {/* Card */}
                <div className="card h-100 p-2">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.excerpt}</p>
                    <a className="card-link" href={`/posts/${post.slug}`}>
                      Read More <i className="bi-chevron-right small ms-1" />
                    </a>
                  </div>
                </div>
                {/* End Card */}
              </div>
            ))}
          </div>
          {/* End Row */}
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
