'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Button from '../Button/Button';
import { BRANCHES } from '@/app/data/constants';
import styles from './styles.module.css';

const PLAN_FEATURES: Record<string, string[]> = {
    'Monthly Plan': ['Flexible monthly gym access.', 'Use of cardio and strength machines.', 'Locker room and shower facilities.', 'No long-term commitment required.'],
    'Quarterly Plan': ['3 months gym membership access.', 'Cardio, strength, and free weight access.', 'Locker room and shower facilities.', '15 days freezing option included.'],
    'Half-Yearly Plan': ['6 months standard membership access.', 'Cardio, strength, and free weight access.', 'Locker room and shower facilities.', '30 days freezing option included.'],
    'Yearly Plan': ['12 months committed membership access.', 'Cardio, strength, and free weight access.', 'Locker room and shower facilities.', '45 days freezing option included.'],
    'PT Level 1': ['Fitness assessment.', 'Workout programming.', 'Form correction.', 'Basic progress tracking.'],
    'PT Level 2': ['Advanced programming.', 'Nutrition guidance.', 'Weekly progress reviews.', 'Accountability support.'],
    'PT Level 3': ['Complete transformation plan.', 'Personalized nutrition.', 'Priority trainer support.', 'Detailed progress analytics.'],
};

export default function Pricing() {
    const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);

    // Listen for branch selection events dispatched by the Locations component
    useEffect(() => {
        const handleBranchSelect = (e: Event) => {
            const { branchId } = (e as CustomEvent).detail;
            const branch = BRANCHES.find(b => b.id === branchId);
            if (branch) setSelectedBranch(branch);
        };
        window.addEventListener('selectPricingBranch', handleBranchSelect);
        return () => window.removeEventListener('selectPricingBranch', handleBranchSelect);
    }, []);

    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.container}>
                {/* <SectionHeading subtitle="Limited Time Offer: Discounts that hit harder than leg day (+ Tax applicable)">
                    2026  <span className={styles.highlight}> New Year - new beginning </span> sale
                </SectionHeading> */}

                <SectionHeading subtitle="Limited Time Offer: Discounts that hit harder than leg day (+ Tax applicable)">
                    <span className={styles.highlight}> Summer Sale - </span> Get Your Summer Body
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

                {/* Gym Membership Plans Row */}
                <div className={styles.rowHeading}>Gym Membership</div>
                <div className={styles.gymGrid}>
                    {selectedBranch.offers.filter(o => o.category === 'gym').map((offer, i) => (
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
                                {PLAN_FEATURES[offer.title].map(feature => (
                                    <div key={feature} className={styles.perkSecondary}>
                                        <CheckCircle className={styles.perkIconSecondary} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Button
                                    href={`#hero-form`}
                                    className="w-full"
                                    variant={offer.popular ? 'primary' : 'secondary'}
                                >
                                    Choose Plan
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Personal Training Row */}
                <div className={styles.rowHeading}>Personal Training</div>
                <div className={styles.ptGrid}>
                    {selectedBranch.offers.filter(o => o.category === 'pt').map((offer, i) => (
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
                                {PLAN_FEATURES[offer.title].map(feature => (
                                    <div key={feature} className={styles.perkSecondary}>
                                        <CheckCircle className={styles.perkIconSecondary} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Button
                                    href={`#hero-form`}
                                    className="w-full"
                                    variant={offer.popular ? 'primary' : 'secondary'}
                                >
                                    Choose Plan
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className={styles.ctaWrapper}>
                    <Button href="#hero-form" size="lg">
                        Claim Your Summer Offer
                    </Button>
                </div>
            </div>
        </section>
    );
}

