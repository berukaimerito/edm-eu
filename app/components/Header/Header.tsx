// app/components/Header/Header.tsx
'use client';

import React from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,    // Replaced Cog6ToothIcon with DocumentTextIcon for Services
  InformationCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <header className="bg-primary text-white border-b border-secondary">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              {/* Title aligned to the left */}
              <Link href="/" legacyBehavior>
                <a className="text-2xl font-bold flex items-center">
                  {/* Placeholder for future icon */}
                  {/* <Image src="/icons/logo.png" alt="Logo" width={40} height={40} /> */}
                  <span className="ml-2">EDM EU Website</span>
                </a>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                <Menu as="div" className="relative text-left">
                  {({ open: menuOpen }) => (
                    <>
                      <Menu.Button className="flex items-center hover:text-accent transition-colors duration-200">
                        {t('services.title')}
                        <ChevronDownIcon
                          className={`h-5 w-5 ml-1 transition-transform duration-200 ${
                            menuOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </Menu.Button>
                      <Menu.Items className="absolute mt-2 w-80 bg-white text-gray-900 rounded-md shadow-lg z-20">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }: { active: boolean }) => (
                              <Link href="/services/e-invoice" legacyBehavior>
                                <a
                                  className={`flex items-center px-4 py-2 ${
                                    active ? 'bg-gray-100' : ''
                                  } hover:bg-gray-100 transition-colors duration-200`}
                                >
                                  <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" />
                                  {t('services.e_invoice')}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }: { active: boolean }) => (
                              <Link href="/services/another-service" legacyBehavior>
                                <a
                                  className={`flex items-center px-4 py-2 ${
                                    active ? 'bg-gray-100' : ''
                                  } hover:bg-gray-100 transition-colors duration-200`}
                                >
                                  <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" />
                                  {t('services.another_service')}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          {/* Add more services as needed */}
                        </div>
                      </Menu.Items>
                    </>
                  )}
                </Menu>

                <Link href="/erpcloudy" legacyBehavior>
                  <a className="flex items-center hover:text-accent transition-colors duration-200">
                    <GlobeAltIcon className="h-5 w-5 mr-1 text-secondary" /> {t('erpcloudy.title')}
                  </a>
                </Link>

                <Link href="/info" legacyBehavior>
                  <a className="flex items-center hover:text-accent transition-colors duration-200">
                    <InformationCircleIcon className="h-5 w-5 mr-1 text-secondary" /> {t('info.title')}
                  </a>
                </Link>
              </div>

              {/* Language Selector and Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                {/* Desktop Language Selector */}
                <div className="hidden md:block">
                  <LanguageSelector />
                </div>

                {/* Mobile Language Selector and Menu Button */}
                <div className="md:hidden flex items-center space-x-2">
                  <LanguageSelector />
                  <Disclosure.Button className="text-white focus:outline-none">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="md:hidden bg-primary">
              <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Menu as="div" className="relative text-left">
                  {({ open: menuOpen }) => (
                    <>
                      <Menu.Button className="flex items-center w-full text-left px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition-colors duration-200">
                        {t('services.title')}
                        <ChevronRightIcon
                          className={`h-5 w-5 ml-auto transition-transform duration-200 ${
                            menuOpen ? 'rotate-90' : 'rotate-0'
                          }`}
                        />
                      </Menu.Button>
                      <Menu.Items className="mt-1 space-y-1 w-full">
                        <Menu.Item>
                          {({ active }: { active: boolean }) => (
                            <Link href="/services/e-invoice" legacyBehavior>
                              <a
                                className={`flex items-center px-4 py-2 ${
                                  active ? 'bg-secondary' : ''
                                } hover:bg-secondary hover:text-white transition-colors duration-200`}
                              >
                                <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" />
                                {t('services.e_invoice')}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }: { active: boolean }) => (
                            <Link href="/services/another-service" legacyBehavior>
                              <a
                                className={`flex items-center px-4 py-2 ${
                                  active ? 'bg-secondary' : ''
                                } hover:bg-secondary hover:text-white transition-colors duration-200`}
                              >
                                <DocumentTextIcon className="h-5 w-5 mr-2 text-secondary" />
                                {t('services.another_service')}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        {/* Add more services as needed */}
                      </Menu.Items>
                    </>
                  )}
                </Menu>

                <Link href="/erpcloudy" legacyBehavior>
                  <a className="flex items-center px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition-colors duration-200">
                    <GlobeAltIcon className="h-5 w-5 mr-2 text-secondary" /> {t('erpcloudy.title')}
                  </a>
                </Link>

                <Link href="/info" legacyBehavior>
                  <a className="flex items-center px-3 py-2 rounded-md hover:bg-secondary hover:text-white transition-colors duration-200">
                    <InformationCircleIcon className="h-5 w-5 mr-2 text-secondary" /> {t('info.title')}
                  </a>
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
