// app/components/Footer/Footer.tsx
'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} EDM EU. All rights reserved.</p>
        {/* Add additional footer links or information here if needed */}
      </div>
    </footer>
  );
};

export default Footer;
