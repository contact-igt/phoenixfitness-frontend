'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function ThankYouPage() {
    return (
        <div className={styles.container}>
            {/* Background gradient */}
            <div className={styles.background}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={styles.content}
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className={styles.iconWrapper}
                >
                    <CheckCircle className={styles.icon} />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={styles.heading}
                >
                    FREE TRIAL <span className={styles.highlight}>SECURED</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.subheading}
                >
                    Welcome to Bengaluru&apos;s Highest-Energy Fitness Temple.
                </motion.p>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={styles.message}
                >
                    <p>Your 1-Day Free pass without any commitment is now locked in. Our elite coordinators will contact you shortly to activate your access.</p>
                    <p>Prepare to unleash your true potential at Phoenix Fitness.</p>
                </motion.div>

                {/* What's Next Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className={styles.nextSteps}
                >
                    <h2 className={styles.nextStepsHeading}>WHAT&apos;S NEXT?</h2>
                    <div className={styles.stepsList}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Pass Activation</h3>
                                <p>Our team will reach out within the hour to activate your trial pass</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>BCA Assessment</h3>
                                <p>Get your baseline body metrics tracked with medical-grade tech</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Experience the Pride</h3>
                                <p>Visit any of our 5 locations and rise from the ashes</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className={styles.ctaWrapper}
                >
                    <Link href="/" className={styles.ctaButton}>
                        <Home size={20} />
                        <span>RETURN TO HOME</span>
                        <ArrowRight size={20} className={styles.arrow} />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
