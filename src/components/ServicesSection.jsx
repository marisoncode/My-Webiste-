import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';
import { academyCourses } from '../data/academyData';
import { 
  Palette, 
  Search, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Rocket,
  Code2,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import TiltCard from './TiltCard';
import RunningBorder from './RunningBorder';
import { soundFx } from '../utils/soundEffects';

const iconMap = {
  Palette,
  Search,
  MapPin,
  Rocket,
  Code2,
  Layers,
  Terminal,
  Cpu
};

export default function ServicesSection({ onSelectService, siteMode = 'studio' }) {
  const isAcademy = siteMode === 'academy';
  const items = isAcademy ? academyCourses : services;

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
    <section id="services" className="py-10 sm:py-14 md:py-16 relative bg-white dark:bg-zinc-950 overflow-hidden select-none transition-colors duration-300">
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
            {isAcademy ? 'Online Coding Classes ✦ Hello World Academy' : 'Our Expertise ✦ Hello World Studio'}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.12] font-display"
          >
            {isAcademy ? (
              <>
                Live Online Courses for <br />
                <span className="text-[#19A12B]">Modern Tech Careers.</span>
              </>
            ) : (
              <>
                End-to-End Web Solutions for <br />
                <span className="text-[#19A12B]">Your Business Growth.</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {isAcademy
              ? 'Hands-on online training in Frontend, JavaScript, Python, React, MERN Stack, and Generative AI with live mentorship.'
              : 'From stunning bespoke designs to Google SEO & Maps setup, we provide complete digital solutions starting at just ₹999.'}
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
              className="px-8 py-3 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:border-teal-500 transition-all flex items-center gap-2.5 group"
            >
              <span>Explore All Services</span>
              <span className="text-teal-600 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        {/* 4 Core Services / Courses Grid (Square Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <TiltCard
                  tiltDegree={8}
                  className="run-border-card sm:aspect-square rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-md"
                >
                  <RunningBorder />
                  <div className="h-full w-full p-6 sm:p-8 flex flex-col justify-between relative">
                    {/* Watermark Number */}
                    <div className="absolute top-5 right-6 text-3xl font-black text-zinc-100 dark:text-zinc-800 font-display select-none group-hover:text-teal-50 dark:group-hover:text-teal-950 transition-colors">
                      {service.number}
                    </div>

                    {/* Top Bar: Clean Solid Icon Medallion & Badge */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Concise Description */}
                    <div className="my-auto py-3 relative z-10">
                      <h3 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white mb-2 font-display group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between mt-auto relative z-10">
                      <span className="text-xs font-extrabold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        <span>{isAcademy ? service.timeline : 'Starts at Rs 999'}</span>
                      </span>

                      <button
                        onClick={() => scrollToContact(service.title)}
                        className="px-3.5 py-1.5 rounded-full bg-[#07292B] hover:bg-[#25A727] inline-flex items-center gap-1.5 text-xs font-bold text-white transition-all shadow-xs"
                      >
                        <span>{isAcademy ? 'Enroll' : 'Select'}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
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
