// app/components/Header/Header.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,        // Replaced Icon for Services
  InformationCircleIcon,   // Icon for Info
  GlobeAltIcon,            // Icon for ERP Cloudy
  XMarkIcon,
  EllipsisHorizontalCircleIcon} from '@heroicons/react/24/solid';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const services = [
  { name: 'E-Invoices', path: '/services/e-invoices', icon: DocumentTextIcon },
  { name: 'E-Receipt', path: '/services/e-receipt', icon: DocumentTextIcon },
  { name: 'E-Consensus', path: '/services/e-consensus', icon: DocumentTextIcon },
  { name: 'Cloud Backup', path: '/services/cloud-backup', icon: DocumentTextIcon },
  { name: 'E-Document Management System', path: '/services/e-document-management-system', icon: DocumentTextIcon },
];

const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-primary text-white border-b border-secondary relative z-50">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              {/* Left: Title */}
              <Link href="/" className="text-2xl font-bold flex items-center">
                {/* Placeholder for future logo */}
                <span className="ml-2">EDM Europe Website</span>
              </Link>

              {/* Center: Navigation (hidden on mobile) */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Services Menu */}
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" /> {/* Updated Icon */}
                    {t('services.title')}
                    <ChevronDownIcon
                      className={`h-5 w-5 ml-1 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu with Transition */}
                  <Transition
                    show={isServicesOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="absolute right-0 mt-2 w-80 bg-white text-gray-900 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.path}
                            className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)} // Close dropdown on selection
                          >
                            <service.icon className="h-5 w-5 mr-2 text-secondary" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Transition>
                </div>

                {/* ERP Cloudy */}
                <Link href="/organizational" className="flex items-center px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                  <GlobeAltIcon className="h-5 w-5 mr-2 text-secondary" /> {t('erpcloudy.title')}
                </Link>

                {/* Info */}
                <Link href="/info" className="flex items-center px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                  <InformationCircleIcon className="h-5 w-5 mr-2 text-secondary" /> {t('info.title')}
                </Link>
              </div>

              {/* Right: Language Selector and Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                {/* Always Visible Language Selector */}
                <div>
                  <LanguageSelector />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                  <Disclosure.Button className="flex items-center px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <>
                        <span className="mr-2"></span>
                        < EllipsisHorizontalCircleIcon className="h-6 w-6" aria-hidden="true" />
                      </>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="md:hidden bg-primary relative">
              <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* Services Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center w-full text-left px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors duration-200 focus:outline-none"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" /> {/* Updated Icon */}
                    {t('services.title')}
                    <ChevronRightIcon
                      className={`h-5 w-5 ml-auto transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-90' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu with Transition */}
                  <Transition
                    show={isServicesOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="absolute right-0 mt-1 w-80 bg-white text-gray-900 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.path}
                            className="flex items-center px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)} // Close dropdown on selection
                          >
                            <service.icon className="h-5 w-5 mr-2 text-secondary" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Transition>
                </div>

                {/* ERP Cloudy */}
                <Link href="/organizational" className="flex items-center px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors duration-200">
                  <GlobeAltIcon className="h-5 w-5 mr-2 text-secondary" /> {t('erpcloudy.title')}
                </Link>

                {/* Info */}
                <Link href="/info" className="flex items-center px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors duration-200">
                  <InformationCircleIcon className="h-5 w-5 mr-2 text-secondary" /> {t('info.title')}
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
