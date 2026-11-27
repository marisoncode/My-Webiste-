import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Zap, 
  Smartphone, 
  Search, 
  MapPin, 
  MessageCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Modern Design",
      sub: "Custom UI",
      icon: Palette
    },
    {
      title: "Fast Loading",
      sub: "0.6s Speed",
      icon: Zap
    },
    {
      title: "Mobile Friendly",
      sub: "Responsive",
      icon: Smartphone
    },
    {
      title: "Google SEO",
      sub: "Search Rank",
      icon: Search
    },
    {
      title: "Google Business",
      sub: "Maps Setup",
      icon: MapPin
    },
    {
      title: "WhatsApp Ready",
      sub: "Direct Leads",
      icon: MessageCircle
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 overflow-hidden select-none border-y border-zinc-200/80 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            Why Choose MJ Web Design Studio? ✦
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.12] font-display"
          >
            Digital Solutions Designed to <br />
            <span className="text-teal-600 dark:text-teal-400">
              Make an Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Clean website design, Google SEO, and Google Business Profile setup — starting at just ₹999.
          </motion.p>
        </div>

        {/* Circular Topic Nodes in Zig-Zag Flow with Storm Thunder Connectors */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 lg:gap-y-20 items-center justify-items-center">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isLower = idx % 2 === 1;
              const hasNextInRow = (idx + 1) % 3 !== 0 && idx < pillars.length - 1;
              const isRowEnd = idx === 2;

              return (
                <div
                  key={pillar.title}
                  className={`relative flex flex-col items-center justify-center ${
                    isLower ? 'lg:mt-14' : 'lg:mt-0'
                  }`}
                >
                  {/* Storm Thunder Lightning Bolt Connector to Next Circle (Desktop lg+) */}
                  {hasNextInRow && (
                    <div
                      className={`hidden lg:flex items-center justify-center absolute -right-16 z-20 pointer-events-none ${
                        isLower ? 'top-1/3 -rotate-[14deg]' : 'top-1/2 rotate-[14deg]'
                      }`}
                    >
                      <svg width="64" height="34" viewBox="0 0 64 34" fill="none" className="text-teal-600 dark:text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.75)]">
                        <path
                          d="M2 17 L18 7 L15 17 L34 6 L30 17 L56 13"
                          stroke="currentColor"
                          strokeOpacity="0.3"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 17 L18 7 L15 17 L34 6 L30 17 L56 13"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          pathLength="100"
                          className="thunder-surge"
                        />
                        <polygon points="51,7 62,13 51,19" fill="currentColor" />
                      </svg>
                    </div>
                  )}

                  {/* Vertical Storm Thunder Bolt Between Rows */}
                  {isRowEnd && (
                    <div className="hidden lg:flex items-center justify-center absolute -bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <svg width="34" height="58" viewBox="0 0 34 58" fill="none" className="text-teal-600 dark:text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.75)]">
                        <path
                          d="M17 2 L9 18 L19 16 L10 34 L21 32 L16 50"
                          stroke="currentColor"
                          strokeOpacity="0.3"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 2 L9 18 L19 16 L10 34 L21 32 L16 50"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          pathLength="100"
                          className="thunder-surge"
                        />
                        <polygon points="10,46 16,56 22,46" fill="currentColor" />
                      </svg>
                    </div>
                  )}

                  {/* Mobile Vertical Thunder Bolt */}
                  {idx < pillars.length - 1 && (
                    <div className="flex sm:hidden items-center justify-center absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" className="text-teal-600 dark:text-teal-400">
                        <path
                          d="M14 2 L8 15 L16 14 L9 27 L17 26 L14 37"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          pathLength="100"
                          className="thunder-surge"
                        />
                        <polygon points="9,34 14,42 19,34" fill="currentColor" />
                      </svg>
                    </div>
                  )}

                  {/* Clean Circular Topic Node with Generous Inner Padding */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.06, y: -4 }}
                    onClick={() => soundFx.playPop()}
                    className="w-60 h-60 sm:w-64 sm:h-64 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-400 hover:ring-4 hover:ring-teal-500/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center p-9 sm:p-10 group cursor-pointer relative"
                  >
                    {/* Inner Breathing Ring */}
                    <div className="absolute inset-2.5 rounded-full border border-zinc-100 dark:border-zinc-800/80 pointer-events-none" />

                    <span className="text-[11px] font-mono font-black text-teal-600 dark:text-teal-400 mb-2">
                      0{idx + 1}
                    </span>

                    <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-zinc-950 dark:text-white font-display group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug max-w-[150px]">
                      {pillar.title}
                    </h3>

                    <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 mt-1.5 uppercase tracking-wider">
                      {pillar.sub}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Direct Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-center gap-5 text-center"
        >
          <a
            href="https://wa.me/917305431802?text=Hello%20MJ%20Web%20Design%20Studio!%20I'd%20like%20to%20know%20more%20about%20your%20website%20packages%20starting%20at%20Rs%20999."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playWaterSplash()}
            className="px-9 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-black text-sm uppercase tracking-wider shadow-sm flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat With Founder on WhatsApp (+91 73054 31802)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <span className="text-sm text-zinc-800 dark:text-zinc-200 font-bold px-5 py-3 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            Starts at Rs 999 • No Hidden Fees • 100% Guaranteed
          </span>
        </motion.div>

      </div>
    </section>
  );
}
