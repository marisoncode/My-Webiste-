import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated Waving Border Divider
 * Smoothly waves between sections with zero dead vertical gap.
 */
export default function OceanicWave({ 
  mode = 'toLight', 
  hasGlow = true,
  className = ''
}) {
  const isToLight = mode === 'toLight';

  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none select-none -mt-3 sm:-mt-6 ${className}`}>
      <svg
        className="relative block w-[108%] -ml-[4%] h-10 sm:h-14 md:h-16"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Background Wave (Drifts gently right) */}
        <motion.path
          animate={{ x: [-18, 18, -18] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          d={
            isToLight
              ? "M-40,38 C170,118 350,-10 560,58 C770,122 960,-5 1170,62 C1330,112 1420,28 1480,52 L1480,130 L-40,130 Z"
              : "M-40,42 C190,115 380,-5 590,62 C800,125 980,0 1190,68 C1340,114 1420,32 1480,58 L1480,130 L-40,130 Z"
          }
          className={isToLight ? 'fill-zinc-100/80 dark:fill-zinc-900/70' : 'fill-zinc-200/60 dark:fill-zinc-800/60'}
        />

        {/* Layer 2 & 3: Main Waving Fill + Brand Green Crest Line (Drifts gently left) */}
        <motion.g
          animate={{ x: [18, -18, 18] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d={
              isToLight
                ? "M-40,58 C160,128 330,2 540,70 C750,130 930,6 1140,74 C1310,122 1410,40 1480,66 L1480,130 L-40,130 Z"
                : "M-40,52 C170,124 350,0 560,68 C770,128 950,4 1160,72 C1325,120 1415,36 1480,62 L1480,130 L-40,130 Z"
            }
            className={isToLight ? 'fill-white dark:fill-zinc-950' : 'fill-zinc-100 dark:fill-zinc-900'}
          />

          {hasGlow && (
            <>
              {/* Subtle Base Wave Line */}
              <path
                d={
                  isToLight
                    ? "M-40,58 C160,128 330,2 540,70 C750,130 930,6 1140,74 C1310,122 1410,40 1480,66"
                    : "M-40,52 C170,124 350,0 560,68 C770,128 950,4 1160,72 C1325,120 1415,36 1480,62"
                }
                fill="none"
                stroke="#25A727"
                strokeOpacity="0.25"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Animated Worming / Slithering Line Moving Along the Wave */}
              <motion.path
                d={
                  isToLight
                    ? "M-40,58 C160,128 330,2 540,70 C750,130 930,6 1140,74 C1310,122 1410,40 1480,66"
                    : "M-40,52 C170,124 350,0 560,68 C770,128 950,4 1160,72 C1325,120 1415,36 1480,62"
                }
                fill="none"
                stroke="#25A727"
                strokeWidth="3.5"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="16 84"
                animate={{ strokeDashoffset: [100, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
              />
            </>
          )}
        </motion.g>
      </svg>
    </div>
  );
}
