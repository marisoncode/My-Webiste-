import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Smile, 
  Star, 
  ArrowRight, 
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Code2
} from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { soundFx } from '../utils/soundEffects';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-gradient-to-b from-[#f0f9ff] via-white to-[#f0f9ff] overflow-hidden select-none">
      
      {/* Ambient water droplet light spots */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-cyan-400/15 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): High-Contrast Deep Obsidian Glass "MJ" Tech Core Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
              onClick={() => soundFx.playWaterSplash()}
              className="relative w-full max-w-md sm:max-w-lg cursor-pointer group select-none"
              style={{ perspective: 1100 }}
            >
              {/* Outer Pulsing Water Ripple Rings */}
              <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-cyan-400/40 animate-pulse pointer-events-none" />
              <div className="absolute -inset-6 rounded-[3rem] border border-cyan-400/20 pointer-events-none" />

              {/* High-Contrast Obsidian Glass Card (Bold, Legible, Crisp) */}
              <div 
                className="w-full rounded-[2.2rem] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-2xl border-2 border-cyan-400/50 shadow-[0_25px_60px_rgba(0,210,255,0.28)] transition-all duration-500 bg-[#020d26]/95 text-white"
              >
                {/* 3D Specular Sunlight Glint */}
                <div className="absolute top-2 left-6 w-36 h-10 rounded-full bg-cyan-400/20 rotate-[-20deg] blur-[15px] pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-blue-500/20 blur-[30px] pointer-events-none" />
                
                {/* Card Header: Monogram & Engine Tag */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    {/* Glowing MJ Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284c7] via-[#00d2ff] to-[#38bdf8] p-[2.5px] shadow-lg shadow-cyan-500/40 group-hover:scale-105 transition-transform">
                      <div className="w-full h-full bg-[#03102b] rounded-[13px] flex items-center justify-center">
                        <span className="font-extrabold text-lg font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                          MJ
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-black text-white font-display tracking-tight">
                        MJ Digital Studio
                      </div>
                      <div className="text-xs font-bold text-cyan-300 tracking-wider">
                        Next-Gen Core Engine
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-xs font-black uppercase tracking-wider text-cyan-300 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span>v2.6 Live</span>
                  </span>
                </div>

                {/* Relevant High-Value Content Rows with High-Contrast Text & Backgrounds */}
                <div className="space-y-3 relative z-10 mb-6">
                  {/* Row 1: Core Web Vitals */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white">Core Web Vitals Speed</span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-emerald-400 font-mono px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30">
                      0.6s Peak
                    </span>
                  </div>

                  {/* Row 2: Bespoke Code */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white">100% Bespoke Code</span>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-cyan-300 font-mono px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                      Zero Templates
                    </span>
                  </div>

                  {/* Row 3: Global Cloud CDN */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white">Global Cloud CDN & SSL</span>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-sky-300 font-mono px-2.5 py-0.5 rounded-md bg-blue-950/60 border border-blue-500/30">
                      Automated
                    </span>
                  </div>

                  {/* Row 4: Special Launch Offer */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-blue-500/20 border-2 border-amber-400/50 hover:border-amber-400 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-400/30 text-amber-300 flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-amber-200">Special Launch Offer</span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-amber-300 font-mono px-3 py-0.5 rounded-md bg-amber-950/80 border border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                      Starts at Rs 999
                    </span>
                  </div>
                </div>

                {/* Micro Live Status Indicator */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300 font-semibold">
                  <span className="text-slate-300">Stack: React 18 + Tailwind</span>
                  <span className="text-cyan-300 font-bold">100% Client Satisfaction</span>
                </div>

                {/* Floating Micro Droplet Beads */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_15px_#00d2ff] animate-bounce" />
                <div className="absolute bottom-4 -left-2 w-5 h-5 rounded-full bg-cyan-400/80 shadow-md" />
              </div>
            </motion.div>
          </div>

          {/* Center Column (4 cols): Editorial Headline & Copy */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-cyan-600" />
              About MJ Digital Studio
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] font-display"
            >
              More Than Just Websites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                We Create Digital Experiences.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              MJ Digital Studio transforms business ideas into engaging, functional and high-performing digital experiences with modern design, cutting-edge technology and a passion for innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playWaterSplash();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#03102b] hover:bg-[#061a40] text-white font-black text-xs sm:text-sm uppercase tracking-wider border border-cyan-400/40 shadow-xs transition-all group"
              >
                <span>Know More</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (3 cols): 3 Clean Crisp Stat Cards with Running Animated Counters */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            
            {/* Stat 1: 100+ Projects with Running Counter from 0 to 100 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-white/95 border-2 border-cyan-100/90 hover:border-cyan-400 shadow-xs hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-all">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-950 font-display">
                <AnimatedCounter value={100} suffix="+" duration={1.8} />
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-1">
                Projects Delivered
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">
                Across India & Globally
              </div>
            </motion.div>

            {/* Stat 2: 98% Client Satisfaction with Running Counter from 0 to 98 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-3xl bg-white/95 border-2 border-cyan-100/90 hover:border-cyan-400 shadow-xs hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-all">
                <Smile className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-950 font-display">
                <AnimatedCounter value={98} suffix="%" duration={1.8} />
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-1">
                Client Satisfaction
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">
                Verified 5-Star Reviews
              </div>
            </motion.div>

            {/* Stat 3: Starts at Rs 999 with Running Counter from 0 to 999 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-amber-50/80 to-white border-2 border-amber-200/90 hover:border-amber-400 shadow-xs hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-300 text-amber-700 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-all">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-amber-950 font-display">
                <AnimatedCounter value={999} prefix="Rs " duration={2.0} />
              </div>
              <div className="text-sm sm:text-base font-extrabold text-amber-900 mt-1">
                Starts at Rs 999
              </div>
              <div className="text-xs text-amber-700 mt-0.5 font-medium">
                Transparent Launch Offer
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
