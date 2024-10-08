// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      colors: {
        background: "var(--background)",  // From previous TypeScript config
        foreground: "var(--foreground)",  // From previous TypeScript config
        primary: '#1a2741',                // Dark Blue
        secondary: '#f16c26',              // Orange
        accent: '#44bfba',                 // Teal
        success: '#41b776',                // Green
      },
      zIndex: {
        '50': '50', // Ensure z-50 is available
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),        // Enhances form styling
    require('@tailwindcss/typography'),   // Enhances typography utilities
  ],
};
