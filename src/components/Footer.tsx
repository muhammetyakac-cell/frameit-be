'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Heart, MessageCircle, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-[#1C1917] text-white border-t-2 border-gold-500/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500">
                <Image src="/images/logo.jpg" alt="Frameit.be Logo" fill className="object-cover" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  FRAMEIT<span className="text-gold-400">.BE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300/80 font-medium">
                  {t.nav.subBrand}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-gold-500/30 text-xs text-gold-300 font-semibold">
              <Heart className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span>{t.footer.handmadeInBE}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#customizer" className="hover:text-gold-400 transition-colors">
                  {t.nav.customizer}
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-gold-400 transition-colors">
                  {t.nav.catalog}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-400 transition-colors">
                  {t.nav.crafting}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold-400 transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Service */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.shipping}
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.privacy}
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  {t.footer.terms}
                </span>
              </li>
              <li className="pt-2 text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Bpost / DPD Safe Delivery</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Belgian Studio */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-gold-300 uppercase tracking-wider">
              {t.nav.contact}
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Atelier Brussel / Antwerpen, België 🇧🇪</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/32470123456" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +32 470 12 34 56 (WhatsApp 24/7)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>hello@frameit.be</span>
              </div>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-3">
              <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1.5">
                Taal / Langue / Language
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLanguage('nl')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    language === 'nl' ? 'bg-gold-500 text-stone-950' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  🇧🇪 NL
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    language === 'fr' ? 'bg-gold-500 text-stone-950' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  🇧🇪 FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    language === 'en' ? 'bg-gold-500 text-stone-950' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Frameit.be. {t.footer.rights}</p>

          {/* Payment Badges simulation */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-stone-400">
            <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800 font-bold text-yellow-400">
              Bancontact 🇧🇪
            </span>
            <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800 font-bold text-pink-400">
              iDEAL 🇳🇱
            </span>
            <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800">
              Visa / Mastercard
            </span>
            <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800 text-blue-400">
              PayPal
            </span>
            <span className="px-2 py-1 rounded bg-stone-900 border border-stone-800">
              Apple Pay
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
