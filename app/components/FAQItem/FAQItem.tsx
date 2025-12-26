'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './styles.module.css';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.button}
            >
                <span className={`${styles.question} ${isOpen ? styles.questionOpen : ''}`}>
                    {question}
                </span>
                <ChevronDown className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.answerContainer}
                    >
                        <p className={styles.answer}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
