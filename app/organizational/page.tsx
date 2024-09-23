// app/organizational/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import CollapsibleSection from '@/app/components/CollapsibleSection';

// Define interfaces for the expected structure of the translation data
interface VisionAndMission {
  title: string;
  vision?: {
    title: string;
    description: string;
  };
  mission?: {
    title: string;
    description: string;
  };
}

interface HR {
  title: string;
  description: string;
}

interface Branch {
  name: string;
  code: string;
  iban: string;
  account_name: string;
}

interface BankAccountInfo {
  title: string;
  branches?: Branch[];
}

interface CorporatePrivacy {
  title: string;
  description: string;
}

interface PrivacyStatement {
  title: string;
  description: string;
}

const OrganizationalPage: React.FC = () => {
  const { t } = useTranslation('organizational');

  // Explicitly type the returned objects using the interfaces
  const visionAndMission = t('vision_and_mission', { returnObjects: true }) as VisionAndMission;
  const hr = t('hr', { returnObjects: true }) as HR;
  const bankAccountInfo = t('bank_account_information', { returnObjects: true }) as BankAccountInfo;
  const corporatePrivacy = t('corporate_data_privacy_statement', { returnObjects: true }) as CorporatePrivacy;
  const privacyStatement = t('privacy_statement', { returnObjects: true }) as PrivacyStatement;

  return (
    <>
      <Head>
        <title>{t('title')} | Organizational Information</title>
        <meta name="description" content={t('description')} />
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-700">{t('page_title')}</h1>

        {/* Vision and Mission */}
        {visionAndMission && (
          <CollapsibleSection title={visionAndMission.title}>
            {visionAndMission.vision && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">{visionAndMission.vision.title}</h2>
                <p className="text-gray-600">{visionAndMission.vision.description}</p>
              </div>
            )}
            {visionAndMission.mission && (
              <div>
                <h2 className="text-xl font-semibold text-gray-700">{visionAndMission.mission.title}</h2>
                <p className="text-gray-600">{visionAndMission.mission.description}</p>
              </div>
            )}
          </CollapsibleSection>
        )}

        {/* Human Resources */}
        {hr && (
          <CollapsibleSection title={hr.title}>
            <p className="text-gray-600">{hr.description}</p>
          </CollapsibleSection>
        )}

        {/* Bank Account Information */}
        {bankAccountInfo && bankAccountInfo.branches && bankAccountInfo.branches.length > 0 && (
          <CollapsibleSection title={bankAccountInfo.title}>
            {bankAccountInfo.branches.map((branch, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">{branch.name}</h3>
                <p className="text-gray-600">Branch Code: {branch.code}</p>
                <p className="text-gray-600">IBAN: {branch.iban}</p>
                <p className="text-gray-600">Account Name: {branch.account_name}</p>
              </div>
            ))}
          </CollapsibleSection>
        )}

        {/* Corporate Data Privacy Statement */}
        {corporatePrivacy && (
          <CollapsibleSection title={corporatePrivacy.title}>
            <p className="text-gray-600 whitespace-pre-wrap">{corporatePrivacy.description}</p>
          </CollapsibleSection>
        )}

        {/* Privacy Statement */}
        {privacyStatement?.description && (
          <CollapsibleSection title={privacyStatement.title}>
            <p className="text-gray-600">{privacyStatement.description}</p>
          </CollapsibleSection>
        )}
      </div>
    </>
  );
};

export default OrganizationalPage;
