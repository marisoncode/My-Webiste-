import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
  MessageCircle
} from 'lucide-react';

export default function Navbar({ onOpenQuote, onNavigate, darkMode, onToggleDark, currentPage = 'home' }) {
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
    { name: 'Home', page: 'home', href: '#' },
    { name: 'Web Studio', page: 'studio', href: '#/studio' },
    { name: 'Academy', page: 'academy', href: '#/academy' },
    { name: 'FAQ', page: 'faq', href: '#/faq' },
    { name: 'Contact', section: '#contact', href: '#contact' }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.page && onNavigate) {
      onNavigate(link.page);
      return;
    }
    if (link.section && onNavigate) {
      const targetPage = currentPage === 'studio' || currentPage === 'academy' ? currentPage : 'home';
      onNavigate(targetPage, link.section);
      return;
    }
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Compact Floating Island Dock Navigation */}
      <header className="fixed top-2.5 sm:top-4 inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between gap-2 sm:gap-4 px-3 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 shadow-sm backdrop-blur-xl ${
            isScrolled ? 'shadow-md' : ''
          }`}
        >
          {/* Left: Brand Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
            aria-label="Hello World Studio Home"
          >
            <img
              src="/helloworld-icon.png"
              alt="Hello World Studio Logo"
              className="h-9 sm:h-11 w-auto rounded-xl object-contain bg-white p-0.5 border border-zinc-200 dark:border-zinc-700 shrink-0"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs sm:text-sm font-black tracking-tight font-display text-[#07292B] dark:text-white group-hover:text-[#19A12B] transition-colors">
                Hello World Studio
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#19A12B] tracking-wide">
                Learn it. Build it. Launch it.
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation with Equal Spacing */}
          <nav
            className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = link.page && currentPage === link.page;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-bold transition-colors z-10 whitespace-nowrap ${
                    isActive
                      ? 'text-[#19A12B]'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="islandNavPill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10"
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle, CTA & Slide-Drawer Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            {onToggleDark && (
              <button
                type="button"
                onClick={onToggleDark}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:border-[#25A727] transition-colors"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="w-4 h-4 text-[#25A727]" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => {
                if (onOpenQuote) {
                  onOpenQuote();
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:flex px-4 py-2 rounded-full bg-[#07292B] hover:bg-[#25A727] text-white font-bold text-xs uppercase tracking-wider shadow-xs items-center gap-1.5 transition-all duration-200 group"
            >
              <span>Let's Talk</span>
              <span className="text-[#25A727] group-hover:text-white group-hover:translate-x-0.5 transition-transform">→</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full bg-[#07292B] text-white hover:bg-[#25A727] transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Slide-In Side Drawer Menu (Appears when clicked) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden"
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/helloworld-icon.png"
                      alt="Hello World Studio"
                      className="h-9 w-auto rounded-lg bg-white p-0.5 border border-zinc-200"
                    />
                    <span className="text-sm font-black text-[#07292B] dark:text-white font-display">
                      Hello World Studio
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:bg-[#25A727] hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="mt-6 space-y-1.5">
                  {navLinks.map((link, idx) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:bg-[#eefbee] dark:hover:bg-[#07292B] hover:text-[#07292B] dark:hover:text-white transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono font-black text-[#25A727]">0{idx + 1}</span>
                        <span>{link.name}</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#25A727] transition-colors" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, { section: '#contact', href: '#contact' })}
                  className="w-full py-3.5 rounded-full bg-[#07292B] hover:bg-[#25A727] text-white font-black text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Let's Build Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/917305431802?text=Hi%20Hello%20World%20Studio!%20I'm%20interested%20in%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-teal-50 dark:bg-[#07292B] border border-teal-200 dark:border-[#0d4a4c] text-[#07292B] dark:text-white font-bold text-center text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25A727]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
