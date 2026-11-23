import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { soundFx } from '../utils/soundEffects';

export default function CyberWhaleHero() {
  const [clickRipples, setClickRipples] = useState([]);

  // Mouse coordinate motion values for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid cinematic response
  const springConfig = { stiffness: 95, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Parallax Multi-Plane Transforms
  // 1. Far Background: Crystal City (subtle counter-movement)
  const cityTranslateX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const cityTranslateY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  // 2. Midground: Neon Holographic Rings (dynamic tilt & rotation)
  const ringRotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const ringRotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const ringRotateZ = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // 3. Focal Plane: The Breaching Cyber Whale (commanding 3D banking)
  const whaleRotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const whaleRotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const whaleTranslateX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const whaleTranslateY = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  // 4. Foreground: Floating Bioluminescent Glass Spheres (exaggerated parallax)
  const bubble1X = useTransform(smoothX, [-0.5, 0.5], [45, -45]);
  const bubble1Y = useTransform(smoothY, [-0.5, 0.5], [35, -35]);
  const bubble2X = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const bubble2Y = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);
  const bubble3X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const bubble3Y = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleWhaleClick = (e) => {
    soundFx.playWaterSplash();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setClickRipples((prev) => [...prev.slice(-4), newRipple]);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[440px] sm:h-[520px] lg:h-[580px] xl:h-[640px] flex items-center justify-center select-none overflow-visible"
      style={{ perspective: 1400 }}
    >
      {/* ------------------------------------------------------------- */}
      {/* LAYER 1 (FAR BACKGROUND): GLOWING HORIZON & CRYSTAL CITY SPIRES */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{
          x: cityTranslateX,
          y: cityTranslateY,
        }}
        className="absolute inset-x-0 bottom-2 sm:bottom-6 h-44 sm:h-56 pointer-events-none opacity-90 z-0 flex items-end justify-center"
      >
        <svg
          viewBox="0 0 900 260"
          className="w-full h-full object-cover filter drop-shadow-[0_0_30px_rgba(0,210,255,0.45)]"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="cityHorizonSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#0369a1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="crystalSpireGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#67e8f9" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#0ea5e9" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#03457a" stopOpacity="0.2" />
            </linearGradient>
            <filter id="cityNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Distant Mountainous Crystal Ridgeline */}
          <path
            d="M0 260 L80 180 L140 210 L220 140 L280 190 L360 130 L440 200 L520 110 L600 190 L680 120 L760 180 L840 100 L900 260 Z"
            fill="url(#cityHorizonSky)"
            opacity="0.45"
          />

          {/* Futuristic High-Density Cityscape (Spires, Domes & Towers) */}
          {/* Cathedral Spires Right Quad (matching the image) */}
          <polygon points="560,260 575,85 580,35 585,85 600,260" fill="url(#crystalSpireGrad)" filter="url(#cityNeonGlow)" />
          <polygon points="630,260 645,55 650,15 655,55 670,260" fill="url(#crystalSpireGrad)" filter="url(#cityNeonGlow)" />
          <polygon points="705,260 718,80 722,40 726,80 740,260" fill="url(#crystalSpireGrad)" filter="url(#cityNeonGlow)" />
          <polygon points="775,260 786,110 790,75 794,110 805,260" fill="url(#crystalSpireGrad)" />

          {/* Angular Metropolis Blocks */}
          <rect x="600" y="140" width="45" height="120" rx="4" fill="#0284c7" opacity="0.45" />
          <rect x="670" y="115" width="55" height="145" rx="6" fill="#0ea5e9" opacity="0.5" />
          <rect x="740" y="150" width="50" height="110" rx="4" fill="#38bdf8" opacity="0.4" />
          <rect x="520" y="165" width="55" height="95" rx="5" fill="#0369a1" opacity="0.35" />

          {/* Glowing Windows Matrix Grid Lines */}
          <g stroke="#ffffff" strokeWidth="1.2" opacity="0.8" strokeDasharray="3 4">
            <line x1="608" y1="155" x2="637" y2="155" />
            <line x1="608" y1="175" x2="637" y2="175" />
            <line x1="608" y1="195" x2="637" y2="195" />
            <line x1="608" y1="215" x2="637" y2="215" />
            <line x1="680" y1="135" x2="715" y2="135" />
            <line x1="680" y1="155" x2="715" y2="155" />
            <line x1="680" y1="175" x2="715" y2="175" />
            <line x1="680" y1="195" x2="715" y2="195" />
            <line x1="680" y1="215" x2="715" y2="215" />
            <line x1="750" y1="165" x2="780" y2="165" />
            <line x1="750" y1="185" x2="780" y2="185" />
          </g>

          {/* Spire Pinnacle Beacons */}
          <circle cx="580" cy="33" r="5" fill="#ffffff" filter="url(#cityNeonGlow)" />
          <circle cx="650" cy="13" r="6" fill="#ffffff" filter="url(#cityNeonGlow)" />
          <circle cx="722" cy="38" r="4.5" fill="#ffffff" filter="url(#cityNeonGlow)" />
          <circle cx="790" cy="73" r="3.5" fill="#ffffff" filter="url(#cityNeonGlow)" />
        </svg>
      </motion.div>

      {/* Bioluminescent Oceanic Horizon Water Rim */}
      <div className="absolute inset-x-0 bottom-2 sm:bottom-4 h-1.5 bg-gradient-to-r from-transparent via-[#00d2ff] to-cyan-300 opacity-90 blur-[2px] z-10" />

      {/* ------------------------------------------------------------- */}
      {/* LAYER 2 (MIDGROUND): 3D HOLOGRAPHIC CYAN NEON ENERGY RINGS */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{
          rotateX: ringRotateX,
          rotateY: ringRotateY,
          rotateZ: ringRotateZ,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.82, 0.98, 0.82]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[380px] sm:w-[500px] lg:w-[600px] xl:w-[680px] h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[380px] pointer-events-none z-10"
      >
        {/* Ring 1: Primary Electric Cyan Orbiting Ring */}
        <div
          className="absolute inset-0 rounded-[50%] border-[3px] sm:border-[4px] border-[#00d2ff]"
          style={{
            transform: 'rotate(-24deg) rotateX(64deg)',
            boxShadow: '0 0 40px rgba(0, 210, 255, 0.75), inset 0 0 30px rgba(0, 210, 255, 0.55)',
            filter: 'drop-shadow(0 0 20px #00d2ff)'
          }}
        />

        {/* Ring 2: Secondary Brilliant Celestial Orbit */}
        <div
          className="absolute inset-8 sm:inset-10 rounded-[50%] border-2 sm:border-[2.5px] border-[#7dd3fc]"
          style={{
            transform: 'rotate(-20deg) rotateX(62deg)',
            boxShadow: '0 0 28px rgba(125, 211, 252, 0.8), inset 0 0 18px rgba(125, 211, 252, 0.6)'
          }}
        />

        {/* Ring 3: Fine Radiant Specular Core Filament */}
        <div
          className="absolute inset-16 sm:inset-20 rounded-[50%] border border-white/90"
          style={{
            transform: 'rotate(-26deg) rotateX(66deg)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.7)'
          }}
        />
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 3 (FOCAL): THE MAJESTIC SIDE-VIEW BREACHING CYBER WHALE */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        style={{
          rotateX: whaleRotateX,
          rotateY: whaleRotateY,
          x: whaleTranslateX,
          y: whaleTranslateY,
          transformStyle: 'preserve-3d',
        }}
        onClick={handleWhaleClick}
        className="relative z-20 cursor-pointer group"
      >
        {/* Rhythmic Breathing & Swimming Undulation */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-1.2, 1.8, -1.2],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-[340px] sm:w-[480px] lg:w-[560px] xl:w-[640px] h-[230px] sm:h-[310px] lg:h-[370px] xl:h-[420px]"
        >
          <svg
            viewBox="0 0 680 440"
            className="w-full h-full filter drop-shadow-[0_20px_45px_rgba(0,180,216,0.6)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Deep Oceanic Midnight-to-Azure Back Gradient */}
              <linearGradient id="whaleBackGrad" x1="0%" y1="0%" x2="100%" y2="85%">
                <stop offset="0%" stopColor="#021438" />
                <stop offset="22%" stopColor="#082963" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="82%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>

              {/* Pearlescent Luminous White-Cyan Belly Gradient */}
              <linearGradient id="whaleBellyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#e0f2fe" />
                <stop offset="65%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>

              {/* Wing Fin Gradient */}
              <linearGradient id="finGrad" x1="0%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="55%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>

              {/* Specular Ridge Highlight Gradient */}
              <linearGradient id="crestGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.6" />
              </linearGradient>

              {/* Cyber Neon Glow Filter */}
              <filter id="whaleGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Far Side Tail Fluke (Deep in distance) */}
            <path
              d="M140 270 C120 250 80 220 55 210 C72 235 90 265 105 285 C115 278 130 274 140 270 Z"
              fill="#061a40"
              opacity="0.8"
            />

            {/* Main Whale Body Archetype (Breaching from Right towards Upper-Left) */}
            <path
              d="M110 280 
                 C170 260 250 195 360 130 
                 C450 78 530 72 590 95 
                 C635 112 650 145 625 172 
                 C568 228 430 300 305 328 
                 C225 345 155 315 110 280 Z"
              fill="url(#whaleBackGrad)"
            />

            {/* Ventral Throat & Belly (Pearlescent White with Bioluminescent Grooves) */}
            <path
              d="M295 328 
                 C405 300 520 240 590 190 
                 C618 168 635 145 625 135 
                 C602 158 545 200 465 245 
                 C375 295 285 320 250 325 
                 C268 327 282 328 295 328 Z"
              fill="url(#whaleBellyGrad)"
              opacity="0.96"
            />

            {/* Ventral Grooves Lines (Delicate Pleated Throat Furrows) */}
            <g stroke="#ffffff" strokeWidth="1.8" opacity="0.7" strokeLinecap="round">
              <path d="M315 320 C385 295 475 250 545 205" />
              <path d="M342 314 C408 288 498 244 562 200" />
              <path d="M370 306 C430 280 515 235 578 194" />
              <path d="M398 298 C452 272 532 227 590 188" />
            </g>

            {/* Dorsal Fin Ridge */}
            <path
              d="M260 180 C282 158 315 148 305 175 C295 185 278 185 260 180 Z"
              fill="#00d2ff"
              filter="url(#whaleGlowFilter)"
              opacity="0.85"
            />

            {/* Fore Flipper (Pectoral Wing Fin) - Prominent Swept Cyber Wing */}
            <path
              d="M385 245 
                 C396 290 418 355 452 390 
                 C458 396 468 390 465 378 
                 C445 328 435 278 425 235 Z"
              fill="url(#finGrad)"
              filter="url(#whaleGlowFilter)"
            />

            {/* Near Side Tail Flukes (Swept Double Crescent) */}
            <path
              d="M110 280 
                 C90 302 45 348 20 365 
                 C38 332 60 298 90 280 
                 C72 270 45 248 28 225 
                 C55 242 90 264 110 280 Z"
              fill="url(#finGrad)"
              filter="url(#whaleGlowFilter)"
            />

            {/* Bioluminescent Circuit Crest Line along Spine */}
            <path
              d="M125 275 C200 242 315 172 430 108 C498 72 555 72 600 95"
              stroke="url(#crestGlowGrad)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              filter="url(#whaleGlowFilter)"
            />

            {/* Glowing Intelligent Whale Eye */}
            <circle cx="582" cy="132" r="5" fill="#ffffff" filter="url(#whaleGlowFilter)" />
            <circle cx="582" cy="132" r="3" fill="#00d2ff" />
            <circle cx="580" cy="130" r="1.2" fill="#ffffff" />

            {/* Blowhole Luminous Mist Vapor Plume */}
            <path
              d="M545 85 C552 56 565 38 582 26 C576 44 568 68 556 82 Z"
              fill="#bae6fd"
              opacity="0.8"
              filter="url(#whaleGlowFilter)"
            />
            <circle cx="584" cy="24" r="3.5" fill="#ffffff" filter="url(#whaleGlowFilter)" />
            <circle cx="598" cy="18" r="2.5" fill="#38bdf8" />
            <circle cx="570" cy="32" r="2.2" fill="#00d2ff" />

            {/* Dynamic Water Spray Splash Droplets around Breach */}
            <g fill="#00d2ff" opacity="0.9">
              <circle cx="120" cy="298" r="4" filter="url(#whaleGlowFilter)" />
              <circle cx="145" cy="315" r="3" />
              <circle cx="180" cy="338" r="3.5" />
              <circle cx="245" cy="345" r="4.5" filter="url(#whaleGlowFilter)" />
              <circle cx="310" cy="350" r="3" />
              <circle cx="380" cy="335" r="3.8" />
              <circle cx="440" cy="400" r="3.5" filter="url(#whaleGlowFilter)" />
              <circle cx="475" cy="375" r="2.5" />
              <circle cx="510" cy="310" r="3.2" />
            </g>
          </svg>
        </motion.div>

        {/* Dynamic Click Ripple Feedback */}
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4.5, opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute rounded-full border-2 border-cyan-400 pointer-events-none"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
              boxShadow: '0 0 25px #00d2ff'
            }}
          />
        ))}
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* LAYER 4 (FOREGROUND): FLOATING BIOLUMINESCENT GLASS DROPLETS */}
      {/* ------------------------------------------------------------- */}
      {/* Droplet 1: Large Glossy Glass Sphere Top-Right */}
      <motion.div
        style={{ x: bubble1X, y: bubble1Y }}
        animate={{ y: [-14, 14, -14], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 sm:top-8 right-6 sm:right-12 w-14 sm:w-16 h-14 sm:h-16 rounded-full border-2 border-cyan-300/70 bg-gradient-to-tr from-cyan-400/25 via-sky-300/35 to-white/50 backdrop-blur-xs shadow-[0_0_25px_rgba(0,210,255,0.45)] pointer-events-none z-30"
      >
        <div className="absolute top-2.5 left-2.5 w-4 h-2.5 rounded-full bg-white/95 rotate-[-35deg]" />
      </motion.div>

      {/* Droplet 2: Deep Blue Glass Bubble Bottom-Left */}
      <motion.div
        style={{ x: bubble2X, y: bubble2Y }}
        animate={{ y: [16, -16, 16], rotate: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 sm:bottom-16 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-cyan-300/60 bg-gradient-to-tr from-blue-600/25 via-cyan-400/30 to-white/40 backdrop-blur-xs shadow-[0_0_30px_rgba(0,210,255,0.4)] pointer-events-none z-30"
      >
        <div className="absolute top-3.5 left-3.5 w-5 h-3 rounded-full bg-white/90 rotate-[-40deg]" />
      </motion.div>

      {/* Droplet 3: Mid-Size Radiant Bubble Center-Left */}
      <motion.div
        style={{ x: bubble3X, y: bubble3Y }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 sm:left-20 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-cyan-300/80 bg-cyan-400/35 backdrop-blur-xs shadow-[0_0_18px_rgba(0,210,255,0.5)] pointer-events-none z-30"
      >
        <div className="absolute top-1.5 left-2 w-2.5 h-1.5 rounded-full bg-white/95" />
      </motion.div>

      {/* Droplet 4: Tiny Sparkle Bubble Upper-Center */}
      <div className="absolute top-12 left-1/2 w-6 h-6 rounded-full border border-white/80 bg-cyan-300/40 animate-ping opacity-75 pointer-events-none" />

    </div>
  );
}
