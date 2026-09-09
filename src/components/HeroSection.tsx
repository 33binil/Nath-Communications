import { ArrowRight, ShieldCheck, UserCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import type { Key } from 'react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onLearnMoreClick: () => void;
  onOpenStoreModal: () => void;
  isReady?: boolean;
  key?: Key;
}

export function HeroSection({
  onExploreClick,
  onLearnMoreClick,
  onOpenStoreModal,
  isReady = true,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Eyebrow with red dash */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: isReady ? 0.1 : 0 }}
              className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-[0.18em] text-slate-600 uppercase"
            >
              <span className="w-5 h-[2px] bg-[#E02424] rounded-full" />
              <span>YOUR TRUSTED TECH PARTNER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: isReady ? 0.2 : 0, ease: 'easeOut' }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]"
            >
              Smarter <br />
              Technology <br />
              A Brighter <br />
              <span className="text-[#E02424]">Tomorrow.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: isReady ? 0.35 : 0 }}
              className="text-slate-600 text-lg sm:text-xl max-w-xl leading-relaxed font-normal"
            >
              Quality devices, genuine products and expert support — everything you need, all in one place.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: isReady ? 0.45 : 0 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              {/* Explore Products Button */}
              <motion.button
                id="hero-explore-btn"
                onClick={onExploreClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#E02424] hover:bg-[#C81E1E] active:bg-[#9B1C1C] text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Explore Products</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>

              {/* Learn More Button */}
              <motion.button
                id="hero-learn-more-btn"
                onClick={onLearnMoreClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold text-base sm:text-lg px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 transition-colors duration-200 cursor-pointer group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </motion.div>

            {/* 3 Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: isReady ? 0.55 : 0 }}
              className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-4"
            >
              {/* Badge 1 */}
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E02424] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-base sm:text-lg leading-tight">100%</div>
                  <div className="text-sm sm:text-base text-slate-500 leading-tight">Genuine Products</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-start gap-2">
                <UserCheck className="w-5 h-5 text-[#E02424] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-base sm:text-lg leading-tight">Expert</div>
                  <div className="text-sm sm:text-base text-slate-500 leading-tight">Guidance</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-start gap-2">
                <HeartHandshake className="w-5 h-5 text-[#E02424] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-base sm:text-lg leading-tight">Trusted</div>
                  <div className="text-sm sm:text-base text-slate-500 leading-tight">by Thousands</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Store Showroom Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={isReady ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.98 }}
            transition={{ duration: 0.8, delay: isReady ? 0.25 : 0, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-slate-700 group shadow-xl">
              
              {/* Showroom Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full overflow-hidden">
                <img
                  src="/nath_showroom.png"
                  alt="Nath Communications Retail Experience"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Storefront Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
                {/* Left White Fade Overlay */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
              </div>

              {/* Floating Bottom Card: "Your One-Stop Tech Destination" */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.6, delay: isReady ? 0.55 : 0 }}
                className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-72 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl space-y-4"
              >
                {/* Red Accent Line */}
                <div className="w-8 h-0.5 bg-[#E02424] rounded-full" />

                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-slate-900 text-lg leading-snug">
                    Your One-Stop <br />Tech Destination
                  </span>
                  <button
                    onClick={onOpenStoreModal}
                    aria-label="Visit Showroom"
                    className="w-11 h-11 rounded-full bg-slate-100 hover:bg-[#E02424] text-slate-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Overlapping Avatars & Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 text-xl leading-none">4.8+</span>
                    <span className="block text-xs text-slate-500 font-medium mt-0.5">Customer Satisfaction</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

