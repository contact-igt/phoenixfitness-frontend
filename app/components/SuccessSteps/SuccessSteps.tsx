'use client';

import { ClipboardList, TrendingUp, Target, Award } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './styles.module.css';

const steps = [
    { icon: ClipboardList, step: '01', title: 'Consultation', desc: 'Expert goal mapping.' },
    { icon: TrendingUp, step: '02', title: 'BCA Scan', desc: 'Precision composition analysis.' },
    { icon: Target, step: '03', title: 'Action Plan', desc: 'Tailor-made schedules.' },
    { icon: Award, step: '04', title: 'Rise High', desc: 'Consistent training.' },
];

export default function SuccessSteps() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading subtitle="Your journey from ash to phoenix in 4 simple steps">
                    The Success <span className={styles.highlight}>Process</span>
                </SectionHeading>
                <div className={styles.grid}>
                    {steps.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.stepNumber}>{item.step}</div>
                                <div className={styles.iconWrapper}>
                                    <Icon size={24} />
                                </div>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.description}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
