import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageCircle,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Search
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function Navbar({ onOpenQuote, onNavigate, darkMode, onToggleDark, onOpenPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [muted, setMuted] = useState(soundFx.isMuted);

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
    { name: 'FAQ', href: '#/faq', isPage: true },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href, isPage = false) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    if (isPage && onNavigate) {
      onNavigate('faq');
      return;
    }
    if (onNavigate) {
      onNavigate('home', href);
      return;
    }
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
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-xs backdrop-blur-xl ${
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
                if (onNavigate) onNavigate('home');
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group focus:outline-none"
              aria-label="MJ Web Design Studio Home"
            >
              <span className="text-sm sm:text-base font-black tracking-tight font-display text-zinc-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                MJ Web Design Studio
              </span>
            </a>

            {/* Clean Rs 999 Promo Badge */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-[11px] font-bold text-teal-900 dark:text-teal-200 shadow-xs hover:bg-teal-100 dark:hover:bg-teal-900 transition-all group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-700 dark:text-teal-400">Starts at</span>
              <span className="font-extrabold text-teal-950 dark:text-white">Rs 999</span>
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
                onClick={(e) => handleLinkClick(e, link.href, link.isPage)}
                onMouseEnter={() => {
                  soundFx.playPop();
                  setHoveredLink(link.name);
                }}
                className="relative px-3 py-1.5 text-xs uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors z-10"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="islandNavPill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10 shadow-xs"
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Quick Tools (Search, Sound, Dark/Light), WhatsApp & Quote Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Quick Command Palette (Ctrl+K) */}
            {onOpenPalette && (
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  onOpenPalette();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-teal-500 text-[11px] font-bold transition-colors"
                title="Quick Menu (Ctrl+K)"
                aria-label="Open quick command menu"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden 2xl:inline">Ctrl+K</span>
              </button>
            )}

            {/* Sound Mute/Unmute Toggle */}
            <button
              type="button"
              onClick={() => {
                const nextMuted = soundFx.toggleMute();
                setMuted(nextMuted);
                if (!nextMuted) soundFx.playPop();
              }}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-teal-500 transition-colors"
              title={muted ? 'Unmute UI sounds' : 'Mute UI sounds'}
              aria-label={muted ? 'Unmute UI sounds' : 'Mute UI sounds'}
            >
              {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />}
            </button>

            {/* Dark / Light Mode Toggle */}
            {onToggleDark && (
              <button
                type="button"
                onClick={() => {
                  soundFx.playPop();
                  onToggleDark();
                }}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:border-teal-500 transition-colors"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            )}

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

            {/* Quote Action Button - Clean Solid Let's Talk Pill */}
            <button
              onClick={() => {
                if (onOpenQuote) {
                  onOpenQuote();
                } else {
                  soundFx.playWaterSplash();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2 rounded-full bg-zinc-900 hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm border border-zinc-800 hover:border-teal-600 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
            >
              <span>Let's Talk</span>
              <span className="text-teal-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform">→</span>
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
              <span className="px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-900 dark:text-teal-300 text-[11px] font-extrabold border border-teal-200 dark:border-teal-800">
                Starts at Rs 999
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isPage)}
                  className="p-3 text-xs uppercase tracking-wider font-bold text-zinc-700 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-colors"
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
