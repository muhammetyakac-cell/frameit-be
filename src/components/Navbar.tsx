'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/types';
import { Sparkles, MessageCircle, Menu, X, Globe, Heart, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string; country: string }[] = [
    { code: 'nl', label: 'Nederlands', flag: '🇧🇪', country: 'Vlaanderen & BE' },
    { code: 'fr', label: 'Français', flag: '🇧🇪', country: 'Wallonie & Bruxelles' },
    { code: 'en', label: 'English', flag: '🇬🇧', country: 'International' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      language === 'nl'
        ? 'Hallo Frameit.be! Ik heb een vraag over de 3D Mini Memory Museum lijsten.'
        : language === 'fr'
        ? 'Bonjour Frameit.be ! J\'ai une question concernant les cadres 3D Mini Musée.'
        : 'Hello Frameit.be! I have a question regarding the 3D Mini Memory Museum frames.'
    );
    window.open(`https://wa.me/32499931101?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DACB] transition-all">
      {/* Top Belgian Shipping Notification Bar */}
      <div className="bg-gradient-to-r from-[#5C3826] via-[#A6533A] to-[#5C3826] text-white text-xs font-medium py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
        <span>{t.nav.bannerText}</span>
        <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500 shadow-md transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Frameit.be Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-museum-dark group-hover:text-museum-terracotta transition-colors">
                FRAMEIT<span className="text-gold-600">.BE</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-museum-wood/80 font-medium">
                {t.nav.subBrand}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-museum-charcoal">
            <a
              href="#customizer"
              className="relative py-1 hover:text-museum-terracotta transition-colors font-semibold text-museum-terracotta flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              {t.nav.customizer}
            </a>
            <a href="#catalog" className="hover:text-museum-terracotta transition-colors">
              {t.nav.catalog}
            </a>
            <a href="#occasions" className="hover:text-museum-terracotta transition-colors">
              {t.nav.occasions}
            </a>
            <a href="#how-it-works" className="hover:text-museum-terracotta transition-colors">
              {t.nav.crafting}
            </a>
            <a href="#reviews" className="hover:text-museum-terracotta transition-colors">
              {t.nav.reviews}
            </a>
            <a href="#faq" className="hover:text-museum-terracotta transition-colors">
              {t.nav.faq}
            </a>
          </nav>

          {/* Right Action: Language Switcher & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E0D2C2] bg-white/80 hover:bg-white text-xs font-semibold text-museum-dark shadow-sm transition-all"
                title="Change language"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <Globe className="w-3.5 h-3.5 text-museum-wood/70" />
              </button>

              {isLangOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#E8DACB] py-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setIsLangOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-museum-wood/60 border-b border-[#F4EBE1] mb-1">
                    Taalkeuze / Langue / Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                        language === lang.code
                          ? 'bg-[#FAF5ED] text-museum-terracotta font-bold'
                          : 'text-museum-charcoal hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      <span className="text-[10px] text-gray-400 font-normal">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct WhatsApp Button */}
            <button
              onClick={handleWhatsAppContact}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.nav.orderWhatsapp}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick language toggle for mobile */}
            <div className="flex items-center gap-1 bg-white/80 p-1 rounded-full border border-[#E0D2C2] text-xs font-bold">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1.5 py-0.5 rounded-full uppercase transition-all ${
                    language === lang.code
                      ? 'bg-museum-terracotta text-white shadow-xs'
                      : 'text-museum-charcoal'
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-[#E0D2C2] bg-white text-museum-dark"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DACB] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-museum-charcoal">
            <a
              href="#customizer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl bg-[#F4ECE0] text-museum-terracotta font-semibold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              {t.nav.customizer}
            </a>
            <a
              href="#catalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F4ECE0]"
            >
              {t.nav.catalog}
            </a>
            <a
              href="#occasions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F4ECE0]"
            >
              {t.nav.occasions}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F4ECE0]"
            >
              {t.nav.crafting}
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F4ECE0]"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F4ECE0]"
            >
              {t.nav.faq}
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsAppContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#25D366] text-white font-bold shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.nav.orderWhatsapp}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
