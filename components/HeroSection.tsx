'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer, slideInRight } from '@/lib/animations';
import Logo from '@/components/ui/Logo';
import MenuButton from '@/components/ui/MenuButton';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0d4a6e] to-[#1a7d96]" />
      
      {/* Logo */}
      <Logo />

      {/* Menu Button */}
      <MenuButton />

      {/* Main Layout Container */}
      <div className="relative h-screen flex">
        {/* Left Section - Main Content (65%) */}
        <div className="relative w-[65%] flex items-center justify-start pl-20">
          {/* Hero Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 pl-8"
          >
            <motion.div variants={fadeInUp} className="space-y-0 mb-10">
              <h1 className="text-[7rem] font-thin text-white leading-[1.1] tracking-tight">
                Design.
              </h1>
              <h1 className="text-[7rem] font-thin text-white leading-[1.1] tracking-tight">
                Code. Bots.
              </h1>
              <h1 className="text-[7rem] font-thin text-white leading-[1.1] tracking-tight">
                Brilliance.
              </h1>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4 mt-8"
            >
              <Button 
                size="lg"
                className="bg-[#0A2540] hover:bg-[#0d3555] text-white px-8 py-6 text-base font-normal rounded-md border border-white/20 shadow-lg"
              >
                Book a Free Discovery Call
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-6 text-base font-normal rounded-md border border-white/30"
              >
                Or Drop Us an Email
              </Button>
            </motion.div>
          </motion.div>

          {/* Blue Bird Image - Large, positioned from bottom center */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-0 left-[35%] w-[700px] h-[800px] z-10"
          >
            <Image 
              src="/blue-jay.png" 
              alt="Blue Jay"
              width={700}
              height={800}
              className="w-full h-full object-contain object-bottom"
              priority
            />
          </motion.div>
        </div>

        {/* Vertical Divider Line */}
        <div className="absolute left-[65%] top-0 bottom-0 w-[1px] bg-white/20" />

        {/* Right Sidebar (35%) */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="w-[35%] relative flex items-center justify-center"
        >
          {/* Lighter overlay for right section */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-400/10" />
          
          <div className="relative z-10 px-16 flex flex-col gap-8 max-w-md">
            <motion.p 
              variants={fadeInUp}
              className="text-white/90 font-light text-[15px] leading-relaxed"
            >
              Websites, Web Apps, AI Chatbots & More — Tailored for small businesses, startups, and free spirits just like us.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Button 
                variant="outline"
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-6 text-base font-normal rounded-md border border-white/30 lowercase"
              >
                see our work
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}
