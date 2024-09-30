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
    // Removed 'container' class to allow full width and adjusted padding
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16">
      {title && (
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-16 text-primary">
          {title}
        </h2>
      )}
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Left Column */}
        <div className="md:flex-1 flex flex-col gap-12">
          {leftItems.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Image Section */}
              <div className="flex-shrink-0 w-24 h-24">
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-lg shadow-sm"
                />
              </div>
              {/* Text Section */}
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-medium mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className="md:flex-1 flex flex-col gap-12 mt-12 md:mt-0">
          {rightItems.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Image Section */}
              <div className="flex-shrink-0 w-24 h-24">
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-lg shadow-sm"
                />
              </div>
              {/* Text Section */}
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-medium mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DividedTextSection;
