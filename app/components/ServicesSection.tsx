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
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 text-primary">
        {t('services.title')}
      </h2>

      {/* Horizontal Separator Line */}
      <div className="border-t-2 border-orange-500 mb-8"></div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            className="flex flex-col sm:flex-row items-center p-4 bg-white rounded-md border border-gray-300 hover:border-orange-500 transition-colors duration-200"
          >
            {/* Service Icon */}
            <img
              src={service.logoSrc}
              alt={service.title}
              className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4 object-contain"
            />
            {/* Service Title */}
            <span className="text-sm font-semibold text-center sm:text-left text-gray-700 break-words">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
