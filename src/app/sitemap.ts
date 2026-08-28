import type { MetadataRoute } from 'next';
import { belgianLocations } from '@/lib/locations';

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

  return [...baseSitemap, ...nlLocations, ...frLocations];
}
