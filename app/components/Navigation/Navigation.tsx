'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import Button from '../Button/Button';
import styles from './styles.module.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Image
                         src="/assets/logo1.webp"
                        alt="Phoenix Fitness Logo"
                        width={180}
                        height={70}
                        className={styles.logoImage}
                        priority
                    />
                </div>
                <div className={styles.links}>
                    {['benefits', 'pricing', 'gallery', 'locations', 'transformations'].map(item => (
                        <a key={item} href={`#${item}`} className={styles.link}>
                            {item}
                        </a>
                    ))}
                </div>

                <div className={styles.actions}>
                    <a href="tel:+917795537297" className={styles.callButton} aria-label="Call Phoenix Fitness">
                        <Phone size={16} strokeWidth={2.5} />
                        <span>Call Now</span>
                    </a>
                    <Button href="#hero-form" size="sm">
                        Free Trial
                    </Button>
                </div>
            </div>
        </nav>
    );
}
