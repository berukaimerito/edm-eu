// app/layout.tsx
'use client';

import '../styles/globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={i18n.language}>
      <body className="flex flex-col min-h-screen">
        <I18nextProvider i18n={i18n}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}
