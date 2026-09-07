import { ArrowRight, ShieldCheck, UserCheck, HeartHandshake, Star } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onLearnMoreClick: () => void;
  onOpenStoreModal: () => void;
}

export function HeroSection({
  onExploreClick,
  onLearnMoreClick,
  onOpenStoreModal,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow with red dash */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-slate-600 uppercase">
              <span className="w-5 h-[2px] bg-[#E02424] rounded-full" />
              <span>YOUR TRUSTED TECH PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]">
              Smarter <br />
              Technology <br />
              A Brighter <br />
              <span className="text-[#E02424]">Tomorrow.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
              Quality devices, genuine products and expert support — everything you need, all in one place.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Explore Products Button */}
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="inline-flex items-center gap-3 bg-[#E02424] hover:bg-[#C81E1E] active:bg-[#9B1C1C] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Explore Products</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Learn More Button */}
              <button
                id="hero-learn-more-btn"
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 transition-all duration-200 cursor-pointer group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 3 Trust Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-4">
              {/* Badge 1 */}
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E02424] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">Genuine Products</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-start gap-2">
                <UserCheck className="w-5 h-5 text-[#E02424] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Expert</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">Guidance</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-start gap-2">
                <HeartHandshake className="w-5 h-5 text-[#E02424] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Trusted</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">by Thousands</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Store Showroom Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-900 group">
              
              {/* Showroom Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop"
                  alt="Nath Digital Hub Retail Experience"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Storefront Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />

                {/* Showroom Signage Replica matching screenshot */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-lg">
                  <div className="w-7 h-7 rounded-xl bg-[#E02424] flex items-center justify-center text-white font-black text-sm">
                    N
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-tight leading-none">Nath Digital Hub</div>
                    <div className="text-slate-300 text-[8px] font-semibold tracking-wider uppercase mt-0.5">TECH FOR A BETTER TOMORROW</div>
                  </div>
                </div>

                {/* Department Marker on Glass Pillar */}
                <div className="absolute top-28 left-8 hidden sm:flex flex-col gap-1 text-[11px] text-slate-300 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10 font-medium">
                  <span>Devices</span>
                  <span>Accessories</span>
                  <span>Service</span>
                  <span>Support</span>
                </div>
              </div>

              {/* Floating Bottom Card: "Your One-Stop Tech Destination" */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-72 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-2xl space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 text-xs sm:text-[13px] leading-tight">
                    Your One-Stop <br />Tech Destination
                  </span>
                  <button
                    onClick={onOpenStoreModal}
                    aria-label="Visit Showroom"
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#E02424] text-slate-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Overlapping Avatars & Rating */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-slate-900 text-xs">4.8+</span>
                    <span className="block text-[9px] text-slate-500 font-medium leading-none">Customer Satisfaction</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

