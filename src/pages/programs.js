import React from 'react';
import styles from '../styles/Programs.module.css';
import Header from '@/components/Header';
import Footer from "../components/Footer";


const programs = [
  { 
    title: 'Health and Wellness', 
    description:'Mental Health Awareness Discussions',
    image: '/assets/img/ENV.jpg',
    startTime: '6:00 AM',
    endTime: '9:00 AM'
  },
  { 
    title: 'Funky Friday', 
    description: 'Get funky with the coolest tracks every Friday night.', 
    image: '/assets/img/flip-flops-underwater-still-life_23-2150434817.avif',
    startTime: '8:00 PM',
    endTime: '11:00 PM'
  },
  { 
    title: 'Youth Culture', 
    description: 'Relax and unwind with soothing tunes.', 
    image: '/assets/img/beautiful-luxury-hotel-swimming-pool_74190-427.avif',
    startTime: '10:00 AM',
    endTime: '1:00 PM'
  },
  { 
    title: 'Saturday Drive', 
    description: 'Perfect tracks for your Saturday drive.', 
    image: '/assets/img/colorful-palm-silhouettes-background_23-2148538468.avif',
    startTime: '3:00 PM',
    endTime: '6:00 PM'
  },
  { 
    title: 'Midweek Madness', 
    description: 'Get through the week with midweek madness.', 
    image: '/assets/img/coconut-beach-cinematic-style_23-2151645720.avif',
    startTime: '7:00 PM',
    endTime: '10:00 PM'
  },
  { 
    title: 'Creative Expression', 
    description: 'Chill out with the best evening tunes.', 
    image: '/assets/img/beautiful-luxury-hotel-swimming-pool_74190-427.avif',
    startTime: '6:00 PM',
    endTime: '9:00 PM'
  },
];

const Programs = () => {
  return (
    <section className="content-space-t-4 mb-4">
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Programs</h1>
        <div className={styles.cardContainer}>
          {programs.map((program, index) => (
            <div key={index} className={styles.card}>
              <img src={program.image} alt={program.title} className={styles.cardImage} />
              <h2 className={`fs-4 ${styles.cardTitle}`}>{program.title}</h2>
              <p className={styles.cardDescription}>{program.description}</p>
              <p className={styles.cardTime}>{program.startTime} - {program.endTime}</p>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Programs;


