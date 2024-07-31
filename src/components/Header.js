/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import style from '../styles/Header.module.css';
import LiveStreamPlayer from './LiveStreamPlayer';

const Header = () => {
  return (
    <>
      <header className={`navbar navbar-expand-lg navbar-light ${style.header}`}>
        <div className={`container ${style.container}`}>
          <Link href="/" legacyBehavior>
            <a className="navbar-brand" aria-label="Space">
              <img
                className={`navbar-brand-logo ${style['brand-logo']}`}
                src="/branding/logo-no-bg-1080.png"
                alt="Image Description"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${style['nav-item']}`}>
                <Link href="/" legacyBehavior>
                  <a className={`nav-link ${style['nav-link']}`}>
                    Home
                    <span className={style['music-bars']}></span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style['nav-item']}`}>
                <Link href="/media" legacyBehavior>
                  <a className={`nav-link ${style['nav-link']}`}>
                    Media
                    <span className={style['music-bars']}></span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style['nav-item']}`}>
                <Link href="/news" legacyBehavior>
                  <a className={`nav-link ${style['nav-link']}`}>
                    News
                    <span className={style['music-bars']}></span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style['nav-item']}`}>
                <Link href="/programs" legacyBehavior>
                  <a className={`nav-link ${style['nav-link']}`}>
                    Programs
                    <span className={style['music-bars']}></span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style['nav-item']}`}>
                <Link href="/schedule" legacyBehavior>
                  <a className={`nav-link ${style['nav-link']}`}>
                    Schedule
                    <span className={style['music-bars']}></span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style['nav-item']}`}>
                <Link href="/about" legacyBehavior>
                  <a className={`nav-link ${style['nav-link']}`}>
                    About SwahilipotFM
                    <span className={style['music-bars']}></span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${style['nav-item']}`}>
                <LiveStreamPlayer/>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
