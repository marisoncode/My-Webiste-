import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle } from 'lucide-react';
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
    <section id="testimonials" className="py-24 md:py-32 relative bg-[#03102b] text-white overflow-hidden select-none">
      
      {/* Ambient Bioluminescent Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header matching the image */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] font-display"
          >
            Good Words. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Great Partnerships.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Here is what verified founders and businesses say about working with MJ Digital Studio. Handcrafted from ₹999.
          </motion.p>
        </div>

        {/* Featured Testimonial Spotlight matching the image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-8 sm:p-12 shadow-2xl shadow-cyan-950/60 overflow-hidden backdrop-blur-xl">
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-cyan-400/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between"
              >
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-amber-300">
                    5.0 Verified Review
                  </span>
                </div>

                {/* Key Highlight Quote */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 font-display">
                  "{current.highlight}"
                </h3>

                {/* Full Quote text */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic mb-8 font-normal">
                  "{current.quote}"
                </p>

                {/* Author Info & Nav Buttons */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                    />
                    <div>
                      <div className="text-base font-bold text-white flex items-center gap-2 font-display">
                        <span>{current.name}</span>
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-xs text-slate-400">
                        {current.role} • <span className="text-cyan-300 font-bold">{current.company}</span>
                      </div>
                      <div className="text-[11px] text-cyan-400/80 mt-0.5">
                        Delivered: {current.projectType}
                      </div>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={prev}
                      className="p-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all shadow-sm"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-slate-400 font-mono font-bold px-2">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                    <button
                      onClick={next}
                      className="p-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all shadow-sm"
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
