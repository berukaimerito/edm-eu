'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

const EInvoices: React.FC = () => {
  const { t } = useTranslation('services');

  // Accessing the content
  const EInvoices = t('e_bill', { returnObjects: true }) as {
    title: string;
    youtube_embed: string;
    description: string;
    differences: {
      title: string;
      points: string[];
    };
    who_can_switch: {
      title: string;
      description: string;
      types: {
        title: string;
        description: string;
      }[];
    };
    is_mandatory: {
      title: string;
      description: string;
    };
    why_edm_e_invoice: {
      title: string;
      sections: {
        title: string;
        description?: string;
        list?: string[];
      }[];
    };
  };

  return (
    <>
      <Head>
        <title>{EInvoices.title} | EDM Europe</title>
        <meta
          name="description"
          content="Learn more about EDM Europe's E-Invoice service."
        />
      </Head>
      <div className="flex">
        <main className="flex-1 p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
            {EInvoices.title}
          </h1>

          {/* YouTube Embed */}
          {EInvoices.youtube_embed && (
            <div className="mb-6">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${EInvoices.youtube_embed}`}
                title="E-Invoice Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md shadow-md"
              ></iframe>
            </div>
          )}

          {/* Description */}
          <p className="mb-6 text-gray-600 text-lg">{EInvoices.description}</p>

          {/* Differences */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {EInvoices.differences.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {EInvoices.differences.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Who Can Switch */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {EInvoices.who_can_switch.title}
            </h2>
            <p className="mb-4 text-gray-600">
              {EInvoices.who_can_switch.description}
            </p>
            {EInvoices.who_can_switch.types.map((type, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </section>

          {/* Is Mandatory */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {EInvoices.is_mandatory.title}
            </h2>
            <p className="text-gray-600">{EInvoices.is_mandatory.description}</p>
          </section>

          {/* Why EDM E-Invoice */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {EInvoices.why_edm_e_invoice.title}
            </h2>
            {EInvoices.why_edm_e_invoice.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-gray-600 mb-2">
                    {section.description}
                  </p>
                )}
                {section.list && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default EInvoices;

