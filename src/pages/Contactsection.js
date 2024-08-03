import React from 'react';
import styles from '../styles/Contact.module.css';

const ContactSection = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '2rem 0' }}>
      <div className={styles.container}>
        <div className="row">
          {/* About Swahilipot FM */}
          <div className={`col-md-3 mb-4 ${styles['col-md-3']}`}>
            <h5 className={styles['contact-heading']}>About Swahilipot FM</h5>
            <p className={styles['contact-paragraph']}>
              Swahilipot FM is a community radio station that brings you the latest news, music, and cultural programs. Our mission is to entertain, inform, and connect the community.
            </p>
          </div>
          {/* Get in Touch */}
          <div className={`col-md-3 mb-4 ${styles['col-md-3']}`}>
            <h5 className={styles['contact-heading']}>Get in Touch</h5>
            <p className={styles['contact-paragraph']}>
              Phone: <a href="tel:+254700917917">0700 917 917</a> <br />
              Phone: <a href="tel:+254732917917">0732 917 917</a> <br />
              Email: <a href="mailto:info@swahilipotfm.co.ke">info@swahilipotfm.co.ke</a> <br />
              Address: <a href="https://maps.app.goo.gl/ZL33ky1vyzLpkYXq6" target="_blank" rel="noopener noreferrer">Dedan Kimathi Ave. Opposite Pandya Hosp. Kizingo, Mombasa</a>
            </p>
          </div>
          {/* Feedback */}
          <div className={`col-md-3 mb-4 ${styles['col-md-3']}`}>
            <h5 className={styles['contact-heading']}>Feedback</h5>
            <p className={styles['contact-paragraph']}>
              We value your feedback! Please let us know how we can improve our service and what you would like to hear on our station.
            </p>
          </div>
          {/* Careers */}
          <div className={`col-md-3 mb-4 ${styles['col-md-3']}`}>
            <h5 className={styles['contact-heading']}>Careers</h5>
            <p className={styles['contact-paragraph']}>
              Interested in joining our team? Check out our current job openings and apply to become a part of the Swahilipot FM family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
