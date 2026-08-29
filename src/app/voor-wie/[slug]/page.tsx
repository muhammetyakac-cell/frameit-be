import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSeoPagesByTypeAndLang, getSeoPageBySlug } from '@/lib/seo-pages';
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
  const pages = getSeoPagesByTypeAndLang('recipient', 'nl');
  return pages.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getSeoPageBySlug(params.slug, 'nl', 'recipient');
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://www.frameit.living/voor-wie/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
    }
  };
}

export default function RecipientPageNL({ params }: { params: { slug: string } }) {
  const page = getSeoPageBySlug(params.slug, 'nl', 'recipient');
  
  if (!page) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <Hero titleLine1={page.titleH1} titleLine2="Gepersonaliseerd met LED" />
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
