import { ShieldCheck } from 'lucide-react';
import { BRAND_PARTNERS } from '../data/mockData';

interface BrandPartnersProps {
  onSelectBrand?: (brandName: string) => void;
}

export function BrandPartners({ onSelectBrand }: BrandPartnersProps) {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Dark Card matching screenshot */}
          <div className="lg:col-span-4 rounded-3xl bg-[#0e1218] p-7 sm:p-9 text-white flex flex-col justify-center relative overflow-hidden shadow-lg border border-slate-900">
            <div className="space-y-2.5">
              <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-white leading-tight">
                Genuine Products <br />
                <span className="text-slate-100">Trusted Brands</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs">
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
                    <div className="flex items-center gap-1 text-slate-900 font-bold text-sm sm:text-base group-hover:scale-105 transition-transform">
                      <svg viewBox="0 0 170 170" className="w-4 h-4 fill-current">
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.99-6.3-9.79-11.26-21.2-14.88-34.22-3.61-13.01-5.42-25.27-5.42-36.78 0-14.88 3.86-27.18 11.59-36.91 7.72-9.72 17.51-14.67 29.35-14.86 4.35 0 9.4 1.16 15.15 3.49 5.75 2.33 9.4 3.55 10.96 3.66 1.34 0 5.16-1.33 11.46-3.99 6.3-2.66 11.68-3.79 16.14-3.39 12.01.66 21.6 5.22 28.77 13.68-10.45 6.31-15.58 15.17-15.38 26.58.2 8.92 3.65 16.47 10.36 22.65 6.7 6.18 14.68 9.58 23.94 10.2-2.35 6.89-5.18 14.07-8.49 21.56zM119.22 33.72c0-7.39 2.65-14.18 7.95-20.36 5.3-6.18 11.83-9.98 19.59-11.4 1.09 7.06-1.12 13.88-6.63 20.46-5.51 6.58-12.48 10.37-20.91 11.3z" />
                      </svg>
                    </div>
                  ) : brand.name === 'SAMSUNG' ? (
                    <span className="text-[#0c2340] font-black text-xs sm:text-sm tracking-wider group-hover:scale-105 transition-transform">
                      SAMSUNG
                    </span>
                  ) : brand.name === 'mi' ? (
                    <div className="bg-[#ff6700] text-white font-black text-xs px-2 py-0.5 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      mi
                    </div>
                  ) : brand.name === 'realme' ? (
                    <span className="text-slate-900 font-extrabold text-xs sm:text-sm tracking-tight lowercase group-hover:scale-105 transition-transform">
                      realme
                    </span>
                  ) : brand.name === 'ONEPLUS' ? (
                    <div className="flex items-center gap-1 text-[#eb0028] font-black text-[11px] sm:text-xs tracking-wider group-hover:scale-105 transition-transform">
                      <span className="border border-[#eb0028] px-1 py-0.5 rounded text-[10px]">1+</span>
                      <span>ONEPLUS</span>
                    </div>
                  ) : brand.name === 'hp' ? (
                    <div className="w-7 h-7 rounded-full bg-[#0096d6] text-white flex items-center justify-center font-serif italic font-bold text-xs group-hover:scale-105 transition-transform">
                      hp
                    </div>
                  ) : brand.name === 'DELL' ? (
                    <div className="w-8 h-8 rounded-full border-2 border-[#007db8] text-[#007db8] flex items-center justify-center font-black text-[10px] tracking-tight group-hover:scale-105 transition-transform">
                      DELL
                    </div>
                  ) : brand.name === 'ASUS' ? (
                    <span className="text-slate-900 font-black text-xs sm:text-sm tracking-widest group-hover:scale-105 transition-transform">
                      ASUS
                    </span>
                  ) : brand.name === 'boAt' ? (
                    <span className="text-[#e22d2d] font-black text-xs sm:text-sm tracking-tight group-hover:scale-105 transition-transform">
                      bo<span className="text-slate-900">A</span>t
                    </span>
                  ) : brand.name === 'JBL' ? (
                    <div className="bg-[#ff4e00] text-white font-black text-xs px-2.5 py-1 rounded-sm tracking-tighter group-hover:scale-105 transition-transform">
                      JBL
                    </div>
                  ) : brand.name === 'SONY' ? (
                    <span className="text-slate-950 font-serif font-black text-xs sm:text-sm tracking-widest group-hover:scale-105 transition-transform">
                      SONY
                    </span>
                  ) : brand.name === 'Canon' ? (
                    <span className="text-[#cc0000] font-serif font-bold text-xs sm:text-sm tracking-wide group-hover:scale-105 transition-transform">
                      Canon
                    </span>
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

