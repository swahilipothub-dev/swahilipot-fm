/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from './Contactsection';
//import RadioStream from "@/components/RadioStream";


const Podcast = () => (
  <section className="content-space-t-1">
    <Header />
    <main className="content">
      {/*<RadioStream/>*/}
      <div className="container mt-4">
        <h2>Podcasts</h2>
        <p className="text-center display-6 py-5 my-5">Coming Soon...</p>
      </div>
    <div className="container mt-5 mb-5">
    <h2>Media</h2>
    <p>Find the recent videos from Swahilipot Hub Foundation here:</p>
    <div className="row">
      {/* Podcast Card 1 */}
      <div className="col-md-4 mb-4 d-flex">
        <div className="card h-100" style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "15px" }}>
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
              style={{ height: "150px", objectFit: "cover" }}
              alt="Swahilipot Podcast: Mawaidha juu ya Mwezi Mtukufu wa Ramadhan"
            />
          </a>
          <div className="card-body d-flex flex-column" style={{ padding: '8px' }}>
            <h5 className="card-title">Swahilipot Hub</h5>
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
          <div className="card-footer d-flex align-items-center" style={{ padding: '8px' }}>
            <small className="text-muted">Shahr Mubara wa Saum Mabul - Swahilipot Hub</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Swahilipot Logo"
            />
          </div>
        </div>
      </div>

      {/* Podcast Card 2 */}
      <div className="col-md-4 mb-4 d-flex">
        <div className="card h-100" style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "15px" }}>
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
              style={{ height: "150px", objectFit: "cover" }}
              alt="Swahilipot Podcast: Understanding and Surviving depression"
            />
          </a>
          <div className="card-body d-flex flex-column" style={{ padding: '8px' }}>
            <h5 className="card-title">Swahilipot Hub</h5>
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
          <div className="card-footer d-flex align-items-center" style={{ padding: '8px' }}>
            <small className="text-muted">Amina - Swahilipot Hub</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Swahilipot Logo"
            />
          </div>
        </div>
      </div>

      {/* Podcast Card 3 */}
      <div className="col-md-4 mb-4 d-flex">
        <div className="card h-100" style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "15px" }}>
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
              style={{ height: "150px", objectFit: "cover" }}
              alt="Swahilipot Podcast: Yali Fest Mombasa"
            />
          </a>
          <div className="card-body d-flex flex-column" style={{ padding: '8px' }}>
            <h5 className="card-title">Swahilipot Hub</h5>
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
          <div className="card-footer d-flex align-items-center" style={{ padding: '8px' }}>
            <small className="text-muted">Anjela Mwapidi - Swahilipot</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Swahilipot Logo"
            />
          </div>
        </div>
      </div>

      {/* Podcast Card 4 */}
      <div className="col-md-4 mb-4 d-flex">
        <div className="card h-100" style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "15px" }}>
          <a
            href="https://youtu.be/luh8kA-5rW8"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ytimg.com/vi/luh8kA-5rW8/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgRyhBMA8=&rs=AOn4CLCIAAff2fl3zWH-WzMy4ijuPJJolA"
              className="card-img-top"
              style={{ height: "150px", objectFit: "cover" }}
              alt="Swahili Dishes Podcast: Punguza Hasira Dada"
            />
          </a>
          <div className="card-body d-flex flex-column" style={{ padding: '8px' }}>
            <h5 className="card-title">Swahilipot Hub</h5>
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
          <div className="card-footer d-flex align-items-center" style={{ padding: '8px' }}>
            <small className="text-muted">Mkamburi ft Faiza - Swahili Dishes</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Swahilipot Logo"
            />
            </div>
        </div>
      </div>
            {/* Podcast Card 5 */}
      <div className="col-md-4 mb-4 d-flex">
        <div className="card h-100" style={{ backgroundColor: "#e0e0e0", padding: "10px", borderRadius: "15px" }}>
          <a
            href="https://youtu.be/e0QNJykNs54"
            role="button"
            data-fslightbox="youtube-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ytimg.com/vi/e0QNJykNs54/maxresdefault.jpg"
              className="card-img-top"
              style={{ height: "150px", objectFit: "cover" }}
              alt="Swahilipot Podcast: Pwani Innovation Week"
            />
          </a>
          <div className="card-body d-flex flex-column" style={{ padding: '8px' }}>
            <h5 className="card-title">Swahilipot Hub</h5>
            <p className="card-text">“Pwani Innovation Week Press Release - 2024”</p>
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
          <div className="card-footer d-flex align-items-center" style={{ padding: '8px' }}>
            <small className="text-muted">Mahmoud Noor - Swahilipot Hub</small>
            <img
              className="avatar avatar-xxl avatar-4x3 ms-3"
              src="https://www.swahilipothub.co.ke/logo/logo.png"
              alt="Swahilipot Logo"
            />
          </div>
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
  </section>
 
);

export default Podcast;
