'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, X, Send, Sparkles, Heart } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = {
    nl: [
      '🖼️ Ik wil graag een huwelijkslijst bestellen',
      '📸 Hoe kan ik mijn foto\'s doorsturen?',
      '🚚 Wat is de levertijd naar mijn adres in België?',
    ],
    fr: [
      '🖼️ Je souhaite commander un cadre de mariage',
      '📸 Comment puis-je vous envoyer mes photos ?',
      '🚚 Quel est le délai de livraison en Belgique ?',
    ],
    en: [
      '🖼️ I would like to order a wedding museum frame',
      '📸 How can I send my photos to you?',
      '🚚 What is the delivery time to Belgium / EU?',
    ],
  }[language] || [
    '🖼️ Ik wil graag een lijst bestellen',
    '📸 Hoe kan ik mijn foto\'s doorsturen?',
  ];

  const handleSendPrompt = (promptText: string) => {
    const url = `https://wa.me/32499931101?text=${encodeURIComponent(promptText)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = `https://wa.me/32499931101?text=${encodeURIComponent(customMsg)}`;
    window.open(url, '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expandable Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#E8DACB] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <Image src="/images/logo.jpg" alt="Frameit.be Logo" fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{t.whatsapp.chatHeader}</h4>
                <p className="text-[11px] text-green-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  {t.whatsapp.chatSubtitle}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF7F2] space-y-3">
            <div className="p-3 rounded-2xl bg-white text-xs text-museum-charcoal shadow-xs border border-[#E8DACB]">
              <span className="font-bold block text-museum-terracotta mb-1">
                👋 Hallo / Bonjour / Hello !
              </span>
              Welkom bij Frameit.be. Hoe kunnen we je helpen met jouw 3D Mini Memory Museum?
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-museum-wood/60 block">
                Snelle Vragen / Questions Rapides:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left text-xs p-2.5 rounded-xl bg-white hover:bg-[#FAF5ED] border border-[#EAE0D5] hover:border-gold-400 text-museum-charcoal font-medium transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleCustomSend} className="pt-2 flex gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Typ een berichtje..."
                className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-[#DCC7B3] focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Subtle ping animation indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-yellow-300 border-2 border-white animate-ping" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-white" />

        {/* Hover Tooltip when closed */}
        {!isOpen && (
          <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-museum-dark text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {t.whatsapp.floatingTooltip}
          </div>
        )}
      </button>
    </div>
  );
};
