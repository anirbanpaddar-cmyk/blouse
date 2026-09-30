import React, { useState, useEffect, useRef } from 'react';
import { FashionVideo } from '../data/fashionVideos';
import { Product } from '../types';
import { X, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, ShoppingBag, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { boutiqueAudio } from '../utils/audioSynth';

interface VideoReelModalProps {
  videos: FashionVideo[];
  products: Product[];
  currentVideoIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectVideo: (index: number) => void;
  onViewProduct: (product: Product) => void;
  onBuyNow: (product: Product, size: string) => void;
  onViewCollection: (category: string) => void;
}

export const VideoReelModal: React.FC<VideoReelModalProps> = ({
  videos,
  products,
  currentVideoIndex,
  isOpen,
  onClose,
  onSelectVideo,
  onViewProduct,
  onBuyNow,
  onViewCollection,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const video = videos[currentVideoIndex];
  const relatedProduct = products.find((p) => p.id === video?.relatedProductId) || products[0];

  useEffect(() => {
    if (!isOpen) {
      boutiqueAudio.stop();
      return;
    }

    setProgress(0);
    setIsPlaying(true);
  }, [isOpen, currentVideoIndex]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const intervalMs = 50;
    const durationMs = (video?.duration || 8) * 1000;
    const step = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next video automatically or loop
          const nextIdx = (currentVideoIndex + 1) % videos.length;
          onSelectVideo(nextIdx);
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, currentVideoIndex, video?.duration, videos.length, onSelectVideo]);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    boutiqueAudio.toggle(nextMuted);
  };

  const handlePrev = () => {
    const prevIdx = currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
    onSelectVideo(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentVideoIndex + 1) % videos.length;
    onSelectVideo(nextIdx);
  };

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full h-full sm:h-[92vh] sm:max-w-md bg-[#1C040A] sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#CF9E38]/30 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Story Progress Indicators at Top */}
        <div className="absolute top-3 inset-x-3 z-30 flex gap-1">
          {videos.map((v, i) => {
            let width = '0%';
            if (i < currentVideoIndex) width = '100%';
            else if (i === currentVideoIndex) width = `${progress}%`;

            return (
              <div
                key={v.id}
                onClick={() => onSelectVideo(i)}
                className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
              >
                <div 
                  className="h-full bg-[#E2B657] transition-all duration-75"
                  style={{ width }}
                />
              </div>
            );
          })}
        </div>

        {/* Top Floating Bar: Brand & Controls */}
        <div className="absolute top-7 inset-x-4 z-30 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="bg-[#420A17]/80 text-[#E2B657] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#CF9E38]/30 backdrop-blur-xs font-mono">
              VIDEO {video.number} / 10
            </span>
            <span className="text-xs font-serif font-bold text-white/90 drop-shadow-md">
              SINDARAM REEL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-stone-300" /> : <Volume2 className="w-4 h-4 text-[#E2B657]" />}
            </button>
            <button
              onClick={() => {
                boutiqueAudio.stop();
                onClose();
              }}
              className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Video Presentation Canvas / Viewport */}
        <div 
          className="relative flex-1 w-full overflow-hidden cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Animated Model Video Poster with cinematic pan */}
          <img
            src={video.poster}
            alt={video.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover object-top transition-transform duration-7000 ease-out ${
              isPlaying ? 'scale-110 translate-y-[-2%]' : 'scale-100'
            }`}
          />

          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C040A] via-transparent to-black/50" />

          {/* Pause/Play Center Icon Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-2xs">
              <div className="w-16 h-16 rounded-full bg-[#420A17]/90 text-[#E2B657] flex items-center justify-center shadow-2xl border border-[#CF9E38]">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Left / Right Screen Tap navigation zones */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-all opacity-70 hover:opacity-100 hidden sm:block"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-all opacity-70 hover:opacity-100 hidden sm:block"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Info Overlay & Pinned Shopping Card */}
        <div className="relative z-30 p-4 sm:p-5 bg-gradient-to-t from-[#1C040A] via-[#1C040A]/95 to-transparent space-y-3">
          
          {/* Model info & Bengali caption */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#CF9E38]/20 text-[#E2B657] text-[10px] font-bold px-2 py-0.5 rounded border border-[#CF9E38]/30">
                Adult Model: {video.modelAge}
              </span>
              <span className="text-[10px] text-stone-300 font-medium">
                {video.setting}
              </span>
            </div>

            <h3 className="text-base font-bold font-serif text-[#FDFBF7] flex items-center gap-1.5">
              <span>{video.title}</span>
              <span className="text-[#E2B657] font-bengali text-sm font-semibold">({video.bengaliTitle})</span>
            </h3>

            <p className="text-xs text-[#EFE7D8]/90 font-bengali leading-relaxed mt-1">
              {video.bengaliCaption}
            </p>
          </div>

          {/* Pinned Product Card for Instant Purchase */}
          <div className="p-3 bg-[#420A17]/90 rounded-2xl border border-[#CF9E38]/40 shadow-xl flex items-center justify-between gap-3 backdrop-blur-md">
            <img
              src={relatedProduct.images.front}
              alt={relatedProduct.name}
              className="w-12 h-14 object-cover rounded-lg border border-[#CF9E38]/40 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-[#FDFBF7] truncate">
                {relatedProduct.name}
              </div>
              <div className="text-[11px] text-[#E2B657] font-bengali truncate">
                {relatedProduct.bengaliName}
              </div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-sm font-bold text-white font-mono">
                  ₹{relatedProduct.offerPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-stone-400 line-through font-mono">
                  ₹{relatedProduct.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#E2B657] font-semibold">
                  {relatedProduct.discountPercentage}% OFF
                </span>
              </div>
            </div>
          </div>

          {/* The 3 Required CTAs */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              onClick={() => {
                boutiqueAudio.stop();
                onClose();
                onViewProduct(relatedProduct);
              }}
              className="py-2.5 px-2 bg-[#F8F3EA] hover:bg-white text-[#420A17] font-bengali font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#8C1935]" />
              <span>এই ডিজাইনটি দেখুন</span>
            </button>

            <button
              onClick={() => {
                boutiqueAudio.stop();
                onClose();
                onViewCollection(video.categoryTarget);
              }}
              className="py-2.5 px-2 bg-[#5C0F21] hover:bg-[#74132B] text-[#EFE7D8] border border-[#CF9E38]/40 font-bengali font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E2B657]" />
              <span>কালেকশন দেখুন</span>
            </button>

            <button
              onClick={() => {
                boutiqueAudio.stop();
                onClose();
                onBuyNow(relatedProduct, relatedProduct.availableSizes[0] || '38');
              }}
              className="py-2.5 px-2 bg-gradient-to-r from-[#CF9E38] to-[#E2B657] text-[#300611] font-bengali font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>এখনই কিনুন</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
