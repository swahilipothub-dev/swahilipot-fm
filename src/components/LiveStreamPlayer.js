import React, { useRef, useState } from 'react';
import style from '../styles/Header.module.css';

const LiveStreamPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container">
      <button className={`btn ${style['listen-live-btn']}`} onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Listen Live'}
      </button>
      <audio ref={audioRef} className={style.customAudio}>
        <source src="https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LiveStreamPlayer;
