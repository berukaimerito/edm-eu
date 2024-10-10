// app/services/e-consensus/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';

const EConsensusPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Accessing the content
  const eConsensusData = t('e_consensus', { returnObjects: true }) as {
    title: string;
    image?: string;
    description: string;
    benefits: {
      why_edm_e_consensus: string;
      legally_valid: {
        title: string;
        description: string;
      };
      time_and_cost_advantages: {
        title: string;
        description: string;
      };
      reliable: {
        title: string;
        description: string;
      };
      immediate_access: {
        title: string;
        description: string;
      };
      fully_integrated: {
        title: string;
        description: string;
      };
    };
    subpages: {
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
  };

  if (!eConsensusData) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Head>
        <title>{eConsensusData.title} | EDM Europe</title>
        <meta
          name="description"
          content={eConsensusData.description || 'EDM Europe E-Consensus Service'}
        />
      </Head>
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
            {eConsensusData.title}
          </h1>

          {/* Image */}
          {eConsensusData.image && (
            <div className="mb-6">
              <Image
                src={eConsensusData.image}
                alt={eConsensusData.title}
                width={800}
                height={450}
                className="rounded-md shadow-md object-cover w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <p className="mb-6 text-gray-600 text-lg">{eConsensusData.description}</p>

          {/* Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.benefits.why_edm_e_consensus}
            </h2>

            {/* Legally Valid */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {eConsensusData.benefits.legally_valid.title}
              </h3>
              <p className="text-gray-600">
                {eConsensusData.benefits.legally_valid.description}
              </p>
            </div>

            {/* Time and Cost Advantages */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {eConsensusData.benefits.time_and_cost_advantages.title}
              </h3>
              <p className="text-gray-600">
                {eConsensusData.benefits.time_and_cost_advantages.description}
              </p>
            </div>

            {/* Reliable */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {eConsensusData.benefits.reliable.title}
              </h3>
              <p className="text-gray-600">
                {eConsensusData.benefits.reliable.description}
              </p>
            </div>

            {/* Immediate Access */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {eConsensusData.benefits.immediate_access.title}
              </h3>
              <p className="text-gray-600">
                {eConsensusData.benefits.immediate_access.description}
              </p>
            </div>

            {/* Fully Integrated */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {eConsensusData.benefits.fully_integrated.title}
              </h3>
              <p className="text-gray-600">
                {eConsensusData.benefits.fully_integrated.description}
              </p>
            </div>
          </section>

          {/* Subpages Sections */}
          {/* KEP: Registered Electronic Mail */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.kep_registered_e_mail.title}
            </h2>
            <p className="text-gray-600">
              {eConsensusData.subpages.kep_registered_e_mail.description}
            </p>
          </section>

          {/* Corporate Mail Reconciliation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.corporate_mail_reconciliation.title}
            </h2>
            <p className="text-gray-600">
              {eConsensusData.subpages.corporate_mail_reconciliation.description}
            </p>
          </section>

          {/* KEP Reconciliation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.kep_reconciliation.title}
            </h2>
            <p className="text-gray-600">
              {eConsensusData.subpages.kep_reconciliation.description}
            </p>
          </section>

          {/* Who Can Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.who_can_use.title}
            </h2>
            <p className="mb-4 text-gray-600">
              {eConsensusData.subpages.who_can_use.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {eConsensusData.subpages.who_can_use.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Why EDM E-Consensus */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.why_edm_e_consensus.title}
            </h2>
            <p className="text-gray-600">
              {eConsensusData.subpages.why_edm_e_consensus.description}
            </p>
          </section>

          {/* Is Mandatory */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.is_mandatory.title}
            </h2>
            <p className="text-gray-600">
              {eConsensusData.subpages.is_mandatory.description}
            </p>
          </section>

          {/* Leading Sectors */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {eConsensusData.subpages.leading_sectors.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {eConsensusData.subpages.leading_sectors.list.map((item, index) => (
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
