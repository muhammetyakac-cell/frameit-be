'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FrameCustomizer } from '@/components/FrameCustomizer';
import { ProductCatalog } from '@/components/ProductCatalog';
import { GiftOccasions } from '@/components/GiftOccasions';
import { UnboxingShowcase } from '@/components/UnboxingShowcase';
import { HowItWorks } from '@/components/HowItWorks';
import { CustomerReviews } from '@/components/CustomerReviews';
import { FAQ } from '@/components/FAQ';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FrameCustomizer />
        <ProductCatalog />
        <GiftOccasions />
        <UnboxingShowcase />
        <HowItWorks />
        <CustomerReviews />
        <FAQ />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
