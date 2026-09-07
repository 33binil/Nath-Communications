import { useState, FormEvent } from 'react';
import { X, ShieldCheck, HelpCircle, Package, FileText, CheckCircle2, ChevronDown } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'faq' | 'warranty' | 'track' | null;
  onClose: () => void;
}

export function PolicyModal({ type, onClose }: PolicyModalProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  if (!type) return null;

  const faqs = [
    {
      q: 'Are all products at Nath Communications 100% genuine and brand new?',
      a: 'Yes! We are direct authorized retail partners with Apple, Samsung, Sony, HP, Dell, Asus, Xiaomi, boAt, and JBL. Every product comes in factory-sealed packaging with official manufacturer warranty and tax invoice.',
    },
    {
      q: 'Can I exchange my old smartphone or laptop for a new one?',
      a: 'Yes. We offer top-of-market trade-in valuation on spot. Bring your current device to our store for a free 5-minute diagnostic inspection, and deduct the value instantly from your new purchase.',
    },
    {
      q: 'What payment and EMI options are available?',
      a: 'We accept all major Credit/Debit Cards, UPI, Net Banking, and offer 0% No-Cost EMI plans on HDFC, ICICI, SBI, Axis, Bajaj Finserv, and leading fintech providers.',
    },
    {
      q: 'How does after-sales warranty support work?',
      a: 'If you ever encounter an issue, you do not have to handle complicated warranty claims alone. Bring the product to Nath Communications, and our service desk coordinates directly with the brand service centers for repair or replacement.',
    },
  ];

  const handleTrack = (e: FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setTrackingResult(`Order #${trackingId.toUpperCase()} is packed and scheduled for delivery via Express Hub Courier.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0f141c] text-white p-6 sm:p-7 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center">
              {type === 'faq' && <HelpCircle className="w-5 h-5" />}
              {type === 'warranty' && <ShieldCheck className="w-5 h-5" />}
              {type === 'track' && <Package className="w-5 h-5" />}
              {(type === 'privacy' || type === 'terms') && <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                {type === 'faq' && 'Frequently Asked Questions'}
                {type === 'warranty' && 'Official Warranty & Returns Policy'}
                {type === 'track' && 'Track Your Gadget Order'}
                {type === 'privacy' && 'Privacy Policy'}
                {type === 'terms' && 'Terms & Conditions'}
              </h3>
              <p className="text-sm text-slate-400">Nath Communications Customer Assurance</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[70vh] overflow-y-auto space-y-5">
          {type === 'faq' && (
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-4 font-bold text-slate-900 text-base flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        activeFaq === idx ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {type === 'warranty' && (
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200/60 text-slate-900 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>All devices sold at Nath Communications carry 100% genuine brand manufacturer warranty.</span>
              </div>
              <p>
                <strong>1. Standard Brand Warranty:</strong> We issue authorized tax invoices that register your hardware serial number directly on official OEM databases (AppleCare, Samsung Care, etc.).
              </p>
              <p>
                <strong>2. 7-Day Replacement Guarantee:</strong> In the rare event of out-of-the-box hardware defects, visit our store within 7 days with original packaging and invoice for immediate assistance.
              </p>
              <p>
                <strong>3. Free Technical Diagnostics:</strong> Enjoy complimentary software troubleshooting, data backup guidance, and screen protector applications at our in-store service lounge.
              </p>
            </div>
          )}

          {type === 'track' && (
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600">
                Enter your Nath Communications Order ID or Mobile Number to check real-time dispatch and delivery status.
              </p>
              <form onSubmit={handleTrack} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. NDH-89423 or 9845012345"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl cursor-pointer"
                >
                  Track Order
                </button>
              </form>

              {trackingResult && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-sm sm:text-base font-medium">
                  {trackingResult}
                </div>
              )}
            </div>
          )}

          {(type === 'privacy' || type === 'terms') && (
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                At Nath Communications, protecting your privacy and ensuring transparent service is our primary pledge. We only collect the necessary contact details to process invoices, fulfill warranties, and send requested updates.
              </p>
              <p>
                All electronic transactions, serial registrations, and customer records are safeguarded using industry standard encryption. We never sell or share customer personal information with unauthorized third parties.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-black text-white text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
