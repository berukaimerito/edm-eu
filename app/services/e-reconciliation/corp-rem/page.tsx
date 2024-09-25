// app/services/e-reconciliation/corp-rem/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const CorpRemPage: React.FC = () => {
  const { t } = useTranslation('services');

  const subpageData = t('e_consensus.subpages.corporate_mail_reconciliation', { returnObjects: true }) as any;

  if (!subpageData) {
    return <div>Subpage not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{subpageData.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{subpageData.description}</p>
    </div>
  );
};

export default CorpRemPage;
