import { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { FEATURED_PRODUCTS, MAIN_CATEGORIES } from '../data/mockData';
import { ProductItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    let list = FEATURED_PRODUCTS;
    if (activeFilter !== 'all') {
      list = list.filter((p) => p.category === activeFilter);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, activeFilter]);

  if (!isOpen) return null;

  const quickTags = [
    { label: 'All', value: 'all' },
    { label: 'iPhone 16', value: 'mobiles' },
    { label: 'MacBook & Laptops', value: 'laptops' },
    { label: 'Audio & ANC', value: 'audio' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Cameras', value: 'cameras' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-600 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search phones, laptops, AirPods, Sony ANC, chargers..."
            className="w-full text-slate-900 placeholder:text-slate-400 font-medium text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-100 rounded-full text-slate-400"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Pills */}
        <div className="px-4 sm:px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {quickTags.map((tag) => (
            <button
              key={tag.value}
              onClick={() => setActiveFilter(tag.value)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === tag.value
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 p-2 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                      {product.brand}
                    </span>
                    {product.badge && (
                      <span className="text-[9px] font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                    <span className="font-extrabold text-slate-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="line-through text-slate-400">${product.originalPrice}</span>
                    )}
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <ShieldCheck className="w-3 h-3" /> Genuine
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-red-600 text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <p className="font-semibold text-slate-700">No matching products found</p>
              <p className="text-xs">Try searching for "iPhone", "MacBook", "Sony", or "Charger".</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500">
          Showing verified in-stock items at Nath Digital Hub Store
        </div>

      </div>
    </div>
  );
}
