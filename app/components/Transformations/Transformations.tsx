'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Button from '../Button/Button';
import { TRANSFORMATIONS, type Transformation } from '@/app/data/constants';
import styles from './styles.module.css';

const TransformationCard = ({ 
    transformation, 
    index, 
    activeId, 
    setActiveId 
}: { 
    transformation: Transformation; 
    index: number; 
    activeId: number | null; 
    setActiveId: (id: number | null) => void;
}) => {
    const isPlaying = activeId === transformation.id;
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Synchronize video playback with the shared activeId
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(() => {
                    // Handle potential play() interruption
                    setActiveId(null);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, setActiveId]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isPlaying) {
            setActiveId(null);
        } else {
            setActiveId(transformation.id);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={styles.card}
            onClick={togglePlay}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageWrapper}>
                <video
                    ref={videoRef}
                    src={transformation.url}
                    poster={transformation.poster}
                    className={styles.image}
                    playsInline
                    disablePictureInPicture
                    loop
                    style={{ pointerEvents: 'none' }}
                />
                
                <div className={styles.overlay}>
                    <div className={styles.playButtonWrapper}>
                        <AnimatePresence mode="popLayout">
                            {!isPlaying ? (
                                <motion.div
                                    key="play"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={styles.playButton}
                                >
                                    <Play fill="currentColor" size={32} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="pause"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ 
                                        opacity: isHovered ? 1 : 0,
                                        scale: isHovered ? 1 : 0.8 
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={styles.pauseButton}
                                >
                                    <Pause fill="currentColor" size={32} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.badge}>TRANSFORMATION</div>
                        <h3 className={styles.name}>{transformation.name}</h3>
                        <p className={styles.result}>{transformation.result}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Transformations() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section id="transformations" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="Proof that discipline and elite guidance change lives">
                    Real People. <span className={styles.highlight}>Real Results.</span>
                </SectionHeading>
                <div className={styles.grid}>
                    {TRANSFORMATIONS.map((t, i) => (
                        <TransformationCard 
                            key={t.id} 
                            transformation={t} 
                            index={i} 
                            activeId={activeId}
                            setActiveId={setActiveId}
                        />
                    ))}
                </div>
                <div className="mt-16 flex justify-center">
                    <Button href="#hero-form" size="lg">
                        Start Your Transformation
                    </Button>
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
