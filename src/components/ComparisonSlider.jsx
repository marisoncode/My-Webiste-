import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Split, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  Gauge, 
  MoveHorizontal 
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
    soundFx.playPop();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 md:py-32 relative bg-white overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] radial-glow-indigo opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Split className="w-3.5 h-3.5" />
            Interactive Reality Check
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Generic Cookie-Cutter Template vs. <br />
            <span className="text-gradient-accent">MJ Digital Studio Handcrafted Craft</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Drag the interactive slider below to feel the difference between an ordinary cookie-cutter template and a bespoke digital flagship.
          </motion.p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border border-slate-300 select-none shadow-2xl cursor-ew-resize bg-slate-50"
        >
          {/* RIGHT SIDE: MJ Digital Studio Bespoke Experience (Base Layer) */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-cyan-50/50 p-6 sm:p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MJ Digital Studio Bespoke Masterpiece</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 bg-white px-2.5 py-1 rounded-md border border-indigo-100 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-cyan-600" />
                <span>PageSpeed: 99/100</span>
              </div>
            </div>

            <div className="max-w-md my-auto pl-4">
              <span className="text-[11px] font-mono tracking-widest uppercase text-indigo-700 font-bold">
                Tailored Brand Identity
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3 font-display">
                Engineered to Mesmerize & Convert
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Bespoke kinetic typography, hardware-accelerated Framer Motion, and micro-interactions that project market leadership and win high-paying clientele.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-sm">
                  <div className="text-xl font-black text-emerald-600 font-display">0.6s</div>
                  <div className="text-[11px] text-slate-500 font-medium">Time to Interactive</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-sm">
                  <div className="text-xl font-black text-indigo-600 font-display">+240%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Visitor Conversion</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% human-crafted clean React & Tailwind CSS. Zero bloat.</span>
            </div>
          </div>

          {/* LEFT SIDE: Generic Template (Clipped Layer) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-[#f1f3f7] p-6 sm:p-10 flex flex-col justify-between border-r-2 border-rose-500 shadow-2xl"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="min-w-[320px] sm:min-w-[500px]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Generic Recycled Template</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-700 bg-white px-2.5 py-1 rounded-md border border-rose-200">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>PageSpeed: 41/100</span>
                </div>
              </div>

              <div className="max-w-md my-auto">
                <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 font-bold">
                  Stock Template #4821
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-400 mt-2 mb-3 font-sans line-through decoration-rose-500 decoration-2">
                  Welcome To Our Business Website
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-serif">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Generic placeholder text nobody reads.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-300 shadow-sm">
                    <div className="text-xl font-black text-rose-600">4.8s</div>
                    <div className="text-[11px] text-slate-500">Sluggish Bloat Load</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-300 shadow-sm">
                    <div className="text-xl font-black text-rose-600">82%</div>
                    <div className="text-[11px] text-slate-500">High Bounce Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[320px] sm:min-w-[500px] flex items-center gap-2 text-xs text-rose-700 border-t border-rose-200 pt-4">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Recycled templates look cheap and drive high-intent clients away.</span>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-cyan-500 to-indigo-600 cursor-ew-resize z-30 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-indigo-700 flex items-center justify-center shadow-xl border-2 border-indigo-600 transition-transform hover:scale-110 active:scale-95">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Instruction */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <MoveHorizontal className="w-4 h-4 text-indigo-600 animate-pulse" />
          <span>Click or drag the handle to inspect side-by-side</span>
        </div>
      </div>
    </section>
  );
}
