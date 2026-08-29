const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.frameit.living';

// Board configurations
const boards = {
  nl: [
    'Originele Cadeau Ideeën België',
    'Huwelijkscadeaus & Trouwen',
    'Kraamcadeau & Baby Ideeën',
    'Cadeau voor Koppel & Verjaardag'
  ],
  fr: [
    'Idées Cadeaux Originales Belgique',
    'Cadeau Mariage & Couple',
    'Cadeau Naissance Personnalisé',
    'Idées Cadeaux Faits Main'
  ]
};

// Curated list of high-impact Pins
const pinsData = [
  // --- DUTCH PINS (NL) ---
  {
    title: 'Origineel Huwelijkscadeau met Verlichting 💍 | 3D Mini Museum',
    description: 'Op zoek naar een uniek huwelijkscadeau voor het bruidspaar? Verras ze met een handgemaakt 3D Mini Memory Museum met warme LED-spotlights en gouden miniatuurlijstjes. Handgemaakt in België. 🇧🇪 ✨ #huwelijkscadeau #trouwcadeau #cadeauidee #belgie #gepersonaliseerdcadeau #trouweninbelgie',
    image: `${BASE_URL}/images/museum_couple.jpg`,
    link: `${BASE_URL}/gelegenheid/origineel-huwelijkscadeau`,
    board: 'Huwelijkscadeaus & Trouwen',
    keywords: 'huwelijkscadeau, trouwcadeau, origineel cadeau, trouwen belgie, gepersonaliseerd huwelijkscadeau'
  },
  {
    title: 'Uniek Kraamcadeau met Naam & Foto 👶 | Handgemaakte 3D Fotolijst',
    description: 'Het allermooiste kraamcadeau om de geboorte magisch te vieren! Een verlichte 3D schaduwdoos met miniatuur fotolijstjes van de baby. Perfect voor op de babykamer. 🇧🇪 🍼 #kraamcadeau #babycadeau #geboortecadeau #kraamfeest #babykamerdecoratie #gepersonaliseerd',
    image: `${BASE_URL}/images/baby_milestone.jpg`,
    link: `${BASE_URL}/gelegenheid/kraamcadeau-met-naam`,
    board: 'Kraamcadeau & Baby Ideeën',
    keywords: 'kraamcadeau, babycadeau, geboortecadeau met naam, kraamcadeau meisje jongen, babykamer decoratie'
  },
  {
    title: 'Romantisch Jubileum Cadeau voor Koppel 💕 | 3D Schaduwdoos',
    description: 'Vier jullie 1, 5, 10 of 25 jaar jubileum met een betoverend miniatuur museum van jullie mooiste reizen en herinneringen. Inclusief warme LED verlichting. 🇧🇪 🥂 #jubileumcadeau #cadeauvoorkoppel #romantischcadeau #cadeauvoorhem #cadeauvoorhaar #liefde',
    image: `${BASE_URL}/images/anniversary_frame.jpg`,
    link: `${BASE_URL}/gelegenheid/jubileum-cadeau`,
    board: 'Cadeau voor Koppel & Verjaardag',
    keywords: 'jubileum cadeau, cadeau voor vriend, cadeau voor vriendin, romantisch cadeau koppel'
  },
  {
    title: 'Cadeau voor Grootouders met Kleinkinderen 👵👴 | Miniatuur Museum',
    description: 'Wat geef je aan opa en oma die alles al hebben? Een handgemaakt 3D familie museum met alle kleinkinderen in miniatuur. Gegarandeerd tranen van geluk! 🇧🇪 ❤️ #cadeauvooropa #cadeauvooroma #grootouders #familiecadeau #moederdag #vaderdag',
    image: `${BASE_URL}/images/family_museum.jpg`,
    link: `${BASE_URL}/voor-wie/cadeau-grootouders`,
    board: 'Originele Cadeau Ideeën België',
    keywords: 'cadeau voor opa en oma, cadeau grootouders, kleinkinderen fotolijst, origineel familiecadeau'
  },
  {
    title: 'Wat Geef Je een Koppel? 🎁 Orijineel Cadeau voor Samenwonen',
    description: 'Het ultieme cadeau voor samenwonen of een housewarming! Een stijlvolle, handgemaakte 3D lijst die elke woonkamer omtovert tot een warme herinnering. 🇧🇪 🏡 #samenwonen #housewarmingcadeau #cadeaukoppel #woondecoratie #interieurstyling',
    image: `${BASE_URL}/images/gift_unboxing.jpg`,
    link: `${BASE_URL}/voor-wie/cadeau-voor-koppel`,
    board: 'Cadeau voor Koppel & Verjaardag',
    keywords: 'cadeau voor koppel, housewarming cadeau, samenwonen cadeau, interieur cadeau belgie'
  },
  {
    title: 'Gepersonaliseerd Cadeau in Antwerpen 📍 | Handgemaakt Atelier',
    description: 'Woon je in Antwerpen of omgeving en zoek je een bijzonder cadeau? Ontdek de 3D Mini Memory Museum lijsten van Frameit Living. Snelle bezorging in heel België! 🇧🇪 ✨ #antwerpen #antwerpengift #cadeauantwerpen #handgemaaktinbelgie #belgischdesign',
    image: `${BASE_URL}/images/museum_couple.jpg`,
    link: `${BASE_URL}/cadeau/antwerpen`,
    board: 'Originele Cadeau Ideeën België',
    keywords: 'cadeau antwerpen, gepersonaliseerd cadeau antwerpen, fotolijst met licht antwerpen'
  },
  {
    title: 'Origineel Cadeau in Gent 📍 | Magische 3D Fotolijsten',
    description: 'Op zoek naar een origineel geschenk in Gent? Onze handgemaakte 3D lijsten met LED verlichting brengen de mooiste momenten tot leven. 🇧🇪 ✨ #gent #cadeaugent #gentbelgie #handgemaaktcadeau',
    image: `${BASE_URL}/images/anniversary_frame.jpg`,
    link: `${BASE_URL}/cadeau/gent`,
    board: 'Originele Cadeau Ideeën België',
    keywords: 'cadeau gent, origineel cadeau gent, fotolijst gent'
  },

  // --- FRENCH PINS (FR) ---
  {
    title: 'Cadeau de Mariage Original avec LED 💍 | Mini Musée 3D',
    description: 'À la recherche d\'un cadeau de mariage unique et émouvant ? Offrez aux mariés un Mini Musée de Souvenirs 3D fait main avec éclairage LED chaleureux et mini cadres baroques dorés. Fait main en Belgique. 🇧🇪 ✨ #cadeaumariage #mariagebelgique #ideecadeau #cadeaupersonnalise #bruxelles #belgique',
    image: `${BASE_URL}/images/museum_couple.jpg`,
    link: `${BASE_URL}/occasion-cadeau/cadeau-mariage-original`,
    board: 'Cadeau Mariage & Couple',
    keywords: 'cadeau de mariage original, idée cadeau mariage, cadeau personnalisé couple, mariage belgique'
  },
  {
    title: 'Cadeau de Naissance Personnalisé 👶 | Cadre Photo 3D Lumineux',
    description: 'Le plus beau cadeau de naissance pour bébé ! Un cadre photo 3D illuminé avec les photos miniatures des premiers moments magiques. Parfait pour la chambre de bébé. 🇧🇪 🍼 #cadeaunaissance #cadeaubebe #chambrebebe #mamanbelge #naissancebelgique',
    image: `${BASE_URL}/images/baby_milestone.jpg`,
    link: `${BASE_URL}/occasion-cadeau/cadeau-naissance-personnalise`,
    board: 'Cadeau Naissance Personnalisé',
    keywords: 'cadeau de naissance original, cadre photo bebe 3d, cadeau naissance personnalise, deco chambre bebe'
  },
  {
    title: 'Cadeau pour Couple Romantique 💕 | Anniversaire de Rencontre ou Mariage',
    description: 'Célébrez votre amour avec un cadeau inoubliable. Un musée miniature 3D personnalisé avec vos plus beaux souvenirs à deux. Éclairage LED inclus. 🇧🇪 🥂 #cadeaucouple #cadeauanniversaire #cadeauromantique #cadeauhomme #cadeaufemme',
    image: `${BASE_URL}/images/anniversary_frame.jpg`,
    link: `${BASE_URL}/pour-qui/cadeau-pour-couple`,
    board: 'Cadeau Mariage & Couple',
    keywords: 'cadeau pour couple, cadeau anniversaire couple, idée cadeau romantique, cadeau fait main belgique'
  },
  {
    title: 'Cadeau Original pour les Grands-Parents 👵👴 | Musée de Famille',
    description: 'Que donner à papy et mamie qui ont déjà tout ? Un cadre 3D illuminé avec tous les petits-enfants en miniature. Émotion garantie ! 🇧🇪 ❤️ #cadeaugrandsparents #cadeaufamille #fetedesmeres #fetedesperes #ideecadeau',
    image: `${BASE_URL}/images/family_museum.jpg`,
    link: `${BASE_URL}/pour-qui/cadeau-grands-parents`,
    board: 'Idées Cadeaux Originales Belgique',
    keywords: 'cadeau pour papy et mamie, cadeau grands parents, cadre photo famille miniature'
  },
  {
    title: 'Cadeau Personnalisé à Bruxelles 📍 | Atelier Fait Main Belgique',
    description: 'Vous cherchez un cadeau unique et original à Bruxelles ? Découvrez les cadres 3D Mini Musée de Souvenirs créés par Frameit Living. Livraison rapide en Belgique ! 🇧🇪 ✨ #bruxelles #cadeaubruxelles #belgique #artisanatbelge',
    image: `${BASE_URL}/images/gift_unboxing.jpg`,
    link: `${BASE_URL}/cadeau-personnalise/bruxelles`,
    board: 'Idées Cadeaux Originales Belgique',
    keywords: 'cadeau bruxelles, cadeau personnalisé bruxelles, cadre photo lumineux bruxelles'
  }
];

// Helper to format CSV field safely
function escapeCsv(text) {
  if (text == null) return '';
  const escaped = String(text).replace(/"/g, '""');
  return `"${escaped}"`;
}

// 1. Generate Pinterest Business Bulk CSV
// Columns expected by Pinterest Bulk Uploader:
// Title, Media URL, Pingroup / Board Name, Description, Link, Publish Date, Keywords
function generateCsv() {
  const headers = ['Title', 'Media URL', 'Board Name', 'Description', 'Link', 'Publish Date', 'Keywords'];
  const now = new Date();

  const rows = pinsData.map((pin, index) => {
    // Schedule pins 2 days apart for optimal Pinterest algorithm reach
    const scheduleDate = new Date(now.getTime() + index * 2 * 24 * 60 * 60 * 1000);
    const publishDate = scheduleDate.toISOString().split('T')[0] + ' 10:00:00';

    return [
      escapeCsv(pin.title),
      escapeCsv(pin.image),
      escapeCsv(pin.board),
      escapeCsv(pin.description),
      escapeCsv(pin.link),
      escapeCsv(publishDate),
      escapeCsv(pin.keywords)
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');
  const csvPath = path.join(__dirname, 'pinterest_bulk_pins.csv');
  fs.writeFileSync(csvPath, csvContent, 'utf8');
  console.log(`✅ Pinterest Bulk CSV başarıyla oluşturuldu: ${csvPath}`);
}

// 2. Generate JSON data
function generateJson() {
  const jsonPath = path.join(__dirname, 'pins_data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(pinsData, null, 2), 'utf8');
  console.log(`✅ Pinterest JSON verisi kaydedildi: ${jsonPath}`);
}

generateCsv();
generateJson();
