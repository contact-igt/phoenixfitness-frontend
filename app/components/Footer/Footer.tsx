'use client';

import Image from 'next/image';
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone } from 'lucide-react';
import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/assets/logo1.png"
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
                            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className={styles.socialIcon}>
                                    <Icon size={20} />
                                </a>
                            ))}
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
                                <Mail size={16} /> INFO@PHOENIXFITNESS.COM
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={16} /> +91 999 000 1111
                            </li>
                        </ul>
                    </div>
                </div>
                <p className={styles.copyright}>
                    &copy; 2025 PHOENIX FITNESS • POWER • DISCIPLINE • PERFORMANCE
                </p>
            </div>
        </footer>
    );
}
