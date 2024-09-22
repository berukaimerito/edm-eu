// app/services/e-document-management-system/page.tsx
'use client';

import React from 'react';
import Head from 'next/head';

const EDocumentManagementSystemPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>E-Document Management System | EDM Europe</title>
        <meta name="description" content="Streamline your document workflows with EDM Europe's E-Document Management System." />
      </Head>
      <div>
        <h1 className="text-2xl font-bold mb-4">E-Document Management System</h1>

        {/* Rich Text Content */}
        <div className="prose mb-6">
          <p>
            Our E-Document Management System (E-DMS) is designed to streamline your document workflows, ensuring efficiency and security.
          </p>
          <h2>Key Features</h2>
          <ul>
            <li>Automated document categorization</li>
            <li>Advanced search capabilities</li>
            <li>Secure access controls</li>
          </ul>
        </div>

        {/* Table Example */}
        <table className="min-w-full table-auto mb-6">
          <thead>
            <tr>
              <th className="px-4 py-2">Plan</th>
              <th className="px-4 py-2">Storage</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Basic</td>
              <td className="border px-4 py-2">50 GB</td>
              <td className="border px-4 py-2">$9.99/month</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Pro</td>
              <td className="border px-4 py-2">200 GB</td>
              <td className="border px-4 py-2">$29.99/month</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Enterprise</td>
              <td className="border px-4 py-2">1 TB</td>
              <td className="border px-4 py-2">$59.99/month</td>
            </tr>
          </tbody>
        </table>

        {/* Image Example */}
        <div className="mb-6">
          <img
            src="/images/e-dms-illustration.png" // Replace with your image path
            alt="E-Document Management System Illustration"
            className="rounded-md shadow-md"
          />
        </div>

        {/* YouTube Video Embed */}
        <div className="mb-6">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video ID
            title="E-Document Management System Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default EDocumentManagementSystemPage;
