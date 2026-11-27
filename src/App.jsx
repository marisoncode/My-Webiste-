import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingGateway from './components/LandingGateway';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SocialProofMarquee from './components/SocialProofMarquee';
import ServicesSection from './components/ServicesSection';
import OceanicWave from './components/OceanicWave';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionTransition from './components/SectionTransition';
import ScrollToTopRing from './components/ScrollToTopRing';
import StormThunderOverlay from './components/StormThunderOverlay';
import { soundFx } from './utils/soundEffects';

const getPageFromLocation = () => {
  const hash = window.location.hash;
  if (hash === '#/faq' || window.location.pathname === '/faq') return 'faq';
  if (hash === '#/studio') return 'studio';
  if (hash === '#/academy') return 'academy';
  return 'home';
};

export default function App() {
  const [prefilledService, setPrefilledService] = useState('');
  const [scrollTopPct, setScrollTopPct] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('mj_theme') === 'dark';
    } catch {
      return false;
    }
  });
  const [currentPage, setCurrentPage] = useState(getPageFromLocation);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
    try {
      localStorage.setItem('mj_theme', darkMode ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollTopPct(docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentPage(getPageFromLocation());
    };
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const navigateTo = (page, sectionId) => {
    setPrefilledService('');
    if (page === 'faq') {
      window.location.hash = '#/faq';
      setCurrentPage('faq');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (page === 'studio') {
      window.location.hash = '#/studio';
      setCurrentPage('studio');
      if (sectionId) {
        setTimeout(() => document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    if (page === 'academy') {
      window.location.hash = '#/academy';
      setCurrentPage('academy');
      if (sectionId) {
        setTimeout(() => document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname || '/');
    }
    setCurrentPage('home');
    if (sectionId) {
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // User's provided WhatsApp number
  const WHATSAPP_NUMBER = "917305431802";

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Hello World Studio! I'm visiting your website and would like to inquire about building a website starting at Rs 999."
  );

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-teal-600 selection:text-white relative transition-colors duration-300">
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-teal-600 transition-[width] duration-100 ease-out"
          style={{ width: `${scrollTopPct}%` }}
        />
      </div>

      {/* Site-Wide Storm Thunder & Lightning Effect */}
      <StormThunderOverlay />

      {/* 1. Floating Island Dock Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={() => {
          soundFx.playWaterSplash();
          const targetPage = currentPage === 'studio' || currentPage === 'academy' ? currentPage : 'home';
          navigateTo(targetPage, '#contact');
        }}
      />

      <AnimatePresence mode="wait">
        {currentPage === 'faq' ? (
          <motion.main
            key="faq"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex-1 relative z-10 pt-2"
          >
            <FaqSection
              onBackHome={() => navigateTo('home')}
              onContact={() => navigateTo('home', '#contact')}
            />
          </motion.main>
        ) : currentPage === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex-1 relative z-10 pt-2"
          >
            <LandingGateway onNavigate={navigateTo} />
            <OceanicWave mode="toDark" />
            <ContactSection prefilledService={prefilledService} />
          </motion.main>
        ) : (
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex-1 relative z-10 pt-2"
          >
            {/* Dedicated Studio or Academy Page */}
            <Hero
              siteMode={currentPage}
              onSelectMode={(m) => navigateTo(m)}
              onBackHome={() => navigateTo('home')}
              onOpenQuote={() => {
                soundFx.playWaterSplash();
                navigateTo(currentPage, '#contact');
              }}
            />

            <OceanicWave mode="toLight" />

            <SectionTransition id="about-wrap">
              <AboutSection siteMode={currentPage} />
            </SectionTransition>

            <SectionTransition>
              <SocialProofMarquee siteMode={currentPage} />
            </SectionTransition>

            <SectionTransition id="services-wrap">
              <ServicesSection siteMode={currentPage} onSelectService={handleSelectService} />
            </SectionTransition>

            <OceanicWave mode="toLight" />

            <SectionTransition id="process-wrap">
              <ProcessSection siteMode={currentPage} />
            </SectionTransition>

            <OceanicWave mode="toDark" />

            <SectionTransition id="testimonials-wrap">
              <TestimonialsSection siteMode={currentPage} />
            </SectionTransition>

            <OceanicWave mode="toLight" />

            <SectionTransition id="contact-wrap">
              <ContactSection siteMode={currentPage} prefilledService={prefilledService} />
            </SectionTransition>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Architectural Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Circular Scroll-Progress Back-to-Top Button (Bottom-Left) */}
      <ScrollToTopRing />

      {/* Floating Circular WhatsApp Logo Button with Hover Pop-up (Bottom-Right) */}
      <aside className="fixed bottom-6 right-6 z-40 group flex items-center gap-3">
        {/* Animated Hover Pop-up Pill */}
        <div className="pointer-events-none opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 px-4 py-2.5 rounded-full bg-[#07292B] text-white shadow-xl border border-[#25A727]/40 flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#25A727] animate-ping" />
          <span className="text-xs font-bold tracking-wide">Chat on WhatsApp • +91 73054 31802</span>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playPop()}
          aria-label="Chat on WhatsApp (+91 73054 31802)"
          className="relative w-14 h-14 rounded-full bg-[#25A727] hover:bg-[#19A12B] text-white shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-[#25A727] opacity-40 group-hover:animate-ping pointer-events-none" />
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-7 h-7 relative z-10"
            aria-hidden="true"
          >
            <path d="M16.004 3C8.834 3 3 8.834 3 16.004c0 2.29.602 4.525 1.748 6.494L3.08 29l6.683-1.752A12.94 12.94 0 0 0 16.004 29C23.173 29 29 23.173 29 16.004 29 8.834 23.173 3 16.004 3Zm0 23.62a10.57 10.57 0 0 1-5.394-1.477l-.387-.23-3.965 1.04 1.058-3.866-.252-.4a10.59 10.59 0 0 1-1.624-5.643c0-5.853 4.762-10.615 10.616-10.615 5.853 0 10.615 4.762 10.615 10.615 0 5.854-4.762 10.616-10.615 10.616Zm5.822-7.95c-.32-.16-1.89-.932-2.183-1.038-.293-.107-.506-.16-.72.16-.213.32-.825 1.038-1.012 1.251-.186.213-.373.24-.692.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.592-1.893-1.778-2.212-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.732-.986-2.371-.26-.623-.523-.538-.72-.548l-.613-.01c-.213 0-.56.08-.852.4-.293.32-1.119 1.092-1.119 2.664s1.146 3.09 1.305 3.303c.16.213 2.254 3.443 5.46 4.828.763.33 1.358.526 1.822.673.766.244 1.463.21 2.014.127.614-.092 1.89-.773 2.156-1.519.266-.746.266-1.385.186-1.519-.08-.133-.293-.213-.613-.373Z" />
          </svg>
        </a>
      </aside>
    </div>
  );
}
