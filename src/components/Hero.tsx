'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Heart, Star, ShieldCheck, ArrowRight, Lightbulb, Package, Gift } from 'lucide-react';

export const Hero: React.FC<{ customTitle?: React.ReactNode }> = ({ customTitle }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE6] to-[#FAF7F2] py-12 md:py-20 lg:py-24 border-b border-[#E8DACB]">
      {/* Warm ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-gold-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#E8A598]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-400/60 shadow-xs text-xs sm:text-sm font-semibold text-museum-terracotta">
              <Gift className="w-4 h-4 text-gold-500" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline with semantic SEO expansion */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-museum-dark leading-[1.15]">
              {customTitle ? customTitle : (<><span className="block italic text-museum-terracotta">{t.hero.titleLine1}</span><span className="block text-museum-dark mt-1">{t.hero.titleLine2}</span></>)}
              <span className="sr-only"> — Frameit Living: Hét Originele Gepersonaliseerde Cadeau & 3D Mini Memory Museum in België</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-museum-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#customizer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-museum-terracotta to-[#8C3E28] hover:from-[#8C3E28] hover:to-[#6E2E1C] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>{t.hero.ctaCustomize}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#occasions"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/80 hover:bg-white border border-[#DCC7B3] text-museum-charcoal font-semibold text-base shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Gift className="w-4 h-4 text-museum-terracotta" />
                <span>{t.nav.occasions}</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#E8DACB] text-xs font-medium text-museum-charcoal">
                <Heart className="w-4 h-4 text-museum-rose fill-museum-rose shrink-0" />
                <span className="truncate">{t.hero.pills.handmade}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#E8DACB] text-xs font-medium text-museum-charcoal">
                <Lightbulb className="w-4 h-4 text-gold-500 fill-gold-400 shrink-0" />
                <span className="truncate">{t.hero.pills.ledLight}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#E8DACB] text-xs font-medium text-museum-charcoal">
                <Sparkles className="w-4 h-4 text-museum-terracotta shrink-0" />
                <span className="truncate">{t.hero.pills.customFigures}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#E8DACB] text-xs font-medium text-museum-charcoal">
                <Package className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span className="truncate">{t.hero.pills.belgiumDelivery}</span>
              </div>
            </div>

            {/* Social Proof Stars */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center text-amber-400" aria-label="5 van de 5 sterren">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-museum-charcoal/75 font-medium">
                {t.hero.trustReviews}
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Showcase Frame */}
            <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-white via-[#FAF5ED] to-[#EFE4D6] shadow-luxury border-2 border-gold-400/40 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Spotlight Glow simulation on top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-yellow-200/50 blur-xl rounded-full pointer-events-none" />

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-white/60">
                <Image
                  src="/images/museum_couple.jpg"
                  alt="Frameit Living 3D Mini Memory Museum — Gepersonaliseerd Huwelijkscadeau & Trouwlijst met LED Verlichting"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 520px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Tag Top Left */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/50 shadow-md flex items-center gap-1.5 text-xs font-bold text-museum-dark">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>{t.hero.floatingCard.tag}</span>
                </div>

                {/* Floating Lighting Badge Top Right */}
                <div className="absolute top-3 right-3 bg-museum-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-300/40 text-xs font-semibold text-yellow-300 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                  <span>Warme LED Spots</span>
                </div>
              </div>

              {/* Bottom Card Caption */}
              <div className="mt-4 px-2 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-museum-dark text-base">
                    {t.hero.floatingCard.title}
                  </p>
                  <p className="text-xs text-museum-wood/80 font-medium">
                    {t.hero.floatingCard.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">Vanaf / Dès</span>
                  <span className="font-serif font-bold text-lg text-museum-terracotta">€69,00</span>
                </div>
              </div>

            </div>

            {/* Small Floating Unboxing Teaser Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-2.5 shadow-xl border border-[#E8DACB] items-center gap-3 max-w-xs animate-float">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-gold-300">
                <Image
                  src="/images/gift_unboxing.jpg"
                  alt="Frameit Living Luxe Geschenkdoos met Lakzegel"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="text-left pr-2">
                <span className="text-[11px] font-bold text-museum-terracotta block">
                  Luxe Cadeaubox + Zegel
                </span>
                <span className="text-[10px] text-gray-500 block">
                  Klaar om direct cadeau te geven ♡
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};



