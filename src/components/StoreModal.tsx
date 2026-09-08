import { useState, FormEvent } from 'react';
import { X, MapPin, Clock, Phone, Navigation, Calendar, Shield } from 'lucide-react';
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
  const [showComingSoon, setShowComingSoon] = useState(false);

  if (!isOpen) return null;

  const handleSubmitBooking = (e: FormEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] flex flex-col">
        
        {/* Coming Soon Overlay */}
        {showComingSoon && (
          <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl font-black text-amber-600">
                !
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Coming Soon
              </h3>
              <p className="text-slate-600 text-base sm:text-lg max-w-sm mx-auto leading-relaxed">
                In-store slot booking is launching shortly. Stay tuned!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-2 inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base px-5 py-2.5 rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                Back to Booking
              </button>
            </div>
          </div>
        )}
        
        {/* Header - Pinned at top */}
        <div className="bg-[#0f141c] text-white p-4 sm:p-6 md:p-7 relative shrink-0 border-b border-slate-800">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <Logo variant="dark" size="sm" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-2 sm:mt-3 leading-tight">
            Visit Our Flagship Experience Center
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed max-w-lg">
            Experience live product demos, get instant trade-in valuations, and talk to certified specialists.
          </p>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-4 sm:p-6 md:p-7 space-y-5 sm:space-y-6 overflow-y-auto flex-1 overscroll-contain">
          {/* Store Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold text-base">
                <MapPin className="w-4 h-4" />
                <span>Showroom Address</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Sredaranilayam , Near krishna Theater -NH Road kazhakuttom, Thiruvananthapuram Byp, Po, Thiruvananthapuram, Kerala 695582
              </p>
              <div className="pt-2">
                <a
                  href="https://share.google/r0pOantoZmFMi7gis"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-bold text-base">
                <Clock className="w-4 h-4" />
                <span>Store Hours & Hotline</span>
              </div>
              <div className="text-sm text-slate-700 space-y-1">
                <div><strong className="text-slate-900">Mon - Sat:</strong> 9:30 AM – 9:00 PM</div>
                <div><strong className="text-slate-900">Sunday:</strong> 10:00 AM – 8:00 PM</div>
                <div className="flex items-center gap-1.5 pt-1 text-slate-900 font-semibold">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                    +91 97466 43355
                </div>
              </div>
            </div>
          </div>

          {/* Book In-Store VIP Demo */}
          <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-red-600" />
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                Book a Priority In-Store VIP Consultation
              </h4>
            </div>

            {showComingSoon ? null : (
              <form onSubmit={handleSubmitBooking} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date & Time</label>
                    <input
                      type="datetime-local"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Device / Category Interested In</label>
                    <select
                      value={bookingInterest}
                      onChange={(e) => setBookingInterest(e.target.value)}
                      className="w-full text-sm bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
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
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                    <Shield className="w-3.5 h-3.5 text-slate-400" />
                    <span>Free service & no purchase obligation</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm"
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
