import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MAIN_CATEGORIES } from '../data/mockData';
import { CategoryItem } from '../types';

interface ShopByCategoryProps {
  onSelectCategory: (category: CategoryItem) => void;
  onViewAllClick: () => void;
}

export function ShopByCategory({
  onSelectCategory,
  onViewAllClick,
}: ShopByCategoryProps) {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-base font-bold tracking-widest text-slate-700 uppercase">
              <span className="w-5 h-0.5 bg-red-600 rounded-full" />
              <span>Featured Categories</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Shop by Category
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Explore our wide range of products across top brands.
            </p>
          </div>

          <div>
            <motion.button
              id="view-all-categories-btn"
              onClick={onViewAllClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-800 text-base sm:text-lg font-semibold px-5 py-2.5 rounded-full border border-slate-300 transition-colors duration-200 shadow-sm cursor-pointer group"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Categories Grid - 6 Items matching the screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {MAIN_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-red-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with Soft Background */}
              <div className="aspect-square w-full rounded-xl bg-slate-50/80 flex items-center justify-center p-3 mb-4 overflow-hidden relative group-hover:bg-red-50/30 transition-colors">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {category.badge && (
                  <span className="absolute top-2 left-2 text-sm font-bold bg-slate-900/80 text-white px-2 py-0.5 rounded-full backdrop-blur-xs">
                    {category.badge}
                  </span>
                )}
              </div>

              {/* Title & Arrow */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight group-hover:text-red-600 transition-colors min-h-[2.5rem] flex items-center">
                  {category.name}
                </h3>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm sm:text-base text-slate-500 font-medium">
                    {category.itemCount}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-red-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
