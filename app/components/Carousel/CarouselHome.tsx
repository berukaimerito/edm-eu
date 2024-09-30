// app/components/Carousel/CarouselHome.tsx
'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carouselImages, CarouselImages } from './carouselImages';

const CarouselHome: React.FC = () => {
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
        {carouselImages.map((image: CarouselImages, index: number) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white"
            style={{ height: 'auto' }}
          >
            {/* Use the standard <img> tag to display images without cropping */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
