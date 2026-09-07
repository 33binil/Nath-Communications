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
import { QUICK_CATEGORIES } from '../data/mockData';

interface CategoryStripProps {
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export function CategoryStrip({
  activeCategory,
  onSelectCategory,
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
    <section className="py-4 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrollable on mobile, flex grid on desktop */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 sm:grid sm:grid-cols-4 md:grid-cols-8">
          {QUICK_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`flex-shrink-0 flex flex-col items-center justify-center p-3 sm:py-3.5 sm:px-2 rounded-2xl border transition-all duration-200 cursor-pointer min-w-[90px] sm:min-w-0 ${
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
                <span className="text-xs font-semibold tracking-tight whitespace-nowrap">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
