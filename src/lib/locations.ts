export type Region = 'Flanders' | 'Wallonia' | 'Brussels';
export type Language = 'nl' | 'fr';

export interface LocationData {
  id: string; // url slug
  name: string;
  zip: string;
  region: Region;
  lang: Language[];
}

export const belgianLocations: LocationData[] = [
  // Flanders (Dutch)
  { id: 'antwerpen', name: 'Antwerpen', zip: '2000', region: 'Flanders', lang: ['nl'] },
  { id: 'gent', name: 'Gent', zip: '9000', region: 'Flanders', lang: ['nl'] },
  { id: 'brugge', name: 'Brugge', zip: '8000', region: 'Flanders', lang: ['nl'] },
  { id: 'leuven', name: 'Leuven', zip: '3000', region: 'Flanders', lang: ['nl'] },
  { id: 'mechelen', name: 'Mechelen', zip: '2800', region: 'Flanders', lang: ['nl'] },
  { id: 'aalst', name: 'Aalst', zip: '9300', region: 'Flanders', lang: ['nl'] },
  { id: 'hasselt', name: 'Hasselt', zip: '3500', region: 'Flanders', lang: ['nl'] },
  { id: 'sint-niklaas', name: 'Sint-Niklaas', zip: '9100', region: 'Flanders', lang: ['nl'] },
  { id: 'kortrijk', name: 'Kortrijk', zip: '8500', region: 'Flanders', lang: ['nl'] },
  { id: 'oostende', name: 'Oostende', zip: '8400', region: 'Flanders', lang: ['nl'] },
  { id: 'deurne', name: 'Deurne', zip: '2100', region: 'Flanders', lang: ['nl'] },
  { id: 'borgerhout', name: 'Borgerhout', zip: '2140', region: 'Flanders', lang: ['nl'] },
  { id: 'genk', name: 'Genk', zip: '3600', region: 'Flanders', lang: ['nl'] },
  { id: 'roeselare', name: 'Roeselare', zip: '8800', region: 'Flanders', lang: ['nl'] },

  // Brussels (Bilingual, mostly French search volume for generic terms but we target both)
  { id: 'brussel', name: 'Brussel', zip: '1000', region: 'Brussels', lang: ['nl'] },
  { id: 'bruxelles', name: 'Bruxelles', zip: '1000', region: 'Brussels', lang: ['fr'] },
  { id: 'elsene', name: 'Elsene', zip: '1050', region: 'Brussels', lang: ['nl'] },
  { id: 'ixelles', name: 'Ixelles', zip: '1050', region: 'Brussels', lang: ['fr'] },
  { id: 'ukkel', name: 'Ukkel', zip: '1180', region: 'Brussels', lang: ['nl'] },
  { id: 'uccle', name: 'Uccle', zip: '1180', region: 'Brussels', lang: ['fr'] },

  // Wallonia (French)
  { id: 'liege', name: 'Liège', zip: '4000', region: 'Wallonia', lang: ['fr'] },
  { id: 'namur', name: 'Namur', zip: '5000', region: 'Wallonia', lang: ['fr'] },
  { id: 'charleroi', name: 'Charleroi', zip: '6000', region: 'Wallonia', lang: ['fr'] },
  { id: 'mons', name: 'Mons', zip: '7000', region: 'Wallonia', lang: ['fr'] },
  { id: 'tournai', name: 'Tournai', zip: '7500', region: 'Wallonia', lang: ['fr'] },
  { id: 'louvain-la-neuve', name: 'Louvain-la-Neuve', zip: '1348', region: 'Wallonia', lang: ['fr'] },
  { id: 'waterloo', name: 'Waterloo', zip: '1410', region: 'Wallonia', lang: ['fr'] }
];

export function getLocationById(id: string): LocationData | undefined {
  return belgianLocations.find(loc => loc.id === id);
}

export function getLocationsByLang(lang: Language): LocationData[] {
  return belgianLocations.filter(loc => loc.lang.includes(lang));
}
