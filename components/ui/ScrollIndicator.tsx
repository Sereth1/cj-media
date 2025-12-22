'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={handleScroll}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-white cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
}
