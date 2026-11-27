import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft,
  MessageCircle,
  Play,
  Code2,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import HeroDesignSeoShowcase from './HeroDesignSeoShowcase';
import MagneticButton from './MagneticButton';
import { soundFx } from '../utils/soundEffects';

const ACADEMY_TRACKS = [
  { title: 'Frontend & JavaScript', topics: 'HTML5 • CSS3 • Tailwind • Modern JS', icon: Code2 },
  { title: 'React & MERN Stack', topics: 'React 18 • Node.js • Express • MongoDB', icon: Layers },
  { title: 'Python Programming', topics: 'Core Python • Logic • Automation', icon: Terminal },
  { title: 'Generative AI', topics: 'LLMs • Prompting • AI App Building', icon: Cpu }
];

export default function Hero({ onOpenQuote, siteMode = 'studio', onSelectMode, onBackHome }) {
  const isAcademy = siteMode === 'academy';

  return (
    <section id="hero" className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-30 lg:pb-16 overflow-hidden bg-[#fafaf9] dark:bg-zinc-950 flex flex-col justify-center select-none transition-colors duration-300">
      
      {/* 1. Ambient Studio Background Glows (Hidden on small mobile for clean layout) */}
      <div className="hidden sm:block absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-teal-400/10 pointer-events-none z-0 blur-[130px]" />
      <div className="hidden sm:block absolute top-1/3 right-10 w-[650px] h-[650px] rounded-full bg-emerald-400/10 pointer-events-none z-0 blur-[140px]" />

      {/* Responsive Full-Width Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-20">
        
        {/* Top Page Bar: Back to Home + Switch to Other Page */}
        {(onBackHome || onSelectMode) && (
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            {onBackHome && (
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  onBackHome();
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] text-xs font-bold text-zinc-700 dark:text-zinc-200 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#25A727]" />
                <span>Back to Home</span>
              </button>
            )}
            {onSelectMode && (
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  onSelectMode(isAcademy ? 'studio' : 'academy');
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07292B] hover:bg-[#25A727] text-white text-xs font-bold transition-colors"
              >
                <span>{isAcademy ? 'Switch to Web Design & SEO' : 'Switch to Online Coding Academy'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={siteMode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column (6 cols): Full-Stretched Editorial Headlines & Action CTAs */}
            <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6">
              
              {/* Status Pill */}
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] transition-all cursor-pointer group shadow-xs"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => soundFx.playPop()}
              >
                <span className="w-2 h-2 rounded-full bg-[#25A727] animate-pulse" />
                <span className="text-xs font-bold text-[#07292B] dark:text-zinc-200 tracking-wide font-sans">
                  {isAcademy
                    ? 'Hello World Academy ✦ 100% Live Online Classes'
                    : 'Hello World Studio ✦ Web Design, SEO & Maps'}
                </span>
              </div>

              {/* Massive Display Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-black tracking-tight text-zinc-950 dark:text-white leading-[1.08] font-display">
                {isAcademy ? (
                  <>
                    Learn Coding Live. <br />
                    <span className="text-[#19A12B]">Build Real Projects.</span>
                  </>
                ) : (
                  <>
                    We Design Websites <br />
                    <span className="text-[#19A12B]">That Bring You Clients.</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-normal">
                {isAcademy
                  ? 'Live online coding classes in Frontend, JavaScript, Python, React, MERN Stack, and Generative AI — step-by-step mentorship from basics to launch.'
                  : 'Custom websites, focused landing pages, Google SEO, and Business Profile setup — everything your brand needs to stand out and get discovered online, starting at ₹999.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
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
                    <span>{isAcademy ? 'Join Online Class' : "Let's Build Something"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </MagneticButton>

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
                    <span>{isAcademy ? 'Explore Courses' : 'Explore Our Services'}</span>
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://wa.me/917305431802?text=Hello%20Hello%20World%20Studio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => soundFx.playPop()}
                    className="px-6 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-300 shadow-xs transition-all flex items-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp: 7305431802</span>
                  </a>
                </MagneticButton>
              </div>

              {/* Bottom Row: Scroll to Explore & Guarantee */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="w-4 h-6 rounded-full border-2 border-slate-400 flex items-start justify-center p-1">
                    <span className="w-1 h-1.5 rounded-full bg-cyan-600 animate-bounce" />
                  </span>
                  <span>Scroll to explore</span>
                </div>

                <div
                  onClick={() => soundFx.playWaterSplash()}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:scale-105 cursor-pointer group transition-all"
                >
                  <span className="text-xs font-extrabold text-zinc-900 dark:text-zinc-100">
                    {isAcademy ? '100% Practical Live Coding' : '100% Happy Clients Guarantee'}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): Website 3D Showcase OR Clean Academy 4-Track Syllabus List */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end w-full">
              {isAcademy ? (
                <div className="w-full max-w-[600px] space-y-3">
                  {ACADEMY_TRACKS.map((track, idx) => {
                    const TrackIcon = track.icon;
                    return (
                      <motion.div
                        key={track.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.06 }}
                        onClick={() => {
                          soundFx.playClick();
                          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4 group"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-[#07292B] border border-teal-200 dark:border-[#0d4a4c] text-[#19A12B] group-hover:bg-[#25A727] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <TrackIcon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm sm:text-base font-black text-zinc-950 dark:text-white font-display truncate">
                              {track.title}
                            </div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 truncate mt-0.5">
                              {track.topics}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#25A727] group-hover:translate-x-1 transition-all shrink-0" />
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <HeroDesignSeoShowcase />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
