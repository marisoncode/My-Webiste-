import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { calculatorOptions } from '../data/pricingData';
import { 
  Calculator, 
  Clock, 
  Check, 
  SendHorizontal,
  Info,
  MessageCircle
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function CostEstimator({ onApplyEstimate }) {
  const [selectedType, setSelectedType] = useState('business');
  const [selectedPages, setSelectedPages] = useState('4-6');
  const [selectedFeatures, setSelectedFeatures] = useState(['cms', 'whatsapp_bot']);

  // Calculate pricing & estimated days
  const typeObj = calculatorOptions.projectTypes.find(t => t.id === selectedType) || calculatorOptions.projectTypes[1];
  const pageObj = calculatorOptions.pageCounts.find(p => p.id === selectedPages) || calculatorOptions.pageCounts[1];
  
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = calculatorOptions.addFeatures.find(f => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const featuresDaysTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = calculatorOptions.addFeatures.find(f => f.id === featId);
    return acc + (feat ? feat.days : 0);
  }, 0);

  const totalPrice = typeObj.basePrice + pageObj.price + featuresTotal;
  const totalDays = Math.max(5, typeObj.days + pageObj.days + featuresDaysTotal);

  // Format currency into Indian Rupees (e.g. ₹24,999)
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const toggleFeature = (id) => {
    soundFx.playPop();
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleApplyToContact = () => {
    soundFx.playClick();
    const summary = `${typeObj.label} (${pageObj.label}) with: ${
      selectedFeatures
        .map(fId => calculatorOptions.addFeatures.find(f => f.id === fId)?.label)
        .filter(Boolean)
        .join(', ') || 'Standard Features'
    } [Est. ${formatINR(totalPrice)}, ~${totalDays} days]`;

    if (onApplyEstimate) {
      onApplyEstimate({
        service: typeObj.label,
        scopeSummary: summary,
        estimatedPrice: totalPrice
      });
    }

    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-24 md:py-32 relative bg-white overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            Starts at ₹999 Project Scope Calculator
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display"
          >
            Configure Your Scope & <br />
            <span className="text-slate-900">Starts at ₹999 Only</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Select your website archetype and features. Under our special launch promotion, custom responsive development is flat ₹999 (Rs 999) with all core features included.
          </motion.p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Selection Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            {/* 1. Project Type */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                1. What type of website do you need?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {calculatorOptions.projectTypes.map((t) => {
                  const isSelected = selectedType === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        soundFx.playPop();
                        setSelectedType(t.id);
                      }}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-950 shadow-sm ring-1 ring-indigo-500'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-sm">{t.label}</div>
                      <div className="text-xs text-amber-800 font-bold mt-0.5">Flat ₹999 Only</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Page Count */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                2. Estimated Number of Pages
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {calculatorOptions.pageCounts.map((p) => {
                  const isSelected = selectedPages === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        soundFx.playPop();
                        setSelectedPages(p.id);
                      }}
                      className={`py-3 px-2 rounded-xl text-center text-xs font-bold border transition-all ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-900 ring-1 ring-cyan-500'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <div>{p.label}</div>
                      <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Included in ₹999</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Add-on Features */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                3. Desired Features & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {calculatorOptions.addFeatures.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-950 shadow-sm ring-1 ring-indigo-400'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-white transition-colors ${
                            isChecked ? 'bg-indigo-600' : 'border border-slate-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-semibold text-slate-800">{f.label}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-600">Included in ₹999</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Estimate Summary Sticky Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 rounded-3xl bg-gradient-to-b from-indigo-50/90 via-white to-slate-50 border border-indigo-200 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Live Scope Estimate
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                Transparent in ₹ (INR)
              </span>
            </div>

            {/* Price Output */}
            <div className="mb-6">
              <div className="text-xs text-slate-500 mb-1 font-medium">Estimated Total Investment</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display">
                  {formatINR(totalPrice)}
                </span>
                <span className="text-xs text-slate-500 font-semibold">One-time</span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                All projects include responsive mobile design, Core Web Vitals optimization, and 50/50 milestone payment.
              </p>
            </div>

            {/* Estimated Days */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-6 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Estimated Turnaround Time</div>
                <div className="text-sm font-bold text-slate-900">
                  ~{totalDays} to {totalDays + 3} Business Days
                </div>
              </div>
            </div>

            {/* Action to transfer scope to Contact Form */}
            <button
              onClick={handleApplyToContact}
              className="w-full py-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 group transition-all mb-3"
            >
              <SendHorizontal className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span>Apply Scope & Book Discovery</span>
            </button>

            <a
              href={`https://wa.me/917305431802?text=Hello%20M%20Studio!%20I%20used%20your%20cost%20calculator.%20My%20estimate%20is%20${encodeURIComponent(formatINR(totalPrice))}%20for%20${encodeURIComponent(typeObj.label)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Send This Estimate on WhatsApp (+91 73054 31802)</span>
            </a>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 justify-center">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>No commitment required. Final scope confirmed during consultation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
