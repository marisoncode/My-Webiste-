import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Terminal, 
  Sparkles, 
  Sun, 
  Moon, 
  Rainbow, 
  Cpu, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Code2, 
  Flame, 
  Globe 
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function CosmicTechCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [celestialTheme, setCelestialTheme] = useState('rainbow');
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Celestial Cosmic Modes (Solar Eclipse, Lunar Moon Eclipse, Rainbow Prism, Cyber Supernova)
  const celestialModes = [
    {
      id: 'solar',
      name: 'Solar Eclipse',
      icon: Sun,
      color: 'from-amber-500 via-orange-500 to-yellow-300',
      badgeBg: 'bg-amber-100 border-amber-300 text-amber-900',
      glow: 'rgba(245, 158, 11, 0.25)',
      description: 'Golden corona flare with burning solar prominence and intense high-contrast depth.'
    },
    {
      id: 'lunar',
      name: 'Lunar Blood Moon',
      icon: Moon,
      color: 'from-rose-600 via-red-500 to-purple-600',
      badgeBg: 'bg-rose-100 border-rose-300 text-rose-900',
      glow: 'rgba(225, 29, 72, 0.25)',
      description: 'Mystical crimson copper lunar eclipse glow with celestial starry twilight.'
    },
    {
      id: 'rainbow',
      name: 'Rainbow Prism & Aurora',
      icon: Rainbow,
      color: 'from-pink-500 via-purple-500 via-indigo-500 via-cyan-400 to-emerald-400',
      badgeBg: 'bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50 border-purple-200 text-purple-900',
      glow: 'rgba(168, 85, 247, 0.25)',
      description: 'Full chromatic dispersion spectrum with holographic iridescent shimmer.'
    },
    {
      id: 'cyber',
      name: 'Cosmic Supernova',
      icon: Cpu,
      color: 'from-cyan-400 via-indigo-600 to-fuchsia-500',
      badgeBg: 'bg-cyan-100 border-cyan-300 text-cyan-900',
      glow: 'rgba(6, 182, 212, 0.25)',
      description: 'Hyper-vibrant cosmic cyberpunk energy with electric neon ionization.'
    }
  ];

  // Techie Devices & Operating Systems Carousel Data
  const techSlides = [
    {
      id: 'apple-macbook',
      platform: 'Apple macOS Sequoia',
      device: 'MacBook Pro 16" (M3 Max)',
      category: 'Pro Laptop Workstation',
      icon: Laptop,
      badge: 'Liquid Retina XDR',
      specs: [
        '120Hz ProMotion Liquid Retina display',
        'Hardware-accelerated WebGL 3D rendering',
        'P3 Wide Color Gamut for true-to-life tones',
        'Bespoke frosted glass macOS Dock & Menu Bar'
      ],
      headline: 'Pixel-Precision Rendering on Apple Silicon',
      description: 'Optimized for high-DPI Retina screens on MacBook, iMac, and Studio Display. Crisp vector rendering, zero blur, and instantaneous trackpad gesture responsiveness.',
      mockupType: 'macbook',
      accentColor: 'indigo',
      gradient: 'from-slate-900 via-indigo-950 to-slate-900',
      screenImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'windows-fluent',
      platform: 'Microsoft Windows 11',
      device: 'Surface Laptop Studio & Dell XPS',
      category: 'Windows Fluent Workstation',
      icon: Monitor,
      badge: 'Fluent Mica Translucent',
      specs: [
        'Windows 11 Mica translucent materials',
        'Smart snap layouts and multi-monitor scaling',
        'DirectX 12 GPU-accelerated CSS animations',
        'Touch, pen, and precision mouse navigation'
      ],
      headline: 'Fluent Design Elegance on Windows 11',
      description: 'Engineered to look extraordinary on Windows PCs, ultrawide monitors, and Surface touchscreen laptops with smooth 120Hz scrolling and responsive snap layouts.',
      mockupType: 'windows',
      accentColor: 'cyan',
      gradient: 'from-blue-900 via-slate-900 to-cyan-900',
      screenImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'apple-iphone',
      platform: 'Apple iOS 18',
      device: 'iPhone 16 Pro Max',
      category: 'Flagship Mobile Touch',
      icon: Smartphone,
      badge: 'Dynamic Island Active',
      specs: [
        'Active Dynamic Island live order status',
        'Ceramic Shield Super Retina XDR OLED',
        'Haptic touch feedback and tactile gestures',
        '1-Click Apple Pay & Razorpay UPI'
      ],
      headline: 'App-Like Native Feel in Mobile Safari',
      description: 'Over 75% of your customers browse on smartphones. We design mobile experiences with bottom-sheet modals, comfortable thumb targets, and fluid 60 FPS transitions.',
      mockupType: 'iphone',
      accentColor: 'rose',
      gradient: 'from-rose-950 via-slate-900 to-purple-950',
      screenImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'dev-terminal',
      platform: 'Linux & Cloud Rig',
      device: 'Developer Terminal & Code Lab',
      category: 'Geek Tech Architecture',
      icon: Terminal,
      badge: '100% Pure Code',
      specs: [
        'Vite + React 18 + Tailwind + Framer Motion',
        'Sub-second page loads (< 0.7s) on 4G networks',
        'Zero bloated WordPress plugins or page builders',
        'Automated CI/CD deployment with SSL security'
      ],
      headline: 'Handcrafted Clean Code for Techies & Founders',
      description: 'We speak the language of engineering. Modular clean code, semantic HTML5, Git version control, and cloud CDN deployment that any senior CTO would respect.',
      mockupType: 'terminal',
      accentColor: 'emerald',
      gradient: 'from-emerald-950 via-slate-900 to-teal-950',
      screenImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % techSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, techSlides.length]);

  const nextSlide = () => {
    soundFx.playPop();
    setActiveSlide((prev) => (prev + 1) % techSlides.length);
  };

  const prevSlide = () => {
    soundFx.playPop();
    setActiveSlide((prev) => (prev === 0 ? techSlides.length - 1 : prev - 1));
  };

  const selectSlide = (index) => {
    soundFx.playClick();
    setActiveSlide(index);
  };

  const currentCelestial = celestialModes.find(m => m.id === celestialTheme) || celestialModes[2];
  const slide = techSlides[activeSlide];
  const DeviceIcon = slide.icon;

  return (
    <section 
      id="tech-carousel"
      className="py-24 md:py-32 relative overflow-hidden bg-white border-t border-slate-200"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Dynamic Celestial Phenomenon Glow Mesh */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none blur-3xl opacity-35 transition-all duration-700 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${currentCelestial.glow}, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border transition-all ${currentCelestial.badgeBg}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tech & Celestial Spectacle</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Engineered For Every Screen, <br />
            <span className="text-gradient-accent">Device & Celestial Dimension</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From Apple Silicon MacBooks to Windows 11 rigs, iPhones, and developer terminals—test our colorful celestial lighting and multi-platform responsive previews below.
          </motion.p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 1. CELESTIAL PHENOMENON CONTROLLER (Eclipses & Rainbows)       */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {celestialModes.map((mode) => {
            const Icon = mode.icon;
            const isActive = celestialTheme === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  soundFx.playChime();
                  setCelestialTheme(mode.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border shadow-sm ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${mode.color} flex items-center justify-center text-white text-[9px]`}>
                  •
                </div>
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2. INTERACTIVE 3D TECH DEVICE CAROUSEL                         */}
        {/* ------------------------------------------------------------- */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + celestialTheme}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Top Decorative Celestial Ribbon */}
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${currentCelestial.color}`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left 6 Cols: Tech Specifications & Value */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shadow-sm">
                      <DeviceIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">
                        {slide.platform}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {slide.device}
                      </h3>
                    </div>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display leading-snug">
                    {slide.headline}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Bullet Specs Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {slide.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA for this device */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/917305431802?text=Hello%20M%20Studio!%20I'm%20interested%20in%20a%20website%20optimized%20for%20${encodeURIComponent(slide.device)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playPop()}
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire on WhatsApp (7305431802)</span>
                    </a>

                    <span className="text-xs text-slate-500 font-medium">
                      Starts at ₹999 in INR
                    </span>
                  </div>
                </div>

                {/* Right 6 Cols: Realistic 3D Device Screen Mockup */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-2xl group aspect-[16/11]">
                    
                    {/* Simulated OS Top Bar */}
                    <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="ml-2 text-slate-400 font-sans text-[10px]">{slide.device}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-sans font-bold text-emerald-400">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Screenshot Frame with Celestial Light Reflection */}
                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={slide.screenImage}
                        alt={slide.device}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {/* Live Overlay Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 font-bold shadow-lg">
                          <Globe className="w-3.5 h-3.5 text-indigo-600" />
                          <span>mstudio.agency • 100% Responsive</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold">
                          Sub-Second 4G
                        </span>
                      </div>
                    </div>

                    {/* Chromatic Prism Rainbow Edge Glare */}
                    <div 
                      className={`absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr ${currentCelestial.color}`}
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Slide Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm transition-colors"
                aria-label="Previous tech slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm transition-colors"
                aria-label="Next tech slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-500 font-mono font-bold ml-2">
                0{activeSlide + 1} / 0{techSlides.length}
              </span>
            </div>

            {/* Pagination Dot Indicators */}
            <div className="flex items-center gap-2">
              {techSlides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => selectSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? 'w-8 bg-indigo-600'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
