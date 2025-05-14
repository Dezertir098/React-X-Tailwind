import React from 'react';
import image1 from './assets/brands/1.jpg';
import image2 from './assets/brands/2.jpg';
import image3 from './assets/brands/3.jpg';
import image4 from './assets/brands/4.jpg';
import image5 from './assets/brands/5.jpg';

const slides = [image1, image2, image3, image4, image5];

const Brands = () => {
  const allSlides = [...slides, ...slides, ...slides];

  return (
    <div className="w-full overflow-hidden py-10">
      <h2 className="text-white text-3xl font-semibold mb-12 text-center">
        Бренды в асортмиенте
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {allSlides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`brand-${index}`}
              className="h-24 md:h-32 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;