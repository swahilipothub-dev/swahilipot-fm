import { useState } from 'react';
import Link from 'next/link';


const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light navbar-end navbar-nav fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" passHref>
            <div className="navbar-brand" aria-label="Space">
              <img
                className="navbar-brand-logo"
                src="/branding/logo-no-bg-1080.png/"
                alt="Image Description"
                height="auto" // Adjust the height of the logo here
              />
            </div>
          </Link>
          <nav className="js-mega-menu navbar-nav-wrap">

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              <span className="navbar-toggler-default"><i className="bi-list" /></span>
              <span className="navbar-toggler-toggled"><i className="bi-x" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" passHref>
                    <div className="btn b nav-link">
                      Home
                      <span className="music-bars"></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/podcast" passHref>
                    <div className="btn b navbar-nav nav-link">
                      Podcast
                      <span className="music-bars"></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/news" passHref>
                    <div className="btn b nav-link">
                      What&apos;s New?
                      <span className="music-bars"></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/programs" passHref>
                    <div className="hs-mega-menu-invoker nav-link nav-link">
                      Programs
                      <span className="music-bars"></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/schedule" passHref>
                    <div className="hs-mega-menu-invoker nav-link nav-link">
                      Schedule
                      <span className="music-bars"></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" passHref>
                    <div className="btn b nav-link">
                      About swahilipotfm
                      <span className="music-bars"></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="listen-live-btn btn b nav-link" onClick={togglePlayPause}>
                    Listen Live
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      
      <style jsx>{`

        .navbar-nav .nav-link {
          color: black;
          position: relative;
        }
        .music-bars {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: black;
          transform: scaleX(0);
        }

        .nav-link:hover .music-bars {
          transform: scaleX(1);
          animation: music-bars-animation 0.8s infinite;
        }


        .fixed-top {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 1);
        }

        /* Additional styles for the live radio button */
        .live-radio-button {
          background-color: red;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }

        .live-radio-button:hover {
          background-color: darkred;
        }

        /* Additional styles for the navbar */
.navbar {
  height: 80px; /* Example height, adjust as needed */
  padding: 0 15px; /* Adjust padding as needed for alignment */
}

/* Adjust the logo size and alignment */

.navbar-brand-logo {
  height: 90px; /* Temporarily increase to check visibility */
  width: auto; /* Adjust based on the actual logo's aspect ratio */
  margin-right: 15px;
  display: block; /* Ensure it's not set to none */
  visibility: visible; /* Ensure it's visible */
  opacity: 1; /* Ensure it's fully opaque */
}

/* Ensure the navbar contents are vertically centered */
.navbar-brand, .navbar-nav-wrap {
  display: flex;
  align-items: center; /* This will vertically center the items */
}
  
.listen-live-btn {
  position: relative;
  overflow: hidden;
  /* Additional styling for the button */
  border: none;
  padding: 0px 50px;
  font-weight: light;
  cursor: pointer;
  transition: background-color 0.3s;
}

.listen-live-btn::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:30%;
  background-color: red; /* Initial background color */
  z-index: -1;
  transform: scaleX(4);
  transition: transform 0.1s ease-in-out;
}

.listen-live-btn::before {
  transform: scaleX(1);
  animation: music-bars-animations 1.5s infinite ease-in-out;
}

@keyframes music-bars-animations {
  0% {
      transform: scaleY(1);

    background-color: cyan;
    opacity: 0.5;
  }
  25% {    transform: scaleY(2);

    background-color: lightgreen;
    opacity: 1;
  }
  50% {
      transform: scaleY(3);

    background-color: gray;
    opacity: 0.5;
  }
    75%{
        transform: scaleY(4);
    background-color: blue;
    opacity:1;
    }
  100% {
      transform: scaleY(5);

    background-color: yellow;
    opacity: 0.5;
  }

}


      `}</style>
    </>
  );
};

export default Header;
