import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F8F3EA]/60 border-t border-[#EFE7D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#8C1935] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#CF9E38]" />
            <span>Verified Customer Love</span>
            <span>·</span>
            <span className="font-bengali">গ্রাহক প্রতিক্রিয়া</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#420A17] tracking-tight">
            Voices of Elegance
          </h2>
          <div className="w-20 h-0.5 bg-[#CF9E38] mx-auto mt-4 mb-3"></div>
          <p className="text-sm sm:text-base text-[#420A17]/80 font-light">
            Real experiences from women across Bengal and India celebrating their most precious moments in Sindaram Blouse.
          </p>
        </div>

        {/* 4 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#EFE7D8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#CF9E38] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs text-stone-400 ml-1">5.0</span>
                </div>

                {/* Review Title */}
                <h3 className="text-base font-bold font-serif text-[#420A17] mb-2 leading-snug">
                  "{review.title}"
                </h3>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#420A17]/85 font-light leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#EFE7D8] flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#CF9E38]"
                />
                <div>
                  <div className="text-xs font-bold text-[#420A17] flex items-center gap-1">
                    <span>{review.author}</span>
                    {review.verifiedBuyer && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    )}
                  </div>
                  <div className="text-[11px] text-[#8C1935]/80">
                    {review.location}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">
                    Purchased: {review.productName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stat Ticker */}
        <div className="mt-12 p-6 bg-[#420A17] text-[#EFE7D8] rounded-2xl flex flex-wrap items-center justify-around gap-6 text-center border border-[#CF9E38]/30">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E2B657]">15,000+</div>
            <div className="text-xs uppercase tracking-wider text-[#EFE7D8]/80 mt-1">Blouses Handcrafted</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E2B657]">4.9 / 5.0</div>
            <div className="text-xs uppercase tracking-wider text-[#EFE7D8]/80 mt-1">Average Customer Rating</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E2B657]">98.4%</div>
            <div className="text-xs uppercase tracking-wider text-[#EFE7D8]/80 mt-1">First-Trial Fit Accuracy</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-[#E2B657]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#EFE7D8]/80 mt-1">Hassle-Free Exchange</div>
          </div>
        </div>

      </div>
    </section>
  );
};
