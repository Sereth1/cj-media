'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn } from '@/lib/animations';

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-8 right-8 z-50 flex flex-col items-center gap-2 group"
    >
      <div className="flex flex-col gap-1.5">
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          className="w-6 h-0.5 bg-white transition-all"
        />
        <motion.span 
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-6 h-0.5 bg-white transition-all"
        />
        <motion.span 
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          className="w-6 h-0.5 bg-white transition-all"
        />
      </div>
      <span className="text-xs font-light tracking-wider text-white/80 group-hover:text-white transition-colors">
        MENU
      </span>
    </motion.button>
  );
}
