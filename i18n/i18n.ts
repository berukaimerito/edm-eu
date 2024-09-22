// i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';
import enServices from './locales/en/services.json';
import itCommon from './locales/it/common.json';
import itServices from './locales/it/services.json';
import plCommon from './locales/pl/common.json';
import plServices from './locales/pl/services.json';
// Turkish is handled via redirection, no need for translation files

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        services: enServices,
      },
      it: {
        common: itCommon,
        services: itServices,
      },
      pl: {
        common: plCommon,
        services: plServices,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'services'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
