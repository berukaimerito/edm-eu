// services/layout.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons for Menu and X icons

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
    <div className="flex">
      {/* Sidebar for Desktop */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Mobile Dropdown Menu */}
        <div className="mb-4 md:hidden flex justify-center">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow-md hover:bg-gray-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="mr-2">Show Menu</span>
            {isDropdownOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-md shadow-lg w-11/12 max-w-sm z-40 transition ease-out duration-300"
          >
            <ul className="py-2">
              {/* The dropdown items will be rendered in Sidebar.tsx */}
              <Sidebar isMobile />
            </ul>
          </div>
        )}

        {children}
      </main>
    </div>
  );
};

export default ServicesLayout;
