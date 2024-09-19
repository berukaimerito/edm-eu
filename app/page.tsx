// app/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import CarouselHome from './components/Carousel/CarouselHome';

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">{t('welcome')}</h1>
      <p className="text-lg mb-8 text-center md:text-left">{t('description')}</p>
      <CarouselHome />
    </div>
  );
};

export default HomePage;
