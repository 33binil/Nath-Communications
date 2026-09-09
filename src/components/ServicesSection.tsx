import { Wrench, Settings, ShieldCheck, Store, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { STORE_SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onViewAllServices: () => void;
}

export function ServicesSection({
  onSelectService,
  onViewAllServices,
}: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#E02424]" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-[#E02424]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#E02424]" />;
      case 'Store':
      default:
        return <Store className="w-5 h-5 text-[#E02424]" />;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-14 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8"
        >
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-[0.18em] text-slate-600 uppercase">
              <span className="w-4 h-[2px] bg-[#E02424] rounded-full" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-slate-950 tracking-tight">
              More Support, Less Worry
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              We're here beyond the sale.
            </p>
          </div>

          <div>
            <motion.button
              id="view-all-services-btn"
              onClick={onViewAllServices}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-base sm:text-lg font-semibold px-4 py-2 rounded-full border border-slate-300 transition-colors duration-200 cursor-pointer group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* 4 Service Cards matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STORE_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              onClick={() => onSelectService(service)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.09, ease: 'easeOut' }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#f8fafc] hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-red-500/40 hover:shadow-md transition-all duration-200 flex flex-col justify-start cursor-pointer group"
            >
              {/* Red outline service icon in small white container */}
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 transition-all shadow-xs group-hover:scale-110">
                {getIcon(service.iconName)}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-1.5 group-hover:text-[#E02424] transition-colors">
                {service.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

