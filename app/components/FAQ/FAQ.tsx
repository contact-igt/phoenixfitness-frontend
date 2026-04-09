'use client';

import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import FAQItem from '../FAQItem/FAQItem';
import styles from './styles.module.css';

const faqs = [
    {
        question: "What is the BCA assessment?",
        answer: "BCA stands for Body Composition Analysis. We use medical-grade tech to track your muscle mass, body fat, and metabolic rate to customize your results."
    },
    {
        question: "Is the Year-End Sale price inclusive of taxes?",
        answer: "No, all prices listed are exclusive of tax. 18% GST applies upon final checkout."
    },
    {
        question: "Can I freeze my membership?",
        answer: "Yes! Quarterly (15 days), Half-Yearly (30 days), and Yearly (45 days) plans include free freezing options."
    },
    {
        question: "What should I bring for my trial?",
        answer: "Comfortable gear, clean indoor shoes, a towel, and the discipline to rise from the ashes."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="No fluff, just facts.">
                    Common <span className={styles.highlight}>Questions</span>
                </SectionHeading>
                
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
