import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_PARTNERS } from '../data/mockData';

interface BrandPartnersProps {
  onSelectBrand?: (brandName: string) => void;
}

const BRAND_LOGOS: Record<string, string> = {
  Apple: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
  SAMSUNG: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',
  mi: 'https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-Logo-2014.png',
  realme: 'https://1000logos.net/wp-content/uploads/2026/02/Realme-Logo-2020.png',
  ONEPLUS: 'https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo.png',
  hp: 'https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2012.png',
  DELL: 'https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png',
  ASUS: 'https://1000logos.net/wp-content/uploads/2016/10/Asus-Logo.png',
  boAt: 'https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339',
  JBL: 'https://1000logos.net/wp-content/uploads/2023/07/JBL-logo.png',
  SONY: 'https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png',
  Canon: 'https://1000logos.net/wp-content/uploads/2016/10/Canon-Logo.png',
};

export function BrandPartners({ onSelectBrand }: BrandPartnersProps) {
  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Dark Card matching screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-4 rounded-3xl bg-[#0e1218] p-6 sm:p-9 text-white flex flex-col justify-center relative overflow-hidden shadow-lg border border-slate-900"
          >
            <div className="space-y-2.5">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Genuine Products <br />
                <span className="text-slate-100">Trusted Brands</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xs">
                Wide range of top brands with warranty and assured quality.
              </p>
            </div>
          </motion.div>

          {/* Right Brand Logos Grid (3 cols on mobile, 3 on sm, 6 on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 bg-[#f8fafc] rounded-3xl p-3 sm:p-6 border border-slate-200/90 flex items-center justify-center"
          >
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3.5 lg:gap-4 w-full">
              {BRAND_PARTNERS.map((brand, idx) => {
                const logoUrl = BRAND_LOGOS[brand.name];
                return (
                  <motion.div
                    key={idx}
                    onClick={() => onSelectBrand?.(brand.name)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.035 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="h-12 sm:h-16 lg:h-20 bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-red-500/40 hover:shadow-md transition-shadow duration-200 flex items-center justify-center px-2 sm:px-3 cursor-pointer group select-none"
                    title={brand.name}
                  >
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt={brand.name}
                        className="h-5 sm:h-7 lg:h-9 w-auto max-w-[75%] sm:max-w-[80%] object-contain group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-slate-800 font-bold text-xs sm:text-sm">{brand.name}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

