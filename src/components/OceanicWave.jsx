import React from 'react';

/**
 * Organic Liquid Oceanic Wave Divider
 * Matches the stratified wave curves and bioluminescent light ribbons from the design image.
 *
 * @param {string} mode - 'toLight' (dark ocean flowing into white) or 'toDark' (white flowing into deep oceanic midnight)
 * @param {string} glowColor - Color for the bioluminescent edge ribbon (default: #00d2ff)
 * @param {boolean} hasGlow - Whether to display the glowing electric light beam on the wave crest
 */
export default function OceanicWave({ 
  mode = 'toLight', 
  hasGlow = true,
  className = ''
}) {
  const isToLight = mode === 'toLight';

  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none select-none ${className}`}>
      <svg
        className="relative block w-full h-16 sm:h-24 md:h-28"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Ambient Depth Wave Behind */}
        <path
          d={
            isToLight
              ? "M0,38 C190,118 360,-10 560,58 C760,122 950,-5 1150,62 C1300,112 1385,28 1440,52 L1440,130 L0,130 Z"
              : "M0,42 C210,115 390,-5 590,62 C790,125 970,0 1170,68 C1310,114 1390,32 1440,58 L1440,130 L0,130 Z"
          }
          className={isToLight ? 'fill-zinc-100/80 dark:fill-zinc-900/70' : 'fill-zinc-200/60 dark:fill-zinc-800/60'}
        />

        {/* Layer 2: Main Deep Curved Wave */}
        <path
          d={
            isToLight
              ? "M0,58 C180,128 340,2 540,70 C740,130 920,6 1120,74 C1280,122 1380,40 1440,66 L1440,130 L0,130 Z"
              : "M0,52 C190,124 360,0 560,68 C760,128 940,4 1140,72 C1295,120 1385,36 1440,62 L1440,130 L0,130 Z"
          }
          className={isToLight ? 'fill-white dark:fill-zinc-950' : 'fill-zinc-100 dark:fill-zinc-900'}
        />

        {/* Layer 3: Solid Teal Wavy Crest Line */}
        {hasGlow && (
          <path
            d={
              isToLight
                ? "M0,58 C180,128 340,2 540,70 C740,130 920,6 1120,74 C1280,122 1380,40 1440,66"
                : "M0,52 C190,124 360,0 560,68 C760,128 940,4 1140,72 C1295,120 1385,36 1440,62"
            }
            fill="none"
            stroke="#0d9488"
            strokeOpacity="0.45"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}
