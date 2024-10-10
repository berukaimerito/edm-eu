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
  { code: 'en', label: 'English', flag: '/icons/gb.png' },
  { code: 'it', label: 'Italiano', flag: '/icons/it.png' },
  { code: 'pl', label: 'Polski', flag: '/icons/pl.png' },
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

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-50" ref={selectorRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-secondary text-white px-3 py-2 rounded-md hover:bg-secondary-hover transition-colors duration-200 focus:outline-none border border-transparent hover:border-secondary"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <Image
          src={currentLanguage.flag}
          alt={`${currentLanguage.label} flag`}
          width={24}
          height={16}
          className="object-contain"
        />
        <span className="hidden sm:inline ml-2">{currentLanguage.label}</span>
        <ChevronDownIcon className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code, lang.url)}
                className="flex items-center w-full px-4 py-2 text-left text-sm text-black border-b border-transparent hover:text-secondary hover:border-secondary transition-colors duration-200 focus:outline-none"
              >
                <Image
                  src={lang.flag}
                  alt={`${lang.label} flag`}
                  width={24}
                  height={16}
                  className="object-contain"
                />
                <span className="ml-2">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
