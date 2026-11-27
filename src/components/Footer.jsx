import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Mail, 
  MapPin, 
  PhoneCall,
  Clock,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function Footer({ onNavigate }) {
  const [istTime, setIstTime] = useState('');

  // Live IST (India Standard Time) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      };
      setIstTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    soundFx.playWaterSplash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07292B] text-white overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-12 select-none border-t border-[#0d4a4c]">
      
      {/* Subtle Brand Ambient Glows */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#25A727]/10 blur-[140px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 w-[700px] h-[500px] rounded-full bg-[#25A727]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 relative z-10">

        {/* 4-Column Architectural Grid - Fully Responsive across Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 pb-10 sm:pb-14 border-b border-[#0d4a4c]">
          
          {/* Column 1 (4 cols): Brand Logo, Tagline, Description & Social Icons */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 text-left">
              <img
                src="/helloworld-icon.png"
                alt="Hello World Studio Logo"
                className="h-16 sm:h-20 w-auto rounded-2xl object-contain bg-white p-1.5 shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display leading-tight">
                  Hello World Studio
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#25A727] tracking-wider mt-1">
                  Learn it. Build it. Launch it.
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-sm">
              We design and develop extraordinary digital experiences that help businesses grow, stand out and succeed online. Handcrafted with React & Three.js starting at just ₹999.
            </p>

            {/* Social Icons in rounded pills with high visibility */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playPop()}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playPop()}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playPop()}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playPop()}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playPop()}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 (2 cols): Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white font-display">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-medium">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    if (onNavigate) onNavigate('home');
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#25A727] transition-colors inline-block py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#/studio" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    if (onNavigate) onNavigate('studio');
                  }}
                  className="hover:text-[#25A727] transition-colors inline-block py-1"
                >
                  Web Studio
                </a>
              </li>
              <li>
                <a 
                  href="#/academy" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    if (onNavigate) onNavigate('academy');
                  }}
                  className="hover:text-[#25A727] transition-colors inline-block py-1"
                >
                  Online Academy
                </a>
              </li>
              <li>
                <a 
                  href="#/faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    if (onNavigate) onNavigate('faq');
                  }}
                  className="hover:text-teal-400 transition-colors inline-block py-1"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    if (onNavigate) {
                      onNavigate('home', '#contact');
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-teal-400 transition-colors inline-block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white font-display">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-medium">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Website Design (Starts at ₹999)
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Web Development (React 18)
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Responsive Design & Mobile-First
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Technical SEO & Google Sitemaps
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Website Redesign & Upgrades
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 cols): Contact Info & Direct Action */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white font-display">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-zinc-200 font-medium">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#25A727] shrink-0" />
                <a href="mailto:helloworldstudiacademy@gmail.com" className="text-xs sm:text-sm hover:text-[#25A727] transition-colors whitespace-nowrap">
                  helloworldstudiocademy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#25A727] shrink-0" />
                <a href="https://wa.me/917305431802" target="_blank" rel="noopener noreferrer" className="hover:text-[#25A727] transition-colors font-bold text-[#25A727]">
                  +91 73054 31802
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#25A727] shrink-0" />
                <span>Puducherry, India</span>
              </li>
            </ul>

            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight mb-3">
                Let's Build <br />
                <span className="text-teal-400">
                  Something Amazing Together.
                </span>
              </h3>

              <a
                href="https://wa.me/917305431802?text=Hello%20MJ%20Digital%20Studio!%20Let's%20build%20something%20amazing%20together%20starting%20at%20Rs%20999."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playWaterSplash()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <span>Start Project (Rs 999)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Live IST indicator */}
            {istTime && (
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-mono pt-1">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>IST (India): {istTime}</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium">
          <div>
            © 2026 Hello World Studio. All rights reserved. Handcrafted with React.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
