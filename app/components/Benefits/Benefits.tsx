'use client';

import { Wind, ShowerHead, TrendingUp, Users, Dumbbell, Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './styles.module.css';

const benefits = [
    { icon: Wind, title: 'Steam Room', desc: 'Post-workout recovery.' },
    { icon: ShowerHead, title: 'Luxury Showers', desc: 'Hot & cold water recovery.' },
    { icon: TrendingUp, title: 'BCA Assessment', desc: 'In-depth body tracking.' },
    { icon: Users, title: 'Member Support', desc: 'Dedicated coordinators.' },
    { icon: Dumbbell, title: 'TRX & CrossFit', desc: 'Functional zones.' },
    { icon: Zap, title: 'Spinning & HIIT', desc: 'Max calorie burn.' },
    { icon: ShieldCheck, title: 'Pro Cleaning', desc: 'Extreme hygiene.' },
    { icon: CheckCircle, title: 'Tailor-made', desc: 'Custom workout plans.' },
];

export default function Benefits() {
    return (
        <section id="benefits" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="More than just a gym. A complete recovery and training ecosystem.">
                    Elite <span className={styles.highlight}>Amenities</span>
                </SectionHeading>
                <div className={styles.grid}>
                    {benefits.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={styles.card}
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon size={32} className={styles.icon} />
                                </div>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.description}>{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
