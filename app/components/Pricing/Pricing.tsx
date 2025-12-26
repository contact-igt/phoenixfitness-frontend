'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { BRANCHES } from '@/app/data/constants';
import styles from './styles.module.css';

export default function Pricing() {
    const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);

    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="Limited Time Offer: Discounts that hit harder than leg day (+ Tax applicable)">
                    2025 <span className={styles.highlight}>Year End Sale</span>
                </SectionHeading>

                <div className={styles.branchSelector}>
                    {BRANCHES.map(branch => (
                        <button
                            key={branch.id}
                            onClick={() => setSelectedBranch(branch)}
                            className={`${styles.branchButton} ${selectedBranch.id === branch.id ? styles.branchButtonActive : ''}`}
                        >
                            {branch.name}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {selectedBranch.offers.map((offer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`${styles.card} ${offer.popular ? styles.cardPopular : ''}`}
                        >
                            {offer.popular && (
                                <div className={styles.popularBadge}>Most Popular</div>
                            )}
                            <h4 className={styles.cardTitle}>{offer.title}</h4>

                            <div className={styles.priceContainer}>
                                <div className={styles.price}>₹{offer.price}</div>
                                <div className={styles.originalPrice}>₹{offer.originalPrice}</div>
                            </div>

                            <div className={styles.perks}>
                                <div className={styles.perk}>
                                    <Zap className={styles.perkIcon} />
                                    <span className={styles.perkText}>{offer.perks}</span>
                                </div>
                                <div className={styles.perkSecondary}>
                                    <CheckCircle className={styles.perkIconSecondary} />
                                    <span>Free BCA + Diet Guidelines</span>
                                </div>
                                <div className={styles.perkSecondary}>
                                    <CheckCircle className={styles.perkIconSecondary} />
                                    <span>2 Onboarding Sessions FREE</span>
                                </div>
                            </div>

                            <button className={`${styles.ctaButton} ${offer.popular ? styles.ctaButtonPopular : ''}`}>
                                Join Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
