/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      id='header'
      className='navbar navbar-expand navbar-light navbar-absolute-top'
    >
      <div className='container'>
        <nav className='navbar-nav-wrap'>
          <a
            className='navbar-barnd'
            href='#'
            aria-label='Space'
          >
            <Image
              className='navbar-brand-logo'
              src='/branding/logo-no-bg-500.png'
              width={50}
              height={100}
              alt='Swahilipot FM Official Logo'
            />
          </a>
          {/* End Default Logo */}
          <div className='ms-auto'>
            <a
              className='btn btn-primary btn-transition'
              href='https://swahilipothub.co.ke/'
              target='_blank'
            >
              About Swahilipot
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

const Footer = () => {
  // get current year
  const year = new Date().getFullYear()

  return (
    <footer className='position-sm-absolute start-0 end-0 bottom-0'>
      <div className='container py-4'>
        <div className='row align-items-md-center text-center text-md-start'>
          <div className='col-md mb-3 mb-md-0'>
            <p className='mb-0'>
              © Swahilipot FM {year}. All rights reserved.
            </p>
          </div>
          <div className='col-md d-md-flex justify-content-md-end'>
            {/* Socials */}
            <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                <a
                  className='btn btn-icon btn-sm btn-ghost-secondary rounded-circle'
                  href='https://www.instagram.com/swahilipotfm/'
                >
                  <i className='bi-instagram' />
                </a>
              </li>
            </ul>
            {/* End Socials */}
          </div>
        </div>
      </div>
    </footer>
  )
}

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='col-3 col-sm-5'>
      <div className='text-center text-sm-start'>
        <h3 className='h2 text-primary'>Swahilipot FM</h3>
        {/* <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div> */}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <main id='content' role='main'>
        {/* Content */}
        <div className='d-sm-flex'>
          <div className='container d-sm-flex align-items-sm-center vh-sm-100 content-space-t-3 content-space-b-1 content-space-b-sm-3 content-space-sm-0'>
            <div className='row justify-content-sm-between align-items-sm-center flex-grow-1'>
              <div className='col-9 col-sm-5 mb-5 mb-sm-0'>
                <Image
                  className='img-fluid'
                  src='/assets/svg/illustrations/oc-yelling.svg'
                  width={500}
                  height={500}
                  alt='SVG Illustration'
                />
              </div>
              {/* End Col */}
              <CountDown />
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Content */}
      </main>

      <Footer />
    </>
  )
}

export default Home;
