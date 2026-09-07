import { useState } from 'react';
import { X, Star, ShieldCheck, CheckCircle2, MessageCircle, MapPin, Truck, RefreshCw, Heart } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenStoreModal: () => void;
}

export function ProductModal({
  product,
  onClose,
  onOpenStoreModal,
}: ProductModalProps) {
  const [reserved, setReserved] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nath Digital Hub! I am interested in inquiring about ${product.name} (Price: $${product.price}). Please confirm stock availability.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Image & Highlights */}
          <div className="md:col-span-5 bg-slate-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
            <div className="relative aspect-square w-full rounded-2xl bg-white p-4 flex items-center justify-center border border-slate-200/80">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">{product.warranty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-red-600" />
                <span>Same-day store pickup & express delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-600" />
                <span>7 Days replacement guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="md:col-span-7 p-6 space-y-5">
            <div>
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
                {product.brand} Official
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mt-1">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-3xl font-black text-slate-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-base line-through text-slate-400 font-medium">
                  ${product.originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  Save {product.discountPercentage}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features Bullet Points */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Key Highlights
              </h4>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-Store Reserve Status */}
            {reserved && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Reserved for you for 24 hours at Nath Digital Hub Store!</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReserve}
                  className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-red-600/20 cursor-pointer"
                >
                  {reserved ? 'Item Reserved ✓' : 'Hold & Reserve in Store'}
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Wishlist"
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/919845012345?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquire</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenStoreModal();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Visit Showroom</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
