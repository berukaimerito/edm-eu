'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (lng === 'tr') {
      window.location.href = '/tr';
    } else {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-gray-700 text-white p-2 rounded"
    >
      <option value="en">EN</option>
      <option value="it">IT</option>
      <option value="pl">PL</option>
      <option value="tr">TR</option>
    </select>
  );
};

export default LanguageSelector;
