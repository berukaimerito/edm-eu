// app/components/Carousel/CarouselHome.tsx
'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carouselImages, CarouselImage } from './carouselImages';
import { useTranslation } from 'react-i18next';

const CarouselHome: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Adjust image paths and texts to include the current language
  const localizedCarouselImages = carouselImages.map((image) => {
    // Get the texts for the current language or fallback to 'en'
    const texts = image.texts[currentLanguage] || image.texts['en'];

    return {
      ...image,
      src: `/sliders/${currentLanguage}/${image.src}`, // Adjust image path if needed
      alt: texts.alt,
      title: texts.title,
      description: texts.description,
    };
  });

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={8000}
        dynamicHeight={false}
        emulateTouch={true}
        swipeable
        stopOnHover={false}
        className="carousel-container"
      >
        {localizedCarouselImages.map((image, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center bg-white"
            style={{ height: 'auto' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain"
            />
            {/* Display title and description */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
