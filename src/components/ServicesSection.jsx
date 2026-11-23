import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Search, 
  RefreshCw, 
  Layers, 
  Wrench,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import TiltCard from './TiltCard';
import { soundFx } from '../utils/soundEffects';

const iconMap = {
  Palette,
  Code2,
  Smartphone,
  Globe,
  Search,
  RefreshCw,
  Layers,
  Wrench
};

export default function ServicesSection({ onSelectService }) {
  const scrollToContact = (serviceTitle) => {
    soundFx.playWaterSplash();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#f0f9ff]/70 overflow-hidden select-none">
      {/* Ambient oceanic cyan glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-cyan-300 text-cyan-950 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-cyan-600" />
            Our Expertise ✦ MJ Digital Studio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] font-display"
          >
            End-to-End Web Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
              Your Business Growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            From stunning bespoke designs to blistering React performance, we provide complete digital solutions starting at just ₹999.
          </motion.p>

          {/* Explore All Services Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={() => {
                soundFx.playWaterSplash();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 rounded-full bg-white hover:bg-cyan-50 text-cyan-950 border-2 border-cyan-300 font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md hover:border-cyan-500 transition-all flex items-center gap-2.5 group"
            >
              <span>Explore All Services</span>
              <span className="text-cyan-600 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        {/* 8 Unique Services Grid (4 columns x 2 rows) - Enhanced Readable Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <TiltCard
                  tiltDegree={8}
                  className="h-full rounded-[2rem] bg-white/95 border-2 border-cyan-100/90 hover:border-cyan-400 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden shadow-xs hover:shadow-md"
                >
                  {/* Top Glowing Accent Line on Hover */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Watermark Number in Top Corner */}
                  <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-slate-200/80 font-display select-none group-hover:text-cyan-200 transition-colors">
                    {service.number}
                  </div>

                  <div>
                    {/* Top Bar: 3D Glowing Icon Medallion & Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.accent} text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-black uppercase tracking-wider text-cyan-950">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Description with Readable Responsive Fonts */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 font-display group-hover:text-cyan-700 transition-colors relative z-10 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal relative z-10">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/70 relative z-10">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                          <Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Starts at Rs 999 CTA */}
                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between mt-auto relative z-10">
                    <span className="text-xs sm:text-sm font-extrabold text-amber-950 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span>Starts at Rs 999</span>
                    </span>

                    <button
                      onClick={() => scrollToContact(service.title)}
                      className="px-4 py-1.5 rounded-full bg-white hover:bg-cyan-50 border-2 border-cyan-200 hover:border-cyan-400 inline-flex items-center gap-1.5 text-sm font-black text-slate-950 group-hover:text-cyan-700 transition-all shadow-xs"
                    >
                      <span>Select</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
