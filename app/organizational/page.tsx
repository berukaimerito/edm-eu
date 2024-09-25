// app/organizational/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import CollapsibleSection from '@/app/components/CollapsibleSection';

// Uncomment and import your SVG icons when ready
// import VisionIcon from '@/path/to/your/icons/vision.svg';
// import MissionIcon from '@/path/to/your/icons/mission.svg';
// import HRIcon from '@/path/to/your/icons/hr.svg';
// import BankIcon from '@/path/to/your/icons/bank.svg';
// import PrivacyIcon from '@/path/to/your/icons/privacy.svg';

// Temporary icons from Heroicons for demonstration
import { BriefcaseIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

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

      <div className="container mx-auto py-12 px-4 lg:px-16">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">{t('page_title')}</h1>

        {/* Vision and Mission */}
        {visionAndMission && (
          <CollapsibleSection
            title={visionAndMission.title}
            // Uncomment and use  icon
            // icon={<VisionIcon />}
            icon={<BriefcaseIcon className="h-6 w-6 text-white" />}
          >
            {visionAndMission.vision && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{visionAndMission.vision.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {visionAndMission.vision.description}
                </p>
              </div>
            )}
            {visionAndMission.mission && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{visionAndMission.mission.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {visionAndMission.mission.description}
                </p>
              </div>
            )}
          </CollapsibleSection>
        )}

        {/* Human Resources */}
        {hr && (
          <CollapsibleSection
            title={hr.title}
            // Uncomment and use SVG icon
            // icon={<HRIcon />}
            icon={<BriefcaseIcon className="h-6 w-6 text-white" />}
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{hr.description}</p>
          </CollapsibleSection>
        )}

        {/* Bank Account Information */}
        {bankAccountInfo && bankAccountInfo.branches && bankAccountInfo.branches.length > 0 && (
          <CollapsibleSection
            title={bankAccountInfo.title}
            // Uncomment and use SVG icon
            // icon={<BankIcon />}
            icon={<BanknotesIcon className="h-6 w-6 text-white" />}
          >
            {/* Bank Image */}
            <div className="mb-8">
              {<img src="../public/images/bank-bnp.jpg" alt="Bank" className="w-full h-auto rounded-md shadow-md" /> }
              <div className="w-full h-48 bg-gray-200 rounded-md mb-8 flex items-center justify-center">
                <span className="text-gray-500">Bank Image Placeholder</span>
              </div>
            </div>

            <div className="space-y-8">
              {bankAccountInfo.branches.map((branch, index) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{branch.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Branch Code:</span> {branch.code}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">IBAN:</span> {branch.iban}
                    </p>
                    <p className="text-gray-700 md:col-span-2">
                      <span className="font-medium">Account Name:</span> {branch.account_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Corporate Data Privacy Statement */}
        {corporatePrivacy && (
          <CollapsibleSection
            title={corporatePrivacy.title}
            // Uncomment and use your own EDM SVG icon
            // icon={<PrivacyIcon />}
            icon={<ShieldCheckIcon className="h-6 w-6 text-white" />}
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{corporatePrivacy.description}</p>
          </CollapsibleSection>
        )}

        {/* Privacy Statement */}
        {privacyStatement?.description && (
          <CollapsibleSection
            title={privacyStatement.title}
            // Uncomment
            // icon={<PrivacyIcon />}
            icon={<ShieldCheckIcon className="h-6 w-6 text-white" />}
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{privacyStatement.description}</p>
          </CollapsibleSection>
        )}
      </div>
    </>
  );
};

export default OrganizationalPage;
