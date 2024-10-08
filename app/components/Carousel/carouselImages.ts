// app/components/Carousel/carouselImages.ts

export interface CarouselImageTexts {
  [languageCode: string]: {
    alt: string;
    title: string;
    description?: string;
  };
}

export interface CarouselImage {
  src: string;
  texts: CarouselImageTexts;
}

export const carouselImages: CarouselImage[] = [
  {
    src: 'slide1.jpg',
    texts: {
      en: {
        alt: 'E-Invoices',
        title: 'E-Invoices',
        description: 'Simplify your invoicing process with our E-Invoice solutions.',
      },
      // Add other languages if needed
    },
  },
  {
    src: 'slide2.jpg',
    texts: {
      en: {
        alt: 'E-Reconciliation',
        title: 'E-Reconciliation',
        description: 'Automate your reconciliation processes efficiently.',
      },
      // Add other languages if needed
    },
  },
  {
    src: 'slide3.jpg',
    texts: {
      en: {
        alt: 'Cloud Backup',
        title: 'Cloud Backup',
        description: 'Securely back up your data with our cloud solutions.',
      },
      // Add other languages if needed
    },
  },
  {
    src: 'slide4.jpg',
    texts: {
      en: {
        alt: 'Cloudy ERP',
        title: 'Cloudy ERP',
        description: 'Integrate all your business processes with Cloudy ERP.',
      },
      // Add other languages if needed
    },
  },
  {
    src: 'slide5.jpg',
    texts: {
      en: {
        alt: 'E-Document Management System',
        title: 'E-Document Management System',
        description: 'Manage your documents effectively with our EDMS.',
      },
      // Add other languages if needed
    },
  },
  {
    src: 'slide6.jpg',
    texts: {
      en: {
        alt: 'H.R. Registered E-Mail',
        title: 'H.R. Registered E-Mail',
        description: 'Enhance HR communications with our Registered E-Mail solutions.',
      },
      // Add other languages if needed
    },
  },
];
