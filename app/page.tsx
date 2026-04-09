'use client';

import React from 'react';
import { Star } from 'lucide-react';
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
import FAQItem from './components/FAQItem/FAQItem';
import SectionHeading from './components/SectionHeading/SectionHeading';
import StatsBar from './components/StatsBar/StatsBar';
import FAQ from './components/FAQ/FAQ';
// import FloatingCTA, { MobileStickyCTA } from './components/FloatingCTA';

export default function Home() {
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
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
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
            className="w-13 h-13 object-contain"
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
            className="w-16 h-16 object-contain"
          />
        </motion.a>
      </div>

      <Footer />

      {/* <FloatingCTA />
      <MobileStickyCTA /> */}
    </div>
  );
}