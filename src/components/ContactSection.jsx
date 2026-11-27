import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  MessageCircle, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function ContactSection({ 
  prefilledService, 
  prefilledScope, 
  prefilledPackage,
  siteMode = 'studio'
}) {
  const isAcademy = siteMode === 'academy';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    service: isAcademy ? 'Frontend & JavaScript' : 'Website Design',
    description: ''
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: isAcademy ? 'Frontend & JavaScript' : 'Website Design'
    }));
  }, [isAcademy]);

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

  const servicesList = isAcademy
    ? [
        "Frontend & JavaScript",
        "React & MERN Stack",
        "Python Programming",
        "Generative AI"
      ]
    : [
        "Website Design",
        "Landing Page",
        "SEO Optimization",
        "Google Business Profile"
      ];

  const whatsappMessage = encodeURIComponent(
    isAcademy
      ? `Hello Hello World Studio! I'm interested in joining the ${formData.service} online coding class.`
      : `Hello Hello World Studio! I'm interested in discussing a website project for ${formData.businessName || 'my brand'}. Service: ${formData.service}. Let's build something extraordinary!`
  );

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 relative bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200/80 dark:border-zinc-800 overflow-hidden select-none transition-colors duration-300">
      
      {/* Subtle Ambient Floating Bubbles (Desktop only) */}
      <div className="hidden md:block absolute top-10 left-12 w-16 h-16 rounded-full border border-teal-400/30 bg-teal-400/10 backdrop-blur-xs animate-float-slow pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 right-10 w-24 h-24 rounded-full border border-teal-400/30 bg-teal-400/10 backdrop-blur-xs animate-float-delayed pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[#07292B] dark:text-[#25A727] text-xs font-bold uppercase tracking-wider shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#25A727]" />
            Contact Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.12] font-display"
          >
            Have an Idea? <br />
            <span className="text-[#19A12B]">
              Let's Make It Happen.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal"
          >
            {isAcademy
              ? 'Enquire about upcoming live online batches for Frontend, JavaScript, Python, React, MERN Stack, and Gen AI.'
              : 'Get in touch with Hello World Studio for your next website, SEO, or Google Business Profile project.'}
          </motion.p>

          <div className="pt-1 flex justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playWaterSplash()}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25A727] hover:bg-[#19A12B] text-white font-black text-xs uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all group"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat With Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 2-Column Split: Left = Contact Form, Right = Google Map Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side (6 cols): Contact Form */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] overflow-hidden shadow-sm transition-all duration-300 flex flex-col">
              {/* Matching Card Header Bar */}
              <div className="px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold text-[#07292B] dark:text-white">
                  {isAcademy ? 'Course Admission Enquiry' : 'Project Enquiry'}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-[#07292B] text-[#19A12B] dark:text-[#25A727] border border-teal-200 dark:border-[#0d4a4c]">
                  Replies in 2 hrs
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 dark:bg-[#07292B] text-[#25A727] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-950 dark:text-white font-display">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Thank you! Hello World Studio will reply to <span className="font-bold text-[#25A727]">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#07292B] hover:bg-[#25A727] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Your Name & Your Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#07292B] dark:text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Karthik"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-[#25A727] focus:ring-2 focus:ring-[#25A727]/20 focus:bg-white dark:focus:bg-zinc-950 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#07292B] dark:text-zinc-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-[#25A727] focus:ring-2 focus:ring-[#25A727]/20 focus:bg-white dark:focus:bg-zinc-950 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Your Business Name & Select Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#07292B] dark:text-zinc-300 mb-1.5">
                        {isAcademy ? 'Preferred Batch' : 'Business Name'}
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        placeholder={isAcademy ? 'Weekday / Weekend' : 'Your Shop / Brand'}
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-[#25A727] focus:ring-2 focus:ring-[#25A727]/20 focus:bg-white dark:focus:bg-zinc-950 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#07292B] dark:text-zinc-300 mb-1.5">
                        {isAcademy ? 'Select Course' : 'Service Needed'}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-sm focus:outline-none focus:border-[#25A727] focus:ring-2 focus:ring-[#25A727]/20 focus:bg-white dark:focus:bg-zinc-950 transition-all cursor-pointer"
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
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#07292B] dark:text-zinc-300 mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      required
                      placeholder="Tell us what you want to build..."
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-[#25A727] focus:ring-2 focus:ring-[#25A727]/20 focus:bg-white dark:focus:bg-zinc-950 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#07292B] hover:bg-[#25A727] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 group transition-all duration-200 active:scale-98"
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
          </div>

          {/* Right Side (6 cols): Google Map Location */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-[#25A727] overflow-hidden shadow-sm transition-all duration-300 flex flex-col">
              <div className="px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#07292B] dark:text-white">
                  <MapPin className="w-4 h-4 text-[#25A727] shrink-0" />
                  <span>Hello World Studio • Location</span>
                </div>
                <a
                  href="https://www.google.com/maps?q=12.03294690852925,79.84921239899458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#25A727] hover:underline"
                >
                  Open in Maps →
                </a>
              </div>
              <div className="flex-1 min-h-[320px] sm:min-h-[380px]">
                <iframe
                  src="https://maps.google.com/maps?q=12.03294690852925,79.84921239899458&z=16&output=embed"
                  title="Hello World Studio Location Map"
                  className="w-full h-full min-h-[320px] sm:min-h-[380px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
