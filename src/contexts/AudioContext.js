// context/AudioContext.js
import React, { createContext, useContext, useRef, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
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
    <AudioContext.Provider value={{ audioRef, isPlaying, togglePlay }}>
      {children}
      <audio ref={audioRef} controls style={{ display: 'none' }}>
        <source src="https://swahilipotfm.out.airtime.pro/swahilipotfm_a?_ga=2.140975346.1118176404.1720613685-1678527295.1702105127" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
export default AudioContext;
