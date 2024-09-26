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
      </div>
      {/* Testimonial */}
      <div className="md:w-1/3 mt-8 md:mt-0 md:pl-12">
        {/* Outer Container */}
        <div className="bg-white shadow-md border border-primary rounded-lg p-4 flex items-center justify-center feature_rectangle">
       { /* Testimonial Square */}
<div className="bg-gradient-to-tr from-secondary to-primary text-white p-6 shadow-2xl border border-white flex items-center justify-center w-96 h-96 mx-auto overflow-hidden">
  <div className="text-center">
    {/* Quote Icon */}
    <svg
      className="w-8 h-8 mx-auto mb-4"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M6 6h2v2H6V6zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h2v2h-2V6zm0 4h2v2h-2V6zm0 4h2v2h-2V6zm4-8h2v2h-2V6zm0 4h2v2h-2V6zm0 4h2v2h-2V6zm0 4h2v2h-2v-2z" />
    </svg>
    {/* Testimonial Quote */}
    <p className="italic text-base mb-4">"{testimonial.quote}"</p>
    {/* Author Name */}
    <p className="font-bold text-base">{testimonial.author}</p>
    {/* Author Position */}
    <p className="text-sm">{testimonial.position}</p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
