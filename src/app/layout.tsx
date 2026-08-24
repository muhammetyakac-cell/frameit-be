import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Frameit.be | 3D Mini Memory Museum Lijsten - Handgemaakt in België',
  description:
    'Handgemaakte gepersonaliseerde 3D schaduwdoos lijsten met warme LED-spotlights, gouden barok fotolijstjes en op maat gemaakte figuurtjes. Het perfecte cadeau in België.',
  keywords: [
    'Frameit.be',
    '3D memory frame',
    'mini memory museum',
    'schaduwdoos lijst',
    'gepersonaliseerd cadeau belgië',
    'huwelijkscadeau',
    'jubileum lijst',
    'cadre 3D souvenir belgique',
    'mini musée personnalisé',
  ],
  authors: [{ name: 'Frameit.be Atelier' }],
  icons: {
    icon: '/images/logo.jpg',
  },
  openGraph: {
    title: 'Frameit.be | 3D Mini Memory Museum',
    description: 'Verander je mooiste herinneringen in een betoverend verlicht 3D miniatuur museum.',
    url: 'https://frameit.be',
    siteName: 'Frameit.be',
    images: [
      {
        url: '/images/museum_couple.jpg',
        width: 1200,
        height: 900,
        alt: 'Frameit.be 3D Mini Memory Museum',
      },
    ],
    locale: 'nl_BE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
