import React from 'react';
import styles from '../styles/FrequencyDetails.module.css';

const stations = [
  { city: 'Mombasa', frequency: '91.7' },
  { city: 'Lamu', frequency: '91.9' },
  //{ city: 'Kilifi', frequency: '91.7' },
  //{ city: 'Hola', frequency: '91.7' },
  { city: 'Mambrui', frequency: '91.7' },
  { city: 'Mazeras', frequency: '91.7' },
  { city: 'Taita Taveta', frequency: '91.5' },
];

const FrequencyDetails = () => {
  return (
    <div className={styles['frequency-container']}>
      <ul className={styles['frequency-list']}>
        {stations.map((station) => (
          <li key={station.city} className={styles['frequency-item']}>
            {station.city} - {station.frequency} FM
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrequencyDetails;
