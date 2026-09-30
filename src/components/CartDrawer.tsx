import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (appliedDiscount: number, couponCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percent: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.offerPrice * item.quantity,
    0
  );

  const discountAmount = appliedCoupon ? Math.round((rawSubtotal * appliedCoupon.percent) / 100) : 0;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const FREE_SHIPPING_THRESHOLD = 999;
  const progressToFreeShipping = Math.min(100, (rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponInput.trim().toUpperCase();
    if (code === 'DURGAPUJA20') {
      setAppliedCoupon({ code: 'DURGAPUJA20', percent: 20 });
    } else if (code === 'SINDARAM10') {
      setAppliedCoupon({ code: 'SINDARAM10', percent: 10 });
    } else {
      setCouponError('Invalid coupon. Try DURGAPUJA20 for 20% off!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-[#CF9E38]/30">
          
          {/* Drawer Header */}
          <div className="bg-[#420A17] p-5 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#E2B657]" />
              <div>
                <h3 className="text-base font-bold font-serif">Shopping Bag</h3>
                <div className="text-[11px] text-[#EFE7D8]/80 font-bengali">
                  সিন্দারাম শপিং ব্যাগ ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
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

          {/* Free Shipping Progress Indicator */}
          <div className="p-3.5 bg-[#F8F3EA] border-b border-[#EFE7D8] text-xs">
            {rawSubtotal >= FREE_SHIPPING_THRESHOLD ? (
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Congratulations! You unlocked <strong>FREE Express Delivery</strong></span>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-[#420A17] mb-1.5">
                  <span>Add <strong>₹{(FREE_SHIPPING_THRESHOLD - rawSubtotal).toLocaleString('en-IN')}</strong> more for FREE shipping</span>
                  <span className="font-mono text-[11px] font-bold">{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#EFE7D8] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#CF9E38] to-[#8C1935] transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#EFE7D8]">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#F8F3EA] flex items-center justify-center text-[#8C1935] mx-auto mb-4 border border-[#EFE7D8]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold font-serif text-[#420A17] mb-1">Your bag is empty</h4>
                <p className="text-xs text-stone-500 mb-6">Explore our designer blouses and celebrate in elegance.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#420A17] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#5C0F21]"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.selectedSize}-${index}`} className="py-4 first:pt-0 flex gap-3.5">
                  <img
                    src={item.product.images.front}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 object-cover object-top rounded-xl border border-[#EFE7D8] shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold font-serif text-[#420A17] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-stone-400 hover:text-red-700 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#8C1935] font-bengali">
                        {item.product.bengaliName}
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-[11px] text-[#420A17]/70">
                        <span className="bg-[#F8F3EA] px-2 py-0.5 rounded border border-[#EFE7D8] font-bold">
                          Size: {item.selectedSize}
                        </span>
                        <span className="truncate max-w-[120px]">{item.selectedColor}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EFE7D8]/60">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#EFE7D8] bg-[#F8F3EA] rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="p-1 text-[#420A17] hover:bg-[#EFE7D8] rounded-l transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold font-mono text-[#420A17]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1 text-[#420A17] hover:bg-[#EFE7D8] rounded-r transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price for this line item */}
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#420A17] font-mono tabular-nums">
                          ₹{(item.product.offerPrice * item.quantity).toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-stone-400 line-through font-mono">
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-[#F8F3EA] border-t border-[#EFE7D8] space-y-3">
              
              {/* Promo Coupon Box */}
              {!appliedCoupon ? (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon Code (e.g. DURGAPUJA20)"
                      className="w-full text-xs bg-[#FDFBF7] border border-[#EFE7D8] rounded-xl pl-8 pr-3 py-2 text-[#420A17] uppercase tracking-wider font-mono outline-hidden focus:border-[#8C1935]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#420A17] text-[#FDFBF7] text-xs font-bold rounded-xl hover:bg-[#5C0F21] transition-colors"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> Applied ({appliedCoupon.percent}% Off)</span>
                  </div>
                  <button
                    onClick={() => setAppliedCoupon(null)}
                    className="text-stone-400 hover:text-red-700 text-xs font-bold ml-2"
                  >
                    Remove
                  </button>
                </div>
              )}
              {couponError && <p className="text-[11px] text-red-600">{couponError}</p>}

              {/* Price Calculation breakdown */}
              <div className="space-y-1.5 text-xs text-[#420A17]">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Subtotal:</span>
                  <span className="font-mono font-medium">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-medium">
                    <span>Coupon Savings:</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Estimated Delivery:</span>
                  <span className="text-emerald-700 font-semibold">
                    {rawSubtotal >= FREE_SHIPPING_THRESHOLD ? 'FREE' : '₹70'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#EFE7D8] text-base font-bold text-[#420A17]">
                  <span>Total Amount:</span>
                  <span className="font-mono text-lg text-[#8C1935]">
                    ₹{(finalTotal + (rawSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 70)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                onClick={() => {
                  onProceedToCheckout(discountAmount, appliedCoupon?.code || '');
                  onClose();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#420A17] to-[#74132B] hover:from-[#5C0F21] hover:to-[#8C1935] text-[#FDFBF7] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] text-stone-500 font-medium">
                🔒 Safe & Encrypted Payments · Cash on Delivery & UPI accepted
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
