import React from 'react';
import styles from '../styles/RadioStream.module.css';

const RadioStream = () => {
  return (
    <div className="container">
      <h2>Live Radio Stream</h2>
      <p>Listen to Swahilipot FM right here, right now!</p>
      <audio controls autoPlay className={styles.customAudio}>
        <source src="https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default RadioStream;
