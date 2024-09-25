// app/references/page.tsx
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReferencesPage: React.FC = () => {
  const { t } = useTranslation('common');

  // Predefined list of brand images
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const brandImages = [
      '/brands/brand1.png',
      '/brands/brand2.png',
      '/brands/brand3.png',
      '/brands/brand4.png',
      '/brands/brand5.png',
      '/brands/brand6.png',
      '/brands/brand7.png',
      '/brands/brand8.png',
      // Add more as needed
    ];
    setBrands(brandImages);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">{t('testimonials_section.left_text.heading')}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-md flex items-center justify-center">
            <img src={brand} alt={`Brand ${index + 1}`} className="w-24 h-24 object-contain" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          href="/testimonials"
          className="text-secondary font-semibold hover:underline"
        >
          {t('testimonials_section.left_text.customer_videos_link_text')}
        </Link>
      </div>
    </div>
  );
};

export default ReferencesPage;
