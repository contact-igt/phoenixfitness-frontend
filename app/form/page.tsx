'use client';

import React, { Suspense } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LeadForm from '../components/LeadForm/LeadForm';
import { motion } from 'framer-motion';

export default function FormPage() {
    return (
        <div className="bg-zinc-950 min-height-screen text-white font-['Inter']">
            <Navigation />
            
            <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
                {/* Background similar to Hero */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/herobanner.webp"
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
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-red-900/20 border border-red-900/30 text-[#BB0D06] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Final Step to Your Transformation
                        </span>
                        <h1 className="font-['Anton'] text-6xl md:text-8xl uppercase italic leading-none mb-6">
                            Claim Your <span className="text-[#BB0D06]">Free Trial</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium uppercase tracking-tight">
                            Schedule your medical-grade BCA assessment and elite onboarding session.
                        </p>
                    </motion.div>

                    <div className="max-w-xl mx-auto">
                        <Suspense fallback={<div className="text-center py-20 text-zinc-500">Loading Form...</div>}>
                            <LeadForm showTitle={false} />
                        </Suspense>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900/50 pt-16">
                        <div className="text-center">
                            <h4 className="font-['Anton'] text-3xl uppercase italic mb-2">5 Locations</h4>
                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Across Bengaluru</p>
                        </div>
                        <div className="text-center md:border-x md:border-zinc-900/50 px-8">
                            <h4 className="font-['Anton'] text-3xl uppercase italic mb-2">Elite Support</h4>
                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Expert BCA & Trainers</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-['Anton'] text-3xl uppercase italic mb-2">Steam Rooms</h4>
                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Premium Recovery</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
