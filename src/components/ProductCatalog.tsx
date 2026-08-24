'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Heart, Check, ArrowRight, Star } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'wedding' | 'family' | 'baby' | 'anniversary'>('all');

  const products = [
    {
      id: 'wedding',
      category: 'wedding',
      title: t.catalog.products.wedding.title,
      description: t.catalog.products.wedding.desc,
      price: '€89,00',
      image: '/images/museum_couple.jpg',
      badge: t.catalog.badgeBestseller,
      features: [
        t.catalog.products.wedding.feat1,
        t.catalog.products.wedding.feat2,
        t.catalog.products.wedding.feat3,
      ],
    },
    {
      id: 'family',
      category: 'family',
      title: t.catalog.products.family.title,
      description: t.catalog.products.family.desc,
      price: '€99,00',
      image: '/images/family_museum.jpg',
      badge: t.catalog.badgeBestseller,
      features: [
        t.catalog.products.family.feat1,
        t.catalog.products.family.feat2,
        t.catalog.products.family.feat3,
      ],
    },
    {
      id: 'anniversary',
      category: 'anniversary',
      title: t.catalog.products.anniversary.title,
      description: t.catalog.products.anniversary.desc,
      price: '€89,00',
      image: '/images/anniversary_frame.jpg',
      badge: t.catalog.badgeNew,
      features: [
        t.catalog.products.anniversary.feat1,
        t.catalog.products.anniversary.feat2,
        t.catalog.products.anniversary.feat3,
      ],
    },
    {
      id: 'baby',
      category: 'baby',
      title: t.catalog.products.baby.title,
      description: t.catalog.products.baby.desc,
      price: '€89,00',
      image: '/images/baby_milestone.jpg',
      badge: t.catalog.badgeNew,
      features: [
        t.catalog.products.baby.feat1,
        t.catalog.products.baby.feat2,
        t.catalog.products.baby.feat3,
      ],
    },
  ];

  const filtered = activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>{t.catalog.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-museum-dark">
            {t.catalog.title}
          </h2>
          <p className="text-base text-museum-charcoal/80">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-museum-terracotta text-white shadow-md'
                : 'bg-white text-museum-charcoal hover:bg-[#F4ECE0] border border-[#E8DACB]'
            }`}
          >
            {t.catalog.filterAll}
          </button>
          <button
            onClick={() => setActiveFilter('wedding')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'wedding'
                ? 'bg-museum-terracotta text-white shadow-md'
                : 'bg-white text-museum-charcoal hover:bg-[#F4ECE0] border border-[#E8DACB]'
            }`}
          >
            {t.catalog.filterWedding}
          </button>
          <button
            onClick={() => setActiveFilter('family')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'family'
                ? 'bg-museum-terracotta text-white shadow-md'
                : 'bg-white text-museum-charcoal hover:bg-[#F4ECE0] border border-[#E8DACB]'
            }`}
          >
            {t.catalog.filterFamily}
          </button>
          <button
            onClick={() => setActiveFilter('baby')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'baby'
                ? 'bg-museum-terracotta text-white shadow-md'
                : 'bg-white text-museum-charcoal hover:bg-[#F4ECE0] border border-[#E8DACB]'
            }`}
          >
            {t.catalog.filterBaby}
          </button>
          <button
            onClick={() => setActiveFilter('anniversary')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'anniversary'
                ? 'bg-museum-terracotta text-white shadow-md'
                : 'bg-white text-museum-charcoal hover:bg-[#F4ECE0] border border-[#E8DACB]'
            }`}
          >
            {t.catalog.filterMemorial}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#E8DACB] transition-all duration-300 flex flex-col"
            >
              {/* Product Image Card */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF5ED]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/60 shadow-md text-xs font-bold text-museum-terracotta flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                    <span>{product.badge}</span>
                  </div>
                )}

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-museum-dark/85 backdrop-blur-md px-3.5 py-1 rounded-full text-sm font-serif font-bold text-white shadow-md border border-white/20">
                  {product.price}
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-museum-dark group-hover:text-museum-terracotta transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-museum-charcoal/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Checklist Features */}
                <div className="space-y-2 pt-2 border-t border-[#F4EBE1]">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-museum-charcoal font-medium">
                      <div className="w-4 h-4 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button: Jump to customizer */}
                <div className="pt-3">
                  <a
                    href="#customizer"
                    className="w-full py-3 px-4 rounded-2xl bg-[#FAF5ED] group-hover:bg-museum-terracotta group-hover:text-white border border-[#DCC7B3] group-hover:border-museum-terracotta text-museum-dark font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                  >
                    <span>{t.catalog.quickCustomize}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
