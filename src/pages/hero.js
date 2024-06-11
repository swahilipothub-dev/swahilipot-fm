import Image from 'next/image';
import { useState, useEffect } from 'react';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    '/image1.jpg',
    '/image2.jpg',
    ///'/bg3.jpg',
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '170%',
          position: '-webkit-sticky',
          top: 100,
          left: 10,
          zIndex: -1,
          opacity: 1,
        }}
      />
      <div className="container content-space-1">
    {/* Heading */}
    <div className="w-lg-65 text-center mx-lg-auto mb-7">
      <h3>Explore all News</h3>
      <p className="fs-6"> </p>
    </div>
    {/* End Heading */}
    <div className="row mb-5 mb-sm-5">
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <a
          className="card card-lg card-transition bg-primary-dark"
          href="../blog-article.html"
          style={{ minHeight: "22rem" }}
        >
          <div className="card-body">
            <div className="mb-3">
            <h3>  <span className="badge bg-soft-light">Politics</span> </h3>
            </div>
            <h4 className="card-title text-white mb-5">
              State of product analytics report
            </h4>
            <span className="card-link link-light">
              Learn more <i className="bi-chevron-right small ms-1" />
            </span>
            <div className="position-absolute bottom-0 start-0 end-0 ">
              <img
                className="card-img "
                src="/ruto.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <a
          className="card card-lg card-transition bg-primary-dark"
          href="../blog-article.html"
          style={{ minHeight: "22rem" }}
        >
          <div className="card-body">
            <div className="mb-3">
             <h3> <span className="badge bg-soft-light">Education</span> </h3>
            </div>
            <h4 className="card-title text-white mb-5">
            New Curriculum Revolutionizes Learning
            </h4>
            <span className="card-link link-light">
              Learn more <i className="bi-chevron-right small ms-1" />
            </span>
            <div className="position-absolute bottom-0 start-0 end-0">
              <img
                className="card-img"
                src="/MACHOGU.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <a
          className="card card-lg card-transition bg-primary-dark"
          href="../blog-article.html"
          style={{ minHeight: "22rem" }}
        >
          <div className="card-body">
            <div className="mb-3">
            <h3>  <span className="badge bg-soft-light">Music</span> </h3>
            </div>
            <h4 className="card-title text-white mb-5">
            The Evolution of Music
            </h4>
            <span className="card-link link-light">
              Learn more <i className="bi-chevron-right small ms-1" />
            </span>
            <div className="position-absolute bottom-0 start-0 end-0">
              <img
                className="card-img"
                src="/Music.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <a
          className="card card-lg card-transition bg-primary-dark"
          href="../blog-article.html"
          style={{ minHeight: "22rem" }}
        >
          <div className="card-body">
            <div className="mb-3">
             <h3> <span className="badge bg-soft-light">Sports</span> </h3>
            </div>
            <h4 className="card-title text-white mb-5">
            Team Clinches Championship Title
            </h4>
            <span className="card-link link-light">
              Learn more <i className="bi-chevron-right small ms-1" />
            </span>
            <div className="position-absolute bottom-0 start-0 end-0">
              <img
                className="card-img"
                src="/Mainoo.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <a
          className="card card-lg card-transition bg-primary-dark"
          href="../blog-article.html"
          style={{ minHeight: "22rem" }}
        >
          <div className="card-body">
            <div className="mb-3">
             <h3> <span className="badge bg-soft-light">Youth</span> </h3>
            </div>
            <h4 className="card-title text-white mb-5">
            Young Innovators Lead the Way in Tech
            </h4>
            <span className="card-link link-light">
              Learn more <i className="bi-chevron-right small ms-1" />
            </span>
            <div className="position-absolute bottom-0 start-0 end-0">
              <img
                className="card-img"
                src="/African-Youth.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        {/* Card */}
        <a
          className="card card-lg card-transition bg-primary-dark"
          href="../blog-article.html"
          style={{ minHeight: "22rem" }}
        >
          <div className="card-body">
            <div className="mb-3">
             <h3> <span className="badge bg-soft-light">Environment</span> </h3>
            </div>
            <h4 className="card-title text-white mb-5 position-bottom">
            Sustainable Materials: A Guide to Eco-Friendly Choices
            </h4>
            <span className="card-link link-light">
              Learn more <i className="bi-chevron-right small ms-1" />
            </span>
            <div className="position-absolute bottom-0 start-0 end-0">
              <img
                className="card-img"
                src="/ENV.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* Info */}
    <div className="text-center">
      <p className="mb-0">Want to read more?</p>
      <a className="link" href="/news">
        Explore all news here{" "}
        <i className="bi-chevron-right small ms-1" />
      </a>
    </div>
    {/* End Info */}
  </div>
      {/* Team */}
      <div className="container content-space-1 ">
        <div className="row mb-sm-5">
          <div className="col-sm-6 col-lg-4 mb-7">
            {/* Team */}
            <div className="w-65 text-center mx-auto">
              <img
                className="img-fluid rounded-circle mb-5"
                src="../assets/img/350x350/img1.jpg"
                alt="Image Description"
              />
              <h6 className="mb-1">Christina Kray</h6>
              <span className="d-block">Founder / CEO</span>
              <div
                className="border-top mx-auto my-3"
                style={{ maxWidth: "5rem" }}
              />
              <p>Loves to chat about typography, you have been warned.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-7">
            {/* Team */}
            <div className="w-65 text-center mx-auto">
              <img
                className="img-fluid rounded-circle mb-5"
                src="../assets/img/350x350/img2.jpg"
                alt="Image Description"
              />
              <h6 className="mb-1">Jeff Fisher</h6>
              <span className="d-block">Project Manager</span>
              <div
                className="border-top mx-auto my-3"
                style={{ maxWidth: "5rem" }}
              />
              <p>
                Multidisciplinary. Drinks too much coffee. Likes sentence fragments.
              </p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-7">
            {/* Team */}
            <div className="w-65 text-center mx-auto">
              <img
                className="img-fluid rounded-circle mb-5"
                src="../assets/img/350x350/img3.jpg"
                alt="Image Description"
              />
              <h6 className="mb-1">Sophia Harrington</h6>
              <span className="d-block">Project Manager</span>
              <div
                className="border-top mx-auto my-3"
                style={{ maxWidth: "5rem" }}
              />
              <p>Loves to chat about typography, you have been warned.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-7">
            {/* Team */}
            <div className="w-65 text-center mx-auto">
              <img
                className="img-fluid rounded-circle mb-5"
                src="../assets/img/350x350/img4.jpg"
                alt="Image Description"
              />
              <h6 className="mb-1">David Forren</h6>
              <span className="d-block">Support Consultant</span>
              <div
                className="border-top mx-auto my-3"
                style={{ maxWidth: "5rem" }}
              />
              <p>Behind every great project is a great Google Slides deck.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-7">
            {/* Team */}
            <div className="w-65 text-center mx-auto">
              <img
                className="img-fluid rounded-circle mb-5"
                src="../assets/img/350x350/img5.jpg"
                alt="Image Description"
              />
              <h6 className="mb-1">Amil Evara</h6>
              <span className="d-block">UI/UX Designer</span>
              <div
                className="border-top mx-auto my-3"
                style={{ maxWidth: "5rem" }}
              />
              <p>Design swashbuckler. Trader of stonks. Will work for snacks.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-7">
            {/* Team */}
            <div className="w-65 text-center mx-auto">
              <img
                className="img-fluid rounded-circle mb-5"
                src="../assets/img/350x350/img6.jpg"
                alt="Image Description"
              />
              <h6 className="mb-1">Tom Lowry</h6>
              <span className="d-block">UI/UX Designer</span>
              <div
                className="border-top mx-auto my-3"
                style={{ maxWidth: "5rem" }}
              />
              <p>Loves to chat about typography, you have been warned.</p>
            </div>
            {/* End Team */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        {/* Info */}
        {/* End Info */}
      </div>
      
      {/* End Team */}

  <style jsx>{`
  .card-img{
          position: relative;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 37vh;
          object-fit: cover;
          filter: blur(0px); 
          z-index: -1; 
        }
          .card {
          position: relative;
          overflow: hidden;
          height: 300px; /* Adjust the height as needed */
          width: 300px;
        }
           .card-body {
          position: relative;
          z-index: 1; /* Ensure the text stays on top */
          width: 300px;
          
        } 
          .card-img-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Dark overlay to ensure text readability */
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Align content to the bottom */
          padding: 1rem; /* Adjust padding as needed */
        }
        `}
        
  </style>
    </>

  );
};


export default Home;


