'use client';

import { motion } from 'framer-motion';
import { MapPin, Ruler, Play } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { BRANCHES } from '@/app/data/constants';
import styles from './styles.module.css';

export default function Locations() {
    return (
        <section id="locations" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="Over 26,000 sq.ft of pure fitness across Bengaluru">
                    Find Your <span className={styles.highlight}>Pride</span>
                </SectionHeading>
                <div className={styles.grid}>
                    {BRANCHES.map((branch, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.header}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div className={styles.size}>
                                    <Ruler size={18} /> {branch.size}
                                </div>
                            </div>
                            <h4 className={styles.title}>{branch.name}</h4>
                            <p className={styles.address}>{branch.address}</p>
                            <button className={styles.cta}>
                                Get Directions <Play size={16} className={styles.playIcon} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
