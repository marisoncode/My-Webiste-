import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Users,
  Layers,
  Laptop,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import RunningBorder from './RunningBorder';
import OceanicWave from './OceanicWave';
import { soundFx } from '../utils/soundEffects';

export default function LandingGateway({ onNavigate }) {
  return (
    <div className="bg-[#fafaf9] dark:bg-zinc-950 transition-colors duration-300 select-none">
      {/* SECTION 1: Hero + Question + Two Big Links to the 2 Pages */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-[#07292B] dark:text-zinc-200 mb-5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#25A727]" />
              <span>Hello World Studio ✦ Website Design &amp; Online Coding Training</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.1] font-display"
            >
              Do You Want to Design a Website, <br className="hidden sm:block" />
              <span className="text-[#19A12B]">or Do You Need Coding Training?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-4 sm:mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto"
            >
              <strong>Hello World Studio</strong> is a dual-purpose digital studio and online academy based in Puducherry. We design fast, SEO-ready websites for businesses — and we also train students online in Frontend, JavaScript, React, MERN Stack, Python, and Generative AI.
            </motion.p>
          </div>

          {/* Two Big Clickable Links for the 2 Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Link 1: Website Design Studio */}
            <motion.a
              href="#/studio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              onClick={(e) => {
                e.preventDefault();
                soundFx.playClick();
                onNavigate('studio');
              }}
              className="run-border-card rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] p-7 sm:p-10 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group text-left"
            >
              <RunningBorder rx={24} />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#07292B] text-white flex items-center justify-center group-hover:bg-[#25A727] transition-colors">
                    <Globe className="w-8 h-8" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#07292B] border border-teal-200 dark:border-[#0d4a4c] text-xs font-bold uppercase tracking-wider text-[#07292B] dark:text-[#25A727]">
                    I Want a Website
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-display mb-3 group-hover:text-[#19A12B] transition-colors">
                  Website Design &amp; SEO Studio
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Looking to launch a business website, landing page, or rank your shop on Google Search &amp; Maps? Visit our Web Design Studio page.
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {[
                    'Custom Business Websites & Landing Pages',
                    'Google Search SEO & Business Profile Setup',
                    'Affordable Plans Starting at Rs 999'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#25A727] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full py-4 px-6 rounded-full bg-[#07292B] group-hover:bg-[#25A727] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                <span>Go to Website Design Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Link 2: Online Coding Training */}
            <motion.a
              href="#/academy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              onClick={(e) => {
                e.preventDefault();
                soundFx.playClick();
                onNavigate('academy');
              }}
              className="run-border-card rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] p-7 sm:p-10 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group text-left"
            >
              <RunningBorder rx={24} />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#25A727] text-white flex items-center justify-center group-hover:bg-[#07292B] transition-colors">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-[#07292B] border border-teal-200 dark:border-[#0d4a4c] text-xs font-bold uppercase tracking-wider text-[#07292B] dark:text-[#25A727]">
                    I Need Training
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-display mb-3 group-hover:text-[#19A12B] transition-colors">
                  Online Coding &amp; AI Academy
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Want to learn coding from scratch or level up your tech career with live online classes? Visit our Online Training page.
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {[
                    'Frontend, JavaScript, React & MERN Stack',
                    'Python Programming & Generative AI',
                    'Live Online Classes with Real Projects'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#25A727] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full py-4 px-6 rounded-full bg-[#25A727] group-hover:bg-[#07292B] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                <span>Go to Coding Training Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <OceanicWave mode="toLight" />

      {/* SECTION 2: Detailed Overview of Hello World Studio (Design + Teaching) */}
      <section className="py-14 sm:py-20 bg-white dark:bg-zinc-900 border-y border-zinc-200/70 dark:border-zinc-800/70">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#19A12B]">
              One Studio • Two Missions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display mt-2">
              Everything About Hello World Studio
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Whether you are a business owner who needs a high-converting website or a student ready to master modern software development, we bring real-world engineering to both sides.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
            {/* Detailed Card 1: Website Design */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#fafaf9] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#07292B] text-white flex items-center justify-center">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#19A12B]">Part 01</span>
                    <h3 className="text-xl font-black text-zinc-950 dark:text-white font-display">
                      How We Design &amp; Grow Businesses
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  We partner with local shops, startups, clinics, and service providers to build fast, mobile-first websites that actually bring customer calls and WhatsApp inquiries. Every project includes clean UI, speed optimization, and Google visibility setup.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Business Websites & Portfolios',
                    'High-Converting Landing Pages',
                    'On-Page & Local Google SEO',
                    'Google Business Profile Setup'
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      <TrendingUp className="w-4 h-4 text-[#25A727] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#/studio"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  onNavigate('studio');
                }}
                className="inline-flex items-center gap-2 text-sm font-black text-[#07292B] dark:text-[#25A727] hover:text-[#19A12B] transition-colors"
              >
                <span>Explore Website Design Services &amp; Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Detailed Card 2: Online Coding Training */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#fafaf9] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#25A727] text-white flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#19A12B]">Part 02</span>
                    <h3 className="text-xl font-black text-zinc-950 dark:text-white font-display">
                      How We Train &amp; Mentor Students
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  Our online-only coding classes are taught by active developers who build real client products every week. Instead of boring theory, students write real code, build portfolio projects, and learn industry workflows step by step.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Frontend & Modern JavaScript',
                    'React & MERN Full-Stack Track',
                    'Python Programming & Logic',
                    'Generative AI & Prompt Engineering'
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#25A727] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#/academy"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  onNavigate('academy');
                }}
                className="inline-flex items-center gap-2 text-sm font-black text-[#19A12B] hover:text-[#07292B] dark:hover:text-white transition-colors"
              >
                <span>Explore Coding Courses &amp; Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3 Core Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Layers, title: 'Dual Expertise', desc: 'We practice what we teach — real client web design and live developer training under one roof.' },
              { icon: Users, title: 'Direct Mentorship', desc: 'Every client and student works directly with our core team without middlemen.' },
              { icon: MapPin, title: 'Puducherry & Online', desc: 'Based in Puducherry for local businesses, and 100% live online for coding students anywhere.' }
            ].map((pill) => {
              const Icon = pill.icon;
              return (
                <div
                  key={pill.title}
                  className="p-5 sm:p-6 rounded-2xl bg-[#fafaf9] dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-[#07292B] text-[#19A12B] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-zinc-950 dark:text-white font-display">{pill.title}</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">{pill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
