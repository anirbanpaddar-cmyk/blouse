import React, { useState } from 'react';
import { Product } from '../types';
import { X, Search, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.bengaliName.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.pattern.toLowerCase().includes(q) ||
          p.neckDesign.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
        );
      })
    : [];

  const popularSearches = [
    'Velvet Zardozi',
    'Kantha Stitch',
    'Benarasi Brocade',
    'Boat Neck',
    'Bridal Pink',
    'Emerald Green',
    'Raw Silk',
    'Ready Made 38',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24 bg-black/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 sm:p-6 bg-[#420A17] text-[#FDFBF7] flex items-center gap-3 border-b border-[#CF9E38]/30">
          <Search className="w-5 h-5 text-[#E2B657] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blouses by fabric, neckline, colour or style..."
            className="w-full text-sm sm:text-base bg-transparent text-[#FDFBF7] placeholder-[#EFE7D8]/60 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#EFE7D8]/60 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#EFE7D8] hover:text-white hover:bg-[#5C0F21] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div>
              <div className="text-xs font-semibold text-[#8C1935] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
                <span>Popular Blouse Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-[#F8F3EA] hover:bg-[#CF9E38]/20 border border-[#EFE7D8] hover:border-[#CF9E38] text-xs font-medium text-[#420A17] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-stone-500 mb-2">
                Found {results.length} matching {results.length === 1 ? 'blouse' : 'blouses'}:
              </div>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#F8F3EA] border border-transparent hover:border-[#EFE7D8] cursor-pointer transition-all"
                >
                  <img
                    src={product.images.front}
                    alt={product.name}
                    className="w-14 h-16 object-cover object-top rounded-lg border border-[#EFE7D8]"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold font-serif text-[#420A17]">
                      {product.name}
                    </h4>
                    <div className="text-xs text-[#8C1935] font-bengali">
                      {product.bengaliName}
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      {product.fabric} · {product.neckDesign}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#420A17] font-mono">
                      ₹{product.offerPrice.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[10px] text-[#8C1935] font-semibold">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-stone-500">No blouses found matching "{query}".</p>
              <p className="text-xs text-[#8C1935] mt-1">Try searching for "Velvet", "Kantha", "Silk" or "Brocade".</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
