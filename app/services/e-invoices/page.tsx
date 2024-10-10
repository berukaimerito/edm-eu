// app/services/e-invoices/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';

const EInvoices: React.FC = () => {
  const { t } = useTranslation('services');

  // Accessing the content
  const eInvoicesData = t('e_bill', { returnObjects: true }) as {
    title: string;
    image?: string;
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
        <title>{eInvoicesData.title} | EDM Europe</title>
        <meta
          name="description"
          content={
            eInvoicesData.description || "Learn more about EDM Europe's E-Invoice service."
          }
        />
      </Head>
      <div className="flex">
        <main className="flex-1 p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
            {eInvoicesData.title}
          </h1>

          {/* Image */}
          {eInvoicesData.image && (
            <div className="mb-4">
              <Image
                src={eInvoicesData.image}
                alt={eInvoicesData.title}
                width={800}
                height={450}
                className="rounded-md shadow-md object-cover w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <p className="mb-6 text-gray-600 text-lg">{eInvoicesData.description}</p>

          {/* Differences */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eInvoicesData.differences.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {eInvoicesData.differences.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Who Can Switch */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eInvoicesData.who_can_switch.title}
            </h2>
            <p className="mb-4 text-gray-600">
              {eInvoicesData.who_can_switch.description}
            </p>
            {eInvoicesData.who_can_switch.types.map((type, index) => (
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
              {eInvoicesData.is_mandatory.title}
            </h2>
            <p className="text-gray-600">{eInvoicesData.is_mandatory.description}</p>
          </section>

          {/* Why EDM E-Invoice */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eInvoicesData.why_edm_e_invoice.title}
            </h2>
            {eInvoicesData.why_edm_e_invoice.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-gray-600 mb-2">{section.description}</p>
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
