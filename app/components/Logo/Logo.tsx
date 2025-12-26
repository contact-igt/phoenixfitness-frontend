import { Flame } from 'lucide-react';
import styles from './styles.module.css';

interface LogoProps {
    dark?: boolean;
}

export default function Logo({ dark = true }: LogoProps) {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.iconWrapper}>
                <Flame className={styles.icon} />
            </div>
            <div className={`${styles.text} ${dark ? styles.dark : styles.light}`}>
                PHOENI<span className={styles.highlight}>X</span>&nbsp;FITNESS
            </div>
        </div>
    );
}
