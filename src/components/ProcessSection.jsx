import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  PenTool, 
  Code2, 
  Rocket, 
  Sparkles
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ProcessSection({ siteMode = 'studio' }) {
  const isAcademy = siteMode === 'academy';

  const studioSteps = [
    {
      step: "01",
      title: "Share Idea",
      tagline: "Quick Chat",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Custom UI",
      tagline: "Clean Layout",
      icon: PenTool
    },
    {
      step: "03",
      title: "SEO & Maps",
      tagline: "Google Setup",
      icon: Code2
    },
    {
      step: "04",
      title: "Go Live",
      tagline: "Launch Ready",
      icon: Rocket
    }
  ];

  const academySteps = [
    {
      step: "01",
      title: "Join Live",
      tagline: "Online Class",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Learn Basics",
      tagline: "Clear Concepts",
      icon: PenTool
    },
    {
      step: "03",
      title: "Build Apps",
      tagline: "Real Projects",
      icon: Code2
    },
    {
      step: "04",
      title: "Launch",
      tagline: "Portfolio Ready",
      icon: Rocket
    }
  ];

  const steps = isAcademy ? academySteps : studioSteps;

  return (
    <section id="process" className="py-10 sm:py-14 md:py-16 relative bg-white dark:bg-zinc-950 overflow-hidden select-none transition-colors duration-300">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            Our Proven 4-Step Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.12] font-display"
          >
            From First Idea <br />
            <span className="text-[#19A12B]">
              to Final Launch.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Simple, fast, and transparent — from your idea to a live website & Google presence.
          </motion.p>
        </div>

        {/* 4 Circular Flow Nodes Interconnected with Flowing Step Arrows (1 -> 2 -> 3 -> 4) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-8 xl:gap-12 max-w-6xl mx-auto items-center justify-items-center relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const hasNext = index < steps.length - 1;

            return (
              <div key={item.step} className="relative flex flex-col items-center justify-center">
                {/* Flowing Curved Track + Animated Dot & Arrowhead (Desktop lg+) */}
                {hasNext && (
                  <div className="hidden lg:flex items-center justify-center absolute -right-11 xl:-right-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <svg width="56" height="32" viewBox="0 0 64 32" fill="none" className="xl:w-16 xl:h-8 text-[#25A727]">
                      {/* Base Dashed Curved Flow Path */}
                      <path
                        d="M2 16 C 18 4, 34 28, 50 16"
                        stroke="currentColor"
                        strokeOpacity="0.28"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                      />
                      {/* Animated Flowing Surge Along the Curve */}
                      <path
                        d="M2 16 C 18 4, 34 28, 50 16"
                        stroke="#19A12B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength="100"
                        className="thunder-surge"
                      />
                      {/* Traveling Glowing Flow Dot */}
                      <circle r="3.5" fill="#25A727">
                        <animateMotion
                          dur="1.6s"
                          repeatCount="indefinite"
                          path="M2 16 C 18 4, 34 28, 50 16"
                        />
                      </circle>
                      {/* Crisp Double-Chevron Arrowhead */}
                      <path
                        d="M47 10 L55 16 L47 22"
                        stroke="#19A12B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M53 11 L60 16 L53 21"
                        stroke="#25A727"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Mobile / Tablet Flow Indicator Pill on Horizontal Pairs (01->02 and 03->04) */}
                {(index === 0 || index === 2) && (
                  <div className="flex lg:hidden items-center justify-center absolute -right-4 sm:-right-7 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#25A727] text-white shadow-sm flex items-center justify-center border-2 border-white dark:border-zinc-950">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  onClick={() => soundFx.playPop()}
                  className="w-40 h-40 sm:w-56 sm:h-56 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-400 hover:ring-4 hover:ring-teal-500/20 p-4 sm:p-8 lg:p-6 xl:p-8 2xl:p-10 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg relative"
                >
                  {/* Inner Breathing Ring */}
                  <div className="absolute inset-2 sm:inset-2.5 rounded-full border border-zinc-100 dark:border-zinc-800/80 pointer-events-none" />

                  <span className="px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 font-mono font-black text-[9px] sm:text-[11px] uppercase tracking-widest mb-1.5 sm:mb-2.5">
                    STEP {item.step}
                  </span>

                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-600 group-hover:bg-zinc-900 dark:group-hover:bg-teal-500 text-white flex items-center justify-center shadow-sm mb-1.5 sm:mb-3 transition-colors">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-sm sm:text-xl font-black text-zinc-950 dark:text-white font-display group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-[9px] sm:text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5 sm:mt-1.5">
                    {item.tagline}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
