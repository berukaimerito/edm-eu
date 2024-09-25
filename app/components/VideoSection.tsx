// app/components/VideoSection.tsx
'use client';

import Link from 'next/link';
import React from 'react';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  additionalInfo: string;
  corporateLinkText: string;
  corporateLink: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  title,
  description,
  buttonText,
  buttonLink,
  additionalInfo,
  corporateLinkText,
  corporateLink,
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center bg-primary bg-opacity-90 p-6 rounded-md">
        <div className="md:w-1/2">
          <div className="relative pb-[56.25%]">
            <iframe
              src={`https://www.youtube.com/embed/${videoUrl}`}
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6">{description}</p>
          <Link
            href={buttonLink}
            className="bg-white text-primary px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 inline-block"
          >
            {buttonText}
          </Link>
          <p className="mt-6">{additionalInfo}</p>
          <Link
            href={corporateLink}
            className="text-secondary font-semibold hover:underline mt-4 inline-block"
          >
            {corporateLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
