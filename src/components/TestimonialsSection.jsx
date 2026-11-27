import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { academyReviews } from '../data/academyData';
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react';
import RunningBorder from './RunningBorder';

export default function TestimonialsSection({ siteMode = 'studio' }) {
  const isAcademy = siteMode === 'academy';
  const featured = (isAcademy ? academyReviews : testimonials).slice(0, 3);

  return (
    <section id="testimonials" className="py-10 sm:py-14 md:py-16 relative bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 overflow-hidden select-none border-y border-zinc-200/80 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#25A727]" />
            Client Reviews
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.15] font-display"
          >
            Trusted by Businesses. <br />
            <span className="text-[#19A12B]">
              Built for Real Growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal"
          >
            {isAcademy
              ? 'Verified feedback from students learning Frontend, Python, React, MERN Stack, and Generative AI online.'
              : <>Verified feedback from business owners who launched their websites, SEO, and Google Business Profiles with <span className="font-bold text-[#07292B] dark:text-[#25A727]">helloworldstudio.in</span>.</>}
          </motion.p>
        </div>

        {/* 3-Column Bento Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 max-w-6xl mx-auto">
          {featured.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="run-border-card rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <RunningBorder />
              <Quote className="absolute top-4 right-4 w-10 h-10 text-zinc-100 dark:text-zinc-900 pointer-events-none" />

              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#25A727] text-[#25A727]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-[#07292B] text-[#07292B] dark:text-[#25A727] border border-teal-200 dark:border-[#0d4a4c]">
                    5.0 Verified
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="text-base sm:text-lg font-black text-zinc-950 dark:text-white font-display mb-2.5 leading-snug relative z-10">
                  "{item.highlight}"
                </h3>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3 relative z-10 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#25A727] shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-zinc-950 dark:text-white flex items-center gap-1.5 font-display truncate">
                    <span className="truncate">{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#25A727] shrink-0" />
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    {item.role} • <span className="font-bold text-[#07292B] dark:text-[#25A727]">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
