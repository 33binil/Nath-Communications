import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_STATS } from '../data/mockData';

interface AboutSectionProps {
  onKnowMoreClick: () => void;
}

export function AboutSection({ onKnowMoreClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-10 sm:py-14 lg:py-18 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5"
          >
            {/* Eyebrow with red dash */}
            <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-[0.18em] text-slate-600 uppercase">
              <span className="w-5 h-[2px] bg-[#E02424] rounded-full" />
              <span>ABOUT Nath Communications</span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold text-slate-950 tracking-[-0.02em] leading-[1.12]">
              More Than Products <br />
              A Better Digital Life.
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-xl font-normal">
              At Nath Communications, we bring you the latest technology, genuine products and reliable support to make your digital life easier, smarter and more connected.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <motion.button
                id="about-know-more-btn"
                onClick={onKnowMoreClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#E02424] hover:bg-[#C81E1E] text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-full transition-colors duration-200 shadow-sm cursor-pointer group"
              >
                <span>Know More</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* 4 Stats Grid in single row matching mockup */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {ABOUT_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                  className="space-y-0.5"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-slate-500 font-medium leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Showroom Image with "Good Technology Better People" and red 'N' */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src="/nath_showroom.webp"
                  alt="Nath Communications Showroom Experience"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/30 to-black/20" />
              </div>

              {/* Glowing Signboard on Left Wall: "Good Technology Better People" */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-8 left-8 text-white font-bold text-2xl sm:text-3xl leading-tight tracking-tight drop-shadow-md"
              >
                <span>Good</span> <br />
                <span>Technology</span> <br />
                <span className="text-slate-200">Better People</span>
              </motion.div>

              {/* Logo on Right Wall */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute top-8 right-8"
              >
                <img
                  src="/nath_logo.png"
                  alt="Nath Communications"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

