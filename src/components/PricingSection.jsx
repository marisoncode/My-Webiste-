import React from 'react';
import { motion } from 'framer-motion';
import { pricingPackages } from '../data/pricingData';
import { 
  Check, 
  X, 
  Sparkles, 
  Zap, 
  Clock, 
  RotateCcw, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function PricingSection({ onSelectPackage }) {
  const handleChoosePlan = (pkg) => {
    soundFx.playClick();
    if (onSelectPackage) {
      onSelectPackage(pkg);
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-[#fafbfc] overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            Special Launch Offer • Starts at ₹999
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Premium Website Development <br />
            <span className="text-slate-900">Starts at ₹999 Only</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Every website package starts at ₹999 with our responsive guarantee, Core Web Vitals optimization, and personalized direct WhatsApp support.
          </motion.p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, index) => {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-slate-950"
              >
                <div>
                  {/* Package Title & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      {pkg.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 border border-slate-200">
                      {pkg.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">INR</span>
                      <span className="text-sm text-slate-400 line-through ml-2">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                      Flat ₹999 launch offer • Zero hidden fees
                    </div>
                  </div>

                  {/* Turnaround & Revisions Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-500">Delivery</div>
                        <div className="font-bold">{pkg.turnaround}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <RotateCcw className="w-4 h-4 text-indigo-600 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-500">Revisions</div>
                        <div className="font-bold">{pkg.revisions}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      What's Included:
                    </div>
                    {pkg.highlights.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}

                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-50">
                        {pkg.notIncluded.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 line-through">
                            <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="text-[11px] text-slate-500 text-center mb-3">
                    Best for: <span className="text-slate-800 font-bold">{pkg.idealFor}</span>
                  </div>

                  <button
                    onClick={() => handleChoosePlan(pkg)}
                    className="w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all bg-slate-950 hover:bg-slate-800 text-white shadow-sm"
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom consultation on WhatsApp */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600">
            Need a flexible monthly retainer or have special requirements?
          </p>
          <a
            href="https://wa.me/917305431802?text=Hello%20M%20Studio!%20I'd%20like%20to%20discuss%20a%20custom%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 mt-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat directly with MJ Digital Studio on WhatsApp (7305431802)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
