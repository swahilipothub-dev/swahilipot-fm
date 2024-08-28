import Link from 'next/link'
import { useState, useEffect } from 'react'

function Contact() {
  return (
    <Link href='/about'>
      <a>About Page</a>
    </Link>
  )
}

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0)
  const backgrounds = [
    '../studio2.jpg',
    // '../studio1.jpg',
    // '../studio.jpg',
    // '../studio5.jpg',
    // '../studio7.jpg',
    // '../studio8.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(
        (prevIndex) => (prevIndex + 1) % backgrounds.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [backgrounds.length])

  const stations = [
    { city: 'Mombasa', frequency: '91.7' },
    { city: 'Lamu', frequency: '91.9' },
    //{ city: 'Kilifi', frequency: '91.7' },
    //{ city: 'Hola', frequency: '91.7' },
    { city: 'Mambrui', frequency: '91.7' },
    { city: 'Mazeras', frequency: '91.7' },
    { city: 'Taita Taveta', frequency: '91.5' },
  ]
  return (
    <section className='content-space-t-4'>
      <div
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Set height to '100vh' for full viewport height
          width: '100%', // Set width to '100%' for full viewport width
          position: 'relative', // Change position to 'relative' for standard positioning
          top: '-50px', // Adjusted top value to move the div closer to the navbar
          left: 0, // Align left to start from the left edge
          zIndex: -1, // Keep zIndex as -1 if it's layered below other content
          opacity: 1, // Keep opacity as 1 for full visibility
        }}
      />

      <div className='container content-space-1 content-space-t-4'>
        {/* Table Section */}
        <div className='mb-5'>
          <h3 className='mb-3'>Radio Frequencies</h3>
          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {stations.map((station, index) => (
                  <tr key={index}>
                    <td>{station.city}</td>
                    <td>{station.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* End Table Section */}
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>Explore all News</h3>
          <p className='fs-6'> </p>
        </div>

        <div className='text-center py-3'>
          <p>No news at the moment...</p>
        </div>

        {/* End Heading 
    <div className="row mb-5 mb-sm-5">
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <a
          className="card card-lg card-transition bg-info"
          href="#"
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
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <a
          className="card card-lg card-transition bg-info"
          href="#"
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
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <a
          className="card card-lg card-transition bg-info"
          href="#"
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
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <a
          className="card card-lg card-transition bg-info"
          href="#"
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
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <a
          className="card card-lg card-transition bg-info"
          href="#"
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
      </div>
      <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <a
          className="card card-lg card-transition bg-info"
          href="#"
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
      </div>
    </div> */}
        {/* Info */}
        {/*<div className="text-center">
      <p className="mb-0">Want to read more?</p>
      <Link className="link" href="/news">
        Explore all news here{" "}
        <i className="bi-chevron-right small ms-1" />
      </Link>
    </div>*/}
      </div>
      <style jsx>
        {`
          .card-img {
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
            background-color: rgba(
              0,
              0,
              0,
              0.5
            ); /* Dark overlay to ensure text readability */
            display: flex;
            flex-direction: column;
            justify-content: flex-end; /* Align content to the bottom */
            padding: 1rem; /* Adjust padding as needed */
          }
        `}
      </style>
    </section>
  )
}

export default Home
