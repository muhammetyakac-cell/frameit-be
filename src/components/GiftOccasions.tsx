'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Gift, ArrowRight, Heart } from 'lucide-react';

export const GiftOccasions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="occasions" className="py-16 md:py-24 bg-[#FCF9F5] border-b border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
            <Gift className="w-3.5 h-3.5 text-gold-600" />
            <span>{t.occasions.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-museum-dark">
            {t.occasions.title}
          </h2>
          <p className="text-base text-museum-charcoal/80">
            {t.occasions.subtitle}
          </p>
        </div>

        {/* Occasions 6-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.occasions.items.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-[#E8DACB] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Top Badge & Emoji */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl filter drop-shadow-xs">{item.emoji}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF5ED] text-museum-terracotta border border-[#E8DACB]">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl text-museum-dark group-hover:text-museum-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-gold-700 block mt-0.5">
                    {item.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-museum-charcoal/80 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#F4EBE1]">
                <a
                  href="#customizer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-museum-terracotta hover:text-museum-dark transition-colors"
                >
                  <span>Stel Dit Cadeau Samen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Gift Consultation Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF5ED] via-[#FFFDF9] to-[#FAF5ED] border-2 border-gold-400/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase text-museum-terracotta">
              <Heart className="w-3.5 h-3.5 fill-museum-terracotta text-museum-terracotta" />
              <span>Persoonlijk Cadeau-Advies</span>
            </div>
            <h4 className="font-serif font-bold text-lg sm:text-xl text-museum-dark">
              Weet je niet zeker welke foto&apos;s of stijl het beste passen?
            </h4>
            <p className="text-xs sm:text-sm text-museum-charcoal/80">
              Stuur ons je ideeën op WhatsApp en onze meester-inlijster maakt gratis een digitaal voorbeeld voor je!
            </p>
          </div>

          <a
            href="https://wa.me/32470123456?text=Hallo%20Frameit.be!%20Ik%20zoek%20een%20gepersonaliseerd%20cadeau%20en%20wil%20graag%20advies."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            Vraag Gratis Cadeau-Advies
          </a>
        </div>

      </div>
    </section>
  );
};
