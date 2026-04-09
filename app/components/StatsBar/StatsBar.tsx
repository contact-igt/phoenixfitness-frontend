'use client';

import React from 'react';
import { Star } from 'lucide-react';
import styles from './styles.module.css';

export default function StatsBar() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.branding}>
                        <h2 className={styles.heading}>The #1 Rated Pride</h2>
                        <p className={styles.subtext}>Bengaluru&apos;s elite fitness community since 2021.</p>
                    </div>
                    
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>4.9/5</div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={styles.starIcon} />
                                ))}
                            </div>
                        </div>
                        
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>5K+</div>
                            <div className={styles.statLabel}>Active Members</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
