'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn } from '@/lib/animations';

export default function Logo() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <Link href="/" className="block">
        <div className="text-center">
          <h1 className="text-2xl font-extralight tracking-[0.3em] text-white">
            SEAJAY
          </h1>
          <p className="text-xs font-extralight tracking-[0.5em] text-white/80 mt-1">
            MEDIA
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
