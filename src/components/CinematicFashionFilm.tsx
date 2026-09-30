import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, Eye, ShoppingBag, Maximize2 } from 'lucide-react';
import { boutiqueAudio } from '../utils/audioSynth';
import { Product } from '../types';

import wideMasterImg from '../assets/images/cinematic_wide_master_1790773474933.jpg';
import neckFrontImg from '../assets/images/cinematic_neck_front_1790773495607.jpg';
import backLatkanImg from '../assets/images/cinematic_back_latkan_1790773515206.jpg';
import studioBtsImg from '../assets/images/cinematic_studio_bts_1790773528968.jpg';
import tradMaroonImg from '../assets/images/reel_02_trad_look_1790773035004.jpg';

interface CinematicFashionFilmProps {
  products: Product[];
  onExploreCollection: (category?: string) => void;
  onViewProduct: (product: Product) => void;
  onBuyNow: (product: Product, size: string) => void;
}

interface FilmScene {
  id: string;
  timeRange: [number, number]; // seconds [start, end]
  title: string;
  bengaliTitle: string;
  subtitle: string;
  image: string;
  modelLook: string;
  blouseFocus: string;
  panDirection: string; // CSS animation class
}

const FILM_SCENES: FilmScene[] = [
  {
    id: 'scene-1',
    timeRange: [0, 4.0],
    title: 'THE BOUTIQUE ENSEMBLE',
    bengaliTitle: 'আভিজাত্যের সূচনা — গ্র্যান্ড এন্সেম্বল',
    subtitle: '4–5 Adult Bengali Models (20–28 yrs) in Kolkata Haute Couture Studio',
    image: wideMasterImg,
    modelLook: 'Red, White-Red, Black-Gold & Pastel Sarees',
    blouseFocus: 'Multi-Model Sleeveless Silhouette Showcase',
    panDirection: 'scale-105 translate-y-0',
  },
  {
    id: 'scene-2',
    timeRange: [4.0, 7.5],
    title: 'RED & BLACK SLEEVELESS',
    bengaliTitle: 'লাল শাড়ি ও কালো স্লিভলেস ব্লাউজের মোহিনী রূপ',
    subtitle: 'Front Sweetheart Cut & Intricate Antique Gold Threadwork',
    image: neckFrontImg,
    modelLook: 'Vibrant Crimson Red Silk Saree',
    blouseFocus: 'Black Velvet Sleeveless Blouse with Zardozi Neckline',
    panDirection: 'scale-110 -translate-y-2',
  },
  {
    id: 'scene-3',
    timeRange: [7.5, 11.0],
    title: 'WHITE-RED BENGALI TRADITION',
    bengaliTitle: 'ঐতিহ্যবাহী লাল পাড় গরদ ও ডিপ মেরুন ব্লাউজ',
    subtitle: 'Heritage Kolkata Mansion Setting with Warm Ambient Lighting',
    image: tradMaroonImg,
    modelLook: 'White Garad Silk Saree with Bold Red Border',
    blouseFocus: 'Deep Maroon Raw Silk Sleeveless Blouse with Gold Piping',
    panDirection: 'scale-108 translate-x-1',
  },
  {
    id: 'scene-4',
    timeRange: [11.0, 14.5],
    title: 'ARTISANAL BACK CUT-OUT',
    bengaliTitle: 'ব্যাক ডিজাইন — মুক্ত ডোরি ও সোনালী ঝুলন্ত লটকন',
    subtitle: 'Close-Up of Deep Back Teardrop Silhouette & Handcrafted Tassels',
    image: backLatkanImg,
    modelLook: 'Midnight Black & Royal Blue Sheer Drapes',
    blouseFocus: 'Signature Cut-Out Back with Beaded Latkan Tassels',
    panDirection: 'scale-112 -translate-y-3',
  },
  {
    id: 'scene-5',
    timeRange: [14.5, 18.0],
    title: 'STUDIO FINALE & SINDARAM FRAME',
    bengaliTitle: 'স্টুডিও ফটোশুট ফিনালে — সিন্দারাম ব্লাউজ',
    subtitle: 'Professional Kolkata Fashion Campaign Finale Frame',
    image: studioBtsImg,
    modelLook: 'Complete Festive & Bridal Ensemble',
    blouseFocus: 'SINDARAM BLOUSE Couture Branding',
    panDirection: 'scale-105 translate-y-1',
  },
];

const TOTAL_DURATION = 18.0; // 18 seconds loop

export const CinematicFashionFilm: React.FC<CinematicFashionFilmProps> = ({
  products,
  onExploreCollection,
  onViewProduct,
  onBuyNow,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [inViewport, setInViewport] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Featured related product (Designer Embroidered Blouse)
  const featuredProduct = products.find((p) => p.id === 'sb-001') || products[0];

  // IntersectionObserver: Autoplay only when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 18-second video sequence ticker (updates at ~25fps / 40ms interval)
  useEffect(() => {
    if (!inViewport || !isPlaying) return;

    const intervalMs = 40;
    const stepSeconds = intervalMs / 1000;

    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + stepSeconds;
        if (next >= TOTAL_DURATION) {
          return 0; // Seamless loop back to 0
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [inViewport, isPlaying]);

  // Update current active scene according to time
  useEffect(() => {
    const sceneIdx = FILM_SCENES.findIndex(
      (s) => currentTime >= s.timeRange[0] && currentTime < s.timeRange[1]
    );
    if (sceneIdx !== -1 && sceneIdx !== activeSceneIndex) {
      setActiveSceneIndex(sceneIdx);
    }
  }, [currentTime, activeSceneIndex]);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    boutiqueAudio.toggle(nextMuted);
  };

  const jumpToScene = (sceneIdx: number) => {
    const targetScene = FILM_SCENES[sceneIdx];
    if (targetScene) {
      setCurrentTime(targetScene.timeRange[0]);
      setActiveSceneIndex(sceneIdx);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const currentScene = FILM_SCENES[activeSceneIndex];
  const progressPercent = (currentTime / TOTAL_DURATION) * 100;

  return (
    <section 
      ref={sectionRef} 
      id="cinematic-film" 
      className="py-12 sm:py-20 bg-[#140206] text-[#FDFBF7] relative overflow-hidden border-b-2 border-[#CF9E38]/30"
    >
      {/* Background Decorative Alpona Glow */}
      <div className="absolute inset-0 opacity-10 alpona-border pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2 bg-[#5C0F21] border border-[#CF9E38]/50 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-[#E2B657] font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
            <span>Kolkata Boutique Fashion Film · 4K Master Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#FDFBF7] tracking-tight">
            সিন্দারাম ব্লাউজ — সিনেমাটিক ফ্যাশন ফিল্ম
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#CF9E38] to-transparent mx-auto mt-4 mb-3" />

          <p className="text-sm sm:text-base text-[#EFE7D8]/85 font-bengali font-light">
            ঐতিহ্যের সঙ্গে আধুনিকতার নতুন সাজ — ৪-৫ জন প্রাপ্তবয়স্ক নারীর রাজকীয় স্লিভলেস কালেকশন
          </p>
        </div>

        {/* 16:9 Widescreen Desktop / Clean Mobile Croppable Cinema Box */}
        <div 
          ref={containerRef}
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#CF9E38]/40 bg-black group select-none flex flex-col justify-between"
        >
          {/* Layered Cinematic Scenes with Crossfade */}
          <div className="absolute inset-0">
            {FILM_SCENES.map((scene, idx) => {
              const isActive = idx === activeSceneIndex;
              return (
                <div
                  key={scene.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={scene.image}
                    alt={scene.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                      isPlaying && inViewport ? scene.panDirection : 'scale-100'
                    }`}
                  />
                  {/* Cinematic Vignette & Text Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/75" />
                </div>
              );
            })}
          </div>

          {/* Top Bar: Brand, 4K Live Badge, Timecode & Sound/Fullscreen Controls */}
          <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#CF9E38] to-[#8C1935] flex items-center justify-center text-[#300611] font-serif font-bold text-lg shadow-md border border-[#CF9E38]/40">
                S
              </div>
              <div>
                <div className="text-sm sm:text-base font-cinzel font-bold tracking-wider text-[#FDFBF7] drop-shadow-md">
                  SINDARAM BLOUSE
                </div>
                <div className="text-[11px] text-[#E2B657] font-bengali -mt-0.5">
                  সিন্দারাম ব্লাউজ · সিনেমাটিক ক্যাম্পেইন
                </div>
              </div>

              {inViewport && isPlaying && (
                <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  4K FASHION FILM
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Timecode 0:00 / 0:18 */}
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#EFE7D8] border border-[#CF9E38]/30">
                {Math.floor(currentTime).toString().padStart(2, '0')}:
                {Math.floor((currentTime % 1) * 10).toString()} / 00:18s
              </div>

              {/* Sound Toggle (Starts Muted) */}
              <button
                onClick={toggleSound}
                className={`p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all border cursor-pointer ${
                  isMuted
                    ? 'bg-black/60 text-stone-300 border-white/20 hover:bg-black/80'
                    : 'bg-[#CF9E38] text-[#300611] font-bold border-[#CF9E38] shadow-md'
                }`}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Sound ON'}</span>
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer hidden sm:block"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause Trigger Zone */}
          <div 
            className="relative z-20 flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying && (
              <div className="w-20 h-20 rounded-full bg-[#420A17]/90 text-[#E2B657] border-2 border-[#CF9E38] flex items-center justify-center shadow-2xl backdrop-blur-xs transform hover:scale-105 transition-transform">
                <Play className="w-10 h-10 fill-current ml-1" />
              </div>
            )}
          </div>

          {/* Bottom Area: Exact Bengali Overlays, 5 Look Markers, Scrubber & CTA */}
          <div className="relative z-20 p-4 sm:p-8 bg-gradient-to-t from-black via-black/90 to-transparent space-y-4">
            
            {/* Exact Required Text Overlay */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-widest text-[#E2B657] font-semibold mb-1 flex items-center gap-2">
                  <span className="bg-[#420A17] px-2 py-0.5 rounded border border-[#CF9E38]/40">
                    Scene {activeSceneIndex + 1} of 5
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="font-mono text-stone-300">{currentScene.title}</span>
                </div>

                {/* EXACT REQUIRED TEXT OVERLAY: “সিন্দারাম ব্লাউজ” */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FDFBF7] tracking-tight leading-tight">
                  সিন্দারাম ব্লাউজ
                </h3>

                {/* EXACT REQUIRED MAIN CAPTION: “ঐতিহ্যের সঙ্গে আধুনিকতার নতুন সাজ” */}
                <p className="text-sm sm:text-xl text-[#E2B657] font-bengali font-semibold mt-1">
                  “ঐতিহ্যের সঙ্গে আধুনিকতার নতুন সাজ”
                </p>

                {/* Dynamic Scene Detail */}
                <div className="mt-2 text-xs text-[#EFE7D8]/90 font-light flex flex-wrap items-center gap-2">
                  <span className="bg-black/50 px-2 py-0.5 rounded border border-white/10">
                    {currentScene.modelLook}
                  </span>
                  <span className="text-white/40">|</span>
                  <span className="text-stone-300">
                    {currentScene.blouseFocus}
                  </span>
                </div>
              </div>

              {/* EXACT REQUIRED CTA BUTTON: “নতুন কালেকশন দেখুন” */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => onExploreCollection('designer')}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#CF9E38] via-[#E2B657] to-[#B88628] hover:from-[#E2B657] hover:to-[#CF9E38] text-[#300611] font-bengali font-bold text-sm tracking-wide rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#300611]" />
                  <span>নতুন কালেকশন দেখুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onViewProduct(featuredProduct)}
                  className="px-4 py-3 bg-[#420A17]/80 hover:bg-[#5C0F21] text-[#EFE7D8] border border-[#CF9E38]/50 rounded-full text-xs font-semibold backdrop-blur-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E2B657]" />
                  <span>ব্লাউজ বিবরণ</span>
                </button>
              </div>
            </div>

            {/* 5-Scene Navigation Chapters */}
            <div className="grid grid-cols-5 gap-1.5 pt-2">
              {FILM_SCENES.map((scene, idx) => {
                const isCurrent = idx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => jumpToScene(idx)}
                    className={`text-left p-1.5 sm:p-2 rounded-xl transition-all cursor-pointer border ${
                      isCurrent
                        ? 'bg-[#420A17] border-[#CF9E38] shadow-md'
                        : 'bg-black/40 border-white/10 hover:border-white/30 text-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono">
                      <span className={isCurrent ? 'text-[#E2B657] font-bold' : ''}>0{idx + 1}</span>
                      <span className="hidden sm:inline text-stone-400">{scene.timeRange[0]}s</span>
                    </div>
                    <div className={`text-[10px] sm:text-xs font-medium truncate ${isCurrent ? 'text-white' : 'text-stone-300'}`}>
                      {scene.title.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Video Progress Scrubber */}
            <div className="relative w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-gradient-to-r from-[#CF9E38] via-[#E2B657] to-[#B88628] transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

          </div>

        </div>

        {/* 5 Saree & Sleeveless Blouse Look Breakdown Cards */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
          {[
            {
              look: 'Look 01: Red & Black',
              saree: 'Crimson Red Saree',
              blouse: 'Black Sleeveless Velvet Blouse',
              bengali: 'লাল শাড়ি + কালো ব্লাউজ',
              sceneIdx: 1,
            },
            {
              look: 'Look 02: Bengali Garad',
              saree: 'White Saree Red Border',
              blouse: 'Deep Maroon Sleeveless Silk',
              bengali: 'গরদ শাড়ি + মেরুন ব্লাউজ',
              sceneIdx: 2,
            },
            {
              look: 'Look 03: Black & Gold',
              saree: 'Midnight Black Saree',
              blouse: 'Golden Sleeveless Zardozi',
              bengali: 'কালো শাড়ি + গোল্ডেন ব্লাউজ',
              sceneIdx: 3,
            },
            {
              look: 'Look 04: Pastel Organza',
              saree: 'Pastel Blush Pink Saree',
              blouse: 'Embroidered Sleeveless Cut',
              bengali: 'প্যাস্টেল শাড়ি + এমব্রয়ডারি',
              sceneIdx: 0,
            },
            {
              look: 'Look 05: Royal Blue',
              saree: 'Royal Blue Satin Silk',
              blouse: 'Contrasting Gold Benarasi',
              bengali: 'নীল শাড়ি + কন্ট্রাস্ট ব্লাউজ',
              sceneIdx: 4,
            },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => jumpToScene(item.sceneIdx)}
              className="p-3 rounded-2xl bg-[#1C040A] border border-[#CF9E38]/30 hover:border-[#CF9E38] text-left transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="text-[10px] text-[#E2B657] font-mono font-bold uppercase tracking-wider">
                {item.look}
              </div>
              <div className="text-xs font-bold font-serif text-[#FDFBF7] mt-0.5">
                {item.saree}
              </div>
              <div className="text-[11px] text-stone-300 font-light mt-0.5">
                {item.blouse}
              </div>
              <div className="text-[10px] text-[#E2B657] font-bengali mt-1">
                {item.bengali} &rarr;
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
