// i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enServices from './locales/en/services.json';
import enOrganizational from './locales/en/organizational.json'; // Add this line

import itCommon from './locales/it/common.json';
import itServices from './locales/it/services.json';
import itOrganizational from './locales/it/organizational.json'; // Add this line

import plCommon from './locales/pl/common.json';
import plServices from './locales/pl/services.json';
import plOrganizational from './locales/pl/organizational.json'; // Add this line

// Turkish is handled via redirection, no need for translation files

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        services: enServices,
        organizational: enOrganizational, // Add this line
      },
      it: {
        common: itCommon,
        services: itServices,
        organizational: itOrganizational, // Add this line
      },
      pl: {
        common: plCommon,
        services: plServices,
        organizational: plOrganizational, // Add this line
      },
      // If you decide to include Turkish translations later
      // tr: {
      //   common: trCommon,
      //   services: trServices,
      //   organizational: trOrganizational,
      // },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'services', 'organizational'], // Add 'organizational' to namespaces
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
