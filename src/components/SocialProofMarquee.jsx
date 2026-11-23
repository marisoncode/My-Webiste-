import React from 'react';
import { motion } from 'framer-motion';
import { agencyStats } from '../data/testimonialsData';
import { Award, ShieldCheck, Zap, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function SocialProofMarquee() {
  const techStack = [
    { name: "React.js", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Figma UI/UX", icon: "🎯" },
    { name: "Shopify Headless", icon: "🛍️" },
    { name: "Stripe Checkout", icon: "💳" },
    { name: "Technical SEO", icon: "📈" },
    { name: "Web Vitals 95+", icon: "⚡" }
  ];

  const statIcons = [Award, Users, Zap, ShieldCheck];

  return (
    <section className="py-12 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 mb-10">
        {/* Four metric boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {agencyStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-cyan-400 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 group-hover:scale-105 flex items-center justify-center transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
                    {stat.rawNum !== undefined ? (
                      <AnimatedCounter 
                        value={stat.rawNum} 
                        prefix={stat.prefix || ""} 
                        suffix={stat.suffix || ""} 
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ticker marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 whitespace-nowrap animate-marquee py-2">
          {[...techStack, ...techStack, ...techStack].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-slate-700 text-xs font-semibold tracking-wide shadow-sm"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
