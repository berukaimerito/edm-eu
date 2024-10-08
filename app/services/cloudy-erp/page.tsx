// app/services/cloudy-erp/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';

const CloudyERPPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Accessing the content
  const cloudyERP = t('cloudy_erp', { returnObjects: true }) as {
    title: string;
    image?: string;
    description?: string;
    differences: {
      title: string;
      sections: {
        title: string;
        description: string;
      }[];
    };
  };

  if (!cloudyERP) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Head>
        <title>{cloudyERP.title} | EDM Europe</title>
        <meta
          name="description"
          content={
            cloudyERP.description
              ? cloudyERP.description.substring(0, 150)
              : 'EDM Europe Services'
          }
        />
      </Head>
      <div className="container mx-auto py-8 px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-700">
          {cloudyERP.title}
        </h1>

        {/* Image */}
        {cloudyERP.image && (
          <div className="mb-6">
            <Image
              src={cloudyERP.image}
              alt={cloudyERP.title}
              width={800}
              height={400}
              className="rounded-md shadow-md object-cover w-full h-auto"
            />
          </div>
        )}

        {/* Description */}
        {cloudyERP.description && (
          <p className="mb-8 text-gray-600 text-lg whitespace-pre-line">
            {cloudyERP.description}
          </p>
        )}

        {/* Differences */}
        {cloudyERP.differences && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {cloudyERP.differences.title}
            </h2>
            {cloudyERP.differences.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  {section.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default CloudyERPPage;
