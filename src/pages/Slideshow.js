import { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
      <style jsx>{`
        .slideshow {
          position: relative;
          max-width: 100%;
          overflow: hidden;
          height: 400px; /* Adjust height as needed */
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        img.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Slideshow;
