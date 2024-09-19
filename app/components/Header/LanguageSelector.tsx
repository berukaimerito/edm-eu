// app/components/Header/LanguageSelector.tsx
'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline'; // Corrected import path
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface Language {
  code: string;
  label: string;
  flag: string;
  url?: string; // Optional external URL
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '/icons/en.png' },
  { code: 'it', label: 'Italiano', flag: '/icons/it.png' },
  { code: 'pl', label: 'Polski', flag: '/icons/pl.png' },
  { code: 'tr', label: 'Türkçe', flag: '/icons/tr.png', url: 'https://www.edmbilisim.com.tr' }, // Added URL
];

const LanguageSelector: React.FC = () => {
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
      <div>
        <Menu.Button className="flex items-center bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
          <Image src={currentLanguage.flag} alt={`${currentLanguage.label} flag`} width={20} height={15} />
          <span className="ml-2">{currentLanguage.label}</span>
          <ChevronDownIcon className="ml-1 h-5 w-5" />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
        {languages.map((lang) => (
          <Menu.Item key={lang.code}>
            {({ active }) => (
              <button
                onClick={() => changeLanguage(lang.code, lang.url)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } flex items-center w-full px-4 py-2 text-left text-sm`}
              >
                <Image src={lang.flag} alt={`${lang.label} flag`} width={20} height={15} />
                <span className="ml-2">{lang.label}</span>
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSelector;
