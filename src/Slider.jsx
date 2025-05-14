import React, { useState, useEffect, useRef } from 'react';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/4.jpg';

import image1Mob from './assets/1_mob.jpg';
import image2Mob from './assets/2_mob.jpg';
import image3Mob from './assets/3_mob.jpg';
import image4Mob from './assets/4_mob.jpg';

const desktopSlides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
];

const mobileSlides = [
  { id: 1, image: image1Mob },
  { id: 2, image: image2Mob },
  { id: 3, image: image3Mob },
  { id: 4, image: image4Mob },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const startX = useRef(0);
  const endX = useRef(0);

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Автопереключение
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 30000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Следим за шириной окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Обработка мыши
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    endX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = endX.current - startX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      } else {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }
  };

  return (
    <div
      className="relative w-full max-w-[1200px] h-[500px] md:h-[720px] overflow-hidden mt-[200px] mx-auto select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Слайд ${slide.id}`}
            draggable={false}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div key={index} className="relative w-4 h-4">
            <div className="w-full h-full rounded-full bg-gray-800"></div>
            {index === current && (
              <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;