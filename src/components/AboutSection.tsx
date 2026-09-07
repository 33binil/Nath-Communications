import { ArrowRight } from 'lucide-react';
import { ABOUT_STATS } from '../data/mockData';

interface AboutSectionProps {
  onKnowMoreClick: () => void;
}

export function AboutSection({ onKnowMoreClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-10 sm:py-14 lg:py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow with red dash */}
            <div className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-slate-600 uppercase">
              <span className="w-5 h-[2px] bg-[#E02424] rounded-full" />
              <span>ABOUT NATH DIGITAL HUB</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 tracking-[-0.02em] leading-[1.12]">
              More Than Products <br />
              A Better Digital Life.
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              At Nath Digital Hub, we bring you the latest technology, genuine products and reliable support to make your digital life easier, smarter and more connected.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <button
                id="about-know-more-btn"
                onClick={onKnowMoreClick}
                className="inline-flex items-center gap-3 bg-[#E02424] hover:bg-[#C81E1E] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer group"
              >
                <span>Know More</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* 4 Stats Grid in single row matching mockup */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {ABOUT_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Showroom Image with "Good Technology Better People" and red 'N' */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Nath Digital Hub Showroom Experience"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
              </div>

              {/* Glowing Signboard on Left Wall: "Good Technology Better People" */}
              <div className="absolute top-8 left-8 text-white font-bold text-lg sm:text-xl leading-tight tracking-tight drop-shadow-md">
                <span>Good</span> <br />
                <span>Technology</span> <br />
                <span className="text-slate-200">Better People</span>
              </div>

              {/* Glowing Red 'N' on Right Wall */}
              <div className="absolute top-8 right-8">
                <div className="w-10 h-10 rounded-xl bg-[#E02424]/90 backdrop-blur-md flex items-center justify-center text-white font-black text-xl shadow-lg border border-red-400/30">
                  N
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

