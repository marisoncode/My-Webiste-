import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOLT_PATHS = [
  {
    id: 'top-right',
    className: 'top-12 right-6 sm:right-16 w-40 h-56',
    viewBox: '0 0 160 220',
    main: 'M95 0 L70 55 L98 62 L58 130 L82 138 L38 215',
    branch: 'M70 55 L42 90 M58 130 L28 158'
  },
  {
    id: 'mid-left',
    className: 'top-1/3 left-4 sm:left-12 w-36 h-52',
    viewBox: '0 0 140 200',
    main: 'M55 0 L82 48 L56 58 L92 118 L64 126 L104 196',
    branch: 'M82 48 L112 78 M92 118 L118 144'
  },
  {
    id: 'lower-right',
    className: 'bottom-24 right-8 sm:right-20 w-40 h-56',
    viewBox: '0 0 160 220',
    main: 'M80 0 L108 54 L78 64 L118 128 L88 138 L128 216',
    branch: 'M108 54 L138 86 M118 128 L142 160'
  }
];

/**
 * Subtle site-wide storm thunder & lightning effect:
 * periodically flashes a distant atmospheric glow and crisp SVG lightning bolts.
 */
export default function StormThunderOverlay() {
  const [activeBolt, setActiveBolt] = useState(null);

  useEffect(() => {
    let timeoutId;
    const triggerStrike = () => {
      const pick = BOLT_PATHS[Math.floor(Math.random() * BOLT_PATHS.length)];
      setActiveBolt({ ...pick, key: Date.now() });

      setTimeout(() => {
        setActiveBolt(null);
      }, 480);

      const nextDelay = 3200 + Math.random() * 2800;
      timeoutId = setTimeout(triggerStrike, nextDelay);
    };

    timeoutId = setTimeout(triggerStrike, 1400);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none" aria-hidden="true">
      <AnimatePresence>
        {activeBolt && (
          <motion.div
            key={activeBolt.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.14, 0.03, 0.18, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, times: [0, 0.15, 0.35, 0.55, 1] }}
            className="absolute inset-0 bg-teal-500/10 dark:bg-teal-400/15"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeBolt && (
          <motion.svg
            key={`svg-${activeBolt.key}`}
            viewBox={activeBolt.viewBox}
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.25, 0.95, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.46, times: [0, 0.15, 0.35, 0.6, 1] }}
            className={`absolute ${activeBolt.className} text-teal-600 dark:text-teal-400 drop-shadow-[0_0_14px_rgba(20,184,166,0.8)]`}
          >
            <path
              d={activeBolt.main}
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={activeBolt.branch}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}
