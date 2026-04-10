'use client';

import Image from 'next/image';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import Button from '../Button/Button';
import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.ctaSection}>
                <h2 className={styles.ctaHeading}>Ready to start your <br /> transformation?</h2>
                <Button href="#hero-form" size="lg" variant="primary">
                    Claim Your Free Trial
                </Button>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/assets/logo1.webp"
                                alt="Phoenix Fitness Logo"
                                width={180}
                                height={70}
                                className={styles.logoImage}
                            />
                        </div>
                        <p className={styles.brandText}>
                            THE ULTIMATE DESTINATION FOR THOSE WHO REFUSE TO SETTLE. JOIN THE PRIDE, RISE FROM THE ASHES.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.instagram.com/phoenixfitness_bangalore/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/phoenixfitnessbanglore/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC1q-dfQ2T2euEbMSeJ3_PBA" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.linksSection}>
                        <h5 className={styles.sectionTitle}>Navigation</h5>
                        <ul className={styles.linksList}>
                            <li><a href="#locations" className={styles.link}>Our Branches</a></li>
                            <li><a href="#pricing" className={styles.link}>2025 Offers</a></li>
                            <li><a href="#transformations" className={styles.link}>Member Success</a></li>
                        </ul>
                    </div>
                    <div className={styles.contactSection}>
                        <h5 className={styles.sectionTitle}>Support</h5>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <a href="#locations" className={styles.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                                    LOCATIONS
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={16} />
                                <a href="mailto:info@phoenixfitness.com">INFO@PHOENIXFITNESS.COM</a>
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={16} />
                                <a href="tel:+917795537297">+91 7795 537 297</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className={styles.copyright}>
                    &copy; 2026 PHOENIX FITNESS • POWER • DISCIPLINE • PERFORMANCE
                </p>
            </div>
        </footer>
    );
}

