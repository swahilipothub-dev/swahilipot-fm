import React from "react";
import Header from "./header";
import Footer from "./footer";
import ContactSection from './Contactsection';

const Podcast = () => (
  <>
    <Header />
    <main className="content">
    {/* Testimonials Section */}
    <div className="container content-space-1 mt-5 mb-5" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="row align-items-md-center">
        {/* Video Thumbnail and Link */}
        <div className="col-md-6 order-md-2 mb-10 mb-md-0">
          <a
            href="https://youtu.be/3CBzNw3Hl3c"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="banner-bottom-end-n3rem">
              <img
                className="img-fluid"
                src="https://i.ytimg.com/vi/3CBzNw3Hl3c/maxresdefault.jpg"
                alt="The 97's podcast thumbnail"
              />
              <div className="position-absolute bottom-0 start-0 p-5">
                {/* Play Button Overlay */}
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <span className="btn btn-icon btn-white text-primary">
                      <i className="bi-play-circle-fill" />
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="text-white">Swahilipot podcast</span>
                  </div>
                </div>
                {/* End Play Button Overlay */}
              </div>
            </div>
          </a>
        </div>
        {/* End Video Thumbnail and Link */}
        
        {/* Podcast Quote and Avatar */}
        <div className="col-md-6">
          <div className="pe-md-5" style={{ padding: "20px", borderRadius: "8px" }}>
            {/* Blockquote */}
            <figure className="mb-7">
              <blockquote className="blockquote text-black">
                “Mawaidha juu ya Mwezi Mtukufu wa Ramadhan.”
              </blockquote>
              <figcaption className="blockquote-footer text-black">
                Shahr Mubara wa Saum Mabul
                <span className="blockquote-footer-source text-black">
                  Swahilipot Podcast
                </span>
              </figcaption>
            </figure>
            {/* End Blockquote */}
            <img
              className="avatar avatar-xxl avatar-4x3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        {/* End Podcast Quote and Avatar */}
      </div>
      {/* End Row */}
    </div>
    <hr style={{ margin: "20px 0" }} />

    <div className="container content-space-1" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="row align-items-md-center">
        {/* Video Thumbnail and Link */}
        <div className="col-md-6 order-md-2 mb-10 mb-md-0">
          <a
            href="https://youtu.be/MSjtycBAoYc"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="banner-bottom-end-n3rem">
              <img
                className="img-fluid"
                src="https://pbs.twimg.com/media/EljLBYqW0AA5wsE.jpg"
                alt="The 97's podcast thumbnail"
              />
              <div className="position-absolute bottom-0 start-0 p-5">
                {/* Play Button Overlay */}
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <span className="btn btn-icon btn-white text-primary">
                      <i className="bi-play-circle-fill" />
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="text-white">Swahilipot podcast</span>
                  </div>
                </div>
                {/* End Play Button Overlay */}
              </div>
            </div>
          </a>
        </div>
        {/* End Video Thumbnail and Link */}
        
        {/* Podcast Quote and Avatar */}
        <div className="col-md-6">
          <div className="pe-md-5" style={{ padding: "20px", borderRadius: "8px" }}>
            {/* Blockquote */}
            <figure className="mb-7">
              <blockquote className="blockquote text-black">
                “Understanding and Surviving depression.”
              </blockquote>
              <figcaption className="blockquote-footer text-black">
                Amina
                <span className="blockquote-footer-source text-black">
                  Swahilipot Podcast
                </span>
              </figcaption>
            </figure>
            {/* End Blockquote */}
            <img
              className="avatar avatar-xxl avatar-4x3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        {/* End Podcast Quote and Avatar */}
      </div>
      {/* End Row */}
    </div>
    <hr style={{ margin: "20px 0" }} />
    <div className="container content-space-1" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="row align-items-md-center">
        {/* Video Thumbnail and Link */}
        <div className="col-md-6 order-md-2 mb-10 mb-md-0">
          <a
            href="https://youtu.be/qfGdrZ6MgB4"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="banner-bottom-end-n3rem">
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzn6E0smqYpA_TX3O3-NuGwUnc3hZ4wpOEw&s"
                alt="The 97's podcast thumbnail"
              />
              <div className="position-absolute bottom-0 start-0 p-5">
                {/* Play Button Overlay */}
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <span className="btn btn-icon btn-white text-primary">
                      <i className="bi-play-circle-fill" />
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="text-white">Swahilipot</span>
                  </div>
                </div>
                {/* End Play Button Overlay */}
              </div>
            </div>
          </a>
        </div>
        {/* End Video Thumbnail and Link */}
        
        {/* Podcast Quote and Avatar */}
        <div className="col-md-6">
          <div className="pe-md-5" style={{padding: "20px", borderRadius: "8px" }}>
            {/* Blockquote */}
            <figure className="mb-7">
              <blockquote className="blockquote text-black">
                “Yali Fest Mombasa.”
              </blockquote>
              <figcaption className="blockquote-footer text-black">
              Anjela Mwapidi  
                <span className="blockquote-footer-source text-black">
                  Swahilipot 
                </span>
              </figcaption>
            </figure>
            {/* End Blockquote */}
            <img
              className="avatar avatar-xxl avatar-4x3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        {/* End Podcast Quote and Avatar */}
      </div>
      {/* End Row */}
    </div>
    <hr style={{ margin: "20px 0" }} />

    <div className="container content-space-1" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="row align-items-md-center">
        {/* Video Thumbnail and Link */}
        <div className="col-md-6 order-md-2 mb-10 mb-md-0">
          <a
            href="https://youtu.be/qfGdrZ6MgB4"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="banner-bottom-end-n3rem">
              <img
                className="img-fluid"
                src="https://i.ytimg.com/vi/luh8kA-5rW8/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgRyhBMA8=&rs=AOn4CLCIAAff2fl3zWH-WzMy4ijuPJJolA"
                alt="The 97's podcast thumbnail"
              />
              <div className="position-absolute bottom-0 start-0 p-5">
                {/* Play Button Overlay */}
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <span className="btn btn-icon btn-white text-primary">
                      <i className="bi-play-circle-fill" />
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="text-white">Swahili Dishes podcast</span>
                  </div>
                </div>
                {/* End Play Button Overlay */}
              </div>
            </div>
          </a>
        </div>
        {/* End Video Thumbnail and Link */}
        
        {/* Podcast Quote and Avatar */}
        <div className="col-md-6">
          <div className="pe-md-5" style={{padding: "20px", borderRadius: "8px" }}>
            {/* Blockquote */}
            <figure className="mb-7">
              <blockquote className="blockquote text-black">
                “Punguza Hasira Dada.”
              </blockquote>
              <figcaption className="blockquote-footer text-black">
                Mkamburi ft Faiza
                <span className="blockquote-footer-source text-black">
                  Swahili Dishes PodcastS
                </span>
              </figcaption>
            </figure>
            {/* End Blockquote */}
            <img
              className="avatar avatar-xxl avatar-4x3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
        {/* End Podcast Quote and Avatar */}
      </div>
      {/* End Row */}
    </div>
    
    <hr style={{ margin: "20px 0" }} />
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
  </>
 
);

export default Podcast;
