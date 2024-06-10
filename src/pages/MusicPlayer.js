// components/MusicPlayer.js
import { useRef, useState } from 'react';
import styles from './MusicPlayer.module.css';

const MusicPlayer = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    setVolume(volume);
    audioRef.current.volume = volume;
  };

  return (
    <div className={styles.musicPlayer}>
      <audio ref={audioRef} src={audioUrl} />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <label>
        Volume:
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange} 
        />
      </label>
    </div>
  );
};

export default MusicPlayer;