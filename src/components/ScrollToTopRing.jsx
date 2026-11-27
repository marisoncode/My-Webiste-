import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ScrollToTopRing() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const scrollToTop = () => {
    soundFx.playWaterSplash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title={`Back to top (${Math.round(scrollProgress)}%)`}
      className={`fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Outer Circular Scroll Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-zinc-200 dark:text-zinc-800"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="#25A727"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-[stroke-dashoffset] duration-100 ease-out"
        />
      </svg>

      <ArrowUp className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:-translate-y-0.5 transition-transform relative z-10" />
    </button>
  );
}
