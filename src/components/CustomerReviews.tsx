'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Star, Heart, Quote, CheckCircle2 } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
            <Heart className="w-3.5 h-3.5 text-museum-rose fill-museum-rose" />
            <span>{t.reviews.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-museum-dark">
            {t.reviews.title}
          </h2>
          <p className="text-base text-museum-charcoal/80">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.reviews.items.map((review, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-[#E8DACB] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 sterren beoordeling">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.reviews.verifiedBadge}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-museum-charcoal leading-relaxed italic font-serif">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F4EBE1] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-museum-dark">{review.author}</div>
                  <span className="text-xs text-museum-wood/80">{review.city}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-museum-terracotta bg-[#FAF5ED] px-3 py-1 rounded-full border border-[#E8DACB]">
                    {review.frame}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
