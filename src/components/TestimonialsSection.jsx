import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle } from 'lucide-react';
import RunningBorder from './RunningBorder';
import { soundFx } from '../utils/soundEffects';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    soundFx.playPop();
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    soundFx.playPop();
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 overflow-hidden select-none border-y border-zinc-200/80 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.15] font-display"
          >
            Good Words. <br />
            <span className="text-teal-600 dark:text-teal-400">
              Great Partnerships.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal"
          >
            Here is what verified founders and businesses say about working with MJ Web Design Studio. Handcrafted from ₹999.
          </motion.p>
        </div>

        {/* Featured Square Testimonial Spotlight */}
        <div className="max-w-xl mx-auto">
          <div className="run-border-card relative sm:aspect-square rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-7 sm:p-10 shadow-sm overflow-hidden flex flex-col justify-between">
            <RunningBorder />
            <Quote className="absolute -top-4 -right-4 w-28 h-28 text-zinc-100 dark:text-zinc-900 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full relative z-10"
              >
                <div>
                  {/* Star rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-amber-700">
                      5.0 Verified Review
                    </span>
                  </div>

                  {/* Key Highlight Quote */}
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white mb-4 font-display">
                    "{current.highlight}"
                  </h3>

                  {/* Full Quote text */}
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed italic font-normal">
                    "{current.quote}"
                  </p>
                </div>

                {/* Author Info & Nav Buttons */}
                <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-teal-500 shadow-xs"
                    />
                    <div>
                      <div className="text-base font-bold text-zinc-950 dark:text-white flex items-center gap-2 font-display">
                        <span>{current.name}</span>
                        <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {current.role} • <span className="text-teal-700 dark:text-teal-400 font-bold">{current.company}</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        Delivered: {current.projectType}
                      </div>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={prev}
                      className="p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-teal-600 hover:border-teal-600 text-zinc-700 hover:text-white transition-all shadow-xs"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-zinc-500 font-mono font-bold px-2">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                    <button
                      onClick={next}
                      className="p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-teal-600 hover:border-teal-600 text-zinc-700 hover:text-white transition-all shadow-xs"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
