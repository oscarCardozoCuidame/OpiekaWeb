// Carrusel.tsx
import { useEffect, useState } from 'react';
import './Carrusel.scss';

const images = [
  'src/assets/img/carrusel/BrisaDeMujer.webp',
  'src/assets/img/carrusel/CuidameHealth.webp',
  'src/assets/img/carrusel/CuidamePets.webp'
];

interface CarruselProps {
  onSlideChange?: (index: number) => void;
}

export default function Carrusel({ onSlideChange }: CarruselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex]);

  return (
    <div className="custom-carousel">
      <div className="carousel-track">
        {images.map((src, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={src} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
