'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';
import { translations } from '@/locales/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['nl'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('nl');

  useEffect(() => {
    const saved = localStorage.getItem('frameit_lang') as Language;
    if (saved && (saved === 'nl' || saved === 'fr' || saved === 'en')) {
      setLanguageState(saved);
    } else {
      // User requested default language to be Dutch (nl)
      setLanguageState('nl');
      localStorage.setItem('frameit_lang', 'nl');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('frameit_lang', lang);
  };

  const t = translations[language] || translations['nl'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
