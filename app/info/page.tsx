// app/information/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import ContactForm from '../components/ContactForm';
import LanguageSelector from '../components/Header/LanguageSelector'; // Ensure correct path

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const InformationPage: React.FC = () => {
  const { t } = useTranslation('common');

  // Replace with your actual coordinates
  const latitude = 40.7128; // Example: New York City Latitude
  const longitude = -74.0060; // Example: New York City Longitude

  return (
    <div className="min-h-screen bg-background text-foreground py-8 relative">
      {/* **Change:** Position LanguageSelector higher to prevent overlapping */}

      <div className="container mx-auto px-4">
        {/* Map Section */}
        <section className="mb-12">
          {/* **Change:** Removed the map title */}
          <Map latitude={latitude} longitude={longitude} locationName="EDM Europe" />
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
