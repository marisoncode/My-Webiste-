import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Clock, 
  Code2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function CaseStudyModal({ project, onClose, onSelectService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleStartSimilar = () => {
    soundFx.playClick();
    onClose();
    if (onSelectService) {
      onSelectService(project.categoryLabel);
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl z-10 text-slate-900"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-xl border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                Case Study Architecture
              </span>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Visual Header Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {project.title}
                  </h2>
                  <p className="text-sm text-indigo-200 font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-center p-2">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 font-display">
                  {project.stats.metric1.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  {project.stats.metric1.label}
                </div>
              </div>
              <div className="text-center p-2 border-x border-slate-200">
                <div className="text-xl sm:text-2xl font-black text-indigo-600 font-display">
                  {project.stats.metric2.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  {project.stats.metric2.label}
                </div>
              </div>
              <div className="text-center p-2">
                <div className="text-xl sm:text-2xl font-black text-cyan-600 font-display">
                  {project.stats.metric3.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  {project.stats.metric3.label}
                </div>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  The Business Challenge
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  MJ Digital Studio's Strategic Solution
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Deliverables & Interactive Features */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Key Engineered Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.liveFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-600" />
                Modern Architecture & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                Want similar conversion-driven results for your company?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/917305431802?text=Hi%20M%20Studio!%20I'm%20interested%20in%20a%20project%20like%20your%20case%20study."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp 7305431802</span>
                </a>
                <button
                  onClick={handleStartSimilar}
                  className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <span>Build a Similar Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
