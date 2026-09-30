import React from 'react';
import { TRUST_PILLARS } from '../data/products';
import { Award, Palette, HeartHandshake, BadgePercent, Lock, Zap, RefreshCw } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Award className="w-6 h-6 text-[#CF9E38]" />,
    <Palette className="w-6 h-6 text-[#CF9E38]" />,
    <HeartHandshake className="w-6 h-6 text-[#CF9E38]" />,
    <BadgePercent className="w-6 h-6 text-[#CF9E38]" />,
    <Lock className="w-6 h-6 text-[#CF9E38]" />,
    <Zap className="w-6 h-6 text-[#CF9E38]" />,
    <RefreshCw className="w-6 h-6 text-[#CF9E38]" />,
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#8C1935] font-semibold">
            <span>সিন্দারাম প্রতিশ্রুতি</span>
            <span>·</span>
            <span>The Sindaram Promise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#420A17] tracking-tight">
            Why Choose Sindaram Blouse
          </h2>
          <div className="w-20 h-0.5 bg-[#CF9E38] mx-auto mt-4 mb-3"></div>
          <p className="text-sm sm:text-base text-[#420A17]/80 font-light">
            Every stitch is woven with reverence for Bengal's textile heritage, combining boutique couture with daily ease.
          </p>
        </div>

        {/* 7 Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-2xl bg-[#F8F3EA]/70 border border-[#EFE7D8] hover:border-[#CF9E38]/80 transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#420A17] flex items-center justify-center mb-4 shadow-sm">
                  {icons[idx]}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold font-serif text-[#420A17]">
                    {pillar.title}
                  </h3>
                </div>
                <div className="text-xs text-[#8C1935] font-bengali font-semibold mb-2">
                  {pillar.bengali}
                </div>
                <p className="text-xs sm:text-sm text-[#420A17]/80 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EFE7D8]/60 flex items-center justify-between text-[11px] text-[#B88628] font-medium">
                <span>Guaranteed Standard</span>
                <span>✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
