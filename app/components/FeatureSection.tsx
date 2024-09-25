// app/components/FeatureSection.tsx
'use client';

import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  reverse = true, // Default to true to place image on the right
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center bg-white shadow-md border border-primary rounded-lg p-6 feature_rectangle`}
      >
        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-lg shadow-sm object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
