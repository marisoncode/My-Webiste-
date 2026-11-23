import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Mail, 
  MapPin, 
  MessageCircle, 
  PhoneCall,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

const FUN_EMOJIS = [
  { char: '😊', label: 'Starts at ₹999', tag: 'Special Launch Offer' },
  { char: '😎', label: 'Zero Templates', tag: 'Handcrafted Code' },
  { char: '🤩', label: '0.7s Speed', tag: 'Core Web Vitals' },
  { char: '🥳', label: 'WhatsApp Live', tag: '+91 73054 31802' },
  { char: '🚀', label: 'Fast Delivery', tag: 'Prompt Launch' }
];

export default function Footer() {
  const [istTime, setIstTime] = useState('');
  const [activeEmoji, setActiveEmoji] = useState(FUN_EMOJIS[0]);
  const [clickedEmoji, setClickedEmoji] = useState(null);

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

  const handleEmojiClick = (item) => {
    soundFx.playWaterSplash();
    setActiveEmoji(item);
    setClickedEmoji(item.char);
    setTimeout(() => setClickedEmoji(null), 600);
  };

  return (
    <footer className="relative bg-[#020b22] text-white overflow-hidden pt-16 sm:pt-20 pb-12 select-none border-t border-cyan-500/25">
      
      {/* Bioluminescent Oceanic Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">

        {/* 4-Column Architectural Grid - Fully Responsive across Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Column 1 (4 cols): Brand Logo, Tagline, Description & Social Icons */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0284c7] via-[#00d2ff] to-[#38bdf8] p-[2px] shadow-lg shadow-cyan-500/30">
                <div className="w-full h-full bg-[#03102b] rounded-[14px] flex items-center justify-center">
                  <span className="font-extrabold text-sm font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                    MJ
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display leading-tight">
                  MJ Digital Studio
                </span>
                <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wider">
                  Design. Develop. Grow.
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
                  href="#hero" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#why-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playClick();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors inline-block py-1"
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
            <ul className="space-y-3 text-sm sm:text-base text-slate-200 font-medium">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:hello@mjdigitalstudio.com" className="hover:text-cyan-300 transition-colors">
                  hello@mjdigitalstudio.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/917305431802" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors font-bold text-emerald-400">
                  +91 73054 31802
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Puducherry, India</span>
              </li>
            </ul>

            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight mb-3">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  Something Amazing Together.
                </span>
              </h3>

              <a
                href="https://wa.me/917305431802?text=Hello%20MJ%20Digital%20Studio!%20Let's%20build%20something%20amazing%20together%20starting%20at%20Rs%20999."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playWaterSplash()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <span>Start Project (Rs 999)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Live IST indicator */}
            {istTime && (
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-mono pt-1">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>IST (India): {istTime}</span>
              </div>
            )}
          </div>

        </div>

        {/* Interactive 3D Emoji Soundboard Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Click 3D Smileys for Water Splash Sounds:</span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
            {FUN_EMOJIS.map((item) => {
              const isSelected = activeEmoji.char === item.char;
              const isBouncing = clickedEmoji === item.char;
              return (
                <button
                  key={item.char}
                  type="button"
                  onClick={() => handleEmojiClick(item)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 border transition-all text-xs sm:text-sm font-bold ${
                    isSelected
                      ? 'bg-cyan-400 text-slate-950 border-cyan-300 scale-105'
                      : 'bg-slate-900 border-slate-700 hover:border-cyan-400 text-slate-200'
                  } ${isBouncing ? 'animate-bounce' : ''}`}
                >
                  <span className="text-base sm:text-lg">{item.char}</span>
                  <span className="inline text-xs sm:text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium">
          <div>
            © 2026 MJ Digital Studio. All rights reserved. Handcrafted with React & Three.js.
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
