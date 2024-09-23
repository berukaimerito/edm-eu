// app/components/Sidebar/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiFileText } from 'react-icons/fi'; // Using react-icons for icons

interface Subpage {
  name: string;
  path: string;
}

interface Service {
  name: string;
  path: string;
  subpages?: Subpage[];
}

interface SidebarProps {
  isMobile?: boolean;
}

const services: Service[] = [
  {
    name: 'E-Invoices',
    path: '/services/e-invoices',
  },
  {
    name: 'E-Receipt',
    path: '/services/e-receipt',
  },
  {
    name: 'E-Consensus',
    path: '/services/e-consensus',
    subpages: [
      { name: 'KEP: Registered Electronic Mail', path: '/services/e-consensus/kep-registered-electronic-mail' },
      { name: 'Corporate Mail Reconciliation', path: '/services/e-consensus/corporate-mail-reconciliation' },
      { name: 'KEP Reconciliation', path: '/services/e-consensus/kep-reconciliation' },
      { name: 'Who Can Use', path: '/services/e-consensus/who-can-use' },
      { name: 'Why EDM E-Mutabakat', path: '/services/e-consensus/why-edm-e-mutabakat' },
      { name: 'Is Mandatory', path: '/services/e-consensus/is-mandatory' },
      { name: 'Leading Sectors', path: '/services/e-consensus/leading-sectors' },
    ],
  },
  {
    name: 'Cloud Backup',
    path: '/services/cloud-backup',
    subpages: [
      { name: 'Overview', path: '/services/cloud-backup/overview' },
      { name: 'Features', path: '/services/cloud-backup/features' },
      { name: 'Pricing', path: '/services/cloud-backup/pricing' },
    ],
  },
  {
    name: 'E-Document Management System',
    path: '/services/e-document-management-system',
    subpages: [
      { name: 'E-Document Management System (EDMS)', path: '/services/e-document-management-system/ebys' },
      { name: 'What Can Be Done with EDMS?', path: '/services/e-document-management-system/ebys-ile-neler-yapilabilir' },
      { name: 'EDMS Basic Functions', path: '/services/e-document-management-system/ebys-temel-fonksiyonlar' },
      { name: 'Why EDM EDMS?', path: '/services/e-document-management-system/neden-edm-ebys' },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isMobile = false }) => {
  const pathname = usePathname();

  // Determine if a service is active
  const isServiceActive = (servicePath: string): boolean => {
    return pathname ? pathname === servicePath || pathname.startsWith(`${servicePath}/`) : false;
  };

  // Reorder services to have the active one first on mobile
  const orderedServices = React.useMemo(() => {
    if (!isMobile) return services;
    const activeServiceIndex = services.findIndex(service => isServiceActive(service.path));
    if (activeServiceIndex === -1) return services;
    const activeService = services[activeServiceIndex];
    const remainingServices = services.slice(0, activeServiceIndex).concat(services.slice(activeServiceIndex + 1));
    return [activeService, ...remainingServices];
  }, [isMobile, pathname]);

  return (
    <aside className={`${isMobile ? 'bg-gray-100 p-4 rounded-md shadow-md' : 'hidden md:block w-64'} h-full`}>
      {!isMobile && (
        <h2 className="text-lg font-semibold mb-6 text-gray-700">Our Services</h2>
      )}
      <ul className={`space-y-4`}>
        {orderedServices.map((service) => (
          <li key={service.name}>
            {/* Main Service Link */}
            <Link
              href={service.path}
              className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                isServiceActive(service.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-400 hover:text-white'
              }`}
            >
              <FiFileText className="h-5 w-5 mr-2 text-blue-300" />
              {service.name}
            </Link>

            {/* Subpages */}
            {service.subpages && isServiceActive(service.path) && (
              <ul className="mt-2 space-y-2 pl-5">
                {service.subpages.map((subpage) => (
                  <li key={subpage.name}>
                    <Link
                      href={subpage.path}
                      className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                        pathname === subpage.path
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-600 hover:bg-blue-300 hover:text-white'
                      }`}
                    >
                      {/* Dot Marker */}
                      <span className="h-2 w-2 bg-gray-500 rounded-full mr-2"></span>
                      {subpage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
