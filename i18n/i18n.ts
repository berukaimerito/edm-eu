// i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import it from './locales/it/common.json';
import pl from './locales/pl/common.json';
// Turkish is handled via redirection, no need for translation files

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      it: { common: it },
      pl: { common: pl },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
