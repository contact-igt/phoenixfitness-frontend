'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { TRANSFORMATIONS } from '@/app/data/constants';
import styles from './styles.module.css';

export default function Transformations() {
    return (
        <section id="transformations" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="Proof that discipline and elite guidance change lives">
                    Real People. <span className={styles.highlight}>Real Results.</span>
                </SectionHeading>
                <div className={styles.grid}>
                    {TRANSFORMATIONS.map((t) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={t.url} className={styles.image} alt={t.name} />
                                <div className={styles.overlay}>
                                    <div className={styles.badge}>Transformation</div>
                                    <h4 className={styles.name}>{t.name}</h4>
                                    <p className={styles.result}>{t.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className={styles.ctaWrapper}>
                    <a href="#" className={styles.cta}>
                        View All 100+ Stories <ArrowRight size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
}
