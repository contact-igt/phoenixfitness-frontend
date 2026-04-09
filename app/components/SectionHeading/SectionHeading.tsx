'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.css';

interface SectionHeadingProps {
    children: React.ReactNode;
    subtitle?: string;
    light?: boolean;
    align?: 'left' | 'center';
}

export default function SectionHeading({ 
    children, 
    subtitle, 
    light = false,
    align = 'center'
}: SectionHeadingProps) {
    const alignmentClass = align === 'left' ? styles.alignLeft : styles.alignCenter;

    return (
        <motion.div
            className={`${styles.container} ${alignmentClass}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className={`${styles.heading} ${light ? styles.light : styles.dark}`}>
                {children}
            </h2>
            {subtitle && (
                <p className={`${styles.subtitle} ${light ? styles.subtitleLight : styles.subtitleDark}`}>
                    {subtitle}
                </p>
            )}
            <div className={styles.divider} />
        </motion.div>
    );
}
