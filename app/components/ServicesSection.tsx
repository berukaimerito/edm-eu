// app/components/ServicesSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface Service {
  title: string;
  link: string;
  logoSrc: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">{t('services.title')}</h2>
      <hr className="border-t-2 border-gray-300 mb-8 w-24 mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-md border border-primary rounded-lg hover:shadow-lg transition-shadow duration-300 feature_rectangle"
          >
            <img
              src={service.logoSrc}
              alt={service.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <span className="text-xl font-semibold text-primary text-center">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
