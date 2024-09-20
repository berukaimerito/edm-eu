// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js}", // Added from CommonJS config
  ],
  theme: {
    extend: {
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

export default config;
