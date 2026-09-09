import { useState, useEffect, MouseEvent } from 'react';
import { Search, ArrowRight, Menu, X, PhoneCall, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenStoreModal: () => void;
  onOpenContactModal: () => void;
  onComingSoon: () => void;
  onOpenLoadingPage?: () => void;
  activeSection: string;
}

export function Navbar({
  onOpenSearch,
  onOpenStoreModal,
  onOpenContactModal,
  onComingSoon,
  onOpenLoadingPage,
  activeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href !== '#home') {
      onComingSoon();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-red-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Loading Page Preview Button */}
            {onOpenLoadingPage && (
              <button
                id="navbar-loading-preview-btn"
                onClick={onOpenLoadingPage}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200/80 rounded-full transition-colors cursor-pointer"
                title="View original Loading Page UI"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>Loading Screen UI</span>
              </button>
            )}

            {/* Search Icon Button */}
            <button
              id="navbar-search-btn"
              onClick={onComingSoon}
              aria-label="Search tech products and accessories"
              className="p-2.5 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer border border-slate-200"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Visit Store Button */}
            <button
              id="navbar-visit-store-btn"
              onClick={onOpenStoreModal}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-base sm:text-lg font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm shadow-red-600/20 hover:shadow-md hover:shadow-red-600/30 cursor-pointer"
            >
              <span>Visit Store</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="navbar-mobile-search-btn"
              onClick={onComingSoon}
              aria-label="Search"
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-full border border-slate-200"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              id="navbar-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-lg text-xl font-medium ${
                  activeSection === link.id
                    ? 'bg-red-50 text-red-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenStoreModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-3 px-4 rounded-xl shadow-sm cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Showroom & Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenLoadingPage && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLoadingPage();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 text-lg font-semibold py-2.5 px-4 rounded-xl border border-red-200 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span>View Loading Screen UI</span>
              </button>
            )}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-lg font-medium py-2.5 px-4 rounded-xl cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>Contact Tech Specialist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
