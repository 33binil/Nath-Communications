import {
  Smartphone,
  Laptop,
  Headphones,
  Radio,
  Watch,
  Camera,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { Key } from 'react';
import { QUICK_CATEGORIES } from '../data/mockData';

interface CategoryStripProps {
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
  isReady?: boolean;
  key?: Key;
}

export function CategoryStrip({
  activeCategory,
  onSelectCategory,
  isReady = true,
}: CategoryStripProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Watch':
        return <Watch className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'ArrowRight':
      default:
        return <ArrowRight className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-4 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Scrollable on mobile, flex grid on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: isReady ? 0.5 : 0, ease: 'easeOut' }}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 sm:grid sm:grid-cols-4 md:grid-cols-8"
        >
          {QUICK_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategory === cat.slug;
            return (
              <motion.button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                initial={{ opacity: 0, y: 12 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: isReady ? 0.55 + idx * 0.04 : 0 }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={`flex-shrink-0 flex flex-col items-center justify-center p-3 sm:py-3.5 sm:px-2 rounded-2xl border transition-colors duration-200 cursor-pointer min-w-[90px] sm:min-w-0 ${
                  isSelected
                    ? 'bg-red-50/80 border-red-500/50 text-red-600 shadow-sm'
                    : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200/70 text-slate-700 hover:text-slate-900'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-1.5 transition-transform duration-200 ${
                    isSelected
                      ? 'text-red-600'
                      : 'text-slate-700 group-hover:scale-110'
                  }`}
                >
                  {getIcon(cat.iconName)}
                </div>
                <span className="text-base font-semibold tracking-tight whitespace-nowrap">
                  {cat.name}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
