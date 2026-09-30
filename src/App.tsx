import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { CategoryCards } from './components/CategoryCards';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { NewArrivalsSlider } from './components/NewArrivalsSlider';
import { BestSellersSection } from './components/BestSellersSection';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { CinematicFashionFilm } from './components/CinematicFashionFilm';
import { FashionVideoShowcase } from './components/FashionVideoShowcase';
import { VideoReelModal } from './components/VideoReelModal';
import { FASHION_VIDEOS } from './data/fashionVideos';
import { CustomerReviews } from './components/CustomerReviews';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AboutModal, ContactModal, AccountModal } from './components/AboutContactModals';
import { Footer } from './components/Footer';
import { Check, Heart } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['sb-001', 'sb-005']);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedSize: '38',
      selectedColor: 'Royal Crimson Maroon',
      quantity: 1,
    }
  ]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Modals & Drawers state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [reelModalIndex, setReelModalIndex] = useState<number | null>(null);
  
  // Checkout values
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [checkoutCoupon, setCheckoutCoupon] = useState('');

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'cart' | 'wishlist' } | null>(null);

  const showToast = (text: string, type: 'cart' | 'wishlist') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string, color?: string) => {
    const chosenColor = color || product.colors[0]?.name || 'Standard';
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          product,
          selectedSize: size,
          selectedColor: chosenColor,
          quantity: 1,
        }
      ];
    });
    showToast(`Added ${product.name} (Size ${size}) to your bag`, 'cart');
  };

  const handleBuyNow = (product: Product, size: string, color?: string) => {
    handleAddToCart(product, size, color);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProceedToCheckout = (discount: number, coupon: string) => {
    setCheckoutDiscount(discount);
    setCheckoutCoupon(coupon);
    setIsCheckoutOpen(true);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const isAlready = prev.includes(product.id);
      if (isAlready) {
        showToast(`Removed from wishlist`, 'wishlist');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved ${product.name} to wishlist`, 'wishlist');
        return [...prev, product.id];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  const handleNavigateSection = (sectionId: string, categoryFilter?: string) => {
    if (categoryFilter) {
      setActiveCategory(categoryFilter);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById('featured-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#261E1E] flex flex-col font-sans selection:bg-[#681426] selection:text-[#FDFBF7]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 bg-[#420A17] text-[#FDFBF7] border border-[#CF9E38] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-medium animate-fadeIn">
          {toastMessage.type === 'cart' ? (
            <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-[#8C1935] flex items-center justify-center text-white shrink-0">
              <Heart className="w-3 h-3 fill-current" />
            </div>
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Sticky Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
      />

      {/* Hero Section with Automatic Carousel */}
      <HeroSlider
        onShopBlouses={(cat) => handleSelectCategory(cat || 'all')}
        onExploreCollection={() => handleNavigateSection('featured-products')}
      />

      {/* Product Categories (9 Cards) */}
      <CategoryCards
        onSelectCategory={handleSelectCategory}
        selectedCategory={activeCategory}
      />

      {/* Cinematic 16:9 Bengali Fashion Film (Master Campaign) */}
      <CinematicFashionFilm
        products={products}
        onExploreCollection={(cat) => handleSelectCategory(cat || 'all')}
        onViewProduct={(p) => setSelectedProduct(p)}
        onBuyNow={handleBuyNow}
      />

      {/* Premium 10-Video Bengali Fashion Showcase */}
      <FashionVideoShowcase
        products={products}
        onViewProduct={(p) => setSelectedProduct(p)}
        onBuyNow={handleBuyNow}
        onViewCollection={handleSelectCategory}
        onOpenReelModal={(idx) => setReelModalIndex(idx)}
      />

      {/* Featured Products (4-Column Desktop Grid) */}
      <ProductGrid
        products={products}
        wishlistIds={wishlistIds}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* New Arrivals Horizontal Slider */}
      <NewArrivalsSlider
        products={products}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Special Offer Festive Banner */}
      <SpecialOfferBanner
        onShopCollection={() => handleSelectCategory('festive')}
      />

      {/* Best Sellers Showcase */}
      <BestSellersSection
        products={products}
        onQuickView={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Why Choose Sindaram Blouse (7 Pillars) */}
      <WhyChooseUs />

      {/* Customer Reviews & Testimonials */}
      <CustomerReviews />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigateSection}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Floating WhatsApp Contact Widget */}
      <FloatingWhatsApp />

      {/* Detailed Product Page Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        discountAmount={checkoutDiscount}
        couponCode={checkoutCoupon}
        onOrderSuccess={() => {
          setCartItems([]);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onOpenProduct={(p) => setSelectedProduct(p)}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* About Us Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Contact Us Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* My Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Full-Screen Vertical Fashion Reel Viewer */}
      <VideoReelModal
        videos={FASHION_VIDEOS}
        products={products}
        currentVideoIndex={reelModalIndex ?? 0}
        isOpen={reelModalIndex !== null}
        onClose={() => setReelModalIndex(null)}
        onSelectVideo={(idx) => setReelModalIndex(idx)}
        onViewProduct={(p) => {
          setReelModalIndex(null);
          setSelectedProduct(p);
        }}
        onBuyNow={(p, size) => {
          setReelModalIndex(null);
          handleBuyNow(p, size);
        }}
        onViewCollection={(cat) => {
          setReelModalIndex(null);
          handleSelectCategory(cat);
        }}
      />

    </div>
  );
}
