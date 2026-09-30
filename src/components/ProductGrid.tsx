import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  wishlistIds: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow: (product: Product, size: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistIds,
  activeCategory,
  onSelectCategory,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onBuyNow,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Filter products by category
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.offerPrice - b.offerPrice;
    if (sortBy === 'price-high') return b.offerPrice - a.offerPrice;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured default
  });

  const categories = [
    { id: 'all', label: 'All Blouses', bengali: 'সব ব্লাউজ' },
    { id: 'designer', label: 'Designer', bengali: 'ডিজাইনার' },
    { id: 'ready-made', label: 'Ready-Made', bengali: 'রেডি-মেড' },
    { id: 'wedding', label: 'Wedding', bengali: 'বিয়ের কালেকশন' },
    { id: 'festive', label: 'Festive', bengali: 'পূজো ও উৎসব' },
    { id: 'silk', label: 'Pure Silk', bengali: 'সিল্ক' },
    { id: 'cotton', label: 'Cotton & Kantha', bengali: 'সুতি ও কাঁথা' },
    { id: 'party-wear', label: 'Party Wear', bengali: 'পার্টি ওয়্যার' },
  ];

  return (
    <section id="featured-products" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#8C1935] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
              <span>Bengali Haute Couture</span>
              <span>·</span>
              <span className="font-bengali">সেরা ব্লাউজ কালেকশন</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#420A17] tracking-tight">
              Featured Blouse Designs
            </h2>
            <p className="text-sm sm:text-base text-[#420A17]/80 mt-2 font-light max-w-xl">
              Impeccably tailored blouses with pre-padded cups, luxury lining, and rich Bengali craftsmanship for every celebration.
            </p>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#420A17]/70 font-medium flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort by:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-[#F8F3EA] text-[#420A17] font-medium border border-[#EFE7D8] focus:border-[#8C1935] rounded-lg px-3 py-2 outline-hidden cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills (Functional Interactive Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-[#8C1935] shrink-0 mr-1" />
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#420A17] text-[#FDFBF7] shadow-sm'
                    : 'bg-[#F8F3EA] text-[#420A17] hover:bg-[#EFE7D8]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-bengali ${isActive ? 'text-[#E2B657]' : 'text-[#8C1935]'}`}>
                  ({cat.bengali})
                </span>
              </button>
            );
          })}
        </div>

        {/* 4-Column Desktop Product Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F8F3EA] rounded-2xl border border-dashed border-[#CF9E38]/40">
            <p className="text-base text-[#420A17] font-serif font-bold">No blouses found in this category.</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-4 px-6 py-2 text-xs font-bold uppercase tracking-wider bg-[#420A17] text-[#FDFBF7] rounded-full hover:bg-[#5C0F21]"
            >
              Show All Blouses
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
