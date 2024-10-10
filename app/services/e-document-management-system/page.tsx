// app/services/e-document-management-system/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';

const EDocumentManagementSystemPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Accessing the content
  const edms = t('e_document_management_system', { returnObjects: true }) as {
    title: string;
    slug: string;
    image?: string;
    description?: string;
    benefits: {
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
  };

  if (!edms) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Head>
        <title>{edms.title} | EDM Europe</title>
        <meta
          name="description"
          content={edms.description || 'EDM Europe Services'}
        />
      </Head>
      <div className="space-y-8">
        {/* Main Content */}
        <div>
          {/* Service Title */}
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
            {edms.title}
          </h1>

          {/* Image */}
          {edms.image && (
            <div className="mb-6">
              <Image
                src={edms.image}
                alt={edms.title}
                width={800}
                height={450}
                className="rounded-md shadow-md object-cover w-full h-auto"
              />
            </div>
          )}

          {/* Service Description */}
          {edms.description && (
            <p className="mb-6 text-gray-600 text-lg whitespace-pre-line">
              {edms.description}
            </p>
          )}

          {/* Benefits Sections */}
          <section className="mb-8">
            {/* WHAT CAN BE DONE WITH EBYS? */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.what_can_be_done_with_ebys.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.what_can_be_done_with_ebys.description}
              </p>
            </div>

            {/* EBYS BASIC FUNCTIONS */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.basic_functions.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.basic_functions.description}
              </p>
            </div>

            {/* INDEXING */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.indexing.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.indexing.description}
              </p>
            </div>

            {/* SCALABILITY */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.scalability.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.scalability.description}
              </p>
            </div>

            {/* DISTRIBUTED OPERATION AND CACHE SUPPORT */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.distributed_operation_and_cache_support.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.distributed_operation_and_cache_support.description}
              </p>
            </div>

            {/* E-SIGNATURE COMPATIBLE STRUCTURE */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.e_signature_compatible_structure.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.e_signature_compatible_structure.description}
              </p>
            </div>

            {/* DIGITIZATION MANAGEMENT */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.digitization_management.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.digitization_management.description}
              </p>
            </div>

            {/* WHY EDM EBYS? */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.why_ebm_ebys.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {edms.benefits.why_ebm_ebys.description}
              </p>
            </div>

            {/* ACCESS EASE */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {edms.benefits.access_ease.title}
              </h2>
              <p className="text-gray-600">
                {edms.benefits.access_ease.description}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EDocumentManagementSystemPage;
