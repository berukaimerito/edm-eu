// app/components/Header/LanguageSelector.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

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
  { code: 'tr', label: 'Türkçe', flag: '/icons/tr.png', url: 'https://www.edmbilisim.com.tr' }, // External URL
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string, url?: string) => {
    if (url) {
      window.location.href = url;
    } else {
      i18n.changeLanguage(lng);
      setIsOpen(false);
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={selectorRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-secondary text-white p-2 rounded-md hover:bg-accent transition-colors duration-200 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Image src={currentLanguage.flag} alt={`${currentLanguage.label} flag`} width={24} height={16} />
        <span className="hidden md:inline ml-2">{currentLanguage.label}</span>
        <ChevronDownIcon className="ml-1 h-4 w-4 text-secondary" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code, lang.url)}
                className="flex items-center w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-white transition-colors duration-200 focus:outline-none"
              >
                <Image src={lang.flag} alt={`${lang.label} flag`} width={24} height={16} />
                <span className="ml-2 hidden md:inline">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
