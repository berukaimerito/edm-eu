// app/components/Sidebar/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiFileText,
  FiClipboard,
  FiArchive,
  FiCloud,
  FiBookOpen,
  FiMail,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface Subpage {
  title: string;
  path: string;
}

interface Service {
  key: string;
  title: string;
  slug: string;
  path: string;
  icon: React.ReactNode;
  subpages?: Subpage[];
}

interface SidebarProps {
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile = false }) => {
  const { t, i18n } = useTranslation('services');
  const pathname = usePathname();

  // Define icons with consistent sizes
  const serviceIcons: { [key: string]: React.ReactNode } = {
    e_bill: <FiFileText className="h-5 w-5 mr-2 text-secondary" />,
    e_consensus: <FiClipboard className="h-5 w-5 mr-2 text-secondary" />,
    e_receipt: <FiArchive className="h-5 w-5 mr-2 text-secondary" />,
    cloud_backup: <FiCloud className="h-5 w-5 mr-2 text-secondary" />,
    e_document_management_system: <FiBookOpen className="h-5 w-5 mr-2 text-secondary" />,
    registered_mail_hr: <FiMail className="h-5 w-5 mr-2 text-secondary" />,
  };

  // Retrieve services from translations
  const servicesData = React.useMemo(() => {
    const services: Service[] = [];

    // Get the service keys from the translation file
    const resourceBundle = i18n.getResourceBundle(i18n.language, 'services');
    const serviceKeys = Object.keys(resourceBundle).filter(
      (key) =>
        !['name', 'title', 'description', 'youtube_embed', 'benefits', 'differences'].includes(key)
    );

    serviceKeys.forEach((key) => {
      const serviceTranslation = t(`${key}`, { returnObjects: true }) as any;

      const slug = serviceTranslation.slug || key.replace(/_/g, '-');

      const service: Service = {
        key,
        title: serviceTranslation.title || key,
        slug,
        path: `/services/${slug}`,
        icon: serviceIcons[key],
        subpages: [],
      };

      if (serviceTranslation.subpages) {
        const subpageKeys = Object.keys(serviceTranslation.subpages);
        subpageKeys.forEach((subKey) => {
          const subpageTranslation = serviceTranslation.subpages[subKey] as any;
          const subpageSlug = subpageTranslation.slug || subKey.replace(/_/g, '-');
          service.subpages?.push({
            title: subpageTranslation.title || subKey,
            path: `${service.path}/${subpageSlug}`,
          });
        });
      }

      services.push(service);
    });

    return services;
  }, [i18n, t]);

  // Determine if a service is active
  const isServiceActive = (servicePath: string): boolean => {
    return pathname ? pathname === servicePath || pathname.startsWith(`${servicePath}/`) : false;
  };

  // Determine if a subpage is active
  const isSubpageActive = (subpagePath: string): boolean => {
    return pathname === subpagePath;
  };

  // Reorder services to have the active one first on mobile
  const orderedServices = React.useMemo(() => {
    if (!isMobile) return servicesData;
    const activeServiceIndex = servicesData.findIndex((service) => isServiceActive(service.path));
    if (activeServiceIndex === -1) return servicesData;
    const activeService = servicesData[activeServiceIndex];
    const remainingServices = servicesData
      .slice(0, activeServiceIndex)
      .concat(servicesData.slice(activeServiceIndex + 1));
    return [activeService, ...remainingServices];
  }, [isMobile, pathname, servicesData]);

  return (
    <aside
      className={`${
        isMobile ? 'bg-white p-4 rounded-md shadow-md' : 'bg-white border border-gray-200 p-4 rounded-md'
      }`}
    >
      {/* Sidebar Title */}
      {!isMobile && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{t('name')}</h2>
        </div>
      )}

      <ul className="space-y-2">
        {orderedServices.map((service, index) => (
          <React.Fragment key={service.key}>
            <li>
              {/* Main Service Link */}
              <Link
                href={service.path}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isServiceActive(service.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-gray-900'
                }`}
              >
                {/* Service Icon */}
                {service.icon}
                {service.title}
              </Link>

              {/* Subpages */}
              {service.subpages && isServiceActive(service.path) && (
                <ul className="mt-2 space-y-1 pl-6 border-l border-gray-300">
                  {service.subpages.map((subpage) => (
                    <li key={subpage.title}>
                      <Link
                        href={subpage.path}
                        className={`flex items-center px-4 py-1 rounded-md transition-colors duration-200 ${
                          isSubpageActive(subpage.path)
                            ? 'bg-secondary text-white'
                            : 'text-gray-600 hover:bg-blue-100 hover:text-gray-900'
                        }`}
                      >
                        {/* Dot Marker */}
                        <span className="h-2 w-2 bg-secondary rounded-full mr-2"></span>
                        {subpage.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Separator Line */}
            {index < orderedServices.length - 1 && (
              <hr className="my-2 border-t border-gray-300" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
