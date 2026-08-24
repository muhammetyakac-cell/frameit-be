'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Palette, Hammer, Lightbulb, Send } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Palette,
      num: t.howItWorks.step1.num,
      title: t.howItWorks.step1.title,
      desc: t.howItWorks.step1.desc,
      color: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      icon: Hammer,
      num: t.howItWorks.step2.num,
      title: t.howItWorks.step2.title,
      desc: t.howItWorks.step2.desc,
      color: 'bg-rose-100 text-rose-800 border-rose-300',
    },
    {
      icon: Lightbulb,
      num: t.howItWorks.step3.num,
      title: t.howItWorks.step3.title,
      desc: t.howItWorks.step3.desc,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    },
    {
      icon: Send,
      num: t.howItWorks.step4.num,
      title: t.howItWorks.step4.title,
      desc: t.howItWorks.step4.desc,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FCF9F5] border-b border-[#E8DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-300/30 border border-gold-400/50 text-xs font-bold uppercase tracking-wider text-museum-terracotta">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>{t.howItWorks.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-museum-dark">
            {t.howItWorks.title}
          </h2>
          <p className="text-base text-museum-charcoal/80">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-[#E8DACB] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Top Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-[#DCC7B3] group-hover:text-museum-terracotta transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-museum-dark group-hover:text-museum-terracotta transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-museum-charcoal/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line flourish */}
                <div className="mt-6 pt-4 border-t border-[#F4EBE1] flex items-center gap-1.5 text-[11px] font-bold text-gold-600">
                  <Sparkles className="w-3 h-3" />
                  <span>Atelier Kwaliteit</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
