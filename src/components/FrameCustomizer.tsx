'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { useLanguage } from '@/context/LanguageContext';
import {
  FrameSize,
  FrameFinish,
  WallpaperOption,
  FigurineOption,
  CustomizerState,
} from '@/types';
import {
  Sparkles,
  Lightbulb,
  Upload,
  Image as ImageIcon,
  Check,
  Package,
  MessageCircle,
  RotateCcw,
  Palette,
  Layers,
  Users,
  Award,
  Plus,
  Trash2,
} from 'lucide-react';

const SIZES: FrameSize[] = [
  { id: 'standard', name: 'Klassiek Vierkant', dimensions: '23 x 23 cm', photosCount: 5, basePrice: 69 },
  { id: 'grande', name: 'Grande Museum', dimensions: '27 x 27 cm', photosCount: 7, basePrice: 89, popular: true },
  { id: 'deluxe', name: 'Deluxe Royal', dimensions: '30 x 30 cm', photosCount: 9, basePrice: 109 },
];

const FINISHES: FrameFinish[] = [
  { id: 'white', name: 'Puur Wit Atelier', colorHex: '#FFFFFF', borderClass: 'border-[#EDE8E1] bg-[#FAF8F5]' },
  { id: 'warmOak', name: 'Natuurlijk Eikenhout', colorHex: '#C89D6A', borderClass: 'border-[#9C6D3F] bg-[#8B5E3C]' },
  { id: 'walnut', name: 'Vintage Notenhout', colorHex: '#5C3826', borderClass: 'border-[#422517] bg-[#5C3826]' },
  { id: 'black', name: 'Modern Mat Zwart', colorHex: '#1F1E1D', borderClass: 'border-[#121212] bg-[#1F1E1D]' },
];

const WALLPAPERS: WallpaperOption[] = [
  {
    id: 'roseVintage',
    name: 'Vintage Victorian Rose',
    patternClass: 'bg-[#F9ECE7]',
    bgGradient: 'radial-gradient(circle at 50% 30%, #FFF3EE 0%, #F5DDD4 60%, #E8C4B8 100%)',
    previewColor: '#F5DDD4',
  },
  {
    id: 'creamDamask',
    name: 'Klassiek Frans Damast',
    patternClass: 'bg-[#F5EFE6]',
    bgGradient: 'radial-gradient(circle at 50% 30%, #FCF9F3 0%, #EFE5D5 60%, #DFD0BC 100%)',
    previewColor: '#EFE5D5',
  },
  {
    id: 'midnightNavy',
    name: 'Koninklijk Nachtblauw Goud',
    patternClass: 'bg-[#1E293B]',
    bgGradient: 'radial-gradient(circle at 50% 30%, #2A3B53 0%, #15202E 70%, #0D1520 100%)',
    previewColor: '#1E293B',
  },
  {
    id: 'sageBotanical',
    name: 'Zacht Saliegroen',
    patternClass: 'bg-[#E3EAE2]',
    bgGradient: 'radial-gradient(circle at 50% 30%, #F0F5EF 0%, #D5E2D4 60%, #B8CBB7 100%)',
    previewColor: '#D5E2D4',
  },
  {
    id: 'blushBaby',
    name: 'Pastel Roze Sterren',
    patternClass: 'bg-[#FCE7F0]',
    bgGradient: 'radial-gradient(circle at 50% 30%, #FFF0F6 0%, #FAD1E3 60%, #F4B1CF 100%)',
    previewColor: '#FAD1E3',
  },
  {
    id: 'blueBaby',
    name: 'Pastel Hemelsblauw',
    patternClass: 'bg-[#E0F2FE]',
    bgGradient: 'radial-gradient(circle at 50% 30%, #F0F9FF 0%, #BAE6FD 60%, #7DD3FC 100%)',
    previewColor: '#BAE6FD',
  },
];

const FIGURINES: FigurineOption[] = [
  {
    id: 'weddingGroomBride',
    name: 'Huwelijkspaar (Bruid & Bruidegom)',
    description: 'Kleifiguurtje van bruidegom die de bruid optilt in witte trouwjurk',
    category: 'wedding',
    price: 0,
    emoji: '👰🤵',
  },
  {
    id: 'romanticCouple',
    name: 'Romantisch Koppel Innig Knuffelend',
    description: 'Liefdevol omhelzend koppel in casual chic kleding',
    category: 'couple',
    price: 0,
    emoji: '👩‍❤️‍👨',
  },
  {
    id: 'familyKids',
    name: 'Gezin met Kinderen & Hondje',
    description: 'Vader, moeder, kindje en een schattig miniatuur hondje',
    category: 'family',
    price: 10,
    emoji: '👨‍👩‍👧🐶',
  },
  {
    id: 'petLovers',
    name: 'Huisdierliefhebber met Kat & Hond',
    description: 'Twee gezellige huisdieren op een miniatuur matje',
    category: 'pets',
    price: 5,
    emoji: '🐱🐶',
  },
  {
    id: 'babyNursery',
    name: 'Pasgeboren Baby met Beertje',
    description: 'Miniatuurschommelpaardje, teddybeertje en zacht babydekentje',
    category: 'baby',
    price: 0,
    emoji: '🧸👶',
  },
  {
    id: 'none',
    name: 'Geen Figuurtjes (Alleen Galerij & Meubels)',
    description: 'Puur minimalistische fotogalerij met sfeervolle meubeltjes',
    category: 'couple',
    price: 0,
    emoji: '🖼️✨',
  },
];

// Sample romantic / family photos to pre-populate slots
const SAMPLE_GALLERY_PHOTOS = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
];

export const FrameCustomizer: React.FC = () => {
  const { language, t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'size' | 'wallpaper' | 'figurines' | 'photos' | 'plaque' | 'extras'>('size');

  const [state, setState] = useState<CustomizerState>({
    sizeId: 'grande',
    finishId: 'white',
    wallpaperId: 'roseVintage',
    figurineId: 'weddingGroomBride',
    lightsEnabled: true,
    giftBoxIncluded: true,
    engravedText: 'Liam & Emma ♡ 14.02.2024',
    uploadedPhotos: Array(7).fill(null),
  });

  const currentSize = SIZES.find((s) => s.id === state.sizeId) || SIZES[1];
  const currentFinish = FINISHES.find((f) => f.id === state.finishId) || FINISHES[0];
  const currentWallpaper = WALLPAPERS.find((w) => w.id === state.wallpaperId) || WALLPAPERS[0];
  const currentFigurine = FIGURINES.find((fig) => fig.id === state.figurineId) || FIGURINES[0];

  // Handle frame size change (adjust slots count)
  const handleSizeChange = (sizeId: string) => {
    const size = SIZES.find((s) => s.id === sizeId);
    if (!size) return;
    const newPhotos = [...state.uploadedPhotos];
    if (newPhotos.length < size.photosCount) {
      while (newPhotos.length < size.photosCount) newPhotos.push(null);
    } else {
      newPhotos.length = size.photosCount;
    }
    setState({ ...state, sizeId, uploadedPhotos: newPhotos });
  };

  // Handle file upload for a specific slot
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeSlotIndex !== null) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        const updated = [...state.uploadedPhotos];
        updated[activeSlotIndex] = dataUrl;
        setState({ ...state, uploadedPhotos: updated });
        setActiveSlotIndex(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // Populate all slots with sample photos
  const handleFillSamplePhotos = () => {
    const filled = Array(currentSize.photosCount)
      .fill(null)
      .map((_, i) => SAMPLE_GALLERY_PHOTOS[i % SAMPLE_GALLERY_PHOTOS.length]);
    setState({ ...state, uploadedPhotos: filled });
  };

  // Clear all photos
  const handleClearPhotos = () => {
    setState({ ...state, uploadedPhotos: Array(currentSize.photosCount).fill(null) });
  };

  // Calculate total price
  const totalPrice = currentSize.basePrice + currentFigurine.price + (state.giftBoxIncluded ? 9 : 0);

  // Trigger WhatsApp Order
  const handleOrderWhatsApp = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    const sizeName = t.customizer.sizes[currentSize.id as keyof typeof t.customizer.sizes]?.name || currentSize.name;
    const finishName = t.customizer.finishes[currentFinish.id as keyof typeof t.customizer.finishes] || currentFinish.name;
    const wallpaperName = t.customizer.wallpapers[currentWallpaper.id as keyof typeof t.customizer.wallpapers] || currentWallpaper.name;
    const figurineName = t.customizer.figurines[currentFigurine.id as keyof typeof t.customizer.figurines] || currentFigurine.name;

    const specs = [
      `🖼️ **Formaat / Format**: ${sizeName} (${currentSize.dimensions})`,
      `🪵 **Lijst / Cadre**: ${finishName}`,
      `🌸 **Achtergrond / Tapisserie**: ${wallpaperName}`,
      `👫 **3D Figuurtjes / Figurines**: ${figurineName}`,
      `🏷️ **Gegraveerd Plaatje / Plaque**: "${state.engravedText}"`,
      `💡 **LED Verlichting**: ${state.lightsEnabled ? 'Ja / Oui (Inbegrepen)' : 'Nee / Non'}`,
      `🎁 **Luxe Geschenkdoos & Zegel**: ${state.giftBoxIncluded ? 'Ja / Oui (+€9)' : 'Nee / Non'}`,
      `💶 **Totaalprijs / Prix Total**: €${totalPrice},00 (Gratis verzending BE)`,
    ].join('\n');

    const message = t.whatsapp.orderMessageTemplate(specs);
    window.open(`https://wa.me/32470123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="customizer" className="py-16 md:py-24 bg-[#FCF9F5] border-b border-[#E8DACB] relative">
      {/* Hidden file input for photo uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>{t.customizer.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-museum-dark">
            {t.customizer.title}
          </h2>
          <p className="text-base text-museum-charcoal/80">
            {t.customizer.subtitle}
          </p>
        </div>

        {/* Customizer Layout: 2 Columns (Live Canvas Preview & Options Studio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: LIVE VISUAL CANVAS ================= */}
          <div className="lg:col-span-7 sticky top-28 space-y-4">
            
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                {t.customizer.livePreview}
              </span>

              {/* Lighting Toggle Switch */}
              <button
                onClick={() => setState({ ...state, lightsEnabled: !state.lightsEnabled })}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-xs border ${
                  state.lightsEnabled
                    ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-amber-200/50'
                    : 'bg-gray-100 text-gray-600 border-gray-200'
                }`}
              >
                <Lightbulb
                  className={`w-3.5 h-3.5 ${
                    state.lightsEnabled ? 'text-amber-500 fill-amber-400 animate-pulse' : 'text-gray-400'
                  }`}
                />
                <span>{state.lightsEnabled ? t.customizer.lightsOn : t.customizer.lightsOff}</span>
              </button>
            </div>

            {/* Visual 3D Shadow Box Frame Canvas Container */}
            <div
              className={`relative aspect-square w-full rounded-3xl p-4 sm:p-7 shadow-2xl transition-all duration-500 ${
                state.finishId === 'white'
                  ? 'bg-[#FFFFFF] border-[14px] sm:border-[18px] border-[#FAF5EE] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5'
                  : state.finishId === 'warmOak'
                  ? 'bg-[#C89D6A] border-[14px] sm:border-[18px] border-[#9C6D3F] shadow-[0_25px_50px_-12px_rgba(92,56,38,0.35)]'
                  : state.finishId === 'walnut'
                  ? 'bg-[#5C3826] border-[14px] sm:border-[18px] border-[#3B1F13] shadow-[0_25px_50px_-12px_rgba(40,20,10,0.4)]'
                  : 'bg-[#1C1917] border-[14px] sm:border-[18px] border-[#0C0A09] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]'
              }`}
            >
              
              {/* Top Shadow Box Depth Bevel Inset */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner flex flex-col justify-between"
                style={{ background: currentWallpaper.bgGradient }}
              >
                {/* Simulated Warm LED Ceiling Spotlights */}
                {state.lightsEnabled && (
                  <>
                    {/* Top Spot Light Source Orbs */}
                    <div className="absolute top-0 left-0 right-0 h-6 flex justify-around px-8 z-30 pointer-events-none">
                      <div className="w-4 h-2 rounded-b-full bg-yellow-200 shadow-[0_0_15px_6px_rgba(253,224,71,0.9)]" />
                      <div className="w-4 h-2 rounded-b-full bg-yellow-200 shadow-[0_0_15px_6px_rgba(253,224,71,0.9)]" />
                      <div className="w-4 h-2 rounded-b-full bg-yellow-200 shadow-[0_0_15px_6px_rgba(253,224,71,0.9)]" />
                    </div>

                    {/* Volumetric Glowing Light Cones */}
                    <div
                      className="absolute inset-0 z-20 pointer-events-none opacity-45"
                      style={{
                        background:
                          'radial-gradient(ellipse at 25% 0%, rgba(254, 240, 138, 0.6) 0%, rgba(254, 240, 138, 0.15) 45%, transparent 75%), radial-gradient(ellipse at 50% 0%, rgba(254, 240, 138, 0.7) 0%, rgba(254, 240, 138, 0.2) 50%, transparent 80%), radial-gradient(ellipse at 75% 0%, rgba(254, 240, 138, 0.6) 0%, rgba(254, 240, 138, 0.15) 45%, transparent 75%)',
                      }}
                    />
                  </>
                )}

                {/* Subtle vintage wallpaper damask overlay texture */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* ================= GALLERY WALL: MINIATURE GOLDEN BAROQUE FRAMES ================= */}
                <div className="relative z-20 p-3 sm:p-5 flex-1 flex flex-col justify-center">
                  <div
                    className={`grid gap-2.5 sm:gap-3.5 items-center justify-center mx-auto w-full ${
                      state.uploadedPhotos.length <= 5
                        ? 'grid-cols-3 max-w-sm'
                        : state.uploadedPhotos.length <= 7
                        ? 'grid-cols-4 max-w-md'
                        : 'grid-cols-3 sm:grid-cols-5 max-w-lg'
                    }`}
                  >
                    {state.uploadedPhotos.map((photo, index) => {
                      const isOval = index % 2 === 1;
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setActiveSlotIndex(index);
                            fileInputRef.current?.click();
                          }}
                          className={`group relative cursor-pointer aspect-square transition-all duration-300 transform hover:scale-105 ${
                            isOval ? 'rounded-full' : 'rounded-lg'
                          } p-1 bg-gradient-to-br from-[#E6CA65] via-[#D4AF37] to-[#996515] shadow-lg hover:shadow-xl border border-yellow-200/80`}
                          title={t.customizer.photos.hint}
                        >
                          {/* Inner Matte & Photo Area */}
                          <div
                            className={`relative w-full h-full overflow-hidden ${
                              isOval ? 'rounded-full' : 'rounded-md'
                            } bg-[#FAF5ED] border border-[#855B14] flex items-center justify-center`}
                          >
                            {photo ? (
                              <Image
                                src={photo}
                                alt={`Frame Photo ${index + 1}`}
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                                unoptimized
                              />
                            ) : (
                              <div className="flex flex-col items-center justify-center p-1 text-center text-museum-wood/60 group-hover:text-museum-terracotta">
                                <Plus className="w-3.5 h-3.5 mb-0.5" />
                                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-tight">
                                  #{index + 1}
                                </span>
                              </div>
                            )}

                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                              <Upload className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Baroque Corner Ornament Simulation */}
                          <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-gold-400 border border-gold-600 shadow-xs" />
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-gold-400 border border-gold-600 shadow-xs" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ================= MINIATURE ROOM FLOOR & FIGURINES ================= */}
                <div className="relative z-20 w-full bg-gradient-to-b from-[#7A4B2A] to-[#5C3826] border-t-4 border-[#3E2415] pt-2 pb-2 px-4 shadow-[0_-6px_12px_rgba(0,0,0,0.25)] flex items-end justify-between">
                  
                  {/* Left Mini Plant & Decor */}
                  <div className="flex items-end gap-1.5 opacity-95">
                    <div className="w-5 h-8 bg-emerald-800/90 rounded-t-full border border-emerald-950 flex items-center justify-center text-[10px]" title="Miniature Plant">
                      🪴
                    </div>
                  </div>

                  {/* Center Selected Figurine */}
                  <div className="flex flex-col items-center justify-end transform hover:scale-105 transition-transform">
                    <span className="text-2xl sm:text-3xl filter drop-shadow-md">
                      {currentFigurine.emoji}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-amber-200 font-semibold tracking-wider text-center mt-0.5 truncate max-w-[150px]">
                      {currentFigurine.name}
                    </span>
                  </div>

                  {/* Right Side Mini Lamp / Easel */}
                  <div className="flex items-end gap-1.5 opacity-95">
                    <div
                      className={`w-5 h-7 rounded-t-sm flex items-center justify-center text-[10px] ${
                        state.lightsEnabled ? 'text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]' : 'text-gray-400'
                      }`}
                      title="Miniature Table Lamp"
                    >
                      🪔
                    </div>
                  </div>

                </div>

                {/* ================= ENGRAVED BRASS PLAQUE ================= */}
                {state.engravedText && (
                  <div className="relative z-30 bg-[#FAF8F5] py-1 px-4 border-t border-[#E0D2C2] flex items-center justify-center">
                    <div className="px-3 py-0.5 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] border border-[#996515] shadow-xs text-center">
                      <span className="font-serif text-[10px] sm:text-xs font-bold text-[#422517] tracking-wider uppercase">
                        {state.engravedText}
                      </span>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Quick Helper Tools */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-museum-charcoal/70">
              <span className="text-[11px] italic">💡 {t.customizer.previewHint}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFillSamplePhotos}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#DCC7B3] hover:bg-[#F4ECE0] text-museum-dark font-medium transition-all text-xs flex items-center gap-1"
                >
                  <ImageIcon className="w-3 h-3 text-museum-terracotta" />
                  <span>{t.customizer.photos.sampleBtn}</span>
                </button>
                <button
                  onClick={handleClearPhotos}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#DCC7B3] hover:bg-red-50 text-gray-600 hover:text-red-600 font-medium transition-all text-xs flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>{t.customizer.photos.clearAll}</span>
                </button>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STEP-BY-STEP OPTIONS STUDIO ================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E8DACB] space-y-6">
            
            {/* Step Navigation Tabs */}
            <div className="flex overflow-x-auto gap-1.5 pb-2 border-b border-[#F4EBE1] no-scrollbar">
              <button
                onClick={() => setActiveTab('size')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'size'
                    ? 'bg-museum-terracotta text-white shadow-xs'
                    : 'bg-[#FAF5ED] text-museum-charcoal hover:bg-[#F4ECE0]'
                }`}
              >
                {t.customizer.step1}
              </button>
              <button
                onClick={() => setActiveTab('wallpaper')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'wallpaper'
                    ? 'bg-museum-terracotta text-white shadow-xs'
                    : 'bg-[#FAF5ED] text-museum-charcoal hover:bg-[#F4ECE0]'
                }`}
              >
                {t.customizer.step2}
              </button>
              <button
                onClick={() => setActiveTab('figurines')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'figurines'
                    ? 'bg-museum-terracotta text-white shadow-xs'
                    : 'bg-[#FAF5ED] text-museum-charcoal hover:bg-[#F4ECE0]'
                }`}
              >
                {t.customizer.step3}
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'photos'
                    ? 'bg-museum-terracotta text-white shadow-xs'
                    : 'bg-[#FAF5ED] text-museum-charcoal hover:bg-[#F4ECE0]'
                }`}
              >
                {t.customizer.step4}
              </button>
              <button
                onClick={() => setActiveTab('plaque')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === 'plaque'
                    ? 'bg-museum-terracotta text-white shadow-xs'
                    : 'bg-[#FAF5ED] text-museum-charcoal hover:bg-[#F4ECE0]'
                }`}
              >
                {t.customizer.step5}
              </button>
            </div>

            {/* ================= TAB 1: SIZES & FINISHES ================= */}
            {activeTab === 'size' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Size Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 block mb-3">
                    Kies Lijstformaat / Choisir Format
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {SIZES.map((size) => {
                      const localized = t.customizer.sizes[size.id as keyof typeof t.customizer.sizes];
                      const isSelected = state.sizeId === size.id;
                      return (
                        <div
                          key={size.id}
                          onClick={() => handleSizeChange(size.id)}
                          className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-museum-terracotta bg-[#FAF5ED] shadow-xs'
                              : 'border-[#EAE0D5] hover:border-museum-terracotta/50 bg-white'
                          }`}
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-museum-dark">{localized?.name || size.name}</span>
                              {size.popular && (
                                <span className="px-2 py-0.5 rounded-full bg-gold-400 text-[#422517] text-[10px] font-extrabold uppercase">
                                  Bestseller
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-museum-wood/75">
                              {size.dimensions} • {size.photosCount} miniatuurlijstjes
                            </p>
                          </div>
                          <span className="font-serif font-bold text-base text-museum-terracotta">
                            €{size.basePrice},00
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Frame Wood Finish Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 block mb-3">
                    Lijst Afwerking & Materiaal / Finition Cadre
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {FINISHES.map((finish) => {
                      const isSelected = state.finishId === finish.id;
                      const localizedName = t.customizer.finishes[finish.id as keyof typeof t.customizer.finishes] || finish.name;
                      return (
                        <button
                          key={finish.id}
                          onClick={() => setState({ ...state, finishId: finish.id })}
                          className={`p-3 rounded-2xl border-2 text-left transition-all flex items-center gap-3 ${
                            isSelected
                              ? 'border-museum-terracotta bg-[#FAF5ED] shadow-xs'
                              : 'border-[#EAE0D5] hover:border-museum-terracotta/40 bg-white'
                          }`}
                        >
                          <span
                            className="w-5 h-5 rounded-full border border-black/15 shadow-xs shrink-0"
                            style={{ backgroundColor: finish.colorHex }}
                          />
                          <span className="text-xs font-bold text-museum-dark truncate">
                            {localizedName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 2: WALLPAPERS ================= */}
            {activeTab === 'wallpaper' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <label className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 block">
                  Kies Behangstijl / Choisir le Papier Peint
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {WALLPAPERS.map((wp) => {
                    const isSelected = state.wallpaperId === wp.id;
                    const localizedName = t.customizer.wallpapers[wp.id as keyof typeof t.customizer.wallpapers] || wp.name;
                    return (
                      <button
                        key={wp.id}
                        onClick={() => setState({ ...state, wallpaperId: wp.id })}
                        className={`p-3 rounded-2xl border-2 text-left transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'border-museum-terracotta bg-[#FAF5ED] shadow-xs'
                            : 'border-[#EAE0D5] hover:border-museum-terracotta/40 bg-white'
                        }`}
                      >
                        <span
                          className="w-6 h-6 rounded-full border border-black/15 shadow-xs shrink-0"
                          style={{ background: wp.bgGradient }}
                        />
                        <span className="text-xs font-bold text-museum-dark truncate">
                          {localizedName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================= TAB 3: FIGURINES ================= */}
            {activeTab === 'figurines' && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <label className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 block">
                  Kies 3D Figuurtjes / Figurines Faites Main
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {FIGURINES.map((fig) => {
                    const isSelected = state.figurineId === fig.id;
                    const localizedName = t.customizer.figurines[fig.id as keyof typeof t.customizer.figurines] || fig.name;
                    return (
                      <div
                        key={fig.id}
                        onClick={() => setState({ ...state, figurineId: fig.id })}
                        className={`p-3 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-museum-terracotta bg-[#FAF5ED] shadow-xs'
                            : 'border-[#EAE0D5] hover:border-museum-terracotta/40 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{fig.emoji}</span>
                          <div>
                            <span className="text-xs font-bold text-museum-dark block">{localizedName}</span>
                            <span className="text-[11px] text-gray-500">{fig.description}</span>
                          </div>
                        </div>
                        {fig.price > 0 && (
                          <span className="text-xs font-bold text-museum-terracotta shrink-0">
                            +€{fig.price}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================= TAB 4: PHOTOS MANAGER ================= */}
            {activeTab === 'photos' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 mb-1">
                    {t.customizer.photos.title}
                  </h4>
                  <p className="text-xs text-museum-charcoal/70 mb-3">
                    {t.customizer.photos.hint}
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {state.uploadedPhotos.map((photo, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setActiveSlotIndex(i);
                        fileInputRef.current?.click();
                      }}
                      className="relative aspect-square rounded-xl border-2 border-dashed border-[#DCC7B3] hover:border-museum-terracotta cursor-pointer overflow-hidden p-1 bg-[#FAF5ED] flex flex-col items-center justify-center transition-all group"
                    >
                      {photo ? (
                        <>
                          <Image src={photo} alt={`Photo ${i + 1}`} fill className="object-cover rounded-lg" unoptimized />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold">
                            Wijzig
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <Upload className="w-4 h-4 mx-auto text-museum-terracotta mb-0.5" />
                          <span className="text-[9px] font-bold text-gray-600">#{i + 1}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={handleFillSamplePhotos}
                    className="flex-1 py-2 px-3 rounded-xl bg-gold-500/10 border border-gold-400 text-museum-dark font-bold text-xs hover:bg-gold-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    <span>Vul met Voorbeeldfoto&apos;s</span>
                  </button>
                </div>
              </div>
            )}

            {/* ================= TAB 5: ENGRAVED PLAQUE ================= */}
            {activeTab === 'plaque' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <label className="text-xs font-bold uppercase tracking-wider text-museum-wood/80 block">
                  {t.customizer.plaque.title}
                </label>
                <input
                  type="text"
                  value={state.engravedText}
                  onChange={(e) => setState({ ...state, engravedText: e.target.value })}
                  placeholder={t.customizer.plaque.placeholder}
                  maxLength={40}
                  className="w-full px-4 py-3 rounded-xl border border-[#DCC7B3] focus:border-museum-terracotta focus:ring-1 focus:ring-museum-terracotta text-sm text-museum-dark font-serif"
                />
                <p className="text-xs text-museum-charcoal/70 italic">
                  {t.customizer.plaque.hint}
                </p>
              </div>
            )}

            {/* ================= LUXURY ADD-ONS & SUMMARY ================= */}
            <div className="pt-4 border-t border-[#F4EBE1] space-y-4">
              
              {/* Luxury Gift Box Checkbox */}
              <div
                onClick={() => setState({ ...state, giftBoxIncluded: !state.giftBoxIncluded })}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  state.giftBoxIncluded
                    ? 'border-gold-500 bg-gold-50/50'
                    : 'border-[#EAE0D5] bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                      state.giftBoxIncluded
                        ? 'bg-gold-500 border-gold-600 text-white'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {state.giftBoxIncluded && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-museum-dark block">
                      {t.customizer.extras.giftBoxTitle}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {t.customizer.extras.giftBoxDesc}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-museum-terracotta">+€9,00</span>
              </div>

              {/* Price Calculation Card */}
              <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#E8DACB] space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>{t.customizer.priceSummary.base} ({currentSize.name})</span>
                  <span className="font-semibold">€{currentSize.basePrice},00</span>
                </div>
                {currentFigurine.price > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>{t.customizer.priceSummary.figurines}</span>
                    <span className="font-semibold">€{currentFigurine.price},00</span>
                  </div>
                )}
                {state.giftBoxIncluded && (
                  <div className="flex justify-between text-gray-600">
                    <span>{t.customizer.priceSummary.giftBox}</span>
                    <span className="font-semibold">€9,00</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#E8DACB] flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-base text-museum-dark">
                      {t.customizer.priceSummary.total}
                    </span>
                    <span className="text-[10px] text-gray-500 block">
                      {t.customizer.priceSummary.vat}
                    </span>
                  </div>
                  <span className="font-serif font-bold text-2xl text-museum-terracotta">
                    €{totalPrice},00
                  </span>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <button
                onClick={handleOrderWhatsApp}
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>{t.customizer.priceSummary.orderBtn}</span>
              </button>

              <p className="text-[11px] text-center text-gray-500">
                {t.customizer.priceSummary.orderSubtext}
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
