'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">EDM EU Website</Link>
        </div>
        <nav className="flex space-x-6">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center focus:outline-none">
              Services <ChevronDownIcon className="h-5 w-5 ml-1" />
            </Menu.Button>
            <Menu.Items className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/services/e-invoice"
                    className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                  >
                    E-Invoice
                  </Link>
                )}
              </Menu.Item>
              {/* Add more services as needed */}
            </Menu.Items>
          </Menu>
          <Link href="/erp-cloudy" className="hover:text-gray-300">
            ERP Cloudy
          </Link>
          <Link href="/info" className="hover:text-gray-300">
            Info
          </Link>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
