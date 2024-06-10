import React from 'react';


const ContactSection = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '2rem 0' }}>
      <div className="justify-content-between align-items-center top">
      <li className="align-items-center">
                <a className="btn b nav-link" 
                href="http://localhost:3000/"> <h5>SWAHILIPOT-FM</h5>
                <span className="music-bars"></span></a>
              </li>
      </div>
      <div className="container">
        <div className="row">
          {/* About Swahilipot FM */}
          <div className="col-md-3 mb-4">
            <h5>About Swahilipot FM</h5>
            <p>
              Swahilipot FM is a community radio station that brings you the latest news, music, and cultural programs. Our mission is to entertain, inform, and connect the community.
            </p>
          </div>
          {/* Get in Touch */}
          <div className="col-md-3 mb-4">
            <h5>Get in Touch</h5>
            <p>
          Phone: <a href="tel:+1234567890">(123) 456-7890</a> <br />
          Email: <a href="mailto:info@swahilipotfm.com">info@swahilipotfm.com</a> <br />
          Address: <a href="https://maps.app.goo.gl/23Nb5JmUWVbmVisK9" target="_blank" rel="noopener noreferrer">Swahilipot FM, Mombasa, Kenya</a>
        </p>
          </div>
          {/* Feedback */}
          <div className="col-md-3 mb-4">
            <h5>Feedback</h5>
            <p>
              We value your feedback! Please let us know how we can improve our service and what you would like to hear on our station.
            </p>

          </div>
          {/* Careers */}
          <div className="col-md-3 mb-4">
            <h5>Careers</h5>
            <p>
              Interested in joining our team? Check out our current job openings and apply to become a part of the Swahilipot FM family.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
        }
        .col-md-3 {
          flex: 0 0 25%;
          max-width: 25%;
        }
        h5 {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1rem;
          color: #555;
        }
        
      `}</style>
    </div>
  );
};

export default ContactSection;
