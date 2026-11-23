import React from 'react';

/**
 * MajesticLogo Component
 * Official logo for Majestic Digital Studio:
 * - Uses the official uploaded logo image (/official-logo.jpg)
 * - Also provides a scalable transparent SVG vector fallback
 */
export default function MajesticLogo({ 
  className = "", 
  useOfficialImage = true,
  iconOnly = false,
  variant = "light", // 'light' (inside light navbar) or 'dark' (inside dark footer/cards)
  size = "md" // 'sm', 'md', 'lg', 'xl'
}) {
  const containerHeights = {
    sm: "h-8",
    md: "h-10 sm:h-11",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm sm:text-base",
    lg: "text-lg sm:text-xl",
    xl: "text-2xl sm:text-3xl"
  };

  const taglineSizes = {
    sm: "text-[8px]",
    md: "text-[9px] sm:text-[10px]",
    lg: "text-xs",
    xl: "text-sm"
  };

  // If using the official raster logo image
  if (useOfficialImage) {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Sleek Dark Obsidian Capsule for the Official Logo Image */}
        <div className={`${containerHeights[size]} rounded-xl sm:rounded-2xl bg-black border border-cyan-500/40 p-1 flex items-center justify-center shadow-xs overflow-hidden group-hover:border-cyan-400 transition-colors`}>
          <img
            src="/official-logo.jpg"
            alt="Majestic Digital Studio Logo"
            className="h-full w-auto object-contain rounded-lg"
          />
        </div>

        {!iconOnly && (
          <div className="flex flex-col text-left leading-tight">
            <span className={`${textSizes[size]} font-black tracking-tight font-display ${
              variant === 'dark' ? 'text-white' : 'text-slate-950'
            }`}>
              Majestic Digital Studio
            </span>
            <span className={`${taglineSizes[size]} font-semibold tracking-wider flex items-center gap-1 mt-0.5 ${
              variant === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
            }`}>
              <span>Design, Develop, Grow</span>
            </span>
          </div>
        )}
      </div>
    );
  }

  // Fallback transparent SVG vector
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${containerHeights[size]} w-auto aspect-[120/100] shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 100"
          className="w-full h-full filter drop-shadow-[0_2px_10px_rgba(0,210,255,0.45)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mGrad" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="jGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="45%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>

            <linearGradient id="swooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="90%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>

            <filter id="flareGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Letter J */}
          <path
            d="M 68 22 L 80 22 L 80 62 C 80 78, 68 88, 52 88 L 42 88 C 56 86, 68 76, 68 62 Z"
            fill="url(#jGrad)"
          />

          {/* Letter M */}
          <path d="M 22 15 L 36 26 L 36 78 L 22 78 Z" fill="url(#mGrad)" />
          <path d="M 36 26 L 52 50 L 70 15 L 70 32 L 52 64 L 36 40 Z" fill="url(#mGrad)" />
          <path d="M 70 15 L 70 54 L 60 62 L 60 32 Z" fill="url(#mGrad)" />

          {/* Orbital Swoosh */}
          <path
            d="M 14 68 C 18 55, 38 68, 62 60 C 82 52, 98 34, 104 18 C 102 24, 88 48, 62 56 C 36 64, 20 54, 14 68 Z"
            fill="url(#swooshGrad)"
            filter="url(#flareGlow)"
          />

          {/* Flare Star Glint */}
          <circle cx="104" cy="18" r="3.5" fill="#ffffff" filter="url(#flareGlow)" />
          <circle cx="104" cy="18" r="1.5" fill="#ffffff" />
          <path
            d="M 104 10 L 104 26 M 96 18 L 112 18"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            filter="url(#flareGlow)"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left leading-tight">
          <span className={`${textSizes[size]} font-black tracking-tight font-display ${
            variant === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            Majestic Digital Studio
          </span>
          <span className={`${taglineSizes[size]} font-semibold tracking-wider flex items-center gap-1.5 mt-0.5 ${
            variant === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
          }`}>
            <span>Design, Develop, Grow</span>
          </span>
        </div>
      )}
    </div>
  );
}
