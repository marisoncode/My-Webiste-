import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SocialProofMarquee from './components/SocialProofMarquee';
import ServicesSection from './components/ServicesSection';
import OceanicWave from './components/OceanicWave';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionTransition from './components/SectionTransition';
import ScrollToTopRing from './components/ScrollToTopRing';
import QuickCommandPalette from './components/QuickCommandPalette';
import StormThunderOverlay from './components/StormThunderOverlay';
import { MessageCircle } from 'lucide-react';
import { soundFx } from './utils/soundEffects';

export default function App() {
  const [prefilledService, setPrefilledService] = useState('');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrollTopPct, setScrollTopPct] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('mj_theme') === 'dark';
    } catch {
      return false;
    }
  });
  const [currentPage, setCurrentPage] = useState(() =>
    window.location.hash === '#/faq' || window.location.pathname === '/faq' ? 'faq' : 'home'
  );

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
      const isFaq = window.location.hash === '#/faq' || window.location.pathname === '/faq';
      setCurrentPage(isFaq ? 'faq' : 'home');
    };
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const navigateTo = (page, sectionId) => {
    if (page === '__open_palette__') {
      setPaletteOpen(true);
      return;
    }
    if (page === 'faq') {
      window.location.hash = '#/faq';
      setCurrentPage('faq');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (window.location.hash === '#/faq') {
      window.history.pushState(null, '', window.location.pathname || '/');
    }
    setCurrentPage('home');
    if (sectionId) {
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
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
    "Hi MJ Digital Studio! I'm visiting your website and would like to inquire about building a website starting at Rs 999."
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
        onOpenPalette={() => setPaletteOpen(true)}
        onNavigate={navigateTo}
        onOpenQuote={() => {
          soundFx.playWaterSplash();
          navigateTo('home', '#contact');
        }}
      />

      {/* Quick Command Palette (Ctrl+K) */}
      <QuickCommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        onNavigate={navigateTo}
      />

      {currentPage === 'faq' ? (
        <main className="flex-1 relative z-10 pt-2">
          <FaqSection
            onBackHome={() => navigateTo('home')}
            onContact={() => navigateTo('home', '#contact')}
          />
        </main>
      ) : (
        <main className="flex-1 relative z-10 pt-2">
          {/* Layer 1: Hero Section */}
          <Hero onOpenQuote={() => {
            soundFx.playWaterSplash();
            navigateTo('home', '#contact');
          }} />

          <OceanicWave mode="toLight" />

          {/* Layer 2: About MJ Digital Studio */}
          <SectionTransition id="about-wrap">
            <AboutSection />
          </SectionTransition>

          {/* Layer 3: Tech Stack Marquee */}
          <SectionTransition>
            <SocialProofMarquee />
          </SectionTransition>

          {/* Layer 4: "Our Expertise" - 4 Core Services */}
          <SectionTransition id="services-wrap">
            <ServicesSection onSelectService={handleSelectService} />
          </SectionTransition>

          <OceanicWave mode="toDark" />

          {/* Layer 5: "Why Choose MJ Digital Studio?" */}
          <SectionTransition id="why-us-wrap">
            <WhyChooseUs />
          </SectionTransition>

          <OceanicWave mode="toLight" />

          {/* Layer 6: "Our Process" */}
          <SectionTransition id="process-wrap">
            <ProcessSection />
          </SectionTransition>

          <OceanicWave mode="toDark" />

          {/* Layer 7: "Good Words. Great Partnerships." */}
          <SectionTransition id="testimonials-wrap">
            <TestimonialsSection />
          </SectionTransition>

          <OceanicWave mode="toLight" />

          {/* Layer 8: "Have an Idea? Let's Make It Happen." */}
          <SectionTransition id="contact-wrap">
            <ContactSection prefilledService={prefilledService} />
          </SectionTransition>
        </main>
      )}

      {/* Architectural Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Circular Scroll-Progress Back-to-Top Button (Bottom-Left) */}
      <ScrollToTopRing />

      {/* Floating 1-Click WhatsApp Action Pill (Bottom-Right) */}
      <aside className="fixed bottom-6 right-6 z-40 group">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playPop()}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-500/40 border border-emerald-300 transition-all duration-300 hover:scale-105 active:scale-95 group backdrop-blur-sm"
          aria-label="Chat on WhatsApp (+91 73054 31802)"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-50"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-slate-950" />
          <span className="hidden sm:inline">WhatsApp: +91 73054 31802</span>
          <span className="sm:hidden font-mono font-black">Chat</span>
        </a>
      </aside>
    </div>
  );
}
