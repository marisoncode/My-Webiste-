import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageCircle 
} from 'lucide-react';
import MajesticLogo from './MajesticLogo';
import { soundFx } from '../utils/soundEffects';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Island Dock Navigation */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', damping: 20 }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-xl ${
            isScrolled
              ? 'scale-95'
              : ''
          }`}
        >
          {/* Left: Brand Monogram & Promo Pill */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                soundFx.playClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Majestic Digital Studio Home"
            >
              <MajesticLogo size="md" variant="light" />
            </a>

            {/* Clean Rs 999 Promo Badge */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-950 shadow-xs hover:bg-amber-100 hover:border-amber-300 transition-all group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-700">Starts at</span>
              <span className="font-extrabold text-amber-950">Rs 999</span>
            </a>
          </div>

          {/* Center: Desktop Navigation with Liquid Pill Highlight */}
          <nav 
            className="hidden xl:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => {
                  soundFx.playPop();
                  setHoveredLink(link.name);
                }}
                className="relative px-3 py-1.5 text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-slate-950 transition-colors z-10"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="islandNavPill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-slate-100 rounded-full -z-10 shadow-xs"
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: WhatsApp CTA & Quote Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/917305431802?text=Hi%20Majestic%20Digital%20Studio!%20I'm%20interested%20in%20the%20Rs%20999%20website%20offer."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playPop()}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>7305431802</span>
            </a>

            {/* Quote Action Button - Sleek Let's Talk Pill matching image */}
            <button
              onClick={() => {
                soundFx.playWaterSplash();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#03102b] to-[#0c2b5e] hover:from-[#061a40] hover:to-[#0284c7] text-white font-bold text-xs uppercase tracking-wider shadow-sm border border-cyan-400/40 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
            >
              <span>Let's Talk</span>
              <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-2 rounded-full bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WhatsApp: +91 73054 31802</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-extrabold border border-amber-300">
                Starts at Rs 999
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="p-3 text-xs uppercase tracking-wider font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-center text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
                <span>Request a Free Quote (Starts at Rs 999)</span>
              </a>
              <a
                href="https://wa.me/917305431802?text=Hi%20Majestic%20Digital%20Studio!%20I'm%20interested%20in%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp (+91 73054 31802)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
