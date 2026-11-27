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

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      tagline: "Understand Your Goal",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Design",
      tagline: "Craft Clean UI",
      icon: PenTool
    },
    {
      step: "03",
      title: "Build & SEO",
      tagline: "Website + Google Setup",
      icon: Code2
    },
    {
      step: "04",
      title: "Launch",
      tagline: "Go Live Fast",
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative bg-white dark:bg-zinc-950 overflow-hidden select-none transition-colors duration-300">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
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
            <span className="text-teal-600 dark:text-teal-400">
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

        {/* 4 Circular Flow Nodes Interconnected with Storm Thunder Bolts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 max-w-6xl mx-auto items-center justify-items-center relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const hasNext = index < steps.length - 1;

            return (
              <div key={item.step} className="relative flex flex-col items-center justify-center">
                {/* Horizontal Storm Thunder Lightning Bolt (Desktop lg+) */}
                {hasNext && (
                  <div className="hidden lg:flex items-center justify-center absolute -right-10 xl:-right-13 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <svg width="44" height="26" viewBox="0 0 56 30" fill="none" className="xl:w-14 xl:h-8 text-teal-600 dark:text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.75)]">
                      <path
                        d="M2 15 L17 6 L14 15 L32 5 L28 15 L49 11"
                        stroke="currentColor"
                        strokeOpacity="0.3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 15 L17 6 L14 15 L32 5 L28 15 L49 11"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="100"
                        className="thunder-surge"
                      />
                      <polygon points="45,5 55,11 45,17" fill="currentColor" />
                    </svg>
                  </div>
                )}

                {/* Vertical Storm Thunder Bolt (Mobile) */}
                {hasNext && (
                  <div className="flex sm:hidden items-center justify-center absolute -bottom-11 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <svg width="26" height="40" viewBox="0 0 26 40" fill="none" className="text-teal-600 dark:text-teal-400">
                      <path
                        d="M13 2 L7 14 L15 13 L8 26 L16 25 L13 34"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="100"
                        className="thunder-surge"
                      />
                      <polygon points="8,31 13,39 18,31" fill="currentColor" />
                    </svg>
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  onClick={() => soundFx.playPop()}
                  className="w-60 h-60 sm:w-60 sm:h-60 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-400 hover:ring-4 hover:ring-teal-500/20 p-9 lg:p-6 xl:p-8 2xl:p-10 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg relative"
                >
                  {/* Inner Breathing Ring */}
                  <div className="absolute inset-2.5 rounded-full border border-zinc-100 dark:border-zinc-800/80 pointer-events-none" />

                  <span className="px-3 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 font-mono font-black text-[11px] uppercase tracking-widest mb-2.5">
                    STEP {item.step}
                  </span>

                  <div className="w-12 h-12 rounded-full bg-teal-600 group-hover:bg-zinc-900 dark:group-hover:bg-teal-500 text-white flex items-center justify-center shadow-sm mb-3 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white font-display group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug max-w-[150px]">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-1.5">
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
