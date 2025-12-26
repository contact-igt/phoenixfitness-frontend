'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import { GALLERY_IMAGES } from '@/app/data/constants';
import styles from './styles.module.css';

const categories = ['All', 'Strength', 'Cardio', 'Recovery', 'Community'];

export default function Gallery() {
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === filter);

    return (
        <section id="gallery" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="Step inside the pride. A visual journey through our 5 locations.">
                    The Phoenix <span className={styles.highlight}>Gallery</span>
                </SectionHeading>

                <div className={styles.filters}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`${styles.filterButton} ${filter === cat ? styles.filterButtonActive : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={styles.imageCard}
                            >
                                <img src={img.url} alt={img.title} className={styles.image} />
                                <div className={styles.overlay}>
                                    <span className={styles.category}>{img.category}</span>
                                    <h4 className={styles.title}>{img.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
