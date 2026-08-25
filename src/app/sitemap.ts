import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://myframegift.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
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
}
