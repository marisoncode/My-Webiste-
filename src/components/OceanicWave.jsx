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

  // Fill colors: deep ocean #03102b vs light cloud #f0f9ff / #ffffff
  const primaryFill = isToLight ? '#f0f9ff' : '#03102b';
  const secondaryFill = isToLight ? 'rgba(224, 242, 254, 0.5)' : 'rgba(7, 26, 64, 0.6)';

  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none select-none ${className}`}>
      <svg
        className="relative block w-full h-12 sm:h-16 md:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Bioluminescent Gradient Glow for Wave Crest */}
          <linearGradient id="waveGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#00d2ff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
          </linearGradient>

          <filter id="waveNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer 1: Ambient Depth Wave Behind */}
        <path
          d={
            isToLight
              ? "M0,45 C280,110 520,10 820,70 C1120,120 1340,30 1440,55 L1440,120 L0,120 Z"
              : "M0,35 C320,95 640,0 960,65 C1200,110 1360,25 1440,45 L1440,120 L0,120 Z"
          }
          fill={secondaryFill}
        />

        {/* Layer 2: Main Solid Wave */}
        <path
          d={
            isToLight
              ? "M0,60 C320,120 600,20 900,80 C1180,130 1360,40 1440,70 L1440,120 L0,120 Z"
              : "M0,50 C360,110 720,15 1040,75 C1240,115 1380,35 1440,60 L1440,120 L0,120 Z"
          }
          fill={primaryFill}
        />

        {/* Layer 3: Bioluminescent Glowing Energy Ribbon Crest */}
        {hasGlow && (
          <path
            d={
              isToLight
                ? "M0,60 C320,120 600,20 900,80 C1180,130 1360,40 1440,70"
                : "M0,50 C360,110 720,15 1040,75 C1240,115 1380,35 1440,60"
            }
            fill="none"
            stroke="url(#waveGlowGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#waveNeonGlow)"
          />
        )}
      </svg>
    </div>
  );
}
