import { ShieldCheck } from 'lucide-react';
import { BRAND_PARTNERS } from '../data/mockData';

interface BrandPartnersProps {
  onSelectBrand?: (brandName: string) => void;
}

export function BrandPartners({ onSelectBrand }: BrandPartnersProps) {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Dark Card matching screenshot */}
          <div className="lg:col-span-4 rounded-3xl bg-[#0e1218] p-7 sm:p-9 text-white flex flex-col justify-center relative overflow-hidden shadow-lg border border-slate-900">
            <div className="space-y-2.5">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Genuine Products <br />
                <span className="text-slate-100">Trusted Brands</span>
              </h3>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xs">
                Wide range of top brands with warranty and assured quality.
              </p>
            </div>
          </div>

          {/* Right Brand Logos Grid (2 rows x 6 cols on lg) */}
          <div className="lg:col-span-8 bg-[#f8fafc] rounded-3xl p-4 sm:p-6 border border-slate-200/90 flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
              {BRAND_PARTNERS.map((brand, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectBrand?.(brand.name)}
                  className="h-16 sm:h-20 bg-white rounded-2xl border border-slate-200 hover:border-red-500/40 hover:shadow-md transition-all duration-200 flex items-center justify-center px-3 cursor-pointer group select-none"
                >
                  {/* Brand Typography Styles */}
                  {brand.name === 'Apple' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                      alt="Apple"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'SAMSUNG' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png"
                      alt="SAMSUNG"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'mi' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-Logo-2014.png"
                      alt="Xiaomi"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'realme' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2026/02/Realme-Logo-2020.png"
                      alt="realme"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'ONEPLUS' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo.png"
                      alt="ONEPLUS"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'hp' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2012.png"
                      alt="HP"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'DELL' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png"
                      alt="DELL"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'ASUS' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2016/10/Asus-Logo.png"
                      alt="ASUS"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'boAt' ? (
                    <img
                      src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339"
                      alt="boAt"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'JBL' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2023/07/JBL-logo.png"
                      alt="JBL"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'SONY' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png"
                      alt="SONY"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : brand.name === 'Canon' ? (
                    <img
                      src="https://1000logos.net/wp-content/uploads/2016/10/Canon-Logo.png"
                      alt="Canon"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-slate-800 font-bold text-xs">{brand.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

