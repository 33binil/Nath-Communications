import { useState, useEffect } from 'react';
import { MessageCircle, MapPin, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryStrip } from './components/CategoryStrip';
import { IPhoneBanner } from './components/IPhoneBanner';
import { AboutSection } from './components/AboutSection';
import { ShopByCategory } from './components/ShopByCategory';
import { BrandPartners } from './components/BrandPartners';
import { ServicesSection } from './components/ServicesSection';
import { PromoDealsBanner } from './components/PromoDealsBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { StoreModal } from './components/StoreModal';
import { ProductModal } from './components/ProductModal';
import { PolicyModal } from './components/PolicyModal';
import { ContactModal } from './components/ContactModal';
import { LoadingScreen } from './components/LoadingScreen';
import { ServiceItem, ProductItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isLoadingScreenActive, setIsLoadingScreenActive] = useState(true);
  const [contactDefaultTopic, setContactDefaultTopic] = useState('General Tech Inquiry');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'faq' | 'warranty' | 'track' | null>(null);

  // Navbar always highlights Home
  useEffect(() => {
    setActiveSection('home');
  }, []);

  const handleSelectQuickCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    if (slug === 'all') {
      const el = document.getElementById('products');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsComingSoonOpen(true);
    }
  };

  const handleSelectCategoryCard = () => {
    setIsComingSoonOpen(true);
  };

  const handleSelectBrand = () => {
    setIsComingSoonOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setContactDefaultTopic(`Service Support: ${service.title}`);
    setIsContactModalOpen(true);
  };

  const handleExploreIPhone = () => {
    setIsComingSoonOpen(true);
  };

  const handleViewOffers = () => {
    setIsComingSoonOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Loading Screen Overlay / Initial View */}
      <AnimatePresence mode="wait">
        {isLoadingScreenActive && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 overflow-hidden bg-[#fcfcfd]"
          >
            <LoadingScreen
              onComplete={() => setIsLoadingScreenActive(false)}
              duration={2000}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenContactModal={() => {
          setContactDefaultTopic('General Inquiry');
          setIsContactModalOpen(true);
        }}
        onComingSoon={() => setIsComingSoonOpen(true)}
        onOpenLoadingPage={() => setIsLoadingScreenActive(true)}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('products')}
          onLearnMoreClick={() => scrollToSection('about')}
          onOpenStoreModal={() => setIsStoreModalOpen(true)}
        />

        {/* 2. Horizontal Quick Category Icon Strip */}
        <CategoryStrip
          activeCategory={selectedCategorySlug}
          onSelectCategory={handleSelectQuickCategory}
        />

        {/* 3. iPhone 16 Series Promotional Banner */}
        <IPhoneBanner onExploreIPhone={handleExploreIPhone} />

        {/* 4. About Section with Stats and Showroom visual */}
        <AboutSection onKnowMoreClick={() => scrollToSection('services')} />

        {/* 5. Shop by Category (6 Visual Cards) */}
        <ShopByCategory
          onSelectCategory={handleSelectCategoryCard}
          onViewAllClick={() => setIsSearchOpen(true)}
        />

        {/* 6. Genuine Products & Trusted Brands Partner Grid */}
        <BrandPartners onSelectBrand={handleSelectBrand} />

        {/* 7. Services Section ("More Support, Less Worry") */}
        <ServicesSection
          onSelectService={handleSelectService}
          onViewAllServices={() => scrollToSection('services')}
        />

        {/* 8. Great Tech Great Deals Limited Time Banner */}
        <PromoDealsBanner onViewOffers={handleViewOffers} />

        {/* 9. Testimonials Section ("Trusted by Tech Lovers") */}
        <TestimonialsSection />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenContactModal={() => {
          setContactDefaultTopic('General Inquiry');
          setIsContactModalOpen(true);
        }}
        onOpenPolicyModal={(type) => setPolicyModalType(type)}
      />

      {/* Floating Quick Action Widget for WhatsApp, Showroom & Loading Page */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          onClick={() => setIsLoadingScreenActive(true)}
          className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-full shadow-lg backdrop-blur-md border border-slate-200 transition-all hover:scale-105 cursor-pointer"
          title="Preview Loading Screen UI"
        >
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span>Loading Screen UI</span>
        </button>

        <button
          onClick={() => setIsStoreModalOpen(true)}
          className="hidden sm:inline-flex items-center gap-2 bg-slate-900/90 hover:bg-black text-white text-sm font-bold py-2.5 px-4 rounded-full shadow-lg backdrop-blur-md border border-slate-700 transition-all hover:scale-105 cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          <span>Showroom Directions</span>
        </button>

        <a
          href="https://wa.me/919845012345?text=Hello%20Nath%20Digital%20Hub!%20I%20would%20like%20to%20inquire%20about%20gadget%20availability."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 cursor-pointer group"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        </a>
      </div>

      {/* Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      <StoreModal
        isOpen={isStoreModalOpen}
        onClose={() => setIsStoreModalOpen(false)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenStoreModal={() => {
          setSelectedProduct(null);
          setIsStoreModalOpen(true);
        }}
      />

      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultTopic={contactDefaultTopic}
      />

      {/* Coming Soon Overlay */}
      {isComingSoonOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden p-8">
            <button
              onClick={() => setIsComingSoonOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-3xl font-black text-amber-600">
                !
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Coming Soon
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-xs mx-auto">
                This section is under construction. Stay tuned for exciting updates!
              </p>
              <button
                onClick={() => setIsComingSoonOpen(false)}
                className="mt-3 inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white font-semibold text-base px-6 py-3 rounded-full transition-all cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
