// app/components/Header/LanguageSelector.tsx
'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface Language {
  code: string;
  label: string;
  flag: string;
  url?: string; // Optional external URL
}

interface LanguageSelectorProps {
  isMobile?: boolean;
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '/icons/en.png' },
  { code: 'it', label: 'Italiano', flag: '/icons/it.png' },
  { code: 'pl', label: 'Polski', flag: '/icons/pl.png' },
  { code: 'tr', label: 'Türkçe', flag: '/icons/tr.png', url: 'https://www.edmbilisim.com.tr' }, // Added URL
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string, url?: string) => {
    if (url) {
      window.location.href = url;
    } else {
      i18n.changeLanguage(lng);
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Desktop Language Selector */}
      {!isMobile && (
        <Menu.Button className="flex items-center bg-secondary text-white px-3 py-2 rounded-md hover:bg-secondary-hover focus:outline-none transition-colors duration-200">
          <Image src={currentLanguage.flag} alt={`${currentLanguage.label} flag`} width={20} height={15} />
          <span className="ml-2">{currentLanguage.label}</span>
          <ChevronDownIcon className="ml-1 h-5 w-5 text-secondary" />
        </Menu.Button>
      )}

      {/* Mobile Language Selector (Only Flags) */}
      {isMobile && (
        <Menu.Button className="flex items-center bg-secondary text-white px-2 py-2 rounded-md hover:bg-secondary-hover focus:outline-none transition-colors duration-200">
          <Image src={currentLanguage.flag} alt={`${currentLanguage.label} flag`} width={20} height={15} />
        </Menu.Button>
      )}

      <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
        {languages.map((lang) => (
          <Menu.Item key={lang.code}>
            {({ active }: { active: boolean }) => (
              <button
                onClick={() => changeLanguage(lang.code, lang.url)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } flex items-center w-full px-4 py-2 text-left text-sm transition-colors duration-200`}
              >
                <Image src={lang.flag} alt={`${lang.label} flag`} width={20} height={15} />
                {!isMobile && <span className="ml-2">{lang.label}</span>}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSelector;
