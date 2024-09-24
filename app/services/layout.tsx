// app/services/layout.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { FiMenu, FiX } from 'react-icons/fi';
import { Transition } from '@headlessui/react';

const ServicesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden bg-gray-50">
        <div className="px-4 py-2 mt-2">
          <button
            onClick={toggleDropdown}
            className="w-full flex items-center px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-secondary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isDropdownOpen ? (
              <FiX className="h-5 w-5 mr-2" />
            ) : (
              <FiMenu className="h-5 w-5 mr-2" />
            )}
            <span>Menu</span>
          </button>
        </div>

        {/* Dropdown Menu with Transition */}
        <Transition
          show={isDropdownOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div
            ref={dropdownRef}
            className="absolute top-20 left-4 right-4 bg-white border border-gray-200 rounded-md shadow-lg z-40"
          >
            <Sidebar isMobile />
          </div>
        </Transition>
      </div>

      {/* Main Content Container */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-6 md:flex md:space-x-4">
          {/* Sidebar for Desktop */}
          <div className="hidden md:block md:w-1/4 lg:w-1/4">
            <Sidebar />
          </div>

          {/* Page Content */}
          <div className="md:w-3/4 lg:w-3/4 md:ml-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesLayout;
