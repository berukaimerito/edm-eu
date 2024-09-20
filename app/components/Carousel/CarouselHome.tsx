// app/components/Carousel/CarouselHome.tsx
'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselHome: React.FC = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        dynamicHeight={false}
        emulateTouch={true}
        swipeable
      >
        <div className="relative">
          <Image
            src="/images/slide1.jpg"
            alt="Slide 1"
            width={1920}
            height={1080}
            className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[32rem]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold bg-gray-900 bg-opacity-50 px-4 py-2 rounded">
              Welcome to EDM EU
            </h2>
          </div>
          <p className="legend">Slide 1</p>
        </div>
        <div className="relative">
          <Image
            src="/images/slide2.jpg"
            alt="Slide 2"
            width={1920}
            height={1080}
            className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[32rem]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold bg-gray-900 bg-opacity-50 px-4 py-2 rounded">
              Our Services
            </h2>
          </div>
          <p className="legend">Slide 2</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
