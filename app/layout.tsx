'use client';

import '../styles/globals.css';
import Header from './components/Header';
import LandingAnimation from './components/LandingAnimation';
import { appWithTranslation } from 'next-i18next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <LandingAnimation />
        <main>{children}</main>
      </body>
    </html>
  );
}
