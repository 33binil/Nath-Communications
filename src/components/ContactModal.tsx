import { useState, FormEvent } from 'react';
import { X, PhoneCall, Mail, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  defaultTopic = 'General Tech Inquiry',
}: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(defaultTopic);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
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
            Connect with a Tech Specialist
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Need advice on laptop specs, phone upgrade offers, or warranty support? We're here to help.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7 space-y-5">
          {sent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-base">Inquiry Received!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Our Nath Digital Hub tech specialist will call or WhatsApp you within 15 minutes during store hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Subject / Requirement</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                >
                  <option value="Product Guidance">Product Guidance & Device Recommendation</option>
                  <option value="Exchange / Trade-in">Old Device Exchange & Valuation</option>
                  <option value="After-Sales & Warranty">After-Sales & Warranty Support</option>
                  <option value="Bulk / Corporate Order">Corporate / Bulk Tech Requirement</option>
                  <option value="General Inquiry">General Store Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Message or Specific Device Needed</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you're looking for or how we can assist..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                  <span>Call back guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-md shadow-red-600/20"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}

          {/* Quick Direct Contacts */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-600">
            <a
              href="tel:+919845012345"
              className="flex items-center gap-1.5 hover:text-red-600 font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>+91 98450 12345</span>
            </a>
            <a
              href="mailto:support@nathdigitalhub.com"
              className="flex items-center gap-1.5 hover:text-red-600 font-semibold"
            >
              <Mail className="w-3.5 h-3.5 text-red-600" />
              <span>support@nathdigitalhub.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
