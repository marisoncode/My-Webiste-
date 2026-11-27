import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Palette,
  Search,
  Sparkles,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  TrendingUp,
  Zap,
  Globe,
  RefreshCw
} from 'lucide-react';
import RunningBorder from './RunningBorder';
import { soundFx } from '../utils/soundEffects';

const THEME_SWATCHES = [
  { name: 'Red', bg: 'bg-red-600', text: 'text-red-600 dark:text-red-400', pill: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300', dot: 'bg-red-600' },
  { name: 'Green', bg: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', pill: 'bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300', dot: 'bg-emerald-600' },
  { name: 'Sky Blue', bg: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', pill: 'bg-sky-50 dark:bg-sky-950 border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300', dot: 'bg-sky-500' },
  { name: 'Orange', bg: 'bg-orange-500', text: 'text-orange-600 dark:text-orange-400', pill: 'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300', dot: 'bg-orange-500' },
  { name: 'Black', bg: 'bg-zinc-950 dark:bg-zinc-700', text: 'text-zinc-950 dark:text-zinc-200', pill: 'bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200', dot: 'bg-zinc-950 dark:bg-zinc-300' }
];

const DEVICES = [
  { id: 'mobile', label: 'Mobile', widthClass: 'w-56 max-w-full', badge: '375px', icon: Smartphone },
  { id: 'tablet', label: 'Tab', widthClass: 'w-[82%] max-w-full', badge: '768px', icon: Tablet },
  { id: 'desktop', label: 'Desktop', widthClass: 'w-full', badge: '1440px', icon: Monitor }
];

export default function HeroDesignSeoShowcase({ siteMode = 'studio' }) {
  const isAcademy = siteMode === 'academy';
  const [activeTab, setActiveTab] = useState('design');
  const [swatchIdx, setSwatchIdx] = useState(0);
  const [deviceIdx, setDeviceIdx] = useState(2); // starts on desktop
  const [isHovered, setIsHovered] = useState(false);
  const [auditing, setAuditing] = useState(false);

  // Auto-cycle theme colors and device resolutions when not hovered
  useEffect(() => {
    if (isHovered || activeTab !== 'design') return;
    const timer = setInterval(() => {
      setSwatchIdx((prev) => (prev + 1) % THEME_SWATCHES.length);
      setDeviceIdx((prev) => (prev + 1) % DEVICES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered, activeTab]);

  const stageRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const swatch = THEME_SWATCHES[swatchIdx];
  const currentDevice = DEVICES[deviceIdx];

  const runSeoAudit = () => {
    soundFx.playPop();
    setAuditing(true);
    setTimeout(() => {
      setAuditing(false);
      soundFx.playChime();
    }, 650);
  };

  return (
    <div
      className="w-full max-w-[640px] mx-auto lg:ml-auto lg:mr-0 py-2 sm:py-4 select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={stageRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-square cursor-pointer group"
      >
        {/* Back 3D Depth Plate (Offset in Z-space) */}
        <div
          style={{ transform: 'translateZ(-28px) translateY(14px) translateX(12px)' }}
          className="absolute inset-0 rounded-3xl bg-teal-600/10 dark:bg-teal-400/10 border border-teal-500/25 pointer-events-none transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
        />

        {/* Main 3D Foreground Studio Card */}
        <div
          className="run-border-card w-full h-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-colors z-10"
        >
          <RunningBorder rx={24} />

          {/* Top Bar: Interactive Mode Switcher */}
          <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            <div className="inline-flex p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab('design');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'design'
                    ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{isAcademy ? 'Frontend & MERN' : 'UI Design'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab('seo');
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'seo'
                    ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <Search className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{isAcademy ? 'Python & Gen AI' : 'SEO & Speed'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Body */}
          <div className="flex-1 py-4 flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 'design' ? (
                <motion.div
                  key="design"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.22 }}
                  className="h-full flex flex-col justify-between gap-3"
                >
                  {/* Controls Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">Theme:</span>
                      {THEME_SWATCHES.map((s, idx) => (
                        <button
                          key={s.name}
                          type="button"
                          onClick={() => {
                            soundFx.playPop();
                            setSwatchIdx(idx);
                          }}
                          aria-label={`Select ${s.name} theme`}
                          className={`w-5 h-5 rounded-full ${s.dot} transition-transform ${
                            swatchIdx === idx ? 'ring-2 ring-offset-2 ring-zinc-900 dark:ring-white scale-110' : 'opacity-80 hover:opacity-100'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
                      {DEVICES.map((dev, idx) => {
                        const DevIcon = dev.icon;
                        const active = deviceIdx === idx;
                        return (
                          <button
                            key={dev.id}
                            type="button"
                            onClick={() => {
                              soundFx.playClick();
                              setDeviceIdx(idx);
                            }}
                            title={`${dev.label} (${dev.badge})`}
                            aria-label={`${dev.label} preview`}
                            className={`px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-colors ${
                              active
                                ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-xs'
                                : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
                            }`}
                          >
                            <DevIcon className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{dev.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Website Mockup Canvas */}
                  <div className="flex-1 rounded-2xl bg-zinc-100/80 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                    <div
                      className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm p-3.5 sm:p-4 transition-all duration-500 flex flex-col justify-between h-full ${currentDevice.widthClass}`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border transition-colors whitespace-nowrap ${swatch.pill}`}>
                          ✦ {swatch.name} • {currentDevice.badge}
                        </span>
                        <div className="flex gap-1 shrink-0">
                          <span className="w-4 sm:w-5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                          <span className="w-4 sm:w-5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        </div>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2 my-auto">
                        <div className="text-sm sm:text-lg font-black text-zinc-950 dark:text-white font-display leading-tight">
                          {isAcademy ? (
                            <>Code Live. <span className={swatch.text}>Build Apps</span> Step-by-Step.</>
                          ) : (
                            <>Crafted to <span className={swatch.text}>Convert</span> Visitors.</>
                          )}
                        </div>
                        <p className="text-[11px] sm:text-sm text-zinc-700 dark:text-zinc-300 leading-snug font-medium">
                          {isAcademy
                            ? 'HTML, CSS, JavaScript, React & MERN Stack taught live online.'
                            : 'Bespoke React UI + mobile-first layout engineered for instant trust.'}
                        </p>
                        <div className="pt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-white whitespace-nowrap ${swatch.bg}`}>
                            {isAcademy ? 'Join Live Batch' : 'Get Started'}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
                            {isAcademy ? 'View Syllabus' : 'View Work'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-2">
                        <div className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/70 dark:border-zinc-800 text-center">
                          <div className="text-[11px] sm:text-xs font-black text-zinc-950 dark:text-white">{isAcademy ? '100%' : '0.6s'}</div>
                          <div className="text-[9px] sm:text-[10px] font-semibold text-zinc-600 dark:text-zinc-400">{isAcademy ? 'Live Online' : 'Fast Load'}</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/70 dark:border-zinc-800 text-center">
                          <div className="text-[11px] sm:text-xs font-black text-zinc-950 dark:text-white">{isAcademy ? '1-on-1' : '100%'}</div>
                          <div className="text-[9px] sm:text-[10px] font-semibold text-zinc-600 dark:text-zinc-400">{isAcademy ? 'Doubt Clear' : 'Mobile Ready'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="seo"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.22 }}
                  className="h-full flex flex-col justify-between gap-3"
                >
                  {/* Google Search Result Preview */}
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                      <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>https://helloworldstudio.in</span>
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold text-[10px]">
                        #1 Rank Ready
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#07292B] dark:text-[#25A727] leading-snug">
                      Hello World Studio | Custom Web Design & SEO
                    </div>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                      Fast, responsive React websites & high-converting landing pages engineered for Google Search rankings.
                    </p>
                  </div>

                  {/* Live Lighthouse / Core Web Vitals Scores */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Performance', score: auditing ? '...' : '99', icon: Zap, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800' },
                      { label: 'SEO Score', score: auditing ? '...' : '100', icon: TrendingUp, color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800' },
                      { label: 'Best Practices', score: auditing ? '...' : '100', icon: CheckCircle2, color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800' }
                    ].map((metric) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div
                          key={metric.label}
                          className="p-3 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center flex flex-col items-center justify-center gap-1"
                        >
                          <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${metric.color}`}>
                            <MetricIcon className="w-4 h-4" />
                          </div>
                          <div className="text-xl font-black text-zinc-950 dark:text-white font-display">{metric.score}</div>
                          <div className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Re-run Live Audit Button */}
                  <button
                    type="button"
                    onClick={runSeoAudit}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${auditing ? 'animate-spin' : ''}`} />
                    <span>{auditing ? 'Running SEO & Speed Audit...' : 'Run Live SEO & Speed Check'}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Status Bar */}
          <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              3D Interactive Design & SEO Studio
            </span>
            <span className="text-teal-700 dark:text-teal-400 font-bold">
              {isHovered ? 'Paused — Pick theme & width' : 'Auto-previewing • Hover to customize'}
            </span>
          </div>
        </div>

        {/* Floating 3D Satellite Chip: Top-Left (Rendered AFTER main card with z-40 so always visible in front) */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(65px)' }}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-lg absolute -top-5 -left-5 z-40 pointer-events-none"
        >
          <span className="w-7 h-7 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </span>
          <div>
            <div className="text-[11px] font-black text-zinc-950 dark:text-white leading-none">99 / 100</div>
            <div className="text-[9px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mt-0.5">Core Vitals</div>
          </div>
        </motion.div>

        {/* Floating 3D Satellite Chip: Bottom-Right (Rendered AFTER main card with z-40 so always visible in front) */}
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(75px)' }}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-900 dark:bg-teal-600 text-white border border-zinc-800 dark:border-teal-500 shadow-lg absolute -bottom-4 -right-4 z-40 pointer-events-none"
        >
          <TrendingUp className="w-4 h-4 text-teal-400 dark:text-white" />
          <span className="text-xs font-black tracking-wide">#1 SEO Ready</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
