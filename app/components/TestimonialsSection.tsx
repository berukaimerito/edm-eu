// app/components/TestimonialsSection.tsx
'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface TestimonialsSectionProps {
  data: {
    left_text: {
      heading: string;
      description: string;
      customer_videos_link_text: string;
      customer_videos_link: string;
    };
    testimonial: Testimonial;
  };
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data }) => {
  const { left_text, testimonial } = data;

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      {/* Left Text */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-primary">{left_text.heading}</h2>
        <p className="text-gray-700 mb-6">{left_text.description}</p>
        <Link
          href={left_text.customer_videos_link}
          className="text-primary font-semibold hover:underline"
        >
          {left_text.customer_videos_link_text}
        </Link>
      </div>
      {/* Testimonial */}
      <div className="md:w-1/3 mt-8 md:mt-0 md:pl-12">
        {/* Outer Container */}
        <div className="bg-white shadow-md border border-primary rounded-lg p-4 flex items-center justify-center feature_rectangle">
          {/* Testimonial Circle */}
          <div className="bg-gradient-to-tr from-secondary to-primary text-white p-16 rounded-full shadow-2xl border border-white flex items-center justify-center w-80 h-80 mx-auto aspect-square overflow-hidden">
            <div className="text-center">
              {/* Quote Icon */}
              <svg
                className="w-12 h-12 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 6h2v2H6V6zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
              </svg>
              {/* Testimonial Quote */}
              <p className="italic mb-6">"{testimonial.quote}"</p>
              {/* Author Name */}
              <p className="font-bold text-xl">{testimonial.author}</p>
              {/* Author Position */}
              <p className="text-lg">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
