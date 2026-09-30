import React, { useState, useEffect, useRef } from 'react';
import { FASHION_VIDEOS, FashionVideo } from '../data/fashionVideos';
import { Product } from '../types';
import { Play, Pause, Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { boutiqueAudio } from '../utils/audioSynth';

interface FashionVideoShowcaseProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onBuyNow: (product: Product, size: string) => void;
  onViewCollection: (category: string) => void;
  onOpenReelModal: (index: number) => void;
}

export const FashionVideoShowcase: React.FC<FashionVideoShowcaseProps> = ({
  products,
  onViewProduct,
  onBuyNow,
  onViewCollection,
  onOpenReelModal,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [inViewport, setInViewport] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track loop timers for all 10 cards
  const [progresses, setProgresses] = useState<{ [id: string]: number }>({});

  // IntersectionObserver to pause/play automatically when inside or outside viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Update progress for cards when in viewport & playing
  useEffect(() => {
    if (!inViewport || !isPlaying) return;

    const interval = setInterval(() => {
      setProgresses((prev) => {
        const next: { [id: string]: number } = { ...prev };
        FASHION_VIDEOS.forEach((v) => {
          const current = next[v.id] || 0;
          const step = (100 / (v.duration * 10)); // 100ms interval
          next[v.id] = (current + step) % 100;
        });
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [inViewport, isPlaying]);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    boutiqueAudio.toggle(nextMuted);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredVideos = FASHION_VIDEOS.filter((v) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bts') return v.id === 'video-08';
    if (activeFilter === 'traditional') return v.categoryTarget === 'traditional' || v.categoryTarget === 'cotton';
    if (activeFilter === 'festive') return v.categoryTarget === 'festive' || v.categoryTarget === 'wedding';
    if (activeFilter === 'designer') return v.categoryTarget === 'designer' || v.categoryTarget === 'party-wear';
    return true;
  });

  return (
    <section 
      ref={sectionRef} 
      id="fashion-reels" 
      className="py-16 sm:py-24 bg-[#1C040A] text-[#FDFBF7] relative overflow-hidden border-b-2 border-[#CF9E38]/30"
    >
      {/* Subtle Alpona background pattern */}
      <div className="absolute inset-0 opacity-5 alpona-border pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block with Exact Bengali Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-2 bg-[#5C0F21]/80 border border-[#CF9E38]/40 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest text-[#E2B657] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
              <span>10-Video Bengali Fashion Showcase</span>
              <span className="text-white/40">·</span>
              <span className="font-bengali">স্লিভলেস কালেকশন ২০২৬</span>
            </div>

            {/* Required Bengali Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#FDFBF7] tracking-tight leading-tight">
              সিন্দারাম-এর নতুন সাজ
            </h2>

            {/* Required Subheading */}
            <p className="text-sm sm:text-lg text-[#EFE7D8]/90 font-bengali mt-2 font-light leading-relaxed">
              শাড়ির সঙ্গে আপনার পছন্দের ব্লাউজ—ঐতিহ্য ও আধুনিকতার নতুন মেলবন্ধন
            </p>

            <div className="flex items-center gap-3 text-xs text-[#E2B657] font-medium mt-3">
              <span>✦ Featuring Adult Bengali Models (20–28 yrs)</span>
              <span>·</span>
              <span>Designer Sleeveless Cuts</span>
              <span>·</span>
              <span>Kolkata Heritage Locations</span>
            </div>
          </div>

          {/* Video Controls & Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2 rounded-full bg-[#420A17] hover:bg-[#5C0F21] text-[#EFE7D8] border border-[#CF9E38]/40 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? 'Pause All' : 'Play All'}</span>
            </button>

            <button
              onClick={toggleSound}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors border cursor-pointer ${
                isMuted
                  ? 'bg-[#420A17] text-stone-300 border-[#CF9E38]/30 hover:bg-[#5C0F21]'
                  : 'bg-[#CF9E38] text-[#300611] font-bold border-[#CF9E38]'
              }`}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isMuted ? 'Muted' : 'Sound ON'}</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-[#420A17] hover:bg-[#5C0F21] text-[#EFE7D8] border border-[#CF9E38]/40 transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-[#420A17] hover:bg-[#5C0F21] text-[#EFE7D8] border border-[#CF9E38]/40 transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {[
            { id: 'all', label: 'All 10 Fashion Videos', bengali: 'সব ১০টি ভিডিও' },
            { id: 'designer', label: 'Designer Sleeveless', bengali: 'ডিজাইনার স্লিভলেস' },
            { id: 'festive', label: 'Festive & Royal', bengali: 'উৎসব ও বিয়ে' },
            { id: 'traditional', label: 'Bengal Handloom & Garad', bengali: 'ঐতিহ্যবাহী তাঁত ও গরদ' },
            { id: 'bts', label: 'Photoshoot BTS', bengali: 'বিহাইন্ড দ্য সিন্স' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-[#CF9E38] text-[#300611] font-bold border-[#CF9E38] shadow-md'
                    : 'bg-[#420A17]/80 text-[#EFE7D8] border-[#5C0F21] hover:border-[#CF9E38]/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-bengali ${isActive ? 'text-[#300611]/80' : 'text-[#E2B657]'}`}>
                  ({tab.bengali})
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Multi-Card Track & Mobile Swipeable Video Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory"
        >
          {filteredVideos.map((video, idx) => {
            const relatedProduct = products.find((p) => p.id === video.relatedProductId) || products[0];
            const currentProg = progresses[video.id] || 0;
            const fullListIdx = FASHION_VIDEOS.findIndex((v) => v.id === video.id);

            return (
              <div
                key={video.id}
                className="w-[300px] sm:w-[340px] shrink-0 snap-start bg-[#26070E] rounded-3xl overflow-hidden border border-[#CF9E38]/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* 9:16 Portrait Video Viewport */}
                <div 
                  className="relative aspect-[9/16] w-full bg-[#1A0408] overflow-hidden cursor-pointer"
                  onClick={() => onOpenReelModal(fullListIdx)}
                >
                  {/* Model Image with Cinematic Smooth Pan/Zoom when playing */}
                  <img
                    src={video.poster}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`w-full h-full object-cover object-top transition-transform duration-6000 ease-out group-hover:scale-108 ${
                      inViewport && isPlaying ? 'scale-105' : 'scale-100'
                    }`}
                  />

                  {/* Gradient Scrims for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26070E] via-transparent to-black/60" />

                  {/* Top Bar on Card: Video number, Live Autoplay Indicator, Duration */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-[#420A17]/90 text-[#E2B657] font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#CF9E38]/40">
                        VIDEO {video.number}
                      </span>
                      {inViewport && isPlaying && (
                        <span className="flex items-center gap-1 bg-red-600/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          4K REEL
                        </span>
                      )}
                    </div>

                    <span className="bg-black/60 backdrop-blur-xs text-[#EFE7D8] text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full">
                      {video.duration}s
                    </span>
                  </div>

                  {/* Progress Line Indicator (loops automatically in 6-10s) */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-20">
                    <div 
                      className="h-full bg-gradient-to-r from-[#CF9E38] to-[#E2B657] transition-all duration-100"
                      style={{ width: `${currentProg}%` }}
                    />
                  </div>

                  {/* Adult Model Badge & Location info */}
                  <div className="absolute top-12 left-3.5 right-3.5 z-10">
                    <div className="inline-block bg-[#1C040A]/85 backdrop-blur-xs text-[#E2B657] text-[10px] font-medium px-2 py-0.5 rounded-md border border-[#CF9E38]/30">
                      Model: <strong>{video.modelAge}</strong> · {video.setting}
                    </div>
                  </div>

                  {/* Center Play Button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#420A17]/90 text-[#E2B657] border border-[#CF9E38] flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Video Title & Bengali Caption Overlay at Bottom of Viewport */}
                  <div className="absolute bottom-3 inset-x-3.5 z-10">
                    <div className="text-[11px] font-semibold text-[#E2B657] tracking-wider uppercase font-cinzel">
                      {video.title}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold font-bengali text-[#FDFBF7] leading-snug">
                      {video.bengaliTitle}
                    </h3>
                    <p className="text-[11px] text-[#EFE7D8]/90 font-bengali line-clamp-2 mt-0.5">
                      {video.bengaliCaption}
                    </p>
                  </div>
                </div>

                {/* Saree & Sleeveless Blouse Details */}
                <div className="p-4 bg-[#26070E] flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5 text-xs border-b border-[#5C0F21] pb-3">
                    <div className="text-[11px] text-stone-300 flex items-start gap-1">
                      <span className="text-[#E2B657] font-semibold">Saree:</span>
                      <span className="font-light truncate">{video.sareeLook}</span>
                    </div>
                    <div className="text-[11px] text-stone-300 flex items-start gap-1">
                      <span className="text-[#E2B657] font-semibold">Blouse:</span>
                      <span className="font-light truncate text-white">{video.blouseDetails}</span>
                    </div>
                  </div>

                  {/* Pinned Matching Blouse Product Preview */}
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#FDFBF7] line-clamp-1">{relatedProduct.name}</div>
                      <div className="text-[11px] text-[#E2B657] font-bengali">{relatedProduct.bengaliName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold font-mono text-[#E2B657]">₹{relatedProduct.offerPrice.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] text-stone-400 line-through font-mono">₹{relatedProduct.originalPrice.toLocaleString('en-IN')}</div>
                    </div>
                  </div>

                  {/* 3 Explicit Required CTAs */}
                  <div className="space-y-2 pt-1">
                    {/* CTA 1: এই ডিজাইনটি দেখুন (View this design) */}
                    <button
                      onClick={() => onViewProduct(relatedProduct)}
                      className="w-full py-2 px-3 bg-[#FDFBF7] hover:bg-white text-[#420A17] font-bengali font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#8C1935]" />
                      <span>এই ডিজাইনটি দেখুন</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      {/* CTA 2: কালেকশন দেখুন (View collection) */}
                      <button
                        onClick={() => onViewCollection(video.categoryTarget)}
                        className="py-2 px-2 bg-[#420A17] hover:bg-[#5C0F21] text-[#EFE7D8] border border-[#CF9E38]/40 font-bengali font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-[#E2B657]" />
                        <span>কালেকশন দেখুন</span>
                      </button>

                      {/* CTA 3: এখনই কিনুন (Buy now) */}
                      <button
                        onClick={() => onBuyNow(relatedProduct, relatedProduct.availableSizes[0] || '38')}
                        className="py-2 px-2 bg-gradient-to-r from-[#CF9E38] to-[#E2B657] hover:from-[#E2B657] hover:to-[#CF9E38] text-[#300611] font-bengali font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>এখনই কিনুন</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Watch Full Screen Reels CTA */}
        <div className="mt-8 p-4 bg-[#2A050E] rounded-2xl border border-[#CF9E38]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#CF9E38] text-[#300611] font-bold flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#FDFBF7] font-serif">
                Experience the 10-Reel Full Screen Vertical Showcase
              </div>
              <div className="text-xs text-[#EFE7D8]/80 font-bengali">
                প্রতিটি ভিডিওতে ক্লিক করে ফুল-স্ক্রিন মোডে ব্লাউজের সূক্ষ্ম সেলাই ও কারুকাজ উপভোগ করুন।
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenReelModal(0)}
            className="px-6 py-2.5 bg-gradient-to-r from-[#CF9E38] to-[#E2B657] text-[#300611] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Play Full Screen Showcase</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
