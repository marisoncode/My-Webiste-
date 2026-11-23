import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Send, 
  MessageCircle, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import LaunchingRocket from './LaunchingRocket';
import { soundFx } from '../utils/soundEffects';

export default function ContactSection({ 
  prefilledService, 
  prefilledScope, 
  prefilledPackage 
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    service: 'Website Design',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // User's provided WhatsApp number
  const WHATSAPP_NUMBER = "917305431802";
  const FORMATTED_PHONE = "+91 73054 31802";

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({
        ...prev,
        description: `Project Scope Details:\n${prefilledScope}\n\nAdditional notes: `
      }));
    }
  }, [prefilledScope]);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData(prev => ({
        ...prev,
        service: `${prefilledPackage.name} (${prefilledPackage.price})`
      }));
    }
  }, [prefilledPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playClick();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundFx.playChime();

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback
      }
    }, 800);
  };

  // E-commerce removed as requested by user!
  const servicesList = [
    "Website Design",
    "Web Development",
    "Responsive Web Design",
    "UI/UX & Interactive Design",
    "SEO Optimization",
    "Website Redesign",
    "Landing Page Development",
    "Website Maintenance & Speed Tuning"
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello MJ Digital Studio! I'm interested in discussing a website project for ${formData.businessName || 'my brand'}. Service: ${formData.service}. Let's build something extraordinary!`
  );

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe]/50 to-[#03102b] overflow-hidden select-none">
      
      {/* Ambient Celestial Light & Floating Water Bubbles from the image */}
      <div className="absolute top-10 left-12 w-16 h-16 rounded-full border border-cyan-400/50 bg-cyan-400/15 backdrop-blur-xs animate-float-slow shadow-[0_0_20px_rgba(0,210,255,0.3)] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-blue-400/40 bg-blue-400/15 backdrop-blur-xs animate-float-delayed shadow-[0_0_25px_rgba(59,130,246,0.25)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full border border-cyan-300/60 bg-cyan-300/20 animate-float-slow pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* 3-Column / Dual-Column Layout with Launching Rocket matching the image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (4 cols): Headline, Subtitle & WhatsApp CTA */}
          <div className="lg:col-span-4 text-left space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              Contact Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.12] font-display"
            >
              Have an Idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600">
                Let's Make It Happen.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-slate-600 leading-relaxed font-normal"
            >
              Get in touch with MJ Digital Studio for your next project or consultation. Handcrafted starting at just ₹999.
            </motion.p>

            {/* Direct WhatsApp Action Button from the image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playWaterSplash()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Chat With Us on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-3 text-xs text-slate-500 font-medium">
                Or fill out the form • WhatsApp: <strong className="text-slate-800">{FORMATTED_PHONE}</strong>
              </div>
            </motion.div>
          </div>

          {/* Center Column (5 cols): Frosted Glass Form matching the image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-white/95 border-2 border-cyan-100/90 hover:border-cyan-400 p-6 sm:p-8 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl transition-all duration-300">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 font-display">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you! MJ Digital Studio will reply to <span className="font-bold text-cyan-700">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Your Name & Your Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500 focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500 focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Row 2: Your Business Name & Select Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500 focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-500 focus:bg-white transition-all shadow-inner cursor-pointer"
                      >
                        {servicesList.map((srv, i) => (
                          <option key={i} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Tell us about your project... */}
                  <div>
                    <textarea
                      name="description"
                      rows={3}
                      required
                      placeholder="Tell us about your project..."
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500 focus:bg-white transition-all resize-none shadow-inner"
                    />
                  </div>

                  {/* Submit Button: Send Message -> */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group transition-all duration-200 active:scale-98"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column (3 cols): Spectacular 3D Launching Rocket from the image */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <LaunchingRocket />
          </div>

        </div>

      </div>
    </section>
  );
}
