// app/components/Header/Header.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  GlobeAltIcon,
  XMarkIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/solid';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

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

  // Define services array using translated names
  const services = [
    {
      name: t('services.e_invoices'),
      path: '/services/e-invoices',
      icon: DocumentTextIcon,
    },
    {
      name: t('services.erm_hr'),
      path: '/services/registered-mail-hr',
      icon: DocumentTextIcon,
    },
    {
      name: t('services.e_reconciliation'),
      path: '/services/e-reconciliation',
      icon: DocumentTextIcon,
    },
    {
      name: t('services.cloud_backup'),
      path: '/services/cloud-backup',
      icon: DocumentTextIcon,
    },
    {
      name: t('services.e_document_management_system'),
      path: '/services/e-document-management-system',
      icon: DocumentTextIcon,
    },
  ];

  return (
    <header className="bg-white text-black border-b border-secondary relative z-50">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            {/* Updated the container to span full width and removed centering */}
            <div className="w-full px-4 py-5 flex items-center justify-between">
              {/* Left: Logo Only */}
              <Link href="/" className="flex items-center">
                {/* Logo Image */}
                <Image
                  src="/logos/edm-logo.png"
                  alt="EDM Logo"
                  width={40} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="object-contain"
                />
              </Link>

              {/* Center: Navigation (hidden on mobile) */}
              <div className="hidden md:flex items-center space-x-8">
                {/* Services Menu */}
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center px-3 py-2 rounded-md hover:text-orange-500 transition-colors duration-200 focus:outline-none border-b-2 border-transparent hover:border-orange-500"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" />
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
                    <div className="absolute left-0 mt-2 w-80 bg-white text-gray-900 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="flex items-center px-4 py-2 text-sm border-b border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)}
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
                <Link
                  href="/organizational"
                  className="flex items-center px-3 py-2 rounded-md border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                >
                  <GlobeAltIcon className="h-5 w-5 mr-2 text-secondary" /> {t('erpcloudy.title')}
                </Link>

                {/* Info */}
                <Link
                  href="/info"
                  className="flex items-center px-3 py-2 rounded-md border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                >
                  <InformationCircleIcon className="h-5 w-5 mr-2 text-secondary" /> {t('info.title')}
                </Link>
              </div>

              {/* Right: Language Selector and Mobile Menu Button */}
              <div className="flex items-center space-x-2">
                {/* Always Visible Language Selector */}
                <div>
                  <LanguageSelector />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                  <Disclosure.Button className="flex items-center px-3 py-2 rounded-md hover:text-orange-500 transition-colors duration-200 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    ) : (
                      <EllipsisHorizontalCircleIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="md:hidden bg-white relative">
              <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 sm:px-6">
                {/* Services Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center w-full text-left px-3 py-2 rounded-md hover:text-orange-500 transition-colors duration-200 focus:outline-none border-b-2 border-transparent hover:border-orange-500"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" />
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
                    <div className="mt-1 pl-8 pr-4">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="flex items-center px-4 py-2 text-sm border-b border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <service.icon className="h-5 w-5 mr-2 text-secondary" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </Transition>
                </div>

                {/* ERP Cloudy */}
                <Link
                  href="/organizational"
                  className="flex items-center px-3 py-2 rounded-md border-b border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                >
                  <GlobeAltIcon className="h-5 w-5 mr-2 text-secondary" /> {t('erpcloudy.title')}
                </Link>

                {/* Info */}
                <Link
                  href="/info"
                  className="flex items-center px-3 py-2 rounded-md border-b border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                >
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
