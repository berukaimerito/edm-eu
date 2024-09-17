'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingAnimation: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setShow(true);
      localStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-center z-50"
        >
          <p className="text-xl text-center px-4">
            From paper and messy documents to electronic form.
          </p>
          <button
            onClick={() => setShow(false)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingAnimation;
