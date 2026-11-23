import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/soundEffects';

const EMOJI_POOL = [
  { char: '😊', label: 'Starts at ₹999!', color: 'from-amber-400 to-amber-500' },
  { char: '😎', label: 'Bespoke UI', color: 'from-cyan-400 to-indigo-500' },
  { char: '🤩', label: 'World-Class', color: 'from-yellow-400 to-rose-400' },
  { char: '🥳', label: 'MJ Digital Studio', color: 'from-pink-400 to-indigo-500' },
  { char: '😉', label: 'Handcrafted', color: 'from-emerald-400 to-teal-500' },
  { char: '😍', label: 'Pure Quality', color: 'from-rose-400 to-pink-500' },
  { char: '✨', label: 'Sub-Second Speed', color: 'from-amber-300 to-cyan-400' },
  { char: '🚀', label: 'Instant Launch', color: 'from-indigo-400 to-purple-500' }
];

export default function WaterDropCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState([]);
  const [spronks, setSpronks] = useState([]);
  const [emojiBursts, setEmojiBursts] = useState([]);
  const [trailDroplets, setTrailDroplets] = useState([]);

  const lastPos = useRef({ x: 0, y: 0 });
  const emojiIndexRef = useRef(0);

  useEffect(() => {
    // Only enable on pointer devices (not mobile touch screens)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      // Trailing micro droplets on mouse movement
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      if (dist > 35 && Math.random() > 0.4) {
        const id = Date.now() + Math.random();
        setTrailDroplets((prev) => [
          ...prev.slice(-6),
          { id, x: e.clientX, y: e.clientY, size: Math.random() * 3 + 2 }
        ]);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      const clickX = e.clientX;
      const clickY = e.clientY;
      const clickId = Date.now();

      // Play liquid water drop sound
      soundFx.playWaterSplash();

      // 1. Dual Concentric Expanding Liquid Ripples
      setRipples((prev) => [
        ...prev.slice(-4),
        { id: clickId + '-inner', x: clickX, y: clickY, size: 55, duration: 0.65 },
        { id: clickId + '-outer', x: clickX, y: clickY, size: 90, duration: 0.85 }
      ]);

      // 2. Water Spronks: 12 splash droplets bursting out with downward gravity arcs
      const spronkCount = 12;
      const newSpronks = [];
      for (let i = 0; i < spronkCount; i++) {
        const angle = (i / spronkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const distance = 60 + Math.random() * 85;
        const dropletSize = 4 + Math.random() * 5;
        const duration = 0.5 + Math.random() * 0.25;
        newSpronks.push({
          id: `${clickId}-spronk-${i}`,
          x: clickX,
          y: clickY,
          targetX: Math.cos(angle) * distance,
          targetY: Math.sin(angle) * distance + (30 + Math.random() * 25), // gravity dip
          size: dropletSize,
          duration
        });
      }
      setSpronks((prev) => [...prev.slice(-20), ...newSpronks]);

      // 3. 3D Smiley Emoji Popping with Readable Text Below (Taking more time & facing forward!)
      const emojiItem = EMOJI_POOL[emojiIndexRef.current % EMOJI_POOL.length];
      emojiIndexRef.current += 1;

      setEmojiBursts((prev) => [
        ...prev.slice(-4),
        {
          id: `${clickId}-emoji`,
          x: clickX,
          y: clickY,
          char: emojiItem.char,
          label: emojiItem.label,
          color: emojiItem.color
        }
      ]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Clean up ripples after animation
  useEffect(() => {
    if (ripples.length === 0) return;
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(2));
    }, 850);
    return () => clearTimeout(timer);
  }, [ripples]);

  // Clean up spronks
  useEffect(() => {
    if (spronks.length === 0) return;
    const timer = setTimeout(() => {
      setSpronks((prev) => prev.slice(12));
    }, 750);
    return () => clearTimeout(timer);
  }, [spronks]);

  // Clean up 3D emoji bursts (Kept on screen longer - 2.5s for crystal clear readability!)
  useEffect(() => {
    if (emojiBursts.length === 0) return;
    const timer = setTimeout(() => {
      setEmojiBursts((prev) => prev.slice(1));
    }, 2500);
    return () => clearTimeout(timer);
  }, [emojiBursts]);

  // Clean up trailing droplets
  useEffect(() => {
    if (trailDroplets.length === 0) return;
    const timer = setTimeout(() => {
      setTrailDroplets((prev) => prev.slice(1));
    }, 350);
    return () => clearTimeout(timer);
  }, [trailDroplets]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Water Click Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.15, opacity: 0.9, borderWidth: '2.5px' }}
          animate={{ scale: 2.8, opacity: 0, borderWidth: '0.5px' }}
          transition={{ duration: ripple.duration, ease: 'easeOut' }}
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size
          }}
          className="absolute rounded-full border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,210,255,0.5)]"
        />
      ))}

      {/* 2. Water Spronks: Liquid Droplets Radiating on Click with Gravity */}
      {spronks.map((spronk) => (
        <motion.div
          key={spronk.id}
          initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
          animate={{
            x: spronk.targetX,
            y: spronk.targetY,
            scale: [0.8, 1.3, 0.2],
            opacity: [1, 0.9, 0]
          }}
          transition={{ duration: spronk.duration, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            left: spronk.x - spronk.size / 2,
            top: spronk.y - spronk.size / 2,
            width: spronk.size,
            height: spronk.size
          }}
          className="absolute rounded-full"
        >
          <div 
            className="w-full h-full rounded-full border border-cyan-200/90 shadow-[0_2px_8px_rgba(0,210,255,0.7)] relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #67e8f9 50%, #00d2ff 90%, #0284c7 100%)',
              boxShadow: '0 2px 6px rgba(0,210,255,0.6), inset 0 1px 2px rgba(255,255,255,0.9)'
            }}
          >
            <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white/95" />
          </div>
        </motion.div>
      ))}

      {/* 3. 3D Smiley Emojis with CRYSTAL-CLEAR READABLE WORDS BELOW (Outward Float & Slower Delay) */}
      {emojiBursts.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            scale: 0.4,
            y: 0,
            opacity: 0
          }}
          animate={{
            scale: [0.4, 1.15, 1.0, 1.0, 0.9],
            y: [0, -35, -55, -65, -80],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{
            duration: 2.4, // Takes more time, fully readable!
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.15, 0.45, 0.8, 1]
          }}
          style={{
            left: item.x,
            top: item.y
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-50 flex flex-col items-center gap-1.5 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
        >
          {/* 3D Emoji Avatar Sphere (Facing Forward!) */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-100 p-0.5 shadow-2xl border-2 border-white/90">
            <span className="text-3xl filter drop-shadow-sm select-none">
              {item.char}
            </span>
            {/* 3D Specular Sunlight Glint */}
            <div className="absolute top-1 left-2 w-3.5 h-1.5 rounded-full bg-white/95 rotate-[-25deg]" />
            {/* Water Droplet Orbit Ping */}
            <div className="absolute -inset-1 rounded-full border border-cyan-400/60 animate-ping opacity-60" />
          </div>

          {/* High-Contrast Perfectly Readable Word Badge Below (Faces Forward, Never Inwards!) */}
          <div className="px-3.5 py-1.5 rounded-full bg-[#03102b]/95 text-white border-2 border-cyan-400/70 text-xs font-black tracking-wide shadow-xl whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00d2ff]" />
            <span className="text-cyan-200">{item.label}</span>
          </div>
        </motion.div>
      ))}

      {/* 4. Trailing Mini Liquid Droplets */}
      {trailDroplets.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ scale: 1, opacity: 0.75 }}
          animate={{ scale: 0.2, opacity: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            left: drop.x - drop.size / 2,
            top: drop.y - drop.size / 2,
            width: drop.size,
            height: drop.size
          }}
          className="absolute rounded-full bg-cyan-400/70 shadow-xs"
        />
      ))}

      {/* 5. Main Glass Water Droplet Cursor */}
      <div
        style={{
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0)`,
          transition: 'transform 0.04s ease-out'
        }}
        className="absolute w-8 h-8 rounded-full pointer-events-none"
      >
        <div 
          className={`w-full h-full rounded-full border border-cyan-300/80 relative overflow-hidden flex items-center justify-center transition-transform duration-100 ${
            isClicking ? 'scale-75' : 'scale-100'
          }`}
          style={{
            background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.98) 0%, rgba(165, 243, 252, 0.75) 40%, rgba(0, 210, 255, 0.45) 80%, rgba(2, 132, 199, 0.65) 100%)',
            boxShadow: 'inset 0 1.5px 3px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(0, 210, 255, 0.5), 0 4px 12px rgba(0, 210, 255, 0.35)'
          }}
        >
          {/* Specular Droplet Sun Glint */}
          <div className="absolute top-1 left-1.5 w-2.5 h-1.5 rounded-full bg-white/95 rotate-[-25deg] shadow-xs" />
          <div className="absolute bottom-1 right-1.5 w-1 h-1 rounded-full bg-white/70" />

          {/* Micro Happy Smiley Reflection inside the Water Droplet */}
          <div className={`text-[10px] select-none opacity-85 transition-transform duration-150 ${isClicking ? 'scale-125' : 'scale-100'}`}>
            {isClicking ? '😉' : '💧'}
          </div>
        </div>
      </div>
    </div>
  );
}
