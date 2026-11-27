import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  MessageCircle,
  Play
} from 'lucide-react';
import HeroDesignSeoShowcase from './HeroDesignSeoShowcase';
import MagneticButton from './MagneticButton';
import { soundFx } from '../utils/soundEffects';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[94vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#fafaf9] dark:bg-zinc-950 flex flex-col justify-center select-none transition-colors duration-300">
      
      {/* 1. Ambient Studio Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-teal-400/10 pointer-events-none z-0 blur-[130px]" />
      <div className="absolute top-1/3 right-10 w-[650px] h-[650px] rounded-full bg-emerald-400/10 pointer-events-none z-0 blur-[140px]" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full bg-teal-300/10 pointer-events-none z-0 blur-[100px]" />

      {/* Floating Ambient Bubbles Across Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-8 w-14 h-14 rounded-full border border-teal-400/40 bg-teal-400/10 backdrop-blur-xs animate-float-slow" />
        <div className="absolute top-44 right-12 w-20 h-20 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-xs animate-float-delayed" />
        <div className="absolute bottom-24 left-1/3 w-10 h-10 rounded-full border border-teal-300/50 bg-teal-300/15 animate-float-slow shadow-sm" />
        <div className="absolute top-1/4 right-1/3 w-7 h-7 rounded-full border border-teal-400/50 bg-teal-400/20 animate-bounce" />
      </div>

      {/* Wide Desktop Responsive Container - Eliminates empty margins on desktop */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-20">
        
        {/* 2-Column Responsive Layout: Left Editorial Copy + Right Movable Side-View Cyber Whale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column (5 to 6 cols): Editorial Headlines & Action CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 text-left space-y-6">
            
            {/* Status Pill: Creative Digital Agency ✦ Starts at Rs 999 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-400 transition-all cursor-pointer group shadow-xs"
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={() => soundFx.playPop()}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 tracking-wide font-sans">
                MJ Web Design Studio ✦ Web Design & SEO
              </span>
              <span className="inline-block px-3 py-0.5 text-[10px] uppercase font-black tracking-wider rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                Starts at Rs 999
              </span>
            </motion.div>

            {/* Massive Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-black tracking-tight text-zinc-950 dark:text-white leading-[1.08] font-display"
            >
              Websites Built to <br />
              <span className="text-teal-600 dark:text-teal-400">
                Rank & Convert.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-normal"
            >
              We craft fast, responsive websites, high-converting landing pages, and Google-ready SEO setups that turn visitors into paying customers — starting at flat ₹999.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA: Let's Build Something -> */}
              <MagneticButton>
                <button
                  onClick={() => {
                    soundFx.playWaterSplash();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => soundFx.playPop()}
                  className="px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 group shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Let's Build Something</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </MagneticButton>

              {/* Secondary CTA: Explore Our Services */}
              <MagneticButton>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => soundFx.playPop()}
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-bold text-xs sm:text-sm border border-zinc-200 hover:border-teal-500 shadow-xs transition-all flex items-center gap-2 group"
                >
                  <Play className="w-3.5 h-3.5 fill-teal-600 text-teal-600 group-hover:scale-110 transition-transform" />
                  <span>Explore Our Services</span>
                </button>
              </MagneticButton>

              {/* WhatsApp direct button */}
              <MagneticButton>
                <a
                  href="https://wa.me/917305431802?text=Hello%20Majestic%20Digital%20Studio!%20I'm%20interested%20in%20building%20a%20website%20starting%20at%20Rs%20999."
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFx.playPop()}
                  className="px-6 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-300 shadow-xs transition-all flex items-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: 7305431802</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Bottom Row: Scroll to Explore & 3D Smiley Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-6"
            >
              {/* Scroll prompt from image */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-4 h-6 rounded-full border-2 border-slate-400 flex items-start justify-center p-1">
                  <span className="w-1 h-1.5 rounded-full bg-cyan-600 animate-bounce" />
                </span>
                <span>Scroll to explore</span>
              </div>

              {/* Guarantee Badge */}
              <div 
                onClick={() => soundFx.playWaterSplash()}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:scale-105 cursor-pointer group transition-all"
              >
                <span className="text-xs font-extrabold text-zinc-900 dark:text-zinc-100">
                  100% Happy Clients Guarantee
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </motion.div>

          </div>

          {/* Right Column (6 to 7 cols): Interactive Website Design & SEO Showcase */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center w-full">
            <HeroDesignSeoShowcase />
          </div>

        </div>

      </div>
    </section>
  );
}
