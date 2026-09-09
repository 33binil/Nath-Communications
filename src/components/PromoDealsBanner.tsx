import { ArrowRight, Tag, ShieldCheck, RefreshCw, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

interface PromoDealsBannerProps {
  onViewOffers: () => void;
}

export function PromoDealsBanner({ onViewOffers }: PromoDealsBannerProps) {
  const perks = [
    { title: 'Best Prices', icon: <Tag className="w-4 h-4 text-slate-300" /> },
    { title: 'Official Warranty', icon: <ShieldCheck className="w-4 h-4 text-slate-300" /> },
    { title: 'Exchange Offers', icon: <RefreshCw className="w-4 h-4 text-slate-300" /> },
    { title: 'Easy EMI Options', icon: <CreditCard className="w-4 h-4 text-slate-300" /> },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative rounded-3xl bg-[#090b10] overflow-hidden text-white shadow-xl border border-slate-900"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-4 space-y-3.5 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-[0.16em] text-red-500 uppercase">
                <span className="w-4 h-[2px] bg-red-500 rounded-full" />
                <span>LIMITED TIME</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Great Tech <br />
                Great Deals
              </h2>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                Exclusive offers on your favourite gadgets.
              </p>

              <div className="pt-2">
                <motion.button
                  id="promo-view-offers-btn"
                  onClick={onViewOffers}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-950 font-semibold px-5 py-2.5 rounded-full text-base sm:text-lg transition-colors duration-200 shadow-md cursor-pointer group"
                >
                  <span>View Offers</span>
                  <span className="w-4 h-4 rounded-full bg-slate-950 text-white flex items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Middle: Gadget Lineup Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group w-full max-w-md">
                <div className="rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
                  <img
                    src="/gadgets.png"
                    alt="Gadget Lineup Deals"
                    className="w-full h-full object-contain rounded-2xl group-hover:scale-103 transition-transform duration-500 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: 4 Outline Value Perks matching screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8 space-y-4"
            >
              {perks.map((perk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.35 + idx * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full border border-slate-700/80 flex items-center justify-center flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div className="font-semibold text-slate-200 text-lg sm:text-xl">
                    {perk.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

