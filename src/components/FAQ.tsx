'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FCF9F5] border-b border-[#E8DACB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>{t.faq.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-museum-dark">
            {t.faq.title}
          </h2>
          <p className="text-base text-museum-charcoal/80">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DACB] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <h3 className="m-0 p-0 font-serif font-bold text-base sm:text-lg text-museum-dark">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-museum-terracotta transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#FAF5ED] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-museum-terracotta text-white' : 'text-museum-charcoal'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-museum-charcoal/80 leading-relaxed border-t border-[#F4EBE1] pt-4 animate-in fade-in duration-300 font-sans"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask on WhatsApp Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-[#FAF5ED] border border-gold-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif font-bold text-base text-museum-dark">
              Nog een specifieke vraag over jouw ontwerp?
            </h3>
            <p className="text-xs text-museum-charcoal/80">
              Ons Belgisch atelier staat 7 dagen per week klaar om je te helpen.
            </p>
          </div>
          <button
            onClick={() => window.open('https://wa.me/32470123456', '_blank')}
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat op WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
