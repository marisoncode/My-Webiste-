import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Smile, 
  Star, 
  Sparkles
} from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import RunningBorder from './RunningBorder';
import { soundFx } from '../utils/soundEffects';

export default function AboutSection({ siteMode = 'studio' }) {
  const isAcademy = siteMode === 'academy';

  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 relative bg-white dark:bg-zinc-950 overflow-hidden select-none transition-colors duration-300">
      
      {/* Subtle ambient light spots (desktop) */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-72 h-72 rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              {isAcademy ? 'About Hello World Academy' : 'About Hello World Studio'}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.15] font-display"
            >
              {isAcademy ? (
                <>
                  Learn It. Build It. <br />
                  <span className="text-[#19A12B]">Launch Your Skills.</span>
                </>
              ) : (
                <>
                  More Than Just Websites. <br />
                  <span className="text-[#19A12B]">We Create Digital Experiences.</span>
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-xl"
            >
              {isAcademy
                ? 'Our live online coding classes focus on practical coding from day one — covering Frontend, JavaScript, Python, React, MERN Stack, and Generative AI with real projects.'
                : 'Hello World Studio transforms business ideas into engaging, functional and high-performing digital experiences with modern design, cutting-edge technology and a passion for innovation.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playWaterSplash();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#07292B] hover:bg-[#25A727] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all group"
              >
                <span>Know More</span>
                <span className="text-teal-400 group-hover:text-white group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (6 cols): 3 Clean Square Stat Cards (Distinct Numbers for Studio vs Academy) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            
            {/* Stat 1 */}
            <motion.div
              key={`${siteMode}-s1`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="run-border-card sm:aspect-square p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <RunningBorder />
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-105 transition-all">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl font-black text-zinc-950 dark:text-white font-display">
                  {isAcademy ? <AnimatedCounter value={4} duration={1.2} /> : <AnimatedCounter value={100} suffix="+" duration={1.8} />}
                </div>
                <div className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 mt-1">
                  {isAcademy ? 'Core Coding Tracks' : 'Projects Delivered'}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                  {isAcademy ? 'JS, React, Python, AI' : 'India & Globally'}
                </div>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              key={`${siteMode}-s2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="run-border-card sm:aspect-square p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <RunningBorder />
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-all">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl font-black text-zinc-950 dark:text-white font-display">
                  {isAcademy ? <AnimatedCounter value={100} suffix="%" duration={1.5} /> : <AnimatedCounter value={98} suffix="%" duration={1.8} />}
                </div>
                <div className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 mt-1">
                  {isAcademy ? 'Live Online Classes' : 'Client Satisfaction'}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                  {isAcademy ? 'Hands-On Coding' : '5-Star Reviews'}
                </div>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              key={`${siteMode}-s3`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="run-border-card sm:aspect-square p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <RunningBorder />
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-105 transition-all">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl font-black text-zinc-950 dark:text-white font-display">
                  {isAcademy ? '1-on-1' : <AnimatedCounter value={999} prefix="Rs " duration={2.0} />}
                </div>
                <div className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 mt-1">
                  {isAcademy ? 'Direct Mentorship' : 'Starts at Rs 999'}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                  {isAcademy ? 'Doubt Clearing' : 'Launch Offer'}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
