'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Gift, Heart, ShieldCheck, Truck } from 'lucide-react';

export const UnboxingShowcase: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    nl: {
      tag: "De Complete Cadeau-ervaring",
      title: "Klaar om Harten te Verwarmen",
      desc: "Elk Frameit Living Mini Museum wordt met de grootste zorg beschermd en feestelijk verpakt in onze kenmerkende bordeauxrode luxedoos met gouden foliedruk en een handgestempelde lakzegel.",
      point1: "Luxe bewaardoos met goudfolie",
      point2: "Gepersonaliseerd wenskaartje met echte waszegel",
      point3: "Gedroogde gipskruid bloemetjes & satijnen lint",
      point4: "100% breukvrij en verzekerd verzonden via Bpost / DPD",
      cta: "Stel Nu Jouw Cadeau Samen",
    },
    fr: {
      tag: "L'Expérience Cadeau Complète",
      title: "Prêt à Émerveiller Vos Proches",
      desc: "Chaque Mini Musée Frameit Living est soigneusement protégé et présenté dans notre sublime coffret rigide bordeaux aux dorures raffinées, accompagné d'une carte scellée à la cire à la main.",
      point1: "Coffret rigide bordeaux avec marquage doré",
      point2: "Carte personnalisée scellée à la cire véritable",
      point3: "Fleurs séchées délicates & ruban de satin",
      point4: "Expédition sécurisée et assurée contre la casse par Bpost / DPD",
      cta: "Créer Mon Cadeau Dès Maintenant",
    },
    en: {
      tag: "The Complete Gifting Experience",
      title: "Ready to Warm Every Heart",
      desc: "Every Frameit Living Mini Museum is packaged like a royal treasure in our signature burgundy presentation box with gold foil lettering and a handmade wax-sealed message card.",
      point1: "Signature luxury burgundy gift box with gold foil",
      point2: "Personalized greeting card with authentic wax seal",
      point3: "Delicate baby's breath flowers & satin ribbon",
      point4: "100% break-proof insured packaging via Bpost / DPD",
      cta: "Customize Your Gift Today",
    },
  }[language] || {
    tag: "De Complete Cadeau-ervaring",
    title: "Klaar om Harten te Verwarmen",
    desc: "Elk Frameit Living Mini Museum wordt met de grootste zorg beschermd en feestelijk verpakt.",
    point1: "Luxe bewaardoos met goudfolie",
    point2: "Gepersonaliseerd wenskaartje met echte waszegel",
    point3: "Gedroogde gipskruid bloemetjes & satijnen lint",
    point4: "100% breukvrij en verzekerd verzonden via Bpost / DPD",
    cta: "Stel Nu Jouw Cadeau Samen",
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF5ED] border-b border-[#E8DACB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/gift_unboxing.jpg"
                alt="Frameit Living Luxury Unboxing Experience — Luxe Cadeaubox met Lakzegel"
                fill
                sizes="(max-width: 1024px) 92vw, 580px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold block">
                  Belgisch Vakmanschap
                </span>
                <span className="font-serif text-lg font-bold">
                  Onvergetelijk om te geven én te krijgen ♡
                </span>
              </div>
            </div>
          </div>

          {/* Details Right */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
              <Gift className="w-3.5 h-3.5 text-gold-600" />
              <span>{content.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-museum-dark leading-tight">
              {content.title}
            </h2>

            <p className="text-base text-museum-charcoal/80 leading-relaxed">
              {content.desc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E8DACB]">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center shrink-0 font-bold">
                  🎁
                </div>
                <span className="text-sm font-semibold text-museum-dark">{content.point1}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E8DACB]">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                  📜
                </div>
                <span className="text-sm font-semibold text-museum-dark">{content.point2}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E8DACB]">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-800 flex items-center justify-center shrink-0 font-bold">
                  🌸
                </div>
                <span className="text-sm font-semibold text-museum-dark">{content.point3}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E8DACB]">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                  🚚
                </div>
                <span className="text-sm font-semibold text-museum-dark">{content.point4}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#customizer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-museum-terracotta hover:bg-[#8C3E28] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                {content.cta}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

