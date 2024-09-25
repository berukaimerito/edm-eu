// app/components/Carousel/carouselImages.ts

export interface CarouselImages {
    src: string;
    alt: string;
    title: string;
    description?: string;
  }
  
  export const carouselImages: CarouselImages[] = [
    {
      src: '/images/edm-it-ru-slide.jpg',
      alt: 'EDM IT RU Slide',
      title: 'Welcome to EDM EU',
      description: 'Transform your invoicing process with our solutions.',
    },
    {
      src: '/images/edm-sustainability-slide.jpg',
      alt: 'EDM Sustainability Slide',
      title: 'Our Services',
      description: 'Streamline your billing with our advanced tools.',
    },


    // 1. alan destination. public/images/ dosyasinin icerisinde atmaniz yeterli olacaktir.
    // Resim ile ilgili birer alt, title ve description belirleyin. Ne oldugunun cok bir onemi yok aciklayici olmasi faydali.
    // Bu kadar :)
    
    // {
    //   src: '/images/edm-sustainability-slide.jpg',
    //   alt: 'EDM Sustainability Slide',
    //   title: 'Our Services',
    //   description: 'Streamline your billing with our advanced tools.',
    // },
    // {
    //   src: '/images/edm-sustainability-slide.jpg',
    //   alt: 'EDM Sustainability Slide',
    //   title: 'Our Services',
    //   description: 'Streamline your billing with our advanced tools.',
    // },
    // {
    //   src: '/images/edm-sustainability-slide.jpg',
    //   alt: 'EDM Sustainability Slide',
    //   title: 'Our Services',
    //   description: 'Streamline your billing with our advanced tools.',
    // },
    // {
    //   src: '/images/edm-sustainability-slide.jpg',
    //   alt: 'EDM Sustainability Slide',
    //   title: 'Our Services',
    //   description: 'Streamline your billing with our advanced tools.',
    // },
    // Add more slides here as needed
  ];
  