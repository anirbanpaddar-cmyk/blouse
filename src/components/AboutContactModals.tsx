import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Clock, Heart, Send, CheckCircle, User, Package, ShieldCheck } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#420A17] p-5 sm:p-6 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
          <div>
            <h3 className="text-xl font-bold font-serif">About Sindaram Blouse</h3>
            <p className="text-xs text-[#EFE7D8]/80 font-bengali">সিন্দারাম ব্লাউজ — ঐতিহ্য ও আধুনিকতার মেলবন্ধন</p>
          </div>
          <button onClick={onClose} className="p-2 text-[#EFE7D8] hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#420A17]/85 leading-relaxed font-light">
          <p>
            Born in the cultural heart of Kolkata, <strong>SINDARAM BLOUSE (সিন্দারাম ব্লাউজ)</strong> was founded with a singular dedication: to celebrate the timeless beauty of Indian women by perfecting the quintessential garment that elevates every saree — the blouse.
          </p>
          <p>
            For generations, finding a skilled boutique tailor who delivers a flattering, comfortable blouse without multiple fitting trials was an endless ordeal. At Sindaram, we bridge royal Bengali craftsmanship with precision modern sizing.
          </p>
          <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#CF9E38]/40 space-y-2">
            <h4 className="font-bold font-serif text-[#420A17] text-sm">Our 3 Core Commitments:</h4>
            <div className="flex items-start gap-2">
              <span className="text-[#8C1935] font-bold">1.</span>
              <span><strong>Authentic Handloom & Silks:</strong> Sourced directly from master weavers across Murshidabad, Bishnupur, Bolpur, and Varanasi.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#8C1935] font-bold">2.</span>
              <span><strong>Ergonomic Comfort:</strong> Pre-shaped bra padding and built-in 2-inch side margin alterations to ensure no shoulder slippage and zero pinching.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#8C1935] font-bold">3.</span>
              <span><strong>Direct From Bengal:</strong> Direct boutique-to-doorstep delivery without exorbitant retail markups.</span>
            </div>
          </div>
          <p>
            Whether it is the devotional grace of Durga Puja, the grandeur of a Bengali bridal reception, or the everyday comfort of handloom cotton, Sindaram is woven for you.
          </p>
          <div className="pt-2 text-center text-xs font-serif text-[#8C1935] font-semibold italic">
            "Elegance in Every Stitch · আভিজাত্যের নিখুঁত সেলাই"
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', queryType: 'Sizing Help', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#420A17] p-5 sm:p-6 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
          <div>
            <h3 className="text-xl font-bold font-serif">Contact Sindaram Blouse</h3>
            <p className="text-xs text-[#EFE7D8]/80 font-bengali">যোগাযোগ ও কাস্টমার কেয়ার</p>
          </div>
          <button onClick={onClose} className="p-2 text-[#EFE7D8] hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-xl font-serif font-bold text-[#420A17] mb-1">Message Received!</h4>
              <p className="text-xs text-stone-600 max-w-md mx-auto mb-4">
                Thank you, {form.name}. Our Kolkata boutique stylist will contact you via WhatsApp or phone within 2 hours.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#420A17] text-[#FDFBF7] text-xs font-bold rounded-xl"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Boutique Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8] text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8C1935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#420A17]">Boutique Studio:</strong>
                    <div className="text-stone-700 font-medium">45/9, Taltala Main Road, Kolkata - 700009</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#8C1935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#420A17]">Helpline & WhatsApp:</strong>
                    <div>
                      <a href="tel:+917278138132" className="text-[#8C1935] font-bold font-mono hover:underline">
                        +91 72781 38132
                      </a>{' '}
                      <span className="text-stone-500">(10 AM – 8 PM)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Swarnali Roy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9830123456"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Inquiry Topic</label>
                  <select
                    value={form.queryType}
                    onChange={(e) => setForm({ ...form, queryType: e.target.value })}
                    className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                  >
                    <option>Sizing & Fit Advice</option>
                    <option>Custom Alterations / Padding</option>
                    <option>Order Tracking & Delivery Status</option>
                    <option>Bulk / Bridal Ensemble Order</option>
                    <option>Exchange / Return Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#420A17] mb-1">Your Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what you'd like to ask..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full text-xs bg-white border border-[#EFE7D8] rounded-xl px-3 py-2 text-[#420A17] focus:outline-hidden focus:border-[#8C1935]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#420A17] hover:bg-[#5C0F21] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Stylist</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#420A17] p-5 sm:p-6 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#CF9E38] text-[#300611] font-bold flex items-center justify-center">
              P
            </div>
            <div>
              <h3 className="text-base font-bold font-serif">Pooja Ganguly</h3>
              <p className="text-xs text-[#EFE7D8]/80 font-bengali">সিন্দারাম প্রিভিলেজ মেম্বার</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-[#EFE7D8] hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-[#EFE7D8] bg-[#F8F3EA] text-xs font-semibold text-[#420A17]">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'profile' ? 'bg-[#FDFBF7] border-b-2 border-[#8C1935] text-[#8C1935]' : 'hover:bg-[#EFE7D8]'
            }`}
          >
            My Details & Sizing
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'orders' ? 'bg-[#FDFBF7] border-b-2 border-[#8C1935] text-[#8C1935]' : 'hover:bg-[#EFE7D8]'
            }`}
          >
            Order History & Tracking
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'profile' ? (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8] space-y-2">
                <div className="text-[11px] uppercase font-bold text-[#8C1935]">Saved Measurement Profile</div>
                <div className="flex justify-between py-1 border-b border-[#EFE7D8]">
                  <span className="text-stone-500">Standard Blouse Size:</span>
                  <span className="font-bold text-[#420A17]">Size 38 (Medium)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFE7D8]">
                  <span className="text-stone-500">Padding Preference:</span>
                  <span className="font-bold text-[#420A17]">Pre-Padded Cups</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Default Margin:</span>
                  <span className="font-bold text-[#420A17]">+2 Inches (Standard)</span>
                </div>
              </div>

              <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8] space-y-2">
                <div className="text-[11px] uppercase font-bold text-[#8C1935]">Default Delivery Address</div>
                <p className="text-stone-700">
                  Flat 4B, Heritage Enclave, Southern Avenue, Kolkata, West Bengal - 700029
                </p>
                <div className="text-[11px] text-stone-500">Phone: +91 98301 23456</div>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#EFE7D8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[#420A17]">#SB-842910</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Shipped · In Transit
                  </span>
                </div>
                <div className="font-medium text-[#420A17]">Designer Embroidered Blouse (Size 38)</div>
                <div className="text-stone-500 text-[11px]">Estimated Delivery: Tomorrow by BlueDart Express</div>
                <div className="flex justify-between items-center pt-2 border-t border-[#EFE7D8]">
                  <span className="font-bold text-[#8C1935]">₹1,199 (COD)</span>
                  <button 
                    onClick={() => window.open('https://wa.me/919830098300', '_blank')}
                    className="text-[#8C1935] hover:underline font-semibold"
                  >
                    Track on WhatsApp &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
