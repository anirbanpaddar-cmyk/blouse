import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Tag, ShieldCheck } from 'lucide-react';

import photo01RedBlack from '../assets/images/slider_photo_01_red_black_1790773863468.jpg';
import photo02TradWhite from '../assets/images/slider_photo_02_trad_white_1790773881931.jpg';
import photo03BlackGold from '../assets/images/slider_photo_03_black_gold_1790773908122.jpg';

interface SpecialOfferBannerProps {
  onShopCollection: () => void;
}

interface FashionSlide {
  id: string;
  image: string;
  badge: string;
  lookTitle: string;
  bengaliHeadline: string;
  bengaliCaption: string;
  modelAge: string;
  sareeLook: string;
  blouseDetails: string;
  discountTag: string;
}

const SLIDES: FashionSlide[] = [
  {
    id: 'slide-1',
    image: photo01RedBlack,
    badge: 'PHOTO 01 · LUXURY KOLKATA BOUTIQUE',
    lookTitle: 'RED SAREE + BLACK SLEEVELESS BLOUSE',
    bengaliHeadline: 'লাল শাড়ি ও কালো স্লিভলেস ব্লাউজের রাজকীয় রূপ',
    bengaliCaption: 'উজ্জ্বল লাল শাড়ির সাথে প্রিমিয়াম কালো ভেলভেট স্লিভলেস ব্লাউজ — আধুনিক বাঙালি নারীর সাহসী ও পরিশীলিত ফ্যাশন।',
    modelAge: '24 Years (Adult Bengali Model)',
    sareeLook: 'Crimson Red Pure Silk Saree',
    blouseDetails: 'Premium Black Sleeveless Velvet Blouse with Sweetheart Neck',
    discountTag: 'UP TO 30% OFF',
  },
  {
    id: 'slide-2',
    image: photo02TradWhite,
    badge: 'PHOTO 02 · KOLKATA HERITAGE MANSION',
    lookTitle: 'TRADITIONAL WHITE-RED SAREE + DEEP-MAROON BLOUSE',
    bengaliHeadline: 'ঐতিহ্যবাহী লাল পাড় সাদা গরদ ও ডিপ মেরুন আভিজাত্য',
    bengaliCaption: 'চিরন্তন লাল পাড় সাদা গরদ শাড়ির সাথে ডিপ-মেরুন র সিল্ক স্লিভলেস ব্লাউজ — দুর্গাপূজা ও বিবাহের এক অনন্য ঐতিহ্য।',
    modelAge: '26 Years (Adult Bengali Model)',
    sareeLook: 'Traditional White Garad Saree with Bold Red Border',
    blouseDetails: 'Deep-Maroon Sleeveless Designer Blouse with Golden Piping',
    discountTag: 'FESTIVE SPECIAL OFFER',
  },
  {
    id: 'slide-3',
    image: photo03BlackGold,
    badge: 'PHOTO 03 · PREMIUM FASHION STUDIO',
    lookTitle: 'BLACK SAREE + GOLDEN SLEEVELESS BLOUSE',
    bengaliHeadline: 'কালো শাড়ি ও সোনালী জারদৌসি স্লিভলেস গ্ল্যামার',
    bengaliCaption: 'সান্ধ্য পার্টির মোহনীয় সাজে কালো শাড়ির সঙ্গে জটিল সোনালী জারদৌসি কাজের স্লিভলেস ডিজাইনার ব্লাউজ।',
    modelAge: '25 Years (Adult Bengali Model)',
    sareeLook: 'Midnight Black Sheer Saree',
    blouseDetails: 'Handcrafted Golden Embroidered Sleeveless Designer Blouse',
    discountTag: 'LIMITED EDITION',
  },
];

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({
  onShopCollection,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch coordinates for mobile swipe gesture
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Automatically change the image every 4.5 seconds with seamless loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  // Mobile Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = SLIDES[currentSlide];

  return (
    <section 
      id="special-offer" 
      className="py-12 sm:py-16 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Photo Animated Fashion Slider Container */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#CF9E38]/40 bg-[#1C040A] text-[#FDFBF7] select-none group min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Layered Animated 3-Photo Backgrounds with Smooth Fade & Ken Burns Zoom */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {SLIDES.map((item, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Image with Ken Burns subtle zoom-in and slight cinematic movement */}
                  <img
                    src={item.image}
                    alt={item.lookTitle}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center sm:object-right-top transition-transform duration-7000 ease-out ${
                      isActive ? 'scale-108 translate-x-1 -translate-y-0.5' : 'scale-100'
                    }`}
                  />

                  {/* Gradient Scrim Overlays for High Legibility across all screens */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#20050B] via-[#20050B]/85 to-transparent lg:w-3/4" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C040A] via-transparent to-black/40" />
                </div>
              );
            })}
          </div>

          {/* Subtle Alpona Border Motif Overlay */}
          <div className="absolute inset-0 opacity-10 alpona-border pointer-events-none z-10" />

          {/* Top Bar inside Slider: Look Indicator & Pause Status */}
          <div className="relative z-20 p-5 sm:p-8 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-[#5C0F21]/85 border border-[#CF9E38]/50 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E2B657]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E2B657] uppercase">
                {slide.badge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs text-[#EFE7D8]/80 font-medium">
                {slide.modelAge}
              </span>

              {isPaused && (
                <span className="bg-black/60 backdrop-blur-xs text-[#E2B657] text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#CF9E38]/30">
                  PAUSED ON HOVER
                </span>
              )}
            </div>
          </div>

          {/* Middle & Content Area: Exact Required Bengali Overlays & Headlines */}
          <div className="relative z-20 p-5 sm:p-12 lg:p-14 max-w-2xl">
            
            {/* EXACT REQUIRED TEXT OVERLAY: “সিন্দারাম ব্লাউজ” */}
            <div className="inline-block text-xs uppercase tracking-widest text-[#E2B657] font-semibold mb-2">
              <span className="text-xl sm:text-2xl font-bold font-cinzel text-white drop-shadow-md">
                সিন্দারাম ব্লাউজ
              </span>
              <span className="ml-2 text-xs font-mono bg-[#420A17] text-[#E2B657] px-2 py-0.5 rounded border border-[#CF9E38]/40">
                0{currentSlide + 1} / 03
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FDFBF7] tracking-tight leading-tight mb-3">
              {slide.bengaliHeadline}
            </h2>

            {/* Subheading / Bengali Caption */}
            <p className="text-sm sm:text-base text-[#EFE7D8]/95 font-bengali font-light leading-relaxed mb-6">
              {slide.bengaliCaption}
            </p>

            {/* Look Details Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-[#E2B657]">
              <span className="bg-[#420A17]/80 px-2.5 py-1 rounded-md border border-[#CF9E38]/30 font-medium">
                Saree: {slide.sareeLook}
              </span>
              <span className="bg-[#420A17]/80 px-2.5 py-1 rounded-md border border-[#CF9E38]/30 font-semibold text-white">
                Blouse: {slide.blouseDetails}
              </span>
            </div>

            {/* Discount Callout & CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onShopCollection}
                className="px-8 py-4 bg-gradient-to-r from-[#CF9E38] via-[#E2B657] to-[#B88628] hover:from-[#E2B657] hover:to-[#CF9E38] text-[#300611] font-bold text-xs uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer font-bengali"
              >
                <span>নতুন কালেকশন দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#EFE7D8]/90 font-medium">
                <Tag className="w-4 h-4 text-[#E2B657]" />
                <span>কোড: <strong className="text-[#E2B657] font-mono bg-black/50 px-2 py-0.5 rounded border border-[#CF9E38]/30">DURGAPUJA20</strong> (২০% অতিরিক্ত ছাড়)</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Left/Right Navigation Arrows & Three Small Slider Dots */}
          <div className="relative z-20 p-5 sm:p-8 flex items-center justify-between border-t border-[#5C0F21]/60 bg-gradient-to-t from-black/80 to-transparent">
            
            {/* Three Small Slider Dots */}
            <div className="flex items-center gap-2.5">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-8 bg-[#E2B657] shadow-sm'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
              <span className="text-[11px] text-stone-400 font-mono ml-2 hidden sm:inline">
                Auto-switches every 4.5s
              </span>
            </div>

            {/* Left / Right Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Photo"
                className="p-2.5 rounded-full bg-[#420A17]/90 hover:bg-[#5C0F21] text-[#EFE7D8] hover:text-white border border-[#CF9E38]/40 transition-colors cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Photo"
                className="p-2.5 rounded-full bg-[#420A17]/90 hover:bg-[#5C0F21] text-[#EFE7D8] hover:text-white border border-[#CF9E38]/40 transition-colors cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
