import { useState, FormEvent, MouseEvent } from 'react';
import { Instagram, Facebook, Youtube, MessageCircle, ArrowRight, Check, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenStoreModal: () => void;
  onOpenContactModal: () => void;
  onOpenPolicyModal: (type: 'privacy' | 'terms' | 'faq' | 'warranty' | 'track') => void;
}

export function Footer({
  onOpenStoreModal,
  onOpenContactModal,
  onOpenPolicyModal,
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0b0f17] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="dark" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted destination for genuine tech products, expert support and a smarter digital lifestyle.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-800/90 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-tight">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-tight">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenPolicyModal('faq')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('warranty')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Warranty & Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal('track')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStoreModal}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Store Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactModal}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base tracking-tight">Stay Connected</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to get the latest updates, offers and new arrivals.
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#161d2a] border border-slate-700/80 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                {subscribed ? <Check className="w-4 h-4 text-white" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 font-medium animate-in fade-in duration-200">
                ✓ Thank you for subscribing to Nath Digital Hub updates!
              </p>
            )}

            {/* Quick Contact info */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                City Tech Arcade, High Street
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                +91 98450 12345
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024 Nath Digital Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicyModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicyModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
