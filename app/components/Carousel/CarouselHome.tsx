// app/components/Carousel/CarouselHome.tsx
'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselHome: React.FC = () => {
  return (
    <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        dynamicHeight={false}
        emulateTouch={true}
      >
        <div>
          <Image
            src="/images/slide1.jpg"
            alt="Slide 1"
            width={1600}
            height={800}
            className="object-cover w-full h-64 sm:h-80 md:h-96"
          />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <Image
            src="/images/slide2.jpg"
            alt="Slide 2"
            width={1600}
            height={800}
            className="object-cover w-full h-64 sm:h-80 md:h-96"
          />
          <p className="legend">Slide 2</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
