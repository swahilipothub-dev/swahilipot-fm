import { useState } from 'react';

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (  
  <>
    <header className="navbar navbar-expand-lg navbar-light navbar-end navbar-nav fixed-top ">
      <div className="container d-flex justify-content-between align-items-center">
        <nav className="js-mega-menu navbar-nav-wrap">
          <a className="navbar-brand" href="#" aria-label="Space">
            <img className="navbar-brand-logo" 
            src="/branding/logo-no-bg-1080.png/"
            alt="Image Description"
            height="70" 
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-default"><i className="bi-list" /></span>
            <span className="navbar-toggler-toggled"><i className="bi-x" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="btn b nav-link" 
                href="http://localhost:3000/">Home
                <span className="music-bars"></span></a>
              </li>
              <li className="nav-item">
                <a className="btn b navbar-nav nav-link" 
                href="/podcast">Podcast
                <span className="music-bars"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn b nav-link" 
                href="/news">What's New?
                <span className="music-bars"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="hs-mega-menu-invoker nav-link dropdown-toggle nav-link" 
                href="/schedule">Schedule
                <span className="music-bars"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="btn b nav-link"
                href="/about">About Us
                <span className="music-bars"></span>
                </a>
              </li>
              
              
              <li className="nav-item">

                <a className="btn b nav-link"  
                href='https://swahilipot.out.airtime.pro/swahilipot_a'
                onClick={togglePlayPause}
                target="_blank"
                >

                  Listen Live
                  <span className="music-bars" >

                  </span>
                </a>
              
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
        height: 3px;
        background-color: black;
        transform: scaleX(0);
        transition: transform 0.01s ease-in-out;
      }

      .nav-link:hover .music-bars {
        transform: scaleX(1);
        animation: music-bars-animation 0.8s infinite;
      }

      @keyframes music-bars-animation {
        0% { transform: scaleX(0); }
        50% { transform: scaleX(1); }
        100% { transform: scaleX(0); }
      }

      .fixed-top {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        background-color: rgba(255, 255, 255, 0.9);
      }
    `}</style>
  </>
);
};

export default Header;
