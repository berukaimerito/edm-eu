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
  // Ensure there are exactly 6 items for symmetry
  if (items.length !== 6) {
    console.warn('DividedTextSection expects exactly 6 items for a symmetrical layout.');
  }

  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <div className="container mx-auto px-4 md:px-12 py-16">
      {title && (
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-16 text-primary">
          {title}
        </h2>
      )}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-16">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col gap-12">
          {leftItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
              {/* Text Section */}
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
              {/* Image Section */}
              <div className="md:w-1/3 w-full mt-4 md:mt-0">
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-full h-auto max-h-40 md:max-h-full object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col gap-12">
          {rightItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
              {/* Text Section */}
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
              {/* Image Section */}
              <div className="md:w-1/3 w-full mt-4 md:mt-0">
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-full h-auto max-h-40 md:max-h-full object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Space Between Sections */}
      <div className="mt-16"></div>
    </div>
  );
};

export default DividedTextSection;
