'use client';

import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
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

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white selection:bg-[#BB0D06] font-['Inter']">
      <Navigation />

      <Hero />

      <Pricing />

      <SuccessSteps />

      <Transformations />

      <Gallery />

      <Benefits />

      <Locations />

      {/* Social proof bar */}
      <section className="!py-20 bg-[#BB0D06] text-white">
        <div className="max-w-7xl mx-auto !px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-lg">
            <h2 className="font-['Anton'] text-6xl uppercase leading-none italic mb-4">The #1 Rated Pride</h2>
            <p className="font-black text-white/80 uppercase tracking-widest">Bengaluru&apos;s elite fitness community since 2021.</p>
          </div>
          <div className="flex items-center gap-16">
            <div className="text-center">
              <div className="font-['Anton'] text-7xl italic leading-none">4.9/5</div>
              <div className="flex gap-1 justify-center mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-white" />)}
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Anton'] text-7xl italic leading-none">5K+</div>
              <div className="font-black text-[10px] uppercase tracking-[0.3em] mt-2">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="!py-32 bg-zinc-950">
        <div className="!flex flex-col max-w-4xl !mx-auto !px-6">
          <SectionHeading subtitle="No fluff, just facts.">
            Common <span className="text-[#BB0D06] italic">Questions</span>
          </SectionHeading>
          <div className="space-y-4">
            <FAQItem question="What is the BCA assessment?" answer="BCA stands for Body Composition Analysis. We use medical-grade tech to track your muscle mass, body fat, and metabolic rate to customize your results." />
            <FAQItem question="Is the Year-End Sale price inclusive of taxes?" answer="No, all prices listed are exclusive of tax. 18% GST applies upon final checkout." />
            <FAQItem question="Can I freeze my membership?" answer="Yes! Quarterly (15 days), Half-Yearly (30 days), and Yearly (45 days) plans include free freezing options." />
            <FAQItem question="What should I bring for my trial?" answer="Comfortable gear, clean indoor shoes, a towel, and the discipline to rise from the ashes." />
          </div>
        </div>
      </section>

      {/* WhatsApp Floating */}
      <motion.a
        href="https://wa.me/919990001111"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-[100] bg-green-600 text-white p-5 rounded-full shadow-2xl shadow-green-600/20 hover:bg-green-700 transition-colors"
      >
        <MessageCircle size={32} />
      </motion.a>

      <Footer />
    </div>
  );
}