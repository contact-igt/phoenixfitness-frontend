'use client';

import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing/Pricing';
import SuccessSteps from './components/SuccessSteps/SuccessSteps';
import Transformations from './components/Transformations/Transformations';
import Gallery from './components/Gallery/Gallery';
import Benefits from './components/Benefits/Benefits';
import Locations from './components/Locations/Locations';
import StatsBar from './components/StatsBar/StatsBar';
import FAQ from './components/FAQ/FAQ';
import useUTMSource from "./hooks/useUTMSource";
// import FloatingCTA, { MobileStickyCTA } from './components/FloatingCTA';

export default function Home() {
  useUTMSource();
  return (
    <div className="bg-zinc-950 text-white selection:bg-[#BB0D06] font-['Inter']">
      <Navigation />

      <Hero />

      <Pricing />

      <Transformations />

      <SuccessSteps />


      <Gallery />

      <Benefits />

      <Locations />

      <StatsBar />
      <FAQ />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-4 z-[100] flex flex-col gap-3 sm:bottom-8 sm:right-8 sm:gap-4 md:hidden">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/917795537297"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform drop-shadow-2xl"
        >
          <img 
            src="/assets/whatsapp.png" 
            alt="WhatsApp Chat" 
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </motion.a>

        {/* Phone */}
        <motion.a
          href="tel:+919880537297"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform drop-shadow-2xl"
        >
          <img 
            src="/assets/phone-call.png" 
            alt="Call Us" 
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/phoenixfitness_bangalore/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white shadow-2xl sm:h-14 sm:w-14"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </motion.a>

        {/* Location */}
        <motion.a
          href="#locations"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BB0D06] text-white shadow-2xl sm:h-14 sm:w-14"
          aria-label="View Locations"
        >
          <MapPin size={24} />
        </motion.a>
      </div>

      <Footer />

      {/* <FloatingCTA />
      <MobileStickyCTA /> */}
    </div>
  );
}
