import React, { useState } from 'react';
import { Send, ShieldCheck, Sparkles, Check, MapPin, Phone } from 'lucide-react';
import { SindaramLogo } from './SindaramLogo';

interface FooterProps {
  onNavigate: (sectionId: string, categoryFilter?: string) => void;
  onOpenSizeGuide: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenSizeGuide,
  onOpenAbout,
  onOpenContact,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1C040A] text-[#EFE7D8] border-t-2 border-[#CF9E38]/30">
      
      {/* Newsletter Strip */}
      <div className="border-b border-[#5C0F21] py-12 px-4 sm:px-6 lg:px-8 bg-[#2A050E]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs uppercase font-bold tracking-widest text-[#E2B657] mb-1">
              <Sparkles className="w-4 h-4 text-[#CF9E38]" />
              <span>Sindaram Privilege Circle</span>
              <span>·</span>
              <span className="font-bengali">উৎসবের বিশেষ অফার</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FDFBF7]">
              Receive ₹200 OFF on Your First Designer Blouse
            </h3>
            <p className="text-xs sm:text-sm text-[#EFE7D8]/80 font-light mt-1">
              Subscribe for new festive arrivals, Bengali bridal styling tips, and private sale invitations.
            </p>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="p-3 bg-[#420A17] border border-[#CF9E38] rounded-2xl flex items-center gap-2 text-xs text-[#E2B657] font-semibold justify-center">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Welcome! Use code <strong className="text-white font-mono">SINDARAM200</strong> at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 text-xs bg-[#1C040A] border border-[#CF9E38]/40 rounded-xl px-4 py-3 text-white placeholder-stone-400 focus:outline-hidden focus:border-[#E2B657]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-gradient-to-r from-[#CF9E38] to-[#E2B657] text-[#300611] font-bold text-xs uppercase tracking-wider rounded-xl hover:from-[#E2B657] hover:to-[#CF9E38] transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <SindaramLogo theme="dark" size="md" showTagline={true} />

            <p className="text-xs sm:text-sm text-[#EFE7D8]/80 leading-relaxed font-light max-w-sm">
              Premium Women’s Blouse Collection. Dedicated to celebrating the timeless beauty of sarees with handloom silks, regal velvet zardozi, and comfortable pre-padded couture.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-[#CF9E38]">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E2B657] shrink-0 mt-0.5" />
                <span className="text-[#EFE7D8]/90">
                  <strong>Boutique Studio:</strong> 45/9, Taltala Main Road, Kolkata - 700009
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E2B657] shrink-0" />
                <span>
                  <strong>Helpline / Order:</strong>{' '}
                  <a href="tel:+917278138132" className="text-[#E2B657] hover:underline font-mono font-bold">
                    +91 72781 38132
                  </a>
                </span>
              </div>
            </div>

            {/* Original Social Media Brand Logos */}
            <div className="flex items-center gap-3 pt-2">
              {/* 1. Official Instagram Logo */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#cc2366] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 group p-2"
                aria-label="Instagram Official"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* 2. Official Facebook Logo */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 p-2"
                aria-label="Facebook Official"
                title="Follow us on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* 3. Official YouTube Logo */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 p-2"
                aria-label="YouTube Official"
                title="Subscribe on YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* 4. Official WhatsApp Logo */}
              <a
                href="https://wa.me/917278138132"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 p-2"
                aria-label="WhatsApp Official"
                title="Chat on WhatsApp (+91 72781 38132)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold font-serif text-[#FDFBF7] tracking-wider uppercase border-b border-[#5C0F21] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#EFE7D8]/80">
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'all')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Shop All Blouses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('new-arrivals')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  New Arrivals (2026)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'designer')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Designer Blouses
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSizeGuide}
                  className="hover:text-[#E2B657] transition-colors text-left"
                >
                  Blouse Size Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenAbout}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  About Our Heritage
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContact}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Contact & Helpline
                </button>
              </li>
            </ul>
          </div>

          {/* Curated Categories */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold font-serif text-[#FDFBF7] tracking-wider uppercase border-b border-[#5C0F21] pb-2">
              Boutique Edits
            </h4>
            <ul className="space-y-2 text-[#EFE7D8]/80">
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'wedding')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Wedding Bridal Blouses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'festive')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Festive Puja Specials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'silk')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Pure Raw Silk & Brocade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'cotton')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Santiniketan Kantha Handloom
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'party-wear')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Cocktail & Party Wear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('featured-products', 'ready-made')}
                  className="hover:text-[#E2B657] transition-colors"
                >
                  Pre-Padded Ready-Made
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support & Policies */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold font-serif text-[#FDFBF7] tracking-wider uppercase border-b border-[#5C0F21] pb-2">
              Customer Care
            </h4>
            <ul className="space-y-2 text-[#EFE7D8]/80">
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E2B657] transition-colors">
                  Shipping & Pan-India Dispatch
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E2B657] transition-colors">
                  7-Day Return & Exchange
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E2B657] transition-colors">
                  Inside Alteration Policy (+2")
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E2B657] transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E2B657] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E2B657] transition-colors">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Trust marks */}
        <div className="mt-12 pt-8 border-t border-[#5C0F21] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE7D8]/70">
          <div>
            © {new Date().getFullYear()} SINDARAM BLOUSE (সিন্দারাম ব্লাউজ). All Rights Reserved. Crafted with love in Kolkata, India.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-[#E2B657]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Genuine Fabrics</span>
            </span>
            <span className="text-white/20">|</span>
            <span>UPI · NetBanking · Cards · COD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
