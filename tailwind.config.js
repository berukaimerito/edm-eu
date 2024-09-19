/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2741',    // Dark Blue
        secondary: '#f16c26',  // Orange
        accent: '#44bfba',     // Teal
        success: '#41b776',    // Green
      }, 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
