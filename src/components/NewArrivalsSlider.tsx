import React, { useRef } from 'react';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Eye, ShoppingBag } from 'lucide-react';

interface NewArrivalsSliderProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow: (product: Product, size: string) => void;
}

export const NewArrivalsSlider: React.FC<NewArrivalsSliderProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onBuyNow,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const newArrivals = products.filter((p) => p.isNewArrival);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="new-arrivals" className="py-16 sm:py-24 bg-[#F8F3EA]/50 border-y border-[#EFE7D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Navigation */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#8C1935] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
              <span>Fresh Off The Loom</span>
              <span>·</span>
              <span className="font-bengali">নতুন আগমন</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#420A17] tracking-tight">
              New Arrivals Collection
            </h2>
            <p className="text-sm sm:text-base text-[#420A17]/80 mt-1 font-light">
              Contemporary silhouettes paired with authentic Bengali heritage cuts for the upcoming festive calendar.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-[#FDFBF7] text-[#420A17] hover:bg-[#420A17] hover:text-[#FDFBF7] border border-[#EFE7D8] shadow-xs transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#FDFBF7] text-[#420A17] hover:bg-[#420A17] hover:text-[#FDFBF7] border border-[#EFE7D8] shadow-xs transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory"
        >
          {newArrivals.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#EFE7D8] hover:border-[#CF9E38]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div 
                  className="relative aspect-[3/4] w-full bg-[#F8F3EA] cursor-pointer overflow-hidden"
                  onClick={() => onQuickView(product)}
                >
                  <img
                    src={product.images.front}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#420A17] text-[#E2B657] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    New Arrival
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-all ${
                      isWishlisted
                        ? 'bg-[#8C1935] text-white'
                        : 'bg-[#FDFBF7]/80 text-[#420A17] hover:text-[#8C1935]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="w-full py-1.5 bg-[#FDFBF7]/95 text-[#420A17] hover:bg-[#420A17] hover:text-[#FDFBF7] text-xs font-semibold rounded-lg shadow-sm backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#8C1935] tracking-wider mb-1">
                      {product.categoryLabel}
                    </div>
                    <h3 
                      onClick={() => onQuickView(product)}
                      className="text-base font-bold font-serif text-[#420A17] hover:text-[#8C1935] cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <div className="text-xs text-[#8C1935] font-bengali mt-0.5 mb-2">
                      {product.bengaliName}
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-base font-bold text-[#420A17] font-mono tabular-nums">
                        ₹{product.offerPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-stone-400 line-through font-mono tabular-nums">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-bold text-[#8C1935] bg-[#8C1935]/10 px-1 rounded">
                        {product.discountPercentage}% OFF
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EFE7D8]/60">
                    <button
                      onClick={() => onAddToCart(product, product.availableSizes[0] || '38')}
                      className="py-1.5 px-2 bg-[#F8F3EA] text-[#420A17] hover:bg-[#CF9E38]/20 border border-[#CF9E38]/40 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#8C1935]" />
                      <span>Add</span>
                    </button>
                    <button
                      onClick={() => onBuyNow(product, product.availableSizes[0] || '38')}
                      className="py-1.5 px-2 bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
