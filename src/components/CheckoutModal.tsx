import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, Sparkles, MapPin, Phone, User } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountAmount: number;
  couponCode: string;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  discountAmount,
  couponCode,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: 'Pooja Ganguly',
    phone: '9830123456',
    address: 'Flat 4B, Heritage Enclave, Southern Avenue',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700029',
    paymentMethod: 'cod',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.offerPrice * item.quantity,
    0
  );
  const shippingFee = rawSubtotal >= 999 ? 0 : 70;
  const finalPayable = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#420A17] p-5 sm:p-6 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#5C0F21] flex items-center justify-center text-[#E2B657]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif">Sindaram Express Checkout</h3>
              <p className="text-xs text-[#EFE7D8]/80 font-bengali">নিরাপদ অর্ডার বুকিং ও হোম ডেলিভারি</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#EFE7D8] hover:text-white hover:bg-[#5C0F21] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {orderPlaced ? (
            /* Order Placed Success State */
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-12 h-12" />
              </div>
              
              <div className="inline-block bg-[#F8F3EA] border border-[#CF9E38] px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#8C1935]">
                ORDER #{orderId} CONFIRMED
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#420A17]">
                Dhonnobad! Your Blouse is Being Prepared
              </h3>
              
              <p className="text-sm text-[#420A17]/80 max-w-md mx-auto leading-relaxed">
                Thank you for shopping with Sindaram Blouse. We have sent your order confirmation receipt and tracking updates to <strong>+91 {formData.phone}</strong>.
              </p>

              {/* Order summary card */}
              <div className="max-w-md mx-auto p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8] text-xs text-left space-y-2">
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500">Delivery To:</span>
                  <span className="font-semibold text-[#420A17] text-right">{formData.name}, {formData.city} - {formData.pincode}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500">Payment Mode:</span>
                  <span className="font-semibold text-[#420A17] uppercase">{formData.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : formData.paymentMethod.toUpperCase()}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500">Total Payable:</span>
                  <span className="font-bold text-[#8C1935] text-sm">₹{finalPayable.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-[#EFE7D8]">
                  <span className="text-stone-500">Expected Delivery:</span>
                  <span className="font-semibold text-emerald-800">Within 3 to 4 business days</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    const query = encodeURIComponent(`Hi Sindaram, I just placed Order #${orderId} for ₹${finalPayable}. Please confirm shipping status!`);
                    window.open(`https://wa.me/919830098300?text=${query}`, '_blank');
                  }}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Track Order on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] rounded-xl text-xs font-bold transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Order Items Preview */}
              <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8]">
                <div className="text-xs font-bold text-[#8C1935] uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Selected Blouses ({cartItems.length})</span>
                  <span>Total: ₹{finalPayable.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#FDFBF7] p-2 rounded-xl border border-[#EFE7D8] shrink-0 text-xs">
                      <img 
                        src={item.product.images.front} 
                        alt={item.product.name} 
                        className="w-10 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <div className="font-bold text-[#420A17] line-clamp-1 max-w-[150px]">{item.product.name}</div>
                        <div className="text-[10px] text-[#8C1935]">Size: {item.selectedSize} · Qty: {item.quantity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Address Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#420A17] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8C1935]" />
                  <span>1. Delivery Address & Contact</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Phone Number (For Delivery SMS)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#420A17] mb-1">House / Flat No., Street, Landmark</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Pincode</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3 pt-3 border-t border-[#EFE7D8]">
                <h4 className="text-xs font-bold text-[#420A17] uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-[#8C1935]" />
                  <span>2. Payment Option</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#420A17] bg-[#F8F3EA] ring-2 ring-[#420A17]/20'
                      : 'border-[#EFE7D8] bg-white hover:border-[#CF9E38]'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#420A17]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#420A17]">Cash on Delivery</div>
                      <div className="text-[10px] text-stone-500">Pay at doorstep</div>
                    </div>
                  </label>

                  <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'border-[#420A17] bg-[#F8F3EA] ring-2 ring-[#420A17]/20'
                      : 'border-[#EFE7D8] bg-white hover:border-[#CF9E38]'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className="accent-[#420A17]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#420A17]">UPI / QR Code</div>
                      <div className="text-[10px] text-stone-500">GPay, PhonePe, Paytm</div>
                    </div>
                  </label>

                  <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#420A17] bg-[#F8F3EA] ring-2 ring-[#420A17]/20'
                      : 'border-[#EFE7D8] bg-white hover:border-[#CF9E38]'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="accent-[#420A17]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#420A17]">Cards / NetBanking</div>
                      <div className="text-[10px] text-stone-500">Visa, Mastercard, RuPay</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order total & CTA */}
              <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8] space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal:</span>
                  <span className="font-mono">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount ({couponCode}):</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-600">
                  <span>Shipping:</span>
                  <span className="text-emerald-700 font-semibold">{shippingFee === 0 ? 'FREE' : '₹70'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#EFE7D8] text-base font-bold text-[#420A17]">
                  <span>Total Amount Payable:</span>
                  <span className="font-mono text-xl text-[#8C1935]">₹{finalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#420A17] to-[#74132B] hover:from-[#5C0F21] hover:to-[#8C1935] text-[#FDFBF7] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Order (₹{finalPayable.toLocaleString('en-IN')})</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
