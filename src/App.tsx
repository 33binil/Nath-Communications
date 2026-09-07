import { useState, useEffect } from 'react';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
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
import { FEATURED_PRODUCTS, MAIN_CATEGORIES } from './data/mockData';
import { CategoryItem, ProductItem, ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactDefaultTopic, setContactDefaultTopic] = useState('General Tech Inquiry');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'faq' | 'warranty' | 'track' | null>(null);

  // Track scroll position to highlight active navbar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectQuickCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    if (slug === 'all') {
      const el = document.getElementById('products');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Find matching products or open search filtered by this category
      const matched = FEATURED_PRODUCTS.find((p) => p.category === slug);
      if (matched) {
        setSelectedProduct(matched);
      } else {
        setIsSearchOpen(true);
      }
    }
  };

  const handleSelectCategoryCard = (category: CategoryItem) => {
    const matched = FEATURED_PRODUCTS.find((p) => p.category === category.slug);
    if (matched) {
      setSelectedProduct(matched);
    } else {
      setIsSearchOpen(true);
    }
  };

  const handleSelectBrand = (brandName: string) => {
    const matched = FEATURED_PRODUCTS.find((p) => p.brand.toLowerCase() === brandName.toLowerCase());
    if (matched) {
      setSelectedProduct(matched);
    } else {
      setIsSearchOpen(true);
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setContactDefaultTopic(`Service Support: ${service.title}`);
    setIsContactModalOpen(true);
  };

  const handleExploreIPhone = () => {
    const iphone = FEATURED_PRODUCTS.find((p) => p.id === 'p-iphone16');
    if (iphone) {
      setSelectedProduct(iphone);
    } else {
      setIsSearchOpen(true);
    }
  };

  const handleViewOffers = () => {
    setIsSearchOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenContactModal={() => {
          setContactDefaultTopic('General Inquiry');
          setIsContactModalOpen(true);
        }}
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

      {/* Floating Quick Action Widget for WhatsApp & Showroom */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          onClick={() => setIsStoreModalOpen(true)}
          className="hidden sm:inline-flex items-center gap-2 bg-slate-900/90 hover:bg-black text-white text-xs font-bold py-2.5 px-4 rounded-full shadow-lg backdrop-blur-md border border-slate-700 transition-all hover:scale-105 cursor-pointer"
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
    </div>
  );
}
