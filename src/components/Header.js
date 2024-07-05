import React from 'react';
import Link from 'next/link';
import style from '../styles/Header.module.css'

const Header = () => {
  const headerStyle = {
    backgroundColor: '#ffffff', 
    borderBottom: '1px solid #e5e5e5',
    padding: '10px 0', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    position: 'fixed',
    top: -7,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const brandLogoStyle = {
    height: 'auto', // Adjust the height of the logo here
  };

  const navItemStyle = {
    marginRight: '15px', 
  };

  const navLinkStyle = {
    color: '#333333', 
    textDecoration: 'none', 
    margin: '0 10px', 
    position: 'relative', 
    fontWeight: 'bold',
  };

  const musicBarsStyle = {
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#007bff', 
    transition: 'transform 0.3s ease',
    transformOrigin: 'right',
    transform: 'scaleX(0)',
  };

  const listenLiveBtnStyle = {
    backgroundColor: '#007bff',
    color: '#ffffff', 
    border: 'none',
    padding: '8px 20px',
    borderRadius: '5px', 
    cursor: 'pointer', 
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease', 
    marginLeft: '15px', 
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light navbar-end navbar-nav" style={headerStyle}>
        <div className="container" style={containerStyle}>
          <Link href="/" passHref>
            <div className="navbar-brand" aria-label="Space">
              <img
                className="navbar-brand-logo"
                src="/branding/logo-no-bg-1080.png/"
                alt="Image Description"
                style={brandLogoStyle}
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
                <li className="nav-item" style={navItemStyle}>
                  <Link href="/" passHref>
                    <div className="btn b nav-link" style={navLinkStyle}>
                      Home
                      <span className="music-bars" style={musicBarsStyle}></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <Link href="/podcast" passHref>
                    <div className="btn b navbar-nav nav-link" style={navLinkStyle}>
                      Media
                      <span className="music-bars" style={musicBarsStyle}></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <Link href="/news" passHref>
                    <div className="btn b nav-link" style={navLinkStyle}>
                      News
                      <span className="music-bars" style={musicBarsStyle}></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <Link href="/programs" passHref>
                    <div className="btn b nav-link" style={navLinkStyle}>
                      Programs
                      <span className="music-bars" style={musicBarsStyle}></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <Link href="/schedule" passHref>
                    <div className="btn b nav-link" style={navLinkStyle}>
                      Schedule
                      <span className="music-bars" style={musicBarsStyle}></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <Link href="/about" passHref>
                    <div className="btn b nav-link" style={navLinkStyle}>
                      About swahilipotfm
                      <span className="music-bars" style={musicBarsStyle}></span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={navItemStyle}>
                  <button className="btn b nav-link" style={listenLiveBtnStyle}>
                    Listen Live
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
