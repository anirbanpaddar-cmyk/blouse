import React from 'react';
import originalLogoImg from '../assets/images/sindaram_original_logo_1790774305880.jpg';

interface SindaramLogoProps {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const SindaramLogo: React.FC<SindaramLogoProps> = ({
  theme = 'light',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isDark = theme === 'dark';

  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Original High-End Brand Emblem Medallion */}
      <div className={`relative ${emblemSizes[size]} shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-[#CF9E38] via-[#E2B657] to-[#8C1935] shadow-lg group-hover:scale-105 group-hover:shadow-[#CF9E38]/20 transition-all duration-300`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-[#1C040A] flex items-center justify-center border border-[#CF9E38]/50">
          <img
            src={originalLogoImg}
            alt="SINDARAM BLOUSE Original Logo"
            className="w-full h-full object-cover object-center transform scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out"
          />
        </div>
        {/* Subtle royal ring shimmer */}
        <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span 
            className={`font-cinzel font-bold tracking-wider ${titleSizes[size]} ${
              isDark 
                ? 'text-[#FDFBF7] drop-shadow-sm' 
                : 'text-[#420A17]'
            }`}
          >
            SINDARAM
          </span>
          <span 
            className={`font-cinzel font-semibold tracking-widest text-xs sm:text-sm ${
              isDark 
                ? 'text-[#E2B657]' 
                : 'text-[#8C1935]'
            }`}
          >
            BLOUSE
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1 leading-none">
            <span 
              className={`text-[11px] sm:text-xs font-bengali font-medium tracking-wide ${
                isDark 
                  ? 'text-[#E2B657]' 
                  : 'text-[#8C1935]/90'
              }`}
            >
              সিন্দারাম ব্লাউজ
            </span>
            <span className="text-[9px] text-[#CF9E38]/60">·</span>
            <span 
              className={`text-[9px] sm:text-[10px] font-bengali uppercase tracking-wider font-semibold ${
                isDark 
                  ? 'text-[#EFE7D8]/70' 
                  : 'text-stone-500'
              }`}
            >
              আভিজাত্যের নিখুঁত সেলাই
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
