// app/components/BrandCarousel.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const BrandCarousel: React.FC = () => {
  const { t } = useTranslation('common');

  // Predefined list of brand images
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // Assuming you have brand images named brand1.png, brand2.png, etc., in /public/brands
    const brandImages = [
      '/brands/brand1.png',
      '/brands/brand2.png',
      '/brands/brand3.png',
      '/brands/brand4.png',
      '/brands/brand5.png',
      '/brands/brand6.png',
      '/brands/brand7.png',
      '/brands/brand8.png',
      // Add more as needed
    ];
    setBrands(brandImages);
  }, []);

  // Simple carousel logic
  const [current, setCurrent] = useState(0);
  const visibleSlides = 5; // Number of brands to display at once
  const length = brands.length;

  const nextSlide = () => {
    setCurrent(current === length - visibleSlides ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - visibleSlides : current - 1);
  };

  if (!Array.isArray(brands) || brands.length <= 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Our Brands</h2>
      <div className="relative flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 ml-4 text-white bg-secondary bg-opacity-75 hover:bg-secondary-hover rounded-full p-2 focus:outline-none"
        >
          &#10094;
        </button>
        {/* Carousel Slides */}
        <div className="flex space-x-4">
          {brands.slice(current, current + visibleSlides).map((brand, index) => (
            <div
              key={index}
              className="transition-opacity duration-500 opacity-100"
            >
              <img src={brand} alt={`Brand ${index + 1}`} className="w-32 h-32 object-contain mx-4" />
            </div>
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 mr-4 text-white bg-secondary bg-opacity-75 hover:bg-secondary-hover rounded-full p-2 focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default BrandCarousel;
