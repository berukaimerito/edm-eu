// components/CollapsibleSection.tsx
'use client';

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
// Uncomment and import your SVG icon when ready
// import YourSvgIcon from '@/path/to/your/icon.svg';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode; // Optional icon prop
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children, icon }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg mb-8 overflow-hidden">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left bg-primary text-white hover:bg-primary-dark focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 transition duration-300">
              <div className="flex items-center">
                {/* Optional SVG Icon */}
                {/* Uncomment the line below and replace with your SVG icon */}
                {/* <YourSvgIcon className="h-6 w-6 mr-3 text-white" /> */}
                {icon && <div className="h-6 w-6 mr-3 text-white">{icon}</div>}
                <span className="text-lg font-semibold">{title}</span>
              </div>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-white transition-transform duration-300`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 py-6 bg-gray-50 text-gray-800">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CollapsibleSection;
