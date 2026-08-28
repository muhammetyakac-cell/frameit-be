'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useLanguage } from '@/context/LanguageContext';

export const CookieBanner = () => {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsentGiven(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  const getTexts = () => {
    if (language === 'fr') {
      return {
        message: 'Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.',
        accept: 'Accepter',
        decline: 'Refuser'
      };
    } else if (language === 'en') {
      return {
        message: 'We use cookies to improve your experience and analyze our traffic.',
        accept: 'Accept',
        decline: 'Decline'
      };
    }
    // Default NL
    return {
      message: 'Wij gebruiken cookies om uw ervaring te verbeteren en ons verkeer te analyseren.',
      accept: 'Accepteren',
      decline: 'Weigeren'
    };
  };

  const texts = getTexts();

  return (
    <>
      {/* Load GA only if consent is given */}
      {consentGiven && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 transition-all duration-500">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-museum-charcoal font-medium text-center md:text-left flex-1">
              🍪 {texts.message}
            </p>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {texts.decline}
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2 text-sm font-semibold text-white bg-museum-terracotta hover:bg-[#8C3E28] rounded-lg transition-colors shadow-md"
              >
                {texts.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
