import React from 'react';
import { motion } from 'framer-motion';

export default function LaunchingRocket() {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center select-none pointer-events-none">
      
      {/* Bioluminescent Thrust Aura */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[40px] animate-pulse" />

      {/* Floating Sparkles & Cosmic Specks */}
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 right-6 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_10px_#00d2ff]"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-12 -left-2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-6 right-2 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fde047]"
      />

      {/* 3D Animated Rocket Body */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          x: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="relative w-full h-full"
      >
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,180,216,0.5)]"
        >
          <defs>
            {/* Rocket Hull Gradient (Metallic Azure Blue to White) */}
            <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e0f2fe" />
              <stop offset="70%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Rocket Fin & Nose Gradient (Electric Cyan to Royal Blue) */}
            <linearGradient id="rocketAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            {/* Rocket Exhaust Flame Gradient */}
            <linearGradient id="flameGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#00d2ff" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>

            {/* Flame Outer Glow */}
            <filter id="flameGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Exhaust Smoke & Fire Trail (Shooting Down-Left) */}
          <g filter="url(#flameGlow)">
            {/* Outer Flame Tongue */}
            <path
              d="M105 135 C80 160 50 190 20 215 C45 195 75 170 95 145 Z"
              fill="url(#flameGrad)"
              opacity="0.9"
            />
            {/* Core Bright Jet Flame */}
            <path
              d="M110 130 C90 150 65 175 40 195 C60 175 85 155 105 135 Z"
              fill="#ffffff"
            />
            {/* Fiery Smoke Puffs */}
            <circle cx="50" cy="185" r="14" fill="#38bdf8" opacity="0.4" />
            <circle cx="35" cy="205" r="18" fill="#00d2ff" opacity="0.3" />
            <circle cx="18" cy="222" r="12" fill="#0284c7" opacity="0.25" />
          </g>

          {/* Left Wing / Fin */}
          <path
            d="M95 125 C75 140 60 155 55 170 C70 165 95 150 110 140 Z"
            fill="url(#rocketAccentGrad)"
          />

          {/* Right Wing / Fin */}
          <path
            d="M135 85 C155 75 175 70 190 70 C180 85 160 105 145 115 Z"
            fill="url(#rocketAccentGrad)"
          />

          {/* Center Fin Spine */}
          <path
            d="M105 125 L125 105 L115 135 Z"
            fill="#0369a1"
            opacity="0.8"
          />

          {/* Main Rocket Hull (Aerodynamic Fuselage pointing to top-right ~45deg) */}
          <path
            d="M100 140 
               C85 120 105 80 145 55 
               C185 30 205 35 205 35 
               C205 35 210 55 185 95 
               C160 135 120 155 100 140 Z"
            fill="url(#rocketBodyGrad)"
          />

          {/* Nose Cone Cap */}
          <path
            d="M175 60 C185 45 205 35 205 35 C205 35 195 55 180 65 Z"
            fill="url(#rocketAccentGrad)"
          />

          {/* Circular Cockpit Porthole Window */}
          <circle cx="155" cy="75" r="13" fill="#03102b" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="155" cy="75" r="9.5" fill="#00d2ff" />
          {/* Glass reflection glint */}
          <path d="M150 71 Q154 68 158 71" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Rocket Stripe Accent */}
          <path
            d="M125 115 C132 108 142 98 150 90"
            stroke="#0ea5e9"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Rocket Thruster Nozzle Base */}
          <path
            d="M98 138 L92 144 L104 146 L108 140 Z"
            fill="#0c2b5e"
          />
        </svg>
      </motion.div>
    </div>
  );
}
