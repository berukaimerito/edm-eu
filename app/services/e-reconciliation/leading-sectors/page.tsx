// app/services/e-reconciliation/leading-sectors/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const LeadingSectorsPage: React.FC = () => {
  const { t } = useTranslation('services');

  const subpageData = t('e_consensus.subpages.leading_sectors', { returnObjects: true }) as any;

  if (!subpageData) {
    return <div>Subpage not found</div>;
  }

  const { title, description, list } = subpageData;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {description && (
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{description}</p>
      )}
      {list && (
        <ul className="list-disc list-inside mt-4 text-gray-700">
          {list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeadingSectorsPage;
