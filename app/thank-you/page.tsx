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
                    RISE FROM THE <span className={styles.highlight}>ASHES</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.subheading}
                >
                    Your transformation journey begins now!
                </motion.p>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={styles.message}
                >
                    <p>Thank you for choosing Phoenix Fitness. Our team will contact you shortly to schedule your first session.</p>
                    <p>Get ready to experience Bengaluru's highest-energy fitness temple.</p>
                </motion.div>

                {/* What's Next Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className={styles.nextSteps}
                >
                    <h2 className={styles.nextStepsHeading}>WHAT'S NEXT?</h2>
                    <div className={styles.stepsList}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Confirmation Call</h3>
                                <p>Our team will reach out within 24 hours</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>BCA Assessment</h3>
                                <p>Get your complete body composition analysis</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Start Training</h3>
                                <p>Begin your transformation journey</p>
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
