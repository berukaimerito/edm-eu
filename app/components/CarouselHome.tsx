'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselHome: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div>
          <Image
            src="/images/slide1.jpg"
            alt="Slide 1"
            width={800}
            height={400}
            className="object-cover"
          />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <Image
            src="/images/slide2.jpg"
            alt="Slide 2"
            width={800}
            height={400}
            className="object-cover"
          />
          <p className="legend">Slide 2</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
