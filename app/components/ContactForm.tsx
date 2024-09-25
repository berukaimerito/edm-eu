// app/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/contact/route.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t('info.contact.form.error'));
      }

      setSuccess(result.message || t('info.contact.form.success'));
      setFormData({ name: '', email: '', phone_number: '', message: '' });
    } catch (err: any) {
      setError(err.message || t('info.contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg border-2 border-gray-300 shadow-md">
      {/* Contact Information TextBox */}
      <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-6">
        <h3 className="text-xl font-semibold mb-4">
          {t('info.contact.heading')}
        </h3>
        <div className="flex items-center mb-4">
          {/* Address Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 21v-4a3 3 0 013-3h12a3 3 0 013 3v4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7a4 4 0 108 0 4 4 0 00-8 0z"
            />
          </svg>
          <span>{t('info.contact.address')}</span>
        </div>
        <div className="flex items-center mb-4">
          {/* Email Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 16v-4m0 0V8m0 4h-4m4 0h4"
            />
          </svg>
          <span>{t('info.contact.email')}</span>
        </div>
        <div className="flex items-center">
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h2l1.5 9H17l1.5-9h2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20h10"
            />
          </svg>
          <span>{t('info.contact.phone')}</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:w-2/3">
        <h3 className="text-xl font-semibold mb-4">
          {t('info.contact.send_message')}
        </h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {t('info.contact.form.name')}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              placeholder={t('info.contact.form.placeholder.name')}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t('info.contact.form.email')}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              placeholder={t('info.contact.form.placeholder.email')}
            />
          </div>

          {/* New Phone Number Field */}
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              {t('info.contact.form.phone_number')}
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              pattern="^\+?[1-9]\d{1,14}$" // E.164 format
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              placeholder={t('info.contact.form.placeholder.phone_number')}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {t('info.contact.form.message')}
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              placeholder={t('info.contact.form.placeholder.message')}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
            >
              {isSubmitting
                ? t('info.contact.form.sending')
                : t('info.contact.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
