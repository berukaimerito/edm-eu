// app/information/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import ContactForm from '../components/ContactForm';
// No need for LanguageSelector here

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const InformationPage: React.FC = () => {
  const { t } = useTranslation('common');

  // Replace with your actual coordinates
  const latitude = 40.7128; // Example: New York City Latitude
  const longitude = -74.0060; // Example: New York City Longitude

  return (
    <div className="min-h-screen bg-background text-foreground py-8 relative">
      <div className="container mx-auto px-4">
        {/* Map Section */}
        <section className="mb-12">
          <Map
            latitude={latitude}
            longitude={longitude}
            locationName={t('info.location_name')}
          />
        </section>

        {/* Contact Section */}
        <section>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default InformationPage;
