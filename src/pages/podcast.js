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
            <img
              src="https://i.ytimg.com/vi/3CBzNw3Hl3c/maxresdefault.jpg"
              className="card-img-top"
              alt="The 97's podcast thumbnail"
            />
          </a>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Swahilipot Podcast</h5>
            <p className="card-text">“Mawaidha juu ya Mwezi Mtukufu wa Ramadhan.”</p>
            <a
              href="https://youtu.be/3CBzNw3Hl3c"
              role="button"
              className="btn btn-primary mt-auto"
              style={{ backgroundColor: "#87CEEB", borderColor: "#87CEEB" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch
            </a>
          </div>
          <div className="card-footer d-flex align-items-center">
            <small className="text-muted">Shahr Mubara wa Saum Mabul - Swahilipot Podcast</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Podcast Card 2 */}
      <div className="col-md-6 mb-4 d-flex">
        <div className="card h-100" style={{ backgroundColor: "#e0e0e0", padding: "20px", borderRadius: "15px" }}>
          <a
            href="https://youtu.be/MSjtycBAoYc"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://pbs.twimg.com/media/EljLBYqW0AA5wsE.jpg"
              className="card-img-top"
              alt="The 97's podcast thumbnail"
            />
          </a>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Swahilipot Podcast</h5>
            <p className="card-text">“Understanding and Surviving depression.”</p>
            <a
              href="https://youtu.be/MSjtycBAoYc"
              role="button"
              className="btn btn-primary mt-auto"
              style={{ backgroundColor: "#87CEEB", borderColor: "#87CEEB" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch
            </a>
          </div>
          <div className="card-footer d-flex align-items-center">
            <small className="text-muted">Amina - Swahilipot Podcast</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Podcast Card 3 */}
      <div className="col-md-6 mb-4 d-flex">
        <div className="card h-100" style={{ width:"100%", backgroundColor: "#e0e0e0", padding: "20px", borderRadius: "15px" }}>
          <a
            href="https://youtu.be/qfGdrZ6MgB4"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzn6E0smqYpA_TX3O3-NuGwUnc3hZ4wpOEw&s"
              className="card-img-top"
              alt="The 97's podcast thumbnail"
            />
          </a>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Swahilipot</h5>
            <p className="card-text">“Yali Fest Mombasa.”</p>
            <a
              href="https://youtu.be/qfGdrZ6MgB4"
              role="button"
              className="btn btn-primary mt-auto"
              style={{ backgroundColor: "#87CEEB", borderColor: "#87CEEB" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch
            </a>
          </div>
          <div className="card-footer d-flex align-items-center">
            <small className="text-muted">Anjela Mwapidi - Swahilipot</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Podcast Card 4 */}
      <div className="col-md-6 mb-4 d-flex">
        <div className="card h-100" style={{ width:"100%",backgroundColor: "#e0e0e0", padding: "20px", borderRadius: "15px" }}>
          <a
            href="https://youtu.be/qfGdrZ6MgB4"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ytimg.com/vi/luh8kA-5rW8/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgRyhBMA8=&rs=AOn4CLCIAAff2fl3zWH-WzMy4ijuPJJolA"
              className="card-img-top"
              alt="The 97's podcast thumbnail"
            />
          </a>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Swahili Dishes Podcast</h5>
            <p className="card-text">“Punguza Hasira Dada.”</p>
            <a
              href="https://youtu.be/qfGdrZ6MgB4"
              role="button"
              className="btn btn-primary mt-auto"
              style={{ backgroundColor: "#87CEEB", borderColor: "#87CEEB" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch
            </a>
          </div>
          <div className="card-footer d-flex align-items-center">
            <small className="text-muted">Mkamburi ft Faiza - Swahili Dishes Podcast</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>
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
