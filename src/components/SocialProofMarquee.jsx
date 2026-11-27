import React from 'react';
import {
  Palette,
  Zap,
  Search,
  Smartphone,
  MapPin,
  MessageCircle,
  Layout,
  Rocket
} from 'lucide-react';
import RunningBorder from './RunningBorder';

const TECH_CAPABILITIES = [
  {
    title: 'Website Design',
    tag: 'Custom UI',
    desc: 'Clean, modern websites crafted for your brand.',
    metric: 'Bespoke Look',
    icon: Palette
  },
  {
    title: 'Google Business Profile',
    tag: 'Google Maps',
    desc: 'Complete setup so local customers find and call you.',
    metric: 'Maps Verified',
    icon: MapPin
  },
  {
    title: 'Google SEO Setup',
    tag: 'Search Rank',
    desc: 'Clean headings, meta tags, and search indexing.',
    metric: 'SEO Ready',
    icon: Search
  },
  {
    title: 'Mobile-Friendly',
    tag: 'Responsive',
    desc: 'Looks sharp across phones, tablets, and desktops.',
    metric: 'All Screens',
    icon: Smartphone
  },
  {
    title: 'Fast Page Speed',
    tag: 'Performance',
    desc: 'Lightweight pages that open smoothly on mobile.',
    metric: '0.6s Load',
    icon: Zap
  },
  {
    title: 'Direct WhatsApp',
    tag: 'Lead Flow',
    desc: '1-click inquiry routing straight to your WhatsApp.',
    metric: 'Instant Chat',
    icon: MessageCircle
  },
  {
    title: 'Landing Pages',
    tag: 'Conversion',
    desc: 'Focused pages built to turn visitors into leads.',
    metric: '48-72h Launch',
    icon: Rocket
  },
  {
    title: 'Clean Layouts',
    tag: 'Typography',
    desc: 'Clear spacing and readable sections on every device.',
    metric: 'Light & Dark',
    icon: Layout
  }
];

export default function SocialProofMarquee() {
  return (
    <section className="py-10 md:py-12 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200/80 dark:border-zinc-800 relative overflow-hidden select-none transition-colors duration-300">
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '18s' }}
        >
          {[...TECH_CAPABILITIES, ...TECH_CAPABILITIES].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.title}-${idx}`}
                className="run-border-card w-60 h-60 shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs transition-colors flex flex-col justify-between group"
              >
                <RunningBorder />
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-black text-zinc-950 dark:text-white font-display mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold">
                  <span className="text-teal-700 dark:text-teal-400">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
