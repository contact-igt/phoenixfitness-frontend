'use client';

import React, { Suspense } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LeadForm from '../components/LeadForm/LeadForm';
import { motion } from 'framer-motion';

export default function FormPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-['Inter']">
            <Navigation />
            
            <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
                {/* Background similar to Hero */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/herobanner.jpg"
                        className="w-full h-full object-cover opacity-20 filter grayscale"
                        alt="Gym Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10 text-center sm:mb-12"
                    >
                        <span className="mb-5 inline-block rounded-full border border-red-900/30 bg-red-900/20 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#BB0D06] sm:mb-6 sm:px-4 sm:text-[10px] sm:tracking-[0.3em]">
                            Final Step to Your Transformation
                        </span>
                        <h1 className="mb-5 font-['Anton'] text-4xl uppercase italic leading-none sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl">
                            Claim Your <span className="text-[#BB0D06]">Free Trial</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-base font-medium uppercase tracking-tight text-zinc-400 md:text-xl">
                            Schedule your medical-grade BCA assessment and elite onboarding session.
                        </p>
                    </motion.div>

                    <div className="max-w-xl mx-auto">
                        <Suspense fallback={<div className="text-center py-20 text-zinc-500">Loading Form...</div>}>
                            <LeadForm showTitle={false} />
                        </Suspense>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-8 border-t border-zinc-900/50 pt-12 md:mt-20 md:grid-cols-3 md:gap-12 md:pt-16">
                        <div className="text-center">
                            <h4 className="mb-2 font-['Anton'] text-2xl uppercase italic md:text-3xl">5 Locations</h4>
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-500 md:text-[10px] md:tracking-[0.4em]">Across Bengaluru</p>
                        </div>
                        <div className="px-2 text-center md:border-x md:border-zinc-900/50 md:px-8">
                            <h4 className="mb-2 font-['Anton'] text-2xl uppercase italic md:text-3xl">Elite Support</h4>
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-500 md:text-[10px] md:tracking-[0.4em]">Expert BCA & Trainers</p>
                        </div>
                        <div className="text-center">
                            <h4 className="mb-2 font-['Anton'] text-2xl uppercase italic md:text-3xl">Steam Rooms</h4>
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-500 md:text-[10px] md:tracking-[0.4em]">Premium Recovery</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
