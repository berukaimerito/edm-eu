// app/services/cloud-backup/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

const CloudBackupPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Type assertion to inform TypeScript that the result is an array of strings
  const whoShouldUseList = t('cloud_backup.benefits.who_should_use_list', { returnObjects: true }) as string[];

  return (
    <>
      <Head>
        <title>{t('cloud_backup.title')} | EDM Europe</title>
        <meta name="description" content="EDM Europe Bulut Yedekleme hizmeti hakkında detaylı bilgi." />
      </Head>
      <div className="space-y-8">
        {/* Removed the banner */}
        {/* 
        <div
          className="w-full h-48 bg-cover bg-center rounded-md shadow-md banner"
          style={{ backgroundImage: 'url(/images/cloud-backup-banner.jpg)' }}
        ></div>
        */}

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">{t('cloud_backup.title')}</h1>

          {/* YouTube Embed */}
          <div className="mb-6">
            <iframe
              width="100%"
              height="400"
              src={t('cloud_backup.youtube_embed')}
              title="Bulut Yedekleme Videosu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md shadow-md"
            ></iframe>
          </div>

          {/* Description */}
          <p className="mb-6 text-gray-600 text-lg">{t('cloud_backup.description')}</p>

          {/* Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{t('cloud_backup.benefits.why_edm_cloud_backup')}</h2>

            {/* Immediate Access */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('cloud_backup.benefits.immediate_access')}</h3>
              <p className="text-gray-600">{t('cloud_backup.benefits.immediate_access_description')}</p>
            </div>

            {/* Timely Backup */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('cloud_backup.benefits.timely_backup')}</h3>
              <p className="text-gray-600">{t('cloud_backup.benefits.timely_backup_description')}</p>
            </div>

            {/* Simple Interface */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('cloud_backup.benefits.simple_interface')}</h3>
              <p className="text-gray-600">{t('cloud_backup.benefits.simple_interface_description')}</p>
            </div>

            {/* Secure Storage */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('cloud_backup.benefits.secure_storage')}</h3>
              <p className="text-gray-600">{t('cloud_backup.benefits.secure_storage_description')}</p>
            </div>

            {/* Automatic Backup */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('cloud_backup.benefits.automatic_backup')}</h3>
              <p className="text-gray-600">{t('cloud_backup.benefits.automatic_backup_description')}</p>
            </div>

            {/* Minimum Internet Usage */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-gray-700">{t('cloud_backup.benefits.minimum_internet_usage')}</h3>
              <p className="text-gray-600">{t('cloud_backup.benefits.minimum_internet_usage_description')}</p>
            </div>

            {/* Advantages */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">{t('cloud_backup.benefits.advantages')}</h2>
              <p className="text-gray-600 whitespace-pre-line">{t('cloud_backup.benefits.advantages_description')}</p>
            </div>

            {/* Who Should Use */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">{t('cloud_backup.benefits.who_should_use')}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {whoShouldUseList.map((item, index) => (
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
