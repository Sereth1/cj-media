'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp, staggerContainer, slideInRight } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-[#0d4a6e] to-[#1a7d96]" />
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-extralight tracking-[0.3em] text-white group-hover:text-cyan-bright transition-colors">
                SEAJAY
              </h1>
              <p className="text-[10px] md:text-xs font-extralight tracking-[0.5em] text-white/70 mt-0.5">
                MEDIA
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light text-white/80 hover:text-cyan-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="relative w-full lg:w-[65%] flex items-center px-6 md:px-12 lg:pl-20 pt-32 pb-12 lg:py-0">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 lg:pl-8"
          >
            <motion.div variants={fadeInUp} className="mb-8 lg:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-thin text-white leading-[1.1] tracking-tight">
                Design.
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-thin text-white leading-[1.1] tracking-tight">
                Code. Bots.
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-thin text-white leading-[1.1] tracking-tight">
                Brilliance.
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-6">
                <Mail className="w-4 h-4 mr-2" />
                Or Drop Us an Email
              </Button>
            </motion.div>
          </motion.div>

          {/* Blue Jay Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block absolute bottom-0 left-[35%] w-[600px] h-[700px] z-10"
          >
            <Image 
              src="/blue-jay.png" 
              alt="Blue Jay"
              width={600}
              height={700}
              className="w-full h-full object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block absolute left-[65%] top-0 bottom-0 w-px bg-white/20" />

        {/* Right Sidebar */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[35%] relative flex items-center justify-center py-12 lg:py-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-bright/5" />
          
          <div className="relative z-10 px-6 md:px-12 lg:px-16 flex flex-col gap-8 max-w-md">
            <motion.p variants={fadeInUp} className="text-white/80 font-light text-base leading-relaxed">
              Social media strategy, community management, web development, and AI automation — 
              tailored for ambitious brands ready to scale.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 lowercase">
                see our work
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-10 h-10 rounded-full bg-white/90 cursor-pointer hover:bg-white transition-colors"
        />
      </motion.div>
    </div>
  );
}
