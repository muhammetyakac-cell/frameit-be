import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { CookieBanner } from '@/components/CookieBanner';

const BASE_URL = 'https://www.frameit.living';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Frameit Living | 3D Mini Memory Museum Lijsten - Handgemaakt in België',
    template: '%s | Frameit Living',
  },
  description:
    'Handgemaakte gepersonaliseerde 3D schaduwdoos lijsten met warme LED-spotlights, gouden barok fotolijstjes en op maat gemaakte figuurtjes. Het perfecte cadeau in België. | Cadres 3D Mini Musée de Souvenirs fait main en Belgique | Handmade 3D Mini Memory Museum frames in Belgium.',
  keywords: [
    // Dutch (Flemish) — Primary Belgian Market
    'Frameit Living',
    'Frameit.living',
    '3D mini memory museum',
    'schaduwdoos lijst',
    'gepersonaliseerd cadeau België',
    'gepersonaliseerde fotolijst met verlichting',
    'huwelijkscadeau met foto',
    'origineel verjaardagscadeau',
    'handgemaakt cadeau Antwerpen Brussel Gent',
    'jubileum lijst LED',
    'mini museum fotolijst',
    'baby geboorte aandenken',
    // French — Wallonia & Brussels
    'cadeau personnalisé Belgique',
    'cadre photo 3D lumineux fait main',
    'cadre 3D souvenir belgique',
    'mini musée personnalisé',
    'cadeau de mariage original avec photo',
    'idée cadeau anniversaire couple',
    'cadeau de naissance personnalisé',
    // English — International / Expats
    'personalized memory frame Belgium',
    '3D shadow box photo frame LED',
    'custom wedding gift handmade Europe',
    'miniature museum photo display',
  ],
  authors: [{ name: 'Frameit Living Atelier', url: BASE_URL }],
  creator: 'Frameit Living',
  publisher: 'Frameit Living Atelier',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'nl-BE': BASE_URL,
      'fr-BE': BASE_URL,
      'en': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    title: 'Frameit Living | 3D Mini Memory Museum — Handgemaakt in België',
    description:
      'Verander je mooiste herinneringen in een betoverend verlicht 3D miniatuur museum met gouden baroklijstjes, LED-spots en handgemaakte figuurtjes.',
    url: BASE_URL,
    siteName: 'Frameit Living',
    images: [
      {
        url: '/images/museum_couple.jpg',
        width: 1200,
        height: 900,
        alt: 'Frameit Living 3D Mini Memory Museum — Gepersonaliseerd Cadeau met LED Verlichting',
      },
      {
        url: '/images/family_museum.jpg',
        width: 1200,
        height: 900,
        alt: 'Frameit Living Familie Mini Memory Museum met Gouden Baroklijstjes',
      },
      {
        url: '/images/gift_unboxing.jpg',
        width: 1200,
        height: 900,
        alt: 'Frameit Living Luxe Geschenkdoos met Waszegel — Cadeau Uitpakervaring',
      },
    ],
    locale: 'nl_BE',
    alternateLocale: ['fr_BE', 'en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frameit Living | 3D Mini Memory Museum — Handgemaakt in België',
    description:
      'Jouw favoriete momenten veranderd in een warm verlicht 3D miniatuur museum. Gepersonaliseerd cadeau met gouden baroklijstjes & LED-spots.',
    images: ['/images/museum_couple.jpg'],
    creator: '@frameitliving',
    site: '@frameitliving',
  },
  category: 'shopping',
  classification: 'Personalized Gifts & Home Decor',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE" className="scroll-smooth" dir="ltr">
      <head>
        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917]">
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}

