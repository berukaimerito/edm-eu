// app/services/e-document-management-system/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';


const EDocumentManagementSystemPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Type assertion to match the provided JSON structure
  const benefits = t('e_document_management_system.benefits', { returnObjects: true }) as {
    what_can_be_done_with_ebys: {
      title: string;
      description: string;
    };
    basic_functions: {
      title: string;
      description: string;
    };
    indexing: {
      title: string;
      description: string;
    };
    scalability: {
      title: string;
      description: string;
    };
    distributed_operation_and_cache_support: {
      title: string;
      description: string;
    };
    e_signature_compatible_structure: {
      title: string;
      description: string;
    };
    digitization_management: {
      title: string;
      description: string;
    };
    why_ebm_ebys: {
      title: string;
      description: string;
    };
    access_ease: {
      title: string;
      description: string;
    };
  };

  return (
    <>
      <Head>
        <title>{t('e_document_management_system.title')} | EDM Europe</title>
        <meta
          name="description"
          content={t('e_document_management_system.description')}
        />
      </Head>
      <div className="space-y-8">
        {/* Main Content */}
        <div>
          {/* Service Title */}
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
            {t('e_document_management_system.title')}
          </h1>

          {/* YouTube Video Embed */}
          <div className="mb-6">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${t('e_document_management_system.youtube_embed')}`} 
              title="EBYS Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md shadow-md"
            ></iframe>
          </div>

          {/* Service Description */}
          <p className="mb-6 text-gray-600 text-lg">
            {t('e_document_management_system.description')}
          </p>

          {/* Benefits Sections */}
          <section className="mb-8">
            {/* WHAT CAN BE DONE WITH EBYS? */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.what_can_be_done_with_ebys.title}
              </h2>
              <p className="text-gray-600">
                {benefits.what_can_be_done_with_ebys.description}
              </p>
            </div>

            {/* EBYS BASIC FUNCTIONS */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.basic_functions.title}
              </h2>
              <p className="text-gray-600">
                {benefits.basic_functions.description}
              </p>
            </div>

            {/* INDEXING */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.indexing.title}
              </h2>
              <p className="text-gray-600">
                {benefits.indexing.description}
              </p>
            </div>

            {/* SCALABILITY */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.scalability.title}
              </h2>
              <p className="text-gray-600">
                {benefits.scalability.description}
              </p>
            </div>

            {/* DISTRIBUTED OPERATION AND CACHE SUPPORT */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.distributed_operation_and_cache_support.title}
              </h2>
              <p className="text-gray-600">
                {benefits.distributed_operation_and_cache_support.description}
              </p>
            </div>

            {/* E-SIGNATURE COMPATIBLE STRUCTURE */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.e_signature_compatible_structure.title}
              </h2>
              <p className="text-gray-600">
                {benefits.e_signature_compatible_structure.description}
              </p>
            </div>

            {/* DIGITIZATION MANAGEMENT */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.digitization_management.title}
              </h2>
              <p className="text-gray-600">
                {benefits.digitization_management.description}
              </p>
            </div>

            {/* WHY EDM EBYS? */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.why_ebm_ebys.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {benefits.why_ebm_ebys.description}
              </p>
            </div>

            {/* ACCESS EASE */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {benefits.access_ease.title}
              </h2>
              <p className="text-gray-600">
                {benefits.access_ease.description}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EDocumentManagementSystemPage;
