module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    // Add or modify rules as needed
  },
};
