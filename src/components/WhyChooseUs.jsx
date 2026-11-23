import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Modern Designs",
      desc: "Tailor-made aesthetic that elevates your brand identity, captivates visitors, and commands immediate customer trust.",
      features: ["Custom UI/UX & Color Theory", "Micro-Interactions & 3D Depth"],
      icon: Palette,
      gradient: "from-cyan-400 via-sky-500 to-blue-600",
      borderGlow: "border-cyan-400/50 hover:border-cyan-300",
      accentBg: "bg-cyan-950/40",
      iconBg: "bg-cyan-500/25 text-cyan-300"
    },
    {
      title: "High Performance",
      desc: "Sub-second mobile load times engineered with clean, lightweight modern React code and automated image optimization.",
      features: ["Sub-0.7s Core Web Vitals", "Zero Heavy Unused Scripts"],
      icon: Zap,
      gradient: "from-amber-400 via-orange-500 to-amber-600",
      borderGlow: "border-amber-400/50 hover:border-amber-300",
      accentBg: "bg-amber-950/40",
      iconBg: "bg-amber-500/25 text-amber-300"
    },
    {
      title: "Fully Responsive",
      desc: "Flawless pixel-perfect layout and intuitive navigation across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
      features: ["Mobile-First Fluid Layouts", "Retina & High-DPI Clarity"],
      icon: Smartphone,
      gradient: "from-sky-400 via-blue-500 to-indigo-600",
      borderGlow: "border-sky-400/50 hover:border-sky-300",
      accentBg: "bg-blue-950/40",
      iconBg: "bg-sky-500/25 text-sky-300"
    },
    {
      title: "SEO-Friendly",
      desc: "Semantic HTML5, automated XML sitemaps, and rich OpenGraph metadata to achieve prominent organic Google Search rankings.",
      features: ["Google Search Console Ready", "Social Media Rich Previews"],
      icon: Search,
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      borderGlow: "border-emerald-400/50 hover:border-emerald-300",
      accentBg: "bg-emerald-950/40",
      iconBg: "bg-emerald-500/25 text-emerald-300"
    },
    {
      title: "Secure & Reliable",
      desc: "Enterprise cloud hosting on worldwide Cloudflare edge CDNs with automated free SSL certificates and 99.99% uptime guarantees.",
      features: ["Automated HTTPS / SSL Security", "DDoS Protected Global Edge"],
      icon: ShieldCheck,
      gradient: "from-indigo-400 via-purple-500 to-violet-600",
      borderGlow: "border-indigo-400/50 hover:border-indigo-300",
      accentBg: "bg-indigo-950/40",
      iconBg: "bg-indigo-500/25 text-indigo-300"
    },
    {
      title: "Scalable Solutions",
      desc: "Modular architectural foundations designed to expand effortlessly with booking portals, catalogs, and APIs as you scale.",
      features: ["Modular Component Architecture", "Direct WhatsApp CRM Flow"],
      icon: TrendingUp,
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      borderGlow: "border-rose-400/50 hover:border-rose-300",
      accentBg: "bg-rose-950/40",
      iconBg: "bg-rose-500/25 text-rose-300"
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-[#020b22] text-white overflow-hidden select-none">
      
      {/* Bioluminescent Oceanic Light Rays & Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />

      {/* Floating 3D Geometric Crystal Star Accent from the image */}
      <motion.div
        animate={{
          rotate: [0, 360],
          y: [-12, 12, -12]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-12 right-12 w-20 h-20 pointer-events-none opacity-60 hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_0_20px_rgba(0,210,255,0.8)]">
          <polygon points="50,5 64,36 98,50 64,64 50,95 36,64 2,50 36,36" fill="url(#crystalGrad)" />
          <defs>
            <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Section Header with Large, High-Contrast Text */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Why Choose MJ Digital Studio? ✦
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] font-display"
          >
            Digital Solutions Designed to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-[0_2px_20px_rgba(0,210,255,0.4)]">
              Make an Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We combine high-end aesthetics, cutting-edge technology and proven conversion strategy to deliver websites that truly grow your business — starting at just ₹999.
          </motion.p>
        </div>

        {/* 3-Column Generous Grid (Replaces narrow 6-column layout for maximum readability & size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => soundFx.playPop()}
                className={`p-7 sm:p-8 rounded-3xl bg-[#031338]/95 border-2 ${pillar.borderGlow} transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              >
                {/* Top Subtle Color Accent Bar */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`} />
                
                {/* Ambient Internal Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-cyan-500/10 blur-[40px] pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  {/* Glowing 3D Icon Medallion */}
                  <div className={`w-16 h-16 rounded-2xl ${pillar.iconBg} border border-cyan-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title & Description with High-Contrast Typography */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* 2 Feature Pills with High Contrast */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-cyan-200 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Direct Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-center gap-5 text-center"
        >
          <a
            href="https://wa.me/917305431802?text=Hello%20MJ%20Digital%20Studio!%20I'd%20like%20to%20know%20more%20about%20your%20website%20packages%20starting%20at%20Rs%20999."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playWaterSplash()}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/30 flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>Chat With Founder on WhatsApp (+91 73054 31802)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <span className="text-sm text-cyan-300 font-bold px-5 py-3 rounded-full bg-slate-900 border border-cyan-500/30 shadow-sm">
            ⭐ Starts at Rs 999 • No Hidden Fees • 100% Guaranteed
          </span>
        </motion.div>

      </div>
    </section>
  );
}
