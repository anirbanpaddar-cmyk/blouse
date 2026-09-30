import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/products';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onShopBlouses: (category?: string) => void;
  onExploreCollection: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onShopBlouses,
  onExploreCollection
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="hero"
      className="relative w-full bg-[#1A0408] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      <div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        {HERO_SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Image with contrast scrim */}
              <img
                src={item.image}
                alt={item.headline}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-top sm:object-center transform transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Luxury Scrim Overlay: Gradient from deep rich maroon-black for legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A050E]/95 via-[#2A050E]/70 to-transparent lg:w-3/4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0408] via-transparent to-black/30" />
            </div>
          );
        })}

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl text-left">
            
            {/* Top Accent & Bengali Tagline */}
            <div className="inline-flex items-center gap-2 mb-4 bg-[#5C0F21]/80 backdrop-blur-sm border border-[#CF9E38]/40 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#E2B657]" />
              <span className="text-xs uppercase tracking-widest text-[#EFE7D8] font-medium">
                {slide.accentText}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-[#E2B657] font-bengali font-semibold">
                {slide.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif text-[#FDFBF7] tracking-tight leading-[1.1] mb-4">
              {slide.headline}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#EFE7D8]/90 font-light leading-relaxed mb-8 max-w-xl">
              {slide.subheading}
            </p>

            {/* Bengali Boutique Guarantee Callout */}
            <div className="mb-8 flex items-center gap-4 text-xs text-[#E2B657]/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CF9E38]"></span>
                Pre-Padded Blouse Cups
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CF9E38]"></span>
                2-Inch Margin For Alterations
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CF9E38]"></span>
                Kolkata Hand-Stitched
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onShopBlouses(slide.categoryTarget)}
                className="px-8 py-3.5 bg-gradient-to-r from-[#CF9E38] via-[#E2B657] to-[#B88628] hover:from-[#E2B657] hover:to-[#CF9E38] text-[#300611] font-bold text-sm tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCollection}
                className="px-8 py-3.5 bg-[#420A17]/70 hover:bg-[#5C0F21] text-[#EFE7D8] border border-[#CF9E38]/50 hover:border-[#CF9E38] font-semibold text-sm tracking-wider uppercase rounded-full backdrop-blur-xs transition-all cursor-pointer"
              >
                <span>{slide.ctaSecondary}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Slider Controls (Left / Right Arrows) */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#5C0F21] text-white/80 hover:text-white border border-white/20 transition-all cursor-pointer hidden sm:block"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#5C0F21] text-white/80 hover:text-white border border-white/20 transition-all cursor-pointer hidden sm:block"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-[#E2B657]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
