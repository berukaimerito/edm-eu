// app/services/cloud-backup/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';

const CloudBackupPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Accessing the content
  const cloudBackup = t('cloud_backup', { returnObjects: true }) as {
    title: string;
    slug: string;
    image?: string;
    description?: string;
    benefits: {
      why_edm_cloud_backup: string;
      immediate_access: string;
      immediate_access_description: string;
      timely_backup: string;
      timely_backup_description: string;
      simple_interface: string;
      simple_interface_description: string;
      secure_storage: string;
      secure_storage_description: string;
      automatic_backup: string;
      automatic_backup_description: string;
      minimum_internet_usage: string;
      minimum_internet_usage_description: string;
      advantages: string;
      advantages_description: string;
      who_should_use: string;
      who_should_use_list: string[];
    };
  };

  if (!cloudBackup) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Head>
        <title>{cloudBackup.title} | EDM Europe</title>
        <meta
          name="description"
          content={
            cloudBackup.description
              ? cloudBackup.description.substring(0, 150)
              : 'EDM Europe Cloud Backup Service'
          }
        />
      </Head>
      <div className="space-y-8">
        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
            {cloudBackup.title}
          </h1>

          {/* Image */}
          {cloudBackup.image && (
            <div className="mb-6">
              <Image
                src={cloudBackup.image}
                alt={cloudBackup.title}
                width={800}
                height={450} // Adjusted height to match YouTube embed size
                className="rounded-md shadow-md object-cover w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          {cloudBackup.description && (
            <p className="mb-6 text-gray-600 text-lg whitespace-pre-line">
              {cloudBackup.description}
            </p>
          )}

          {/* Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {cloudBackup.benefits.why_edm_cloud_backup}
            </h2>

            {/* Immediate Access */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {cloudBackup.benefits.immediate_access}
              </h3>
              <p className="text-gray-600">
                {cloudBackup.benefits.immediate_access_description}
              </p>
            </div>

            {/* Timely Backup */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {cloudBackup.benefits.timely_backup}
              </h3>
              <p className="text-gray-600">
                {cloudBackup.benefits.timely_backup_description}
              </p>
            </div>

            {/* Simple Interface */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {cloudBackup.benefits.simple_interface}
              </h3>
              <p className="text-gray-600">
                {cloudBackup.benefits.simple_interface_description}
              </p>
            </div>

            {/* Secure Storage */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {cloudBackup.benefits.secure_storage}
              </h3>
              <p className="text-gray-600">
                {cloudBackup.benefits.secure_storage_description}
              </p>
            </div>

            {/* Automatic Backup */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {cloudBackup.benefits.automatic_backup}
              </h3>
              <p className="text-gray-600">
                {cloudBackup.benefits.automatic_backup_description}
              </p>
            </div>

            {/* Minimum Internet Usage */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                {cloudBackup.benefits.minimum_internet_usage}
              </h3>
              <p className="text-gray-600">
                {cloudBackup.benefits.minimum_internet_usage_description}
              </p>
            </div>

            {/* Advantages */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {cloudBackup.benefits.advantages}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {cloudBackup.benefits.advantages_description}
              </p>
            </div>

            {/* Who Should Use */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {cloudBackup.benefits.who_should_use}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {cloudBackup.benefits.who_should_use_list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CloudBackupPage;
