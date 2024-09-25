// app/components/DividedTextSection.tsx
'use client';

import React from 'react';

interface Item {
  title: string;
  description: string;
  image_src: string;
}

interface DividedTextSectionProps {
  items: Item[];
  title?: string;
}

const DividedTextSection: React.FC<DividedTextSectionProps> = ({ items, title }) => {
  // Ensure equal number of items on both sides
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <div className="container mx-auto px-4 py-12">
      {title && <h2 className="text-3xl font-semibold text-center mb-8 text-primary">{title}</h2>}
      <div className="flex flex-col md:flex-row md:justify-center md:items-stretch">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-8">
          {leftItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-white shadow-md border border-primary rounded-lg p-6 feature_rectangle"
            >
              <img
                src={item.image_src}
                alt={item.title}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300 mx-8"></div>
        {/* Right Column */}
        <div className="md:w-1/2 space-y-8">
          {rightItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-white shadow-md border border-primary rounded-lg p-6 feature_rectangle"
            >
              <img
                src={item.image_src}
                alt={item.title}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DividedTextSection;
