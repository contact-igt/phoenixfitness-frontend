'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false
}: ButtonProps) {
    const combinedClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    // For anchor links (#something), use JS scroll so repeated clicks always work
    // and so we can account for the fixed navbar height
    const handleAnchorClick = (e: React.MouseEvent) => {
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            const navHeight = 80; // fixed navbar height in px
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            // If element not found (e.g. on a different page), scroll to very top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (onClick) onClick();
    };

    const isAnchor = href?.startsWith('#');

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
        >
            {isAnchor ? (
                <a
                    href={href}
                    className={combinedClassName}
                    onClick={handleAnchorClick}
                >
                    {children}
                </a>
            ) : href ? (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            ) : (
                <button
                    type={type}
                    onClick={onClick}
                    className={combinedClassName}
                    disabled={disabled}
                >
                    {children}
                </button>
            )}
        </motion.div>
    );
}
