import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  CheckCircle, 
  Gauge, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function SpeedLab() {
  const [activePreset, setActivePreset] = useState('saas');

  const presets = {
    saas: {
      name: "SaaS & AI Web Platform",
      score: 99,
      fcp: "0.4s",
      lcp: "0.7s",
      cls: "0.001",
      fid: "12ms",
      bundle: "48 KB",
      tech: "Vite + React + Tailwind + Motion",
      summary: "Zero unused CSS, Brotli level-11 compression, and route prefetching ensure instant page transitions."
    },
    ecommerce: {
      name: "Luxury E-Commerce Store",
      score: 98,
      fcp: "0.5s",
      lcp: "0.8s",
      cls: "0.000",
      fid: "14ms",
      bundle: "62 KB",
      tech: "Headless React + Shopify Storefront API",
      summary: "Next-gen WebP/AVIF dynamic image sizing, lazy loading, and sub-second cart mutations."
    },
    restaurant: {
      name: "Michelin Hospitality Portal",
      score: 100,
      fcp: "0.3s",
      lcp: "0.6s",
      cls: "0.000",
      fid: "9ms",
      bundle: "38 KB",
      tech: "Static Pre-rendering + Micro-interactions",
      summary: "Interactive sensory menu loads with sub-second snappiness, completely eliminating mobile bounce."
    },
    corporate: {
      name: "Tier-1 Venture Capital Site",
      score: 100,
      fcp: "0.3s",
      lcp: "0.5s",
      cls: "0.000",
      fid: "8ms",
      bundle: "35 KB",
      tech: "Clean Semantic HTML5 + Schema JSON-LD",
      summary: "Strict WCAG AA accessibility compliance and instant Google Search indexing."
    }
  };

  const current = presets[activePreset];

  const handleSelect = (key) => {
    setActivePreset(key);
    soundFx.playClick();
  };

  return (
    <section id="speed-lab" className="py-24 md:py-32 relative bg-[#fafbfc] overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-600" />
            Engineering Benchmark Laboratory
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Clean Modern UI. <br />
            <span className="text-gradient-accent">Sub-Second Pure Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Google penalizes sluggish template sites. We engineer every website with rigorous Core Web Vitals optimization for maximum SEO dominance.
          </motion.p>
        </div>

        {/* Interactive Lab Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl">
          {/* Preset Archetype Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-6 border-b border-slate-100">
            {Object.keys(presets).map((key) => {
              const isActive = activePreset === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  {presets[key].name}
                </button>
              );
            })}
          </div>

          {/* Live Metric Gauges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePreset}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Big Score Ribbon */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 border border-emerald-200 mb-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-3xl font-black font-display">
                      {current.score}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      Google Core Web Vitals Pass
                    </div>
                    <div className="text-xl font-bold text-slate-900 font-display mt-0.5">
                      {current.name}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Architecture: <span className="text-indigo-700 font-mono font-bold">{current.tech}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-slate-200 sm:pl-6 w-full sm:w-auto">
                  <div className="text-xs text-slate-500 font-medium">Total JS/CSS Bundle</div>
                  <div className="text-2xl font-black text-slate-900 font-mono mt-0.5">
                    {current.bundle}
                  </div>
                  <div className="text-[10px] text-cyan-700 font-semibold">Brotli Compressed</div>
                </div>
              </div>

              {/* 4 Technical Core Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 mb-1 font-medium">First Contentful Paint</div>
                  <div className="text-2xl font-extrabold text-emerald-600 font-display">
                    {current.fcp}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">&lt; 1.8s Target</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 mb-1 font-medium">Largest Contentful Paint</div>
                  <div className="text-2xl font-extrabold text-emerald-600 font-display">
                    {current.lcp}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">&lt; 2.5s Target</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 mb-1 font-medium">Cumulative Layout Shift</div>
                  <div className="text-2xl font-extrabold text-indigo-600 font-display">
                    {current.cls}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Zero visual shift</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 mb-1 font-medium">First Input Delay</div>
                  <div className="text-2xl font-extrabold text-cyan-600 font-display">
                    {current.fid}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Instant touch response</div>
                </div>
              </div>

              {/* Technical Summary */}
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
                <Zap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Engineering Implementation:</strong> {current.summary}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
