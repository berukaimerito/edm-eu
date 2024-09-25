// app/error.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError = ({ error, reset }: ErrorProps) => {
  // Log the error for debugging purposes
  console.error('Global Error Caught:', error);

  return (
    <div style={styles.container}>
      <span role="img" aria-label="Error" style={styles.emoji}>
        😕⚙️
      </span>
      <h1>Oops! Something went wrong.</h1>
      <p>We've reported the problem. Chill for now :) Sorry for the inconvenience.</p>
      <Link href="/" style={styles.link}>
        Back to Homepage
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as 'center',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    color: '#333',
  },
  emoji: {
    fontSize: '4rem',
  },
  link: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold' as 'bold',
    transition: 'background-color 0.3s ease',
  },
};

// Optional: Add hover effect via JavaScript if not using CSS
// Alternatively, use a CSS-in-JS solution or Tailwind CSS for better styling.

export default GlobalError;
