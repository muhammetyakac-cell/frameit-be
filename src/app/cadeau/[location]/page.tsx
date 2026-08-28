import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationsByLang, getLocationById } from '@/lib/locations';
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

export async function generateStaticParams() {
  const locations = getLocationsByLang('nl');
  return locations.map((loc) => ({
    location: loc.id,
  }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const loc = getLocationById(params.location);
  if (!loc || !loc.lang.includes('nl')) return {};

  const title = `Gepersonaliseerd Cadeau in ${loc.name} | Frameit Living`;
  const description = `Op zoek naar een origineel gepersonaliseerd cadeau in ${loc.name}? Ontdek de handgemaakte 3D Mini Memory Museum lijsten van Frameit Living.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    }
  };
}

export default function LocationPageNL({ params }: { params: { location: string } }) {
  const loc = getLocationById(params.location);
  
  if (!loc || !loc.lang.includes('nl')) {
    notFound();
  }

  const customTitle = (
    <>
      <span className="block italic text-museum-terracotta">Gepersonaliseerd Cadeau</span>
      <span className="block text-museum-dark mt-1">in {loc.name}</span>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <Hero customTitle={customTitle} />
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
