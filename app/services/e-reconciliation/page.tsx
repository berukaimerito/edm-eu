// app/services/e-consensus/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Sidebar from '@/app/components/Sidebar/Sidebar';

const EConsensusPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Type assertions to inform TypeScript about the expected structure
  const subpages = t('e_consensus.subpages', { returnObjects: true }) as {
    kep_registered_e_mail: {
      title: string;
      description: string;
    };
    corporate_mail_reconciliation: {
      title: string;
      description: string;
    };
    kep_reconciliation: {
      title: string;
      description: string;
    };
    who_can_use: {
      title: string;
      description: string;
      list: string[];
    };
    why_edm_e_consensus: {
      title: string;
      description: string;
    };
    is_mandatory: {
      title: string;
      description: string;
    };
    leading_sectors: {
      title: string;
      list: string[];
    };
  };

  return (
    <>
      <Head>
        <title>{t('e_consensus.title')} | EDM Europe</title>
        <meta name="description" content="EDM Europe E-Mutabakat hizmeti hakkında detaylı bilgi." />
      </Head>
      <div className="flex">
       

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">{t('e_consensus.title')}</h1>

          {/* YouTube Embed */}
          <div className="mb-6">
            <iframe
              width="100%"
              height="400"
              src={t('e_consensus.youtube_embed')}
              title="E-Mutabakat Videosu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md shadow-md"
            ></iframe>
          </div>

          {/* Description */}
          <p className="mb-6 text-gray-600 text-lg">{t('e_consensus.description')}</p>

          {/* Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{t('e_consensus.benefits.why_edm_e_consensus')}</h2>

            {/* Legally Valid */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('e_consensus.benefits.legally_valid.title')}</h3>
              <p className="text-gray-600">{t('e_consensus.benefits.legally_valid.description')}</p>
            </div>

            {/* Time and Cost Advantages */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('e_consensus.benefits.time_and_cost_advantages.title')}</h3>
              <p className="text-gray-600">{t('e_consensus.benefits.time_and_cost_advantages.description')}</p>
            </div>

            {/* Reliable */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('e_consensus.benefits.reliable.title')}</h3>
              <p className="text-gray-600">{t('e_consensus.benefits.reliable.description')}</p>
            </div>

            {/* Immediate Access */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('e_consensus.benefits.immediate_access.title')}</h3>
              <p className="text-gray-600">{t('e_consensus.benefits.immediate_access.description')}</p>
            </div>

            {/* Fully Integrated */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('e_consensus.benefits.fully_integrated.title')}</h3>
              <p className="text-gray-600">{t('e_consensus.benefits.fully_integrated.description')}</p>
            </div>
          </section>

          {/* Subpages Sections */}
          {/* KEP: Registered Electronic Mail */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.kep_registered_e_mail.title}</h2>
            <p className="text-gray-600">{subpages.kep_registered_e_mail.description}</p>
          </section>

          {/* Corporate Mail Reconciliation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.corporate_mail_reconciliation.title}</h2>
            <p className="text-gray-600">{subpages.corporate_mail_reconciliation.description}</p>
          </section>

          {/* KEP Reconciliation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.kep_reconciliation.title}</h2>
            <p className="text-gray-600">{subpages.kep_reconciliation.description}</p>
          </section>

          {/* Who Can Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.who_can_use.title}</h2>
            <p className="mb-4 text-gray-600">{subpages.who_can_use.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {subpages.who_can_use.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Why EDM E-Mutabakat */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.why_edm_e_consensus.title}</h2>
            <p className="text-gray-600">{subpages.why_edm_e_consensus.description}</p>
          </section>

          {/* Is Mandatory */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.is_mandatory.title}</h2>
            <p className="text-gray-600">{subpages.is_mandatory.description}</p>
          </section>

          {/* Leading Sectors */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{subpages.leading_sectors.title}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {subpages.leading_sectors.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default EConsensusPage;
