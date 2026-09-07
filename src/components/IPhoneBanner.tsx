import { ArrowRight } from 'lucide-react';

interface IPhoneBannerProps {
  onExploreIPhone: () => void;
}

export function IPhoneBanner({ onExploreIPhone }: IPhoneBannerProps) {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#090b10] overflow-hidden text-white shadow-xl border border-slate-900">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left: iPhone 16 Titanium Visual */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative group max-w-[280px] sm:max-w-[320px]">
                <img
                  src="/Apple_iPhone_17_Pro-max.png"
                  alt="iPhone 16 Pro"
                  className="rounded-2xl object-cover aspect-[4/3] sm:aspect-square w-full h-auto shadow-2xl group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Middle: Headline & CTA */}
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-[0.16em] text-red-500 uppercase">
                <span className="w-4 h-[2px] bg-red-500 rounded-full" />
                <span>LATEST ARRIVALS</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                iPhone 17 Series
              </h2>

              <p className="text-slate-300 text-lg sm:text-xl">
                Built for what's next.
              </p>

              <div className="pt-2">
                <button
                  id="banner-iphone-explore-btn"
                  onClick={onExploreIPhone}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-950 font-semibold px-5 py-2.5 rounded-full text-base sm:text-lg transition-all duration-200 shadow-md cursor-pointer group"
                >
                  <span>Explore Now</span>
                  <span className="w-4 h-4 rounded-full bg-slate-950 text-white flex items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right: 3 Value points matching screenshot */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center space-y-3 text-center lg:text-left">
              <div className="text-lg sm:text-xl font-semibold text-slate-200">
                Bigger Possibilities
              </div>
              <div className="text-lg sm:text-xl font-semibold text-slate-200">
                Smarter Performance
              </div>
              <div className="text-lg sm:text-xl font-semibold text-slate-200">
                Stunning Design
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

