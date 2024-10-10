// app/services/registered-mail-hr/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Image from 'next/image';

const RegisteredMailHRPage: React.FC = () => {
  const { t } = useTranslation('services');

  // Access the content
  const registeredMailHR = t('registered_mail_hr', { returnObjects: true }) as {
    title: string;
    image?: string;
    description: string;
    sections: {
      e_payslip: {
        title: string;
        description: string;
      };
      e_notification: {
        title: string;
        description: string;
      };
      e_recruitment_processes: {
        title: string;
        description: string;
      };
      e_hr_archive: {
        title: string;
        description: string;
      };
      leading_sectors: {
        title: string;
        list: string[];
      };
      who_can_switch: {
        title: string;
        description: string;
      };
      backup_of_personnel_files: {
        title: string;
        description: string;
      };
      why_edm_kep_hr: {
        title: string;
        sections: {
          title: string;
          description: string;
        }[];
      };
      cost_saving: {
        title: string;
        image: string;
      };
      references: {
        title: string;
        logos: string[];
      };
    };
  };

  return (
    <>
      <Head>
        <title>{registeredMailHR.title} | EDM Europe</title>
        <meta name="description" content={registeredMailHR.description.substring(0, 150)} />
      </Head>
      <div className="space-y-8">
        {/* Service Title */}
        <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-700">
          {registeredMailHR.title}
        </h1>

        {/* Image */}
        {registeredMailHR.image && (
          <div className="mb-6">
            <Image
              src={registeredMailHR.image}
              alt={registeredMailHR.title}
              width={800}
              height={450}
              className="rounded-md shadow-md object-cover w-full h-auto"
            />
          </div>
        )}

        {/* Description */}
        <p className="mb-6 text-gray-600 text-lg whitespace-pre-line">
          {registeredMailHR.description}
        </p>

        {/* Sections */}
        {registeredMailHR.sections && (
          <>
            {/* E-Payslip */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.e_payslip.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {registeredMailHR.sections.e_payslip.description}
              </p>
            </section>

            {/* E-Notification */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.e_notification.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {registeredMailHR.sections.e_notification.description}
              </p>
            </section>

            {/* E-Recruitment Processes */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.e_recruitment_processes.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {registeredMailHR.sections.e_recruitment_processes.description}
              </p>
            </section>

            {/* E-HR Archive */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.e_hr_archive.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {registeredMailHR.sections.e_hr_archive.description}
              </p>
            </section>

            {/* Leading Sectors */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.leading_sectors.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {registeredMailHR.sections.leading_sectors.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Who Can Switch */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.who_can_switch.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {registeredMailHR.sections.who_can_switch.description}
              </p>
            </section>

            {/* Backup of Personnel Files */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.backup_of_personnel_files.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {registeredMailHR.sections.backup_of_personnel_files.description}
              </p>
            </section>

            {/* Why EDM KEP HR */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.why_edm_kep_hr.title}
              </h2>
              {registeredMailHR.sections.why_edm_kep_hr.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-700">{section.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{section.description}</p>
                </div>
              ))}
            </section>

            {/* References */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {registeredMailHR.sections.references.title}
              </h2>
              {/* Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {registeredMailHR.sections.references.logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-md hover:shadow-md transition-shadow duration-200"
                  >
                    <img
                      src={`/brands/${logo.replace('logo', 'brand')}`}
                      alt={`Logo ${index + 1}`}
                      className="max-h-16 mx-auto"
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default RegisteredMailHRPage;
