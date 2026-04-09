// 'use client';

// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sparkles } from 'lucide-react';
// import Button from './Button/Button';
// import styles from './styles.module.css';

// export default function FloatingCTA() {
//     return (
//         <div className="fixed bottom-32 right-10 z-[100] hidden md:block">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.8, x: 20 }}
//                 animate={{ opacity: 1, scale: 1, x: 0 }}
//                 transition={{ delay: 1, duration: 0.5 }}
//             >
//                 <Button href="/form" size="md" className="!shadow-2xl !shadow-red-900/40">
//                     <span className="flex items-center gap-2">
//                         <Sparkles size={18} />
//                         Start Free Trial
//                     </span>
//                 </Button>
//             </motion.div>
//         </div>
//     );
// }

// // Add a mobile version that might be a bar at the bottom
// export function MobileStickyCTA() {
//     return (
//         <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden p-4 bg-zinc-950/80 backdrop-blur-lg border-t border-zinc-900">
//             <Button href="/form" size="md" className="w-full">
//                 Start Free Trial
//             </Button>
//         </div>
//     );
// }
