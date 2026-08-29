import type { MetadataRoute } from 'next';
import { belgianLocations } from '@/lib/locations';
import { seoPages } from '@/lib/seo-pages';

const BASE_URL = 'https://www.frameit.living';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseSitemap: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'nl-BE': `${BASE_URL}`,
          'fr-BE': `${BASE_URL}`,
          'en': `${BASE_URL}`,
          'x-default': `${BASE_URL}`,
        },
      },
    },
  ];

  // Location pages
  const nlLocations: MetadataRoute.Sitemap = belgianLocations
    .filter(loc => loc.lang.includes('nl'))
    .map(loc => ({
      url: `${BASE_URL}/cadeau/${loc.id}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const frLocations: MetadataRoute.Sitemap = belgianLocations
    .filter(loc => loc.lang.includes('fr'))
    .map(loc => ({
      url: `${BASE_URL}/cadeau-personnalise/${loc.id}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  // Occasion & Recipient SEO pages
  const occasionNl: MetadataRoute.Sitemap = seoPages
    .filter(p => p.type === 'occasion' && p.lang === 'nl')
    .map(p => ({
      url: `${BASE_URL}/gelegenheid/${p.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

  const recipientNl: MetadataRoute.Sitemap = seoPages
    .filter(p => p.type === 'recipient' && p.lang === 'nl')
    .map(p => ({
      url: `${BASE_URL}/voor-wie/${p.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

  const occasionFr: MetadataRoute.Sitemap = seoPages
    .filter(p => p.type === 'occasion' && p.lang === 'fr')
    .map(p => ({
      url: `${BASE_URL}/occasion-cadeau/${p.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

  const recipientFr: MetadataRoute.Sitemap = seoPages
    .filter(p => p.type === 'recipient' && p.lang === 'fr')
    .map(p => ({
      url: `${BASE_URL}/pour-qui/${p.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

  return [
    ...baseSitemap, 
    ...nlLocations, 
    ...frLocations,
    ...occasionNl,
    ...recipientNl,
    ...occasionFr,
    ...recipientFr
  ];
}
