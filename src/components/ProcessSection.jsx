import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  PenTool, 
  Code2, 
  Rocket, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      tagline: "Understand Your Vision",
      desc: "We analyze your target market, competitors, and growth objectives to chart a clear digital roadmap.",
      deliverables: [
        "Goal & Competitor Research",
        "Sitemap Architecture & Scope",
        "Direct 1-on-1 Consultation"
      ],
      icon: Lightbulb,
      gradient: "from-cyan-400 via-sky-500 to-blue-600",
      accentBg: "bg-cyan-50",
      accentText: "text-cyan-700",
      borderAccent: "border-cyan-300"
    },
    {
      step: "02",
      title: "Design",
      tagline: "Craft Bespoke Aesthetics",
      desc: "We craft custom, high-converting visual UI concepts with 3D elements, typography, and fluid micro-interactions.",
      deliverables: [
        "High-Fidelity Wireframes",
        "Interactive 3D Elements UI",
        "100% Client Design Approval"
      ],
      icon: PenTool,
      gradient: "from-sky-400 via-blue-500 to-indigo-600",
      accentBg: "bg-sky-50",
      accentText: "text-sky-700",
      borderAccent: "border-sky-300"
    },
    {
      step: "03",
      title: "Develop",
      tagline: "Build With Precision",
      desc: "We code your project from scratch using React 18 and Tailwind CSS for blistering sub-0.7s load speeds.",
      deliverables: [
        "Bespoke React 18 Architecture",
        "Core Web Vitals Speed Tuning",
        "Mobile-First Responsiveness"
      ],
      icon: Code2,
      gradient: "from-blue-500 via-indigo-600 to-cyan-500",
      accentBg: "bg-blue-50",
      accentText: "text-blue-700",
      borderAccent: "border-blue-300"
    },
    {
      step: "04",
      title: "Launch",
      tagline: "Deploy & Scale Up",
      desc: "We deploy on worldwide Cloudflare edge CDNs, connect custom domains, and configure WhatsApp integration.",
      deliverables: [
        "Global Cloud CDN & Free SSL",
        "WhatsApp Direct Chat Live",
        "Full Launch Handoff & Support"
      ],
      icon: Rocket,
      gradient: "from-cyan-400 via-teal-400 to-emerald-500",
      accentBg: "bg-emerald-50",
      accentText: "text-emerald-700",
      borderAccent: "border-emerald-300"
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative bg-gradient-to-b from-[#f0f9ff]/90 via-[#e0f2fe]/60 to-[#f0f9ff]/90 overflow-hidden select-none">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[450px] rounded-full bg-cyan-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full bg-blue-400/15 blur-[110px] pointer-events-none" />

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
            Our Proven 4-Step Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] font-display"
          >
            From First Idea <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
              to Final Launch.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            A transparent, highly organized development process engineered for extraordinary results and stress-free execution.
          </motion.p>
        </div>

        {/* 4 Architectural Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => soundFx.playPop()}
                className="rounded-3xl bg-white/95 border-2 border-cyan-100 hover:border-cyan-400 p-7 sm:p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden shadow-xs hover:shadow-md"
              >
                {/* Top Glowing Color Line */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.gradient}`} />

                <div>
                  {/* Step Header: Step Number Badge & Large 3D Icon Medallion */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-300 font-mono font-black text-xs uppercase tracking-widest shadow-xs">
                      STEP {item.step}
                    </span>

                    <span className="text-xs font-bold text-slate-400">
                      0{index + 1} / 04
                    </span>
                  </div>

                  {/* 3D Circular Medallion */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-tr from-cyan-300 via-sky-400 to-blue-500 shadow-sm group-hover:scale-105 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-cyan-50/90 to-blue-50 flex items-center justify-center relative overflow-hidden backdrop-blur-md border border-white">
                      {/* Sunlight glint */}
                      <div className="absolute top-2 left-3 w-8 h-3 rounded-full bg-white/90 rotate-[-30deg] blur-[1px]" />
                      
                      {/* Inner Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Step Titles & Tagline */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-display group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-extrabold text-cyan-700 uppercase tracking-wider mt-1">
                      {item.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-center mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* 3 Deliverables Micro-Badges per Step */}
                <div className="pt-5 border-t border-slate-100 space-y-2 mt-auto">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables:
                  </div>
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
