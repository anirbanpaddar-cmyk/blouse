import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardsProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#F8F3EA]/70 border-b border-[#EFE7D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#8C1935] font-semibold">
            <span>সিন্দারাম স্পেশাল কালেকশন</span>
            <span>·</span>
            <span>Signature Collections</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#420A17] tracking-tight">
            Explore by Blouse Categories
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#CF9E38] to-transparent mx-auto mt-4 mb-3"></div>
          <p className="text-sm sm:text-base text-[#420A17]/80 font-light">
            From regal bridal embroideries to handloom Santiniketan cottons, find the perfect blouse curated for your saree.
          </p>
        </div>

        {/* 9 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative text-left rounded-2xl overflow-hidden bg-[#FDFBF7] shadow-sm hover:shadow-xl transition-all duration-300 border ${
                  isSelected 
                    ? 'border-[#8C1935] ring-2 ring-[#8C1935]/30' 
                    : 'border-[#EFE7D8] hover:border-[#CF9E38]/60'
                } cursor-pointer flex flex-col`}
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8F3EA]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Bengali Badge */}
                  <div className="absolute top-3 left-3 bg-[#420A17]/90 backdrop-blur-xs text-[#E2B657] text-[11px] font-bengali px-2.5 py-1 rounded-md shadow-xs border border-[#CF9E38]/30">
                    {cat.bengali}
                  </div>

                  {/* Arrow Indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FDFBF7]/90 text-[#420A17] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all duration-200 shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-[#8C1935]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#FDFBF7]">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-[#420A17] group-hover:text-[#8C1935] transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#5C0F21]/70 mt-1 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-[#EFE7D8]/60 flex items-center justify-between text-[11px] text-[#8C1935] font-medium">
                    <span className="text-[#8C1935]/80 uppercase tracking-wider font-semibold">
                      {cat.itemCount}
                    </span>
                    <span className="text-[#CF9E38] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                      View Designs &rarr;
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
