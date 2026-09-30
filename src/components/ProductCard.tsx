import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, Eye, ShoppingBag, Check, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onBuyNow,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || '38');
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuyNow(product, selectedSize);
  };

  return (
    <div 
      className="group relative bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#EFE7D8] hover:border-[#CF9E38]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#F8F3EA] cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={isHovered && product.images.back ? product.images.back : product.images.front}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span className="bg-[#8C1935] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm tracking-wide">
            {product.discountPercentage}% OFF
          </span>
          {product.isNewArrival && (
            <span className="bg-[#CF9E38] text-[#300611] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
              New Arrival
            </span>
          )}
        </div>

        {/* Top Right Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-all z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-[#8C1935] text-white shadow-md'
              : 'bg-[#FDFBF7]/85 text-[#420A17] hover:text-[#8C1935] hover:bg-[#FDFBF7] shadow-xs'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2 bg-[#FDFBF7]/95 hover:bg-[#420A17] hover:text-[#FDFBF7] text-[#420A17] text-xs font-semibold rounded-lg shadow-md backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View (Front & Back)</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        {/* Category & Bengali subtitle */}
        <div>
          <div className="flex items-center justify-between text-xs text-[#8C1935]/80 mb-1">
            <span className="uppercase tracking-wider font-semibold text-[10px]">
              {product.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-[#B88628] font-bold text-[11px]">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
              <span className="text-stone-400 font-normal">({product.reviewCount})</span>
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-base font-bold font-serif text-[#420A17] hover:text-[#8C1935] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-[12px] text-[#8C1935] font-bengali font-medium mb-3">
            {product.bengaliName}
          </p>

          {/* Prices */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-[#420A17] font-mono tabular-nums">
              ₹{product.offerPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-stone-400 line-through font-mono tabular-nums">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] font-semibold text-[#8C1935] bg-[#8C1935]/10 px-1.5 py-0.5 rounded">
              Save ₹{(product.originalPrice - product.offerPrice).toLocaleString('en-IN')}
            </span>
          </div>

          {/* Available Sizes */}
          <div className="mb-4">
            <div className="text-[11px] text-[#420A17]/70 mb-1.5 flex items-center justify-between">
              <span>Select Size:</span>
              <span className="text-[10px] text-[#B88628] font-medium">+2" margin inside</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`min-w-[32px] h-7 px-2 text-xs font-semibold rounded border transition-all cursor-pointer ${
                    selectedSize === size
                      ? 'bg-[#420A17] text-[#FDFBF7] border-[#420A17] shadow-xs'
                      : 'bg-[#F8F3EA] text-[#420A17] border-[#EFE7D8] hover:border-[#CF9E38]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons: Add to Cart & Buy Now */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EFE7D8]/60">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              justAdded
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-[#F8F3EA] text-[#420A17] border-[#CF9E38]/40 hover:bg-[#CF9E38]/20 hover:border-[#CF9E38]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#8C1935]" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="py-2 px-3 text-xs font-bold rounded-lg bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] shadow-xs hover:shadow-md transition-all text-center cursor-pointer uppercase tracking-wider"
          >
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};
