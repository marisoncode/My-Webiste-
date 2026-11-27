import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqData';
import { HelpCircle, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function FaqSection({ onBackHome, onContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    soundFx.playPop();
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="pt-32 pb-24 md:pt-36 md:pb-32 min-h-[82vh] relative bg-[#fafaf9] dark:bg-zinc-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {onBackHome && (
          <div className="mb-8">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                onBackHome();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 shadow-xs transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Back to Home</span>
            </button>
          </div>
        )}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight font-display"
          >
            Everything You Need to Know <br />
            <span className="text-teal-600">Before Starting Your Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed"
          >
            Clear, honest answers to common questions about timelines, pricing, CMS handoffs, and warranties.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white border-teal-500 shadow-sm'
                    : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-zinc-950 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen
                        ? 'bg-teal-600 text-white rotate-180'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA back to Contact */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div>
            <h3 className="text-lg font-black text-zinc-950 font-display">Still have questions?</h3>
            <p className="text-sm text-zinc-600">Reach out directly and we will reply within 2 hours.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              soundFx.playWaterSplash();
              if (onContact) onContact();
            }}
            className="px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 transition-colors shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
