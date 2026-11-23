import React, { useState } from 'react';
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
import AmbientSpotlight from './components/AmbientSpotlight';
import WaterDropCursor from './components/WaterDropCursor';
import SectionTransition from './components/SectionTransition';
import { MessageCircle } from 'lucide-react';
import { soundFx } from './utils/soundEffects';

export default function App() {
  const [prefilledService, setPrefilledService] = useState('');

  // User's provided WhatsApp number
  const WHATSAPP_NUMBER = "917305431802";

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi MJ Digital Studio! I'm visiting your website and would like to inquire about building a website starting at Rs 999."
  );

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 relative cursor-default">
      {/* 1. Fluid Water Droplet Cursor with Liquid Ripples & 3D Emojis */}
      <WaterDropCursor />

      {/* 2. Soft Ambient Cursor Spotlight */}
      <AmbientSpotlight glowColor="rgba(0, 210, 255, 0.08)" />

      {/* 3. Floating Island Dock Navbar */}
      <Navbar onOpenQuote={() => {
        soundFx.playWaterSplash();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main High-Impact Stratified Oceanic Sections matching the master image */}
      <main className="flex-1 relative z-10 pt-2">
        {/* Layer 1: Hero Section (Your Vision. Our Digital Canvas.) */}
        <Hero onOpenQuote={() => {
          soundFx.playWaterSplash();
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Oceanic Wave Transition: Celestial Ocean to Cloud Foam Layer */}
        <OceanicWave mode="toLight" />

        {/* Layer 2: About MJ Digital Studio (More Than Just Websites with 3D Glass MJ Card & Stats) */}
        <SectionTransition id="about-wrap">
          <AboutSection />
        </SectionTransition>

        {/* Layer 3: Social Proof & Metrics Marquee */}
        <SectionTransition>
          <SocialProofMarquee />
        </SectionTransition>

        {/* Layer 4: "Our Expertise" - 8 Unique Services Grid (E-commerce removed) */}
        <SectionTransition id="services-wrap">
          <ServicesSection onSelectService={handleSelectService} />
        </SectionTransition>

        {/* Oceanic Wave Transition: Light Layer to Deep Midnight Oceanic Ribbon */}
        <OceanicWave mode="toDark" />

        {/* Layer 5: "Why Choose MJ Digital Studio?" (Digital Solutions Designed to Make an Impact) */}
        <SectionTransition id="why-us-wrap">
          <WhyChooseUs />
        </SectionTransition>

        {/* Oceanic Wave Transition: Deep Ocean Ribbon to Light Layer */}
        <OceanicWave mode="toLight" />

        {/* Layer 6: "Our Process" (From First Idea to Final Launch) */}
        <SectionTransition id="process-wrap">
          <ProcessSection />
        </SectionTransition>

        {/* Oceanic Wave Transition: Light Layer to Deep Midnight Testimonial Wave */}
        <OceanicWave mode="toDark" />

        {/* Layer 7: "Good Words. Great Partnerships." (Verified Client Reviews) */}
        <SectionTransition id="testimonials-wrap">
          <TestimonialsSection />
        </SectionTransition>

        {/* Oceanic Wave Transition: Deep Ocean Wave to Light Layer */}
        <OceanicWave mode="toLight" />

        {/* Layer 8: Frequently Asked Questions */}
        <SectionTransition id="faq-wrap">
          <FaqSection />
        </SectionTransition>

        {/* Layer 9: "Have an Idea? Let's Make It Happen." (Contact Hub with Rocket) */}
        <SectionTransition id="contact-wrap">
          <ContactSection prefilledService={prefilledService} />
        </SectionTransition>
      </main>

      {/* Layer 10: Monumental Deep Oceanic Architectural Footer */}
      <Footer />

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
