import { useState, FormEvent } from 'react';
import { X, MapPin, Clock, Phone, Navigation, Calendar, CheckCircle2, Shield } from 'lucide-react';
import { Logo } from './Logo';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoreModal({ isOpen, onClose }: StoreModalProps) {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingInterest, setBookingInterest] = useState('iPhone 16 Series / Apple');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitBooking = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0f141c] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <Logo variant="dark" size="sm" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4">
            Visit Our Flagship Experience Center
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Experience live product demos, get instant trade-in valuations, and talk to certified specialists.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Store Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Showroom Address</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Nath Digital Hub, Ground Floor, Tech Arcade Boulevard, MG Road Sector 4, Bangalore / Kochi / Mumbai
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Store Hours & Hotline</span>
              </div>
              <div className="text-xs text-slate-700 space-y-1">
                <div><strong className="text-slate-900">Mon - Sat:</strong> 9:30 AM – 9:00 PM</div>
                <div><strong className="text-slate-900">Sunday:</strong> 10:00 AM – 8:00 PM</div>
                <div className="flex items-center gap-1.5 pt-1 text-slate-900 font-semibold">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  +91 98450 12345 / +91 80 4455 6677
                </div>
              </div>
            </div>
          </div>

          {/* Book In-Store VIP Demo */}
          <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-red-600" />
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Book a Priority In-Store VIP Consultation
              </h4>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <strong>Slot Reserved!</strong> Our showroom specialist will greet you at your chosen time.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitBooking} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Preferred Date & Time</label>
                    <input
                      type="datetime-local"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Device / Category Interested In</label>
                    <select
                      value={bookingInterest}
                      onChange={(e) => setBookingInterest(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                    >
                      <option value="iPhone 16 Series / Apple">iPhone 16 Series / Apple Ecosystem</option>
                      <option value="MacBook & High Performance Laptops">MacBook & Laptops</option>
                      <option value="Samsung Galaxy Flagships">Samsung Galaxy Flagships</option>
                      <option value="Audio / Sony / ANC Headphones">Audio & Headphones</option>
                      <option value="Smart Home & Security Cameras">Smart Home & Cameras</option>
                      <option value="Warranty & Repair Service">Warranty & Repair Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Shield className="w-3.5 h-3.5 text-slate-400" />
                    <span>Free service & no purchase obligation</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    Confirm In-Store Slot
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
