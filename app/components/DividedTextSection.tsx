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
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 divided-text-section">
      {title && (
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-16 text-primary">
          {title}
        </h2>
      )}
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col gap-8 pr-6">
          {leftItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              {/* Image Section */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:order-2 md:ml-6">
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-28 h-29 md:w-32 md:h-32 object-contain"
                />
              </div>
              {/* Text Section */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg md:text-xl font-medium mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300"></div>
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col gap-8 pl-10 mt-8 md:mt-0">
          {rightItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              {/* Image Section */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:order-2 md:ml-6">
                <img
                  src={item.image_src}
                  alt={item.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              {/* Text Section */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg md:text-xl font-medium mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DividedTextSection;
