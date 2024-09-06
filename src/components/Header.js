/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import style from '../styles/Header.module.css'

const Header = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay failed:', error)
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Play failed:', error)
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio
        className='d-none'
        ref={audioRef}
        controls
        autoPlay
      >
        <source
          src='https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127'
          type='audio/mpeg'
        />
        Your browser does not support the audio element.
      </audio>
      <header
        className={`navbar navbar-expand-lg navbar-light ${style.header}`}
      >
        <div className={`container ${style.container}`}>
          <Link href='/' legacyBehavior>
            <a className='navbar-brand' aria-label='Space'>
              <img
                className={`navbar-brand-logo ${style['brand-logo']}`}
                src='/branding/logo-no-bg-1080.png'
                alt='Image Description'
              />
            </a>
          </Link>
          <div
            className={`d-block d-lg-none ${style['livestream-mobile']}`}
          >
            <button
              className={`btn ${style['listen-live-btn']}`}
              onClick={togglePlay}
            >
              {isPlaying ? 'Pause' : 'Listen Live'}
            </button>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav ms-auto'>
              <li
                className={`nav-item ${style['nav-item']}`}
              >
                <Link href='/' legacyBehavior>
                  <a
                    className={`nav-link ${style['nav-link']}`}
                  >
                    Home
                    <span
                      className={style['music-bars']}
                    ></span>
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${style['nav-item']}`}
              >
                <Link href='/media' legacyBehavior>
                  <a
                    className={`nav-link ${style['nav-link']}`}
                  >
                    Media
                    <span
                      className={style['music-bars']}
                    ></span>
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${style['nav-item']}`}
              >
                <Link href='/news' legacyBehavior>
                  <a
                    className={`nav-link ${style['nav-link']}`}
                  >
                    News
                    <span
                      className={style['music-bars']}
                    ></span>
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${style['nav-item']}`}
              >
                <Link href='/programs' legacyBehavior>
                  <a
                    className={`nav-link ${style['nav-link']}`}
                  >
                    Programs
                    <span
                      className={style['music-bars']}
                    ></span>
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${style['nav-item']}`}
              >
                <Link href='/schedule' legacyBehavior>
                  <a
                    className={`nav-link ${style['nav-link']}`}
                  >
                    Schedule
                    <span
                      className={style['music-bars']}
                    ></span>
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${style['nav-item']}`}
              >
                <Link href='/about' legacyBehavior>
                  <a
                    className={`nav-link ${style['nav-link']}`}
                  >
                    About SwahilipotFM
                    <span
                      className={style['music-bars']}
                    ></span>
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item d-none d-lg-block ${style['nav-item']}`}
              >
                <button
                  className={`btn ${style['listen-live-btn']}`}
                  onClick={togglePlay}
                >
                  {isPlaying ? 'Pause' : 'Listen Live'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
