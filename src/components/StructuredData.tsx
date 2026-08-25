import React from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://myframegift.vercel.app';

export const StructuredData: React.FC = () => {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebSite Entity (Site Name & Multilingual search signals)
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Frameit.be',
        alternateName: ['Frameit', 'Mini Memory Museum', 'Frameit Belgium'],
        description: 'Handgemaakte gepersonaliseerde 3D schaduwdoos lijsten met LED verlichting in België.',
        inLanguage: ['nl-BE', 'fr-BE', 'en'],
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
      },

      // 2. Organization / OnlineStore Entity
      {
        '@type': ['Organization', 'OnlineStore'],
        '@id': `${BASE_URL}/#organization`,
        name: 'Frameit.be — Mini Memory Museum',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/images/logo.jpg`,
          caption: 'Frameit.be Logo',
        },
        image: `${BASE_URL}/images/museum_couple.jpg`,
        description: 'Belgisch atelier gespecialiseerd in handgemaakte 3D Mini Memory Museum lijsten en gepersonaliseerde cadeaus.',
        email: 'hello@frameit.be',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Bancontact, Payconiq, Visa, Mastercard, PayPal, Apple Pay, iDEAL',
        priceRange: '€69 - €109',
        areaServed: [
          { '@type': 'Country', name: 'Belgium' },
          { '@type': 'Country', name: 'Netherlands' },
          { '@type': 'Country', name: 'Luxembourg' },
          { '@type': 'Country', name: 'France' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+32499931101',
          availableLanguage: ['Dutch', 'French', 'English'],
          url: 'https://wa.me/32499931101',
        },
        sameAs: [
          'https://instagram.com/frameit.be',
          'https://tiktok.com/@frameit.be',
        ],
      },

      // 3. Primary Product Schema (Mini Memory Museum Custom 3D Frame)
      {
        '@type': 'Product',
        '@id': `${BASE_URL}/#product-museum`,
        name: '3D Mini Memory Museum — Gepersonaliseerde Schaduwdoos met LED & Fotolijstjes',
        description: 'Luxe handgemaakte 3D miniatuur museumlijst met warme LED-spotlights, gouden barok fotolijstjes en gepersonaliseerde figuurtjes. Volledig op maat gemaakt in België.',
        image: [
          `${BASE_URL}/images/museum_couple.jpg`,
          `${BASE_URL}/images/family_museum.jpg`,
          `${BASE_URL}/images/anniversary_frame.jpg`,
          `${BASE_URL}/images/baby_milestone.jpg`,
          `${BASE_URL}/images/gift_unboxing.jpg`,
        ],
        brand: {
          '@type': 'Brand',
          name: 'Frameit.be',
        },
        manufacturer: {
          '@id': `${BASE_URL}/#organization`,
        },
        category: 'Personalized Gifts > Shadow Boxes & Picture Frames',
        offers: {
          '@type': 'AggregateOffer',
          url: `${BASE_URL}/#customizer`,
          priceCurrency: 'EUR',
          lowPrice: '69.00',
          highPrice: '109.00',
          offerCount: '3',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@id': `${BASE_URL}/#organization`,
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'EUR',
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'BE',
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: {
                '@type': 'QuantitativeValue',
                minValue: 2,
                maxValue: 3,
                unitCode: 'DAY',
              },
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 1,
                maxValue: 2,
                unitCode: 'DAY',
              },
            },
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'BE',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 14,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
          },
        },
        // Individual Verified Reviews matching the on-page testimonials
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sophie & Thomas' },
            datePublished: '2025-11-14',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'We hebben dit cadeau gekregen voor onze bruiloft en we waren letterlijk in tranen. Het lichtje geeft s avonds zo n knusse sfeer.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Julien M.' },
            datePublished: '2025-12-02',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Besteld voor ons 10-jarig huwelijksjubileum. De communicatie via WhatsApp verliep supervlot en het pakketje kwam prachtig ingepakt aan.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Eline Van de Velde' },
            datePublished: '2026-01-18',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Een cadeau voor mijn ouders met alle kleinkinderen en ons hondje. Prachtig vakmanschap, echt een pronkstuk!',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Maxime L.' },
            datePublished: '2026-02-10',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Magnifique réalisation pour la naissance de notre petite fille ! La qualité des mini cadres dorés est exceptionnelle.',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '480',
          ratingCount: '480',
          bestRating: '5',
          worstRating: '1',
        },
      },

      // 4. FAQ Content (Semantic entity for AI Search & Knowledge Engines)
      {
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoe stuur ik mijn foto\'s en speciale wensen door?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Je kunt je foto\'s direct uploaden in onze online configurator, of na je bestelling eenvoudig via WhatsApp of e-mail doorsturen. Wij zorgen voor perfecte uitsnede en micro-print.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe werken de ingebouwde LED-spotlights?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De warme LED-spots zijn discreet ingebouwd in het plafond van de diepe lijst. Ze werken op batterijen (meegeleverd) of via een subtiele USB-aansluiting.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is de levertijd in België en Nederland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Productie duurt 2-3 werkdagen in ons Belgisch atelier. Verzending binnen België duurt 1-2 werkdagen met Bpost of DPD inclusief Track & Trace.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik afwijkende figuurtjes of meer foto\'s aanvragen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absoluut! Wij zijn een handgemaakt atelier en denken graag met je mee. Neem even contact met ons op via WhatsApp met je ideeën.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph).replace(/</g, '\\u003c'),
      }}
    />
  );
};
