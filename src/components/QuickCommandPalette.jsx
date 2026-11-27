import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Search,
  X,
  Sun,
  Moon,
  HelpCircle,
  MessageCircle,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function QuickCommandPalette({ isOpen, onClose, darkMode, onToggleDark, onNavigate }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate('__open_palette__');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  const actions = [
    {
      label: 'Go to Services (4 Core Offerings)',
      tag: 'Section',
      action: () => { onNavigate('home', '#services'); onClose(); }
    },
    {
      label: 'Go to Why Choose Us (Impact Cards)',
      tag: 'Section',
      action: () => { onNavigate('home', '#why-us'); onClose(); }
    },
    {
      label: 'Go to 4-Step Process',
      tag: 'Section',
      action: () => { onNavigate('home', '#process'); onClose(); }
    },
    {
      label: 'Go to Client Reviews',
      tag: 'Section',
      action: () => { onNavigate('home', '#testimonials'); onClose(); }
    },
    {
      label: 'Open Dedicated FAQ Page',
      tag: 'Page',
      icon: HelpCircle,
      action: () => { onNavigate('faq'); onClose(); }
    },
    {
      label: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      tag: 'Theme',
      icon: darkMode ? Sun : Moon,
      action: () => { onToggleDark(); onClose(); }
    },
    {
      label: copied ? 'Copied +91 73054 31802!' : 'Copy Studio WhatsApp Number (+91 73054 31802)',
      tag: 'Copy',
      icon: copied ? Check : Copy,
      action: () => {
        navigator.clipboard?.writeText('+91 73054 31802');
        setCopied(true);
        soundFx.playChime();
        setTimeout(() => setCopied(false), 1800);
      }
    },
    {
      label: 'Start a Project on WhatsApp (Starts at Rs 999)',
      tag: 'External',
      icon: MessageCircle,
      action: () => {
        window.open('https://wa.me/917305431802?text=Hi%20MJ%20Digital%20Studio!%20I%20would%20like%20to%20start%20a%20project.', '_blank', 'noopener,noreferrer');
        onClose();
      }
    }
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) || a.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-24 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
              <Search className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to section, toggle dark mode, or copy contact..."
                className="w-full bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                aria-label="Close quick menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500">No matching actions found.</div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon || ArrowRight;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        soundFx.playClick();
                        item.action();
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span>{item.label}</span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                        {item.tag}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
