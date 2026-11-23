import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  portfolioProjects, 
  portfolioCategories 
} from '../data/portfolioData';
import { 
  Sparkles, 
  ArrowUpRight, 
  TrendingUp, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';
import TiltCard from './TiltCard';
import { soundFx } from '../utils/soundEffects';

export default function PortfolioSection({ onOpenCaseStudy }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    soundFx.playPop();
  };

  const handleOpenCase = (project) => {
    soundFx.playClick();
    onOpenCaseStudy(project);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-white overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 radial-glow-indigo opacity-30 pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 radial-glow-cyan opacity-25 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Our Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] font-display"
          >
            Showcasing Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
              Turned Into Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Explore our portfolio of high-converting business websites, artisanal digital experiences, and modern platforms starting at ₹999.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <TiltCard
                  tiltDegree={8}
                  className="group rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl shadow-slate-200/50"
                >
                  {/* Visual Preview / Screenshot Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    {/* Category Pill Over Image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-slate-800 shadow-sm">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Interactive Quick View Trigger Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/30 backdrop-blur-[2px]">
                      <button
                        onClick={() => handleOpenCase(project)}
                        className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5 text-indigo-600" />
                        View Case Study
                      </button>
                    </div>

                    {/* Key Result Highlight Badge */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500 text-white font-bold backdrop-blur-md shadow-sm">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.stats.metric1.value} {project.stats.metric1.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Information */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-indigo-600 font-semibold mt-1 mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-500">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Bottom Action */}
                      <button
                        onClick={() => handleOpenCase(project)}
                        className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Explore Case Study & Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Looking for something tailored to your exact industry or brand style?
          </p>
          <a
            href="https://wa.me/917305431802?text=Hello%20MJ%20Digital%20Studio!%20Can%20you%20share%20a%20sample%20or%20mockup%20for%20my%20business%20type%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-4 transition-colors"
          >
            <span>Request a Custom Concept On WhatsApp (7305431802)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
