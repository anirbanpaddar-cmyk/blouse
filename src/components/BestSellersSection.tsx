import React from 'react';
import { Product } from '../types';
import { Star, Flame, Eye, ShoppingBag } from 'lucide-react';

interface BestSellersSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow: (product: Product, size: string) => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onBuyNow,
}) => {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section id="best-sellers" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#8C1935] font-semibold">
            <Flame className="w-4 h-4 text-[#CF9E38]" />
            <span>Customer Favorites</span>
            <span>·</span>
            <span className="font-bengali">সর্বাধিক বিক্রীত ডিজাইন</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#420A17] tracking-tight">
            Best Selling Blouse Designs
          </h2>
          <div className="w-20 h-0.5 bg-[#CF9E38] mx-auto mt-4 mb-3"></div>
          <p className="text-sm sm:text-base text-[#420A17]/80 font-light">
            Loved by thousands of women across Kolkata and India for their supreme silhouette fit and timeless elegance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="bg-[#F8F3EA]/70 rounded-2xl overflow-hidden border border-[#EFE7D8] hover:border-[#CF9E38] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col group"
            >
              {/* Image */}
              <div 
                className="relative aspect-[3/4] w-full bg-[#EFE7D8] cursor-pointer overflow-hidden"
                onClick={() => onQuickView(product)}
              >
                <img
                  src={product.images.front}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                />
                
                {/* Ranking Tag */}
                <div className="absolute top-3 left-3 bg-[#420A17] text-[#E2B657] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#E2B657]" />
                  <span>Best Seller</span>
                </div>

                {/* Rating overlay */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-[#EFE7D8] text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#CF9E38] text-[#CF9E38]" />
                  <span>{product.rating}</span>
                  <span className="text-white/60 font-normal">({product.reviewCount})</span>
                </div>

                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    className="w-full py-2 bg-[#FDFBF7] text-[#420A17] hover:bg-[#420A17] hover:text-[#FDFBF7] text-xs font-semibold rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Blouse Details</span>
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onQuickView(product)}
                    className="text-base font-bold font-serif text-[#420A17] hover:text-[#8C1935] cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <div className="text-xs text-[#8C1935] font-bengali font-medium mt-0.5 mb-2">
                    {product.bengaliName}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-bold text-[#420A17] font-mono tabular-nums">
                      ₹{product.offerPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-stone-400 line-through font-mono tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] font-bold text-[#8C1935]">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>

                  <div className="text-[11px] text-[#420A17]/70 mb-3 flex items-center justify-between">
                    <span>Sizes: {product.availableSizes.join(', ')}</span>
                    <span className="text-[#B88628] font-medium">Pre-Padded</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EFE7D8]">
                  <button
                    onClick={() => onAddToCart(product, product.availableSizes[0] || '38')}
                    className="py-2 px-2 bg-[#FDFBF7] hover:bg-[#CF9E38]/20 border border-[#CF9E38]/40 text-xs font-semibold rounded-lg text-[#420A17] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#8C1935]" />
                    <span>Add</span>
                  </button>

                  <button
                    onClick={() => onBuyNow(product, product.availableSizes[0] || '38')}
                    className="py-2 px-2 bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] text-xs font-bold uppercase rounded-lg transition-colors shadow-xs text-center cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
