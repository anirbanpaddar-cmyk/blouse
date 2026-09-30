import React, { useState } from 'react';
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown, Sparkles, Phone } from 'lucide-react';
import { SindaramLogo } from './SindaramLogo';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onSelectCategory: (category: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onSelectCategory,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  const handleNavClick = (sectionId: string, categoryFilter?: string) => {
    if (categoryFilter) {
      onSelectCategory(categoryFilter);
    }
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
  };

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#420A17] text-[#EFE7D8] text-xs py-2 px-4 border-b border-[#5C0F21]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[#CF9E38]">★</span>
            <span className="font-medium tracking-wide">সিন্দারাম ব্লাউজ · Authentic Kolkata Boutique Craftsmanship</span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-3 text-center">
            <span>Festive Celebration Offer: <strong>Flat 20% OFF</strong> with code <span className="bg-[#5C0F21] text-[#E2B657] px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">DURGAPUJA20</span></span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-[#CF9E38]">Free Express Delivery over ₹999</span>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+917278138132"
              className="flex items-center gap-1.5 text-[#E2B657] hover:underline font-mono font-semibold"
              title="Call Helpline"
            >
              <Phone className="w-3 h-3 text-[#E2B657]" />
              <span>+91 72781 38132</span>
            </a>
            <span className="text-white/30">·</span>
            <span>COD Available</span>
            <span className="text-white/30">·</span>
            <span>7-Day Easy Exchange</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFE7D8] shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Brand Wordmark */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#420A17] hover:bg-[#F8F3EA] rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <button 
                onClick={() => handleNavClick('hero')} 
                className="text-left group flex items-center"
              >
                <SindaramLogo theme="light" size="sm" showTagline={true} />
              </button>
            </div>

            {/* Center Navigation Menu (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 text-[13px] font-medium text-[#420A17]">
              <button
                onClick={() => handleNavClick('hero')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                Home
              </button>
              
              <button
                onClick={() => handleNavClick('new-arrivals')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors flex items-center gap-1"
              >
                <span>New Arrivals</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88628] animate-pulse"></span>
              </button>

              <button
                onClick={() => handleNavClick('featured-products', 'all')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                Blouses
              </button>

              <button
                onClick={() => handleNavClick('cinematic-film')}
                className="px-3 py-1.5 text-[#8C1935] font-bold bg-[#CF9E38]/20 hover:bg-[#CF9E38]/35 rounded-md transition-colors flex items-center gap-1.5 border border-[#CF9E38]/50"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span>ফ্যাশন ফিল্ম</span>
              </button>

              <button
                onClick={() => handleNavClick('fashion-reels')}
                className="px-2.5 py-1.5 text-[#420A17] font-semibold hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                ১০টি রিল
              </button>

              <button
                onClick={() => handleNavClick('featured-products', 'designer')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                Designer Blouses
              </button>

              <button
                onClick={() => handleNavClick('featured-products', 'ready-made')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                Ready-Made Blouses
              </button>

              {/* Collections Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCollectionsDropdownOpen(true)}
                onMouseLeave={() => setCollectionsDropdownOpen(false)}
              >
                <button
                  className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors flex items-center gap-1"
                >
                  <span>Collections</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#CF9E38]" />
                </button>

                {collectionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#FDFBF7] border border-[#CF9E38]/30 shadow-xl rounded-lg py-2 mt-0 z-50 animate-fadeIn">
                    <div className="px-3 py-1 text-[11px] font-semibold text-[#8C1935] uppercase tracking-wider border-b border-[#EFE7D8]">
                      Curated Blouse Edits
                    </div>
                    <button
                      onClick={() => handleNavClick('featured-products', 'wedding')}
                      className="w-full text-left px-4 py-2 hover:bg-[#F8F3EA] text-xs text-[#420A17] flex items-center justify-between"
                    >
                      <span>Wedding Collection</span>
                      <span className="text-[10px] text-[#8C1935] font-bengali">বিয়ের সাজ</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('featured-products', 'festive')}
                      className="w-full text-left px-4 py-2 hover:bg-[#F8F3EA] text-xs text-[#420A17] flex items-center justify-between"
                    >
                      <span>Festive Collection</span>
                      <span className="text-[10px] text-[#8C1935] font-bengali">পূজো কালেকশন</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('featured-products', 'silk')}
                      className="w-full text-left px-4 py-2 hover:bg-[#F8F3EA] text-xs text-[#420A17] flex items-center justify-between"
                    >
                      <span>Pure Silk & Brocade</span>
                      <span className="text-[10px] text-[#8C1935] font-bengali">সিল্ক ব্লাউজ</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('featured-products', 'cotton')}
                      className="w-full text-left px-4 py-2 hover:bg-[#F8F3EA] text-xs text-[#420A17] flex items-center justify-between"
                    >
                      <span>Handloom Kantha Cotton</span>
                      <span className="text-[10px] text-[#8C1935] font-bengali">কাঁথা স্টিচ</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('featured-products', 'embroidered')}
                      className="w-full text-left px-4 py-2 hover:bg-[#F8F3EA] text-xs text-[#420A17] flex items-center justify-between"
                    >
                      <span>Embroidered Back Neck</span>
                      <span className="text-[10px] text-[#8C1935] font-bengali">কারিগর নকশা</span>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('special-offer')}
                className="px-3 py-1.5 text-[#8C1935] font-semibold hover:bg-[#F8F3EA] rounded-md transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
                <span>Offers</span>
              </button>

              <button
                onClick={() => handleNavClick('about-us')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 py-1.5 hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-md transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Right Action Icons: Search, Wishlist, Account, Cart */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              <button
                onClick={onOpenSearch}
                aria-label="Search blouses"
                className="p-2 text-[#420A17] hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-full transition-colors relative"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenWishlist}
                aria-label="Wishlist"
                className="p-2 text-[#420A17] hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-full transition-colors relative"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#8C1935] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={onOpenAccount}
                aria-label="My Account"
                className="p-2 text-[#420A17] hover:text-[#8C1935] hover:bg-[#F8F3EA] rounded-full transition-colors hidden sm:flex items-center gap-1.5"
              >
                <User className="w-5 h-5" />
                <span className="text-xs hidden md:inline font-medium">Account</span>
              </button>

              <button
                onClick={onOpenCart}
                aria-label="Shopping Cart"
                className="flex items-center gap-2 bg-[#420A17] text-[#FDFBF7] px-3.5 py-2 rounded-full hover:bg-[#5C0F21] shadow-sm transition-all group"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#CF9E38] text-[#420A17] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold tracking-wide hidden sm:inline">
                  Cart ({cartCount})
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EFE7D8] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="space-y-1 font-medium text-sm text-[#420A17]">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full text-left py-2.5 px-3 rounded hover:bg-[#F8F3EA]"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('new-arrivals')}
                className="w-full text-left py-2.5 px-3 rounded hover:bg-[#F8F3EA] flex items-center justify-between"
              >
                <span>New Arrivals</span>
                <span className="text-xs text-[#B88628] font-bold uppercase">New</span>
              </button>
              <button
                onClick={() => handleNavClick('fashion-reels')}
                className="w-full text-left py-2.5 px-3 rounded bg-[#CF9E38]/15 text-[#8C1935] font-bold flex items-center justify-between border border-[#CF9E38]/30"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span>সিন্দারাম-এর নতুন সাজ (১০টি ভিডিও)</span>
                </span>
                <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded font-mono font-bold">REELS</span>
              </button>
              <button
                onClick={() => handleNavClick('featured-products', 'all')}
                className="w-full text-left py-2.5 px-3 rounded hover:bg-[#F8F3EA]"
              >
                All Blouses
              </button>
              <button
                onClick={() => handleNavClick('featured-products', 'designer')}
                className="w-full text-left py-2.5 px-3 rounded hover:bg-[#F8F3EA]"
              >
                Designer Blouses
              </button>
              <button
                onClick={() => handleNavClick('featured-products', 'ready-made')}
                className="w-full text-left py-2.5 px-3 rounded hover:bg-[#F8F3EA]"
              >
                Ready-Made Blouses
              </button>
              
              <div className="pt-2 pb-1 px-3 text-xs uppercase font-bold text-[#8C1935] tracking-wider">
                Special Collections
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <button
                  onClick={() => handleNavClick('featured-products', 'wedding')}
                  className="text-left py-1.5 px-3 text-xs rounded hover:bg-[#F8F3EA]"
                >
                  Wedding Collection
                </button>
                <button
                  onClick={() => handleNavClick('featured-products', 'festive')}
                  className="text-left py-1.5 px-3 text-xs rounded hover:bg-[#F8F3EA]"
                >
                  Festive Collection
                </button>
                <button
                  onClick={() => handleNavClick('featured-products', 'cotton')}
                  className="text-left py-1.5 px-3 text-xs rounded hover:bg-[#F8F3EA]"
                >
                  Cotton & Kantha
                </button>
                <button
                  onClick={() => handleNavClick('featured-products', 'silk')}
                  className="text-left py-1.5 px-3 text-xs rounded hover:bg-[#F8F3EA]"
                >
                  Pure Silk & Brocade
                </button>
              </div>

              <div className="border-t border-[#EFE7D8] my-2"></div>

              <button
                onClick={() => handleNavClick('special-offer')}
                className="w-full text-left py-2 px-3 rounded hover:bg-[#F8F3EA] text-[#8C1935] font-semibold flex items-center justify-between"
              >
                <span>Special Offers (Up to 30% OFF)</span>
                <Sparkles className="w-4 h-4 text-[#CF9E38]" />
              </button>
              <button
                onClick={() => handleNavClick('about-us')}
                className="w-full text-left py-2 px-3 rounded hover:bg-[#F8F3EA]"
              >
                About Us (Our Kolkata Heritage)
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2 px-3 rounded hover:bg-[#F8F3EA]"
              >
                Contact & Sizing Support
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccount();
                }}
                className="w-full text-left py-2 px-3 rounded hover:bg-[#F8F3EA] text-[#420A17] font-medium flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>My Account & Orders</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
