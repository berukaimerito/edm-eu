// app/page.tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import CarouselHome from './components/Carousel/CarouselHome';
import DividedTextSection from './components/DividedTextSection';
import ServicesSection from './components/ServicesSection';
import FeatureSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialsSection';
import BrandCarousel from './components/BrandCarousel';
import VideoSection from './components/VideoSection';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');

  // Data for Divided Text Section
  const dividedTextItems = t('divided_text_section.items', { returnObjects: true }) as {
    title: string;
    description: string;
    image_src: string;
  }[];

  // Data for Services Section
  const services = [
    {
      title: t('services.e_invoices'),
      link: '/services/e-invoices',
      logoSrc: '/logos/e-invoice.svg',
    },
    {
      title: t('services.cloud_backup'),
      link: '/services/cloud-backup',
      logoSrc: '/logos/cloud-backup.svg',
    },
    {
      title: t('services.e_reconciliation'),
      link: '/services/e-reconciliation',
      logoSrc: '/logos/e-reconciliation.svg',
    },
    // Add more services as needed
  ];

  // Data for Feature Section
  const featureData = t('feature_rectangle', { returnObjects: true }) as {
    title: string;
    description: string;
    image_src: string;
  };

  // Data for Video Section
  const videoData = t('video_section', { returnObjects: true }) as {
    video_url: string;
    title: string;
    description: string;
    button_text: string;
    button_link: string;
    additional_info: string;
    corporate_link_text: string;
    corporate_link: string;
  };

  // Data for Advantages Section
  const advantagesData = t('advantages_section', { returnObjects: true }) as {
    title: string;
    items: {
      title: string;
      description: string;
      image_src: string;
    }[];
  };

  // Data for Testimonials Section
  const testimonialData = t('testimonials_section', { returnObjects: true }) as {
    left_text: {
      heading: string;
      description: string;
      customer_videos_link_text: string;
      customer_videos_link: string;
    };
    testimonial: {
      quote: string;
      author: string;
      position: string;
    };
  };

  return (
    <div>
      {/* Carousel */}
      <div className="w-full">
        <CarouselHome />
      </div>
      
      {/* Contact Button */}
      <div className="flex justify-center mt-6">
        <Link
          href="/contact"
          className="bg-secondary text-white px-6 py-3 rounded-full shadow-md hover:bg-secondary-hover transition duration-300"
        >
          {t('get_in_touch')}
        </Link>
      </div>

      {/* Divided Text Section */}
      <DividedTextSection items={dividedTextItems} />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Feature Section */}
      <FeatureSection
        title={featureData.title}
        description={featureData.description}
        imageSrc={featureData.image_src}
        reverse={false}
      />

      {/* Video Section */}
      <VideoSection
        videoUrl={videoData.video_url}
        title={videoData.title}
        description={videoData.description}
        buttonText={videoData.button_text}
        buttonLink={videoData.button_link}
        additionalInfo={videoData.additional_info}
        corporateLinkText={videoData.corporate_link_text}
        corporateLink={videoData.corporate_link}
      />

      {/* Advantages Section */}
      <DividedTextSection items={advantagesData.items} title={advantagesData.title} />

      {/* Testimonials Section */}
      <TestimonialsSection data={testimonialData} />

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Link to References Page */}
      <div className="flex justify-center mt-6">
        <Link href="/references/page"
           className="text-secondary font-semibold hover:underline"
           >
            {t('references.link_text')}
    
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
