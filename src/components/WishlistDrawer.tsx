import React from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string) => void;
  onOpenProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onOpenProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-[#CF9E38]/30">
          
          {/* Header */}
          <div className="bg-[#420A17] p-5 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#E2B657] fill-[#E2B657]" />
              <div>
                <h3 className="text-base font-bold font-serif">My Wishlist</h3>
                <div className="text-[11px] text-[#EFE7D8]/80 font-bengali">
                  পছন্দের তালিকা ({wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'})
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#EFE7D8] hover:text-white hover:bg-[#5C0F21] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#EFE7D8]">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#F8F3EA] flex items-center justify-center text-[#8C1935] mx-auto mb-4 border border-[#EFE7D8]">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold font-serif text-[#420A17] mb-1">Your wishlist is empty</h4>
                <p className="text-xs text-stone-500 mb-6">Save your favorite blouse designs while exploring.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#420A17] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#5C0F21]"
                >
                  Explore Blouses
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div key={product.id} className="py-4 first:pt-0 flex gap-3.5">
                  <img
                    src={product.images.front}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onClick={() => {
                      onOpenProduct(product);
                      onClose();
                    }}
                    className="w-20 h-24 object-cover object-top rounded-xl border border-[#EFE7D8] shrink-0 cursor-pointer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 
                          onClick={() => {
                            onOpenProduct(product);
                            onClose();
                          }}
                          className="text-xs sm:text-sm font-bold font-serif text-[#420A17] hover:text-[#8C1935] cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-stone-400 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#8C1935] font-bengali">
                        {product.bengaliName}
                      </div>

                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-sm font-bold text-[#420A17] font-mono">
                          ₹{product.offerPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-stone-400 line-through font-mono">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] text-stone-500">
                        Sizes: {product.availableSizes.slice(0, 3).join(', ')}...
                      </span>
                      <button
                        onClick={() => onAddToCart(product, product.availableSizes[0] || '38')}
                        className="py-1.5 px-3 bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#E2B657]" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 bg-[#F8F3EA] border-t border-[#EFE7D8]">
              <button
                onClick={() => {
                  wishlistProducts.forEach((p) => onAddToCart(p, p.availableSizes[0] || '38'));
                  onClose();
                }}
                className="w-full py-3 bg-[#420A17] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#5C0F21] transition-colors"
              >
                Move All to Bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
