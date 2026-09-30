import React, { useState } from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, Ruler, Check, ZoomIn } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onBuyNow: (product: Product, size: string, color: string) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
  onOpenSizeGuide,
}) => {
  if (!isOpen || !product) return null;

  const [activeImageKey, setActiveImageKey] = useState<'front' | 'back' | 'side'>('front');
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || '38');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [isZoomed, setIsZoomed] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const currentImage = product.images[activeImageKey] || product.images.front;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedSize, selectedColor);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden my-auto max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#FDFBF7]/90 text-[#420A17] hover:bg-[#420A17] hover:text-[#FDFBF7] transition-all shadow-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Gallery & Zoomable Viewport */}
        <div className="w-full md:w-1/2 bg-[#F8F3EA] p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EFE7D8]">
          {/* Main Image with Zoom effect */}
          <div 
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white shadow-inner cursor-crosshair group"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={currentImage}
              alt={`${product.name} - ${activeImageKey} view`}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-top transition-transform duration-300 ease-out ${
                isZoomed ? 'scale-150 origin-center' : 'scale-100'
              }`}
            />

            <div className="absolute bottom-3 left-3 bg-[#420A17]/80 text-[#EFE7D8] text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
              <ZoomIn className="w-3 h-3 text-[#E2B657]" />
              <span>Hover to Zoom · {activeImageKey.toUpperCase()} VIEW</span>
            </div>

            <div className="absolute top-3 left-3 bg-[#8C1935] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
              {product.discountPercentage}% OFF
            </div>
          </div>

          {/* Multiple Angle Image Buttons (Front, Back, Side) */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => setActiveImageKey('front')}
              className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeImageKey === 'front'
                  ? 'bg-[#420A17] text-[#FDFBF7] border-[#420A17] shadow-sm'
                  : 'bg-[#FDFBF7] text-[#420A17] border-[#EFE7D8] hover:border-[#CF9E38]'
              }`}
            >
              <span>Front View</span>
            </button>

            <button
              onClick={() => setActiveImageKey('back')}
              className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeImageKey === 'back'
                  ? 'bg-[#420A17] text-[#FDFBF7] border-[#420A17] shadow-sm'
                  : 'bg-[#FDFBF7] text-[#420A17] border-[#EFE7D8] hover:border-[#CF9E38]'
              }`}
            >
              <span>Back View (Latkan)</span>
            </button>

            {product.images.side && (
              <button
                onClick={() => setActiveImageKey('side')}
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeImageKey === 'side'
                    ? 'bg-[#420A17] text-[#FDFBF7] border-[#420A17] shadow-sm'
                    : 'bg-[#FDFBF7] text-[#420A17] border-[#EFE7D8] hover:border-[#CF9E38]'
                }`}
              >
                <span>Saree Drape View</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Product Details & Purchase Module */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[85vh] flex flex-col justify-between">
          <div>
            {/* Category tag */}
            <div className="flex items-center justify-between text-xs text-[#8C1935] font-semibold uppercase tracking-wider mb-2">
              <span>{product.categoryLabel}</span>
              <span className="text-[#B88628] font-bold">★ {product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#420A17] leading-tight">
              {product.name}
            </h2>
            <div className="text-sm font-bengali text-[#8C1935] font-medium mt-1 mb-4">
              {product.bengaliName}
            </div>

            {/* Price section */}
            <div className="p-3.5 bg-[#F8F3EA] rounded-xl border border-[#EFE7D8] mb-6 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-[#420A17] font-mono tabular-nums">
                ₹{product.offerPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-stone-400 line-through font-mono tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-[#8C1935] bg-[#8C1935]/15 px-2 py-0.5 rounded">
                Save ₹{(product.originalPrice - product.offerPrice).toLocaleString('en-IN')} ({product.discountPercentage}% OFF)
              </span>
            </div>

            {/* Colour Options */}
            <div className="mb-5">
              <div className="text-xs font-semibold text-[#420A17] mb-2 flex items-center justify-between">
                <span>Colour: <strong className="text-[#8C1935]">{selectedColor}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-[#420A17] bg-[#F8F3EA] ring-2 ring-[#420A17]/20 shadow-xs'
                        : 'border-[#EFE7D8] hover:border-[#CF9E38]'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Available Sizes with Size Guide button */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#420A17]">
                  Select Bust Size: <strong className="text-[#8C1935]">{selectedSize} inches</strong>
                </span>
                <button
                  onClick={onOpenSizeGuide}
                  className="text-xs text-[#8C1935] hover:text-[#420A17] font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>View Size Guide</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[46px] h-10 px-3 text-sm font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                      selectedSize === size
                        ? 'bg-[#420A17] text-[#FDFBF7] border-[#420A17] shadow-md scale-105'
                        : 'bg-[#F8F3EA] text-[#420A17] border-[#EFE7D8] hover:border-[#CF9E38]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="text-[11px] text-[#B88628] font-medium mt-2 flex items-center gap-1">
                <span>✦</span>
                <span>Includes 2-inch inside seam margin so you can alter easily if ever required.</span>
              </p>
            </div>

            {/* Detailed Product Specifications */}
            <div className="space-y-2.5 text-xs text-[#420A17] border-t border-[#EFE7D8] pt-4 mb-6">
              <div className="grid grid-cols-3 py-1 border-b border-[#EFE7D8]/60">
                <span className="text-stone-500 font-medium">Fabric:</span>
                <span className="col-span-2 font-semibold text-[#420A17]">{product.fabric}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#EFE7D8]/60">
                <span className="text-stone-500 font-medium">Pattern / Work:</span>
                <span className="col-span-2 font-semibold text-[#420A17]">{product.pattern}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#EFE7D8]/60">
                <span className="text-stone-500 font-medium">Sleeve Type:</span>
                <span className="col-span-2 font-semibold text-[#420A17]">{product.sleeveType}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#EFE7D8]/60">
                <span className="text-stone-500 font-medium">Neck Design:</span>
                <span className="col-span-2 font-semibold text-[#420A17]">{product.neckDesign}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#EFE7D8]/60">
                <span className="text-stone-500 font-medium">Care:</span>
                <span className="col-span-2 font-semibold text-[#420A17]">{product.careInstructions}</span>
              </div>
            </div>

            {/* Delivery & Trust Callouts */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#F8F3EA]/70 rounded-xl border border-[#EFE7D8] text-[11px] text-[#420A17] mb-6">
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#8C1935] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Fast Pan-India Delivery</div>
                  <div className="text-stone-500 text-[10px]">{product.deliveryInfo}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RotateCcw className="w-4 h-4 text-[#8C1935] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">7-Day Easy Exchange</div>
                  <div className="text-stone-500 text-[10px]">{product.returnExchangeInfo}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="border-t border-[#EFE7D8] pt-4 space-y-2.5">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAdd}
                className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  addedFeedback
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#F8F3EA] text-[#420A17] border border-[#CF9E38]/50 hover:bg-[#CF9E38]/20'
                }`}
              >
                {addedFeedback ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#8C1935]" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuy}
                className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                isWishlisted
                  ? 'bg-[#8C1935]/10 text-[#8C1935] border-[#8C1935]'
                  : 'bg-transparent text-[#420A17] border-[#EFE7D8] hover:border-[#CF9E38]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#8C1935] text-[#8C1935]' : ''}`} />
              <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
