// app/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-lg">{t('description')}</p>
      {/* Add more translated content as needed */}
    </div>
  );
};

export default HomePage;
