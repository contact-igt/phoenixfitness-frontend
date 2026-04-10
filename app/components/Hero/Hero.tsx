'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wind, ShowerHead, TrendingUp, Users, Dumbbell, Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import styles from './styles.module.css';
import LeadForm from '../LeadForm/LeadForm';

const AMENITIES = [
    { icon: Wind, label: 'Steam Room' },
    { icon: ShowerHead, label: 'Luxury Showers' },
    { icon: TrendingUp, label: 'BCA Assessment' },
    { icon: Users, label: 'Member Support' },
    { icon: Dumbbell, label: 'TRX & CrossFit' },
    { icon: Zap, label: 'Spinning & HIIT' },
    { icon: ShieldCheck, label: 'Pro Cleaning' },
    { icon: CheckCircle, label: 'Tailor-made Plans' },
];

export default function Hero() {
    // Duplicate array to create seamless infinite scroll
    const ticker = [...AMENITIES, ...AMENITIES];

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <img
                    src={"/assets/herobanner.jpg"}
                    className={styles.backgroundImage}
                    alt="Gym"
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <div className={styles.textStack}>
                        <span className={styles.badge}>
                            Now at 5 Locations Across Bengaluru
                        </span>

                        <div className={styles.heading}>
                            <h1 className={styles.headingLinePrimary}>
                                <span className={styles.headingAccent}>1 Day Free</span>
                                <span className={styles.headingSolid}>Trial</span>
                            </h1>
                            <h1 className={styles.headingLineSecondary}>Without Any Commitment</h1>
                        </div>

                        <p className={styles.description}>
                            BENGALURU&apos;S HIGHEST-ENERGY FITNESS TEMPLE. STEAM ROOMS, EXPERT BCA, AND UNYIELDING RESULTS.
                        </p>

                    </div>

                    {/* Auto-scrolling amenities marquee marquee ticker */}
                    <div className={styles.tickerWrapper}>
                        <div className={styles.ticker}>
                            {ticker.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className={styles.tickerItem}>
                                        <Icon size={14} className={styles.tickerIcon} />
                                        <span>{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.formWrapper}
                    id="hero-form"
                >
                    <LeadForm />
                </motion.div>
            </div>
        </section>
    );
}
