export type Language = 'nl' | 'fr';

export interface SeoPageData {
  slug: string;
  lang: Language;
  titleH1: string;
  metaTitle: string;
  metaDescription: string;
  type: 'occasion' | 'recipient';
}

export const seoPages: SeoPageData[] = [
  // --- NL OCCASIONS (gelegenheid) ---
  {
    slug: 'origineel-huwelijkscadeau',
    lang: 'nl',
    titleH1: 'Origineel Huwelijkscadeau',
    metaTitle: 'Origineel Huwelijkscadeau & Trouwlijst | Frameit Living',
    metaDescription: 'Op zoek naar een uniek en origineel huwelijkscadeau? Verras het bruidspaar met een gepersonaliseerde 3D Mini Memory Museum lijst met LED verlichting.',
    type: 'occasion'
  },
  {
    slug: 'kraamcadeau-met-naam',
    lang: 'nl',
    titleH1: 'Kraamcadeau met Naam',
    metaTitle: 'Origineel Kraamcadeau met Naam & Foto | Frameit Living',
    metaDescription: 'Het perfecte kraamcadeau! Een handgemaakte 3D fotolijst om de allermooiste geboortemomenten magisch te verlichten.',
    type: 'occasion'
  },
  {
    slug: 'jubileum-cadeau',
    lang: 'nl',
    titleH1: 'Bijzonder Jubileum Cadeau',
    metaTitle: 'Jubileum Cadeau: Romantisch & Uniek | Frameit Living',
    metaDescription: 'Vier jullie jubileum met een betoverend cadeau. Een gepersonaliseerd miniatuur museum van jullie mooiste jaren samen.',
    type: 'occasion'
  },
  {
    slug: 'verjaardagscadeau',
    lang: 'nl',
    titleH1: 'Gepersonaliseerd Verjaardagscadeau',
    metaTitle: 'Uniek Verjaardagscadeau voor Hem & Haar | Frameit Living',
    metaDescription: 'Geef een onvergetelijk verjaardagscadeau. Een 3D schaduwdoos lijst met foto, figuurtjes en sfeervolle LED-spotlights.',
    type: 'occasion'
  },
  {
    slug: 'moederdag-cadeau',
    lang: 'nl',
    titleH1: 'Uniek Moederdag Cadeau',
    metaTitle: 'Het Mooiste Moederdag Cadeau | Frameit Living',
    metaDescription: 'Verras mama dit jaar met een gepersonaliseerd cadeau dat haar in tranen brengt. Een handgemaakte herinneringslijst.',
    type: 'occasion'
  },
  {
    slug: 'vaderdag-cadeau',
    lang: 'nl',
    titleH1: 'Origineel Vaderdag Cadeau',
    metaTitle: 'Origineel Vaderdag Cadeau met Foto | Frameit Living',
    metaDescription: 'Op zoek naar een stoer en emotioneel vaderdag cadeau? Geef een verlicht 3D miniatuur museum vol familiemomenten.',
    type: 'occasion'
  },

  // --- FR OCCASIONS (occasion-cadeau) ---
  {
    slug: 'cadeau-mariage-original',
    lang: 'fr',
    titleH1: 'Cadeau de Mariage Original',
    metaTitle: 'Cadeau de Mariage Original & Personnalisé | Frameit Living',
    metaDescription: 'À la recherche d\'un cadeau de mariage unique ? Surprenez les mariés avec un cadre 3D Mini Musée de Souvenirs illuminé par des LED.',
    type: 'occasion'
  },
  {
    slug: 'cadeau-naissance-personnalise',
    lang: 'fr',
    titleH1: 'Cadeau de Naissance Personnalisé',
    metaTitle: 'Cadeau de Naissance Personnalisé | Frameit Living',
    metaDescription: 'Le cadeau de naissance parfait ! Un cadre photo 3D fait main pour illuminer les plus beaux souvenirs de bébé.',
    type: 'occasion'
  },
  {
    slug: 'cadeau-anniversaire-couple',
    lang: 'fr',
    titleH1: 'Cadeau d\'Anniversaire pour Couple',
    metaTitle: 'Cadeau d\'Anniversaire de Rencontre ou Mariage | Frameit Living',
    metaDescription: 'Célébrez votre anniversaire avec un cadeau magique. Un musée miniature de vos plus belles années ensemble.',
    type: 'occasion'
  },

  // --- NL RECIPIENTS (voor-wie) ---
  {
    slug: 'cadeau-voor-koppel',
    lang: 'nl',
    titleH1: 'Cadeau voor een Koppel',
    metaTitle: 'Origineel Cadeau voor Koppel (Samenwonen/Trouwen) | Frameit Living',
    metaDescription: 'Het leukste cadeau voor een koppel. Perfect voor samenwonen, een huwelijk of zomaar. Ontdek onze handgemaakte 3D lijsten.',
    type: 'recipient'
  },
  {
    slug: 'cadeau-voor-haar',
    lang: 'nl',
    titleH1: 'Bijzonder Cadeau voor Haar',
    metaTitle: 'Uniek Cadeau voor Haar (Vrouw/Vriendin) | Frameit Living',
    metaDescription: 'Geef haar een romantisch en uniek cadeau. Een gepersonaliseerde schaduwdoos lijst vol mooie herinneringen.',
    type: 'recipient'
  },
  {
    slug: 'cadeau-voor-hem',
    lang: 'nl',
    titleH1: 'Origineel Cadeau voor Hem',
    metaTitle: 'Origineel Cadeau voor Hem (Man/Vriend) | Frameit Living',
    metaDescription: 'Wat geef je de man die alles al heeft? Een persoonlijk 3D Mini Memory Museum. Het meest originele cadeau voor hem.',
    type: 'recipient'
  },
  {
    slug: 'cadeau-grootouders',
    lang: 'nl',
    titleH1: 'Cadeau voor Grootouders',
    metaTitle: 'Cadeau voor Opa en Oma | Frameit Living',
    metaDescription: 'Verras oma en opa met een prachtig cadeau: een verlichte fotolijst met alle kleinkinderen in miniatuur. Handgemaakt in België.',
    type: 'recipient'
  },

  // --- FR RECIPIENTS (pour-qui) ---
  {
    slug: 'cadeau-pour-couple',
    lang: 'fr',
    titleH1: 'Cadeau pour Couple',
    metaTitle: 'Cadeau Original pour Couple | Frameit Living',
    metaDescription: 'Le plus beau cadeau pour un couple. Parfait pour une pendaison de crémaillère ou un mariage. Découvrez nos cadres 3D faits main.',
    type: 'recipient'
  },
  {
    slug: 'cadeau-pour-femme',
    lang: 'fr',
    titleH1: 'Cadeau Unique pour Femme',
    metaTitle: 'Idée Cadeau Originale pour Femme | Frameit Living',
    metaDescription: 'Offrez-lui un cadeau romantique et unique. Une boîte à souvenirs personnalisée remplie de beaux moments.',
    type: 'recipient'
  },
  {
    slug: 'cadeau-pour-homme',
    lang: 'fr',
    titleH1: 'Cadeau Original pour Homme',
    metaTitle: 'Idée Cadeau Originale pour Homme | Frameit Living',
    metaDescription: 'Que d\'offrir à l\'homme qui a déjà tout ? Un Mini Musée de Souvenirs 3D personnel. Le cadeau le plus original pour lui.',
    type: 'recipient'
  },
  {
    slug: 'cadeau-grands-parents',
    lang: 'fr',
    titleH1: 'Cadeau pour les Grands-Parents',
    metaTitle: 'Cadeau pour Papy et Mamie | Frameit Living',
    metaDescription: 'Surprenez grand-mère et grand-père avec un cadeau magnifique : un cadre photo lumineux avec tous les petits-enfants en miniature.',
    type: 'recipient'
  }
];

export function getSeoPagesByTypeAndLang(type: 'occasion' | 'recipient', lang: Language): SeoPageData[] {
  return seoPages.filter(page => page.type === type && page.lang === lang);
}

export function getSeoPageBySlug(slug: string, lang: Language, type: 'occasion' | 'recipient'): SeoPageData | undefined {
  return seoPages.find(page => page.slug === slug && page.lang === lang && page.type === type);
}
