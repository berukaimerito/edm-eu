// app/components/Carousel/CarouselHome.tsx
'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
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
        showIndicators={false} // Hide indicators if not needed
        interval={8000}
        dynamicHeight={false}
        emulateTouch={true}
        swipeable
        stopOnHover={false} // Prevent pausing on hover
        className="carousel-container"
      >
        {carouselImages.map((image: CarouselImages, index: number) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[32rem]"
              priority={index === 0} // Prioritize loading the first image
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
