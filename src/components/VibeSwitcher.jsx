import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Volume2, 
  VolumeX, 
  Check 
} from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export const vibes = [
  {
    id: 'indigo',
    name: 'Electric Indigo',
    primary: '#4f46e5',
    glow: 'rgba(99, 102, 241, 0.08)',
    dotColor: '#4f46e5'
  },
  {
    id: 'emerald',
    name: 'Emerald Mint',
    primary: '#059669',
    glow: 'rgba(16, 185, 129, 0.08)',
    dotColor: '#059669'
  },
  {
    id: 'cyan',
    name: 'Ocean Cyan',
    primary: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.08)',
    dotColor: '#0891b2'
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    primary: '#7c3aed',
    glow: 'rgba(147, 51, 234, 0.08)',
    dotColor: '#7c3aed'
  }
];

export default function VibeSwitcher({ currentVibe, onSelectVibe }) {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleToggleSound = () => {
    const isNowOn = soundFx.toggleSound();
    setSoundEnabled(isNowOn);
  };

  const handleSelect = (vibe) => {
    onSelectVibe(vibe);
    soundFx.playChime();
    setIsOpen(false);
  };

  return (
    <aside aria-label="Audio and theme controls" className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
      {/* Sound FX Toggle Button */}
      <button
        onClick={handleToggleSound}
        className={`flex items-center justify-center w-11 h-11 rounded-full border shadow-lg transition-all duration-300 ${
          soundEnabled
            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-indigo-500/10'
            : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
        }`}
        title={soundEnabled ? 'Mute Interface Sound' : 'Enable Tactile Sound FX'}
        aria-label="Toggle Interface Audio Feedback"
      >
        {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      </button>

      {/* Palette / Theme Switcher Button */}
      <div className="relative">
        <button
          onClick={() => {
            soundFx.playClick();
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-indigo-600 text-xs font-bold shadow-lg hover:border-slate-300 transition-all"
          aria-label="Change Accent Color Palette"
        >
          <span
            className="w-3 h-3 rounded-full animate-pulse shadow-sm"
            style={{ backgroundColor: currentVibe.dotColor }}
          />
          <span className="hidden sm:inline">Palette: {currentVibe.name}</span>
          <Palette className="w-3.5 h-3.5 text-slate-500" />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 left-0 w-52 rounded-2xl bg-white border border-slate-200 p-2 shadow-2xl"
            >
              <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                Select Accent Palette
              </div>
              {vibes.map((v) => {
                const isActive = currentVibe.id === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => handleSelect(v)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-900 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-sm"
                        style={{ backgroundColor: v.dotColor }}
                      />
                      <span>{v.name}</span>
                    </div>
                    {isActive && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
