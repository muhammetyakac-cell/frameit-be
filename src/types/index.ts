export type Language = 'nl' | 'fr' | 'en';

export interface FrameSize {
  id: string;
  name: string;
  dimensions: string;
  photosCount: number;
  basePrice: number;
  popular?: boolean;
}

export interface FrameFinish {
  id: string;
  name: string;
  colorHex: string;
  borderClass: string;
}

export interface WallpaperOption {
  id: string;
  name: string;
  patternClass: string;
  bgGradient: string;
  previewColor: string;
}

export interface FigurineOption {
  id: string;
  name: string;
  description: string;
  category: 'couple' | 'wedding' | 'family' | 'baby' | 'pets';
  price: number;
  emoji: string;
}

export interface CustomizerState {
  sizeId: string;
  finishId: string;
  wallpaperId: string;
  figurineId: string;
  lightsEnabled: boolean;
  giftBoxIncluded: boolean;
  engravedText: string;
  uploadedPhotos: (string | null)[];
}

export interface ProductItem {
  id: string;
  titleKey: string;
  descKey: string;
  price: number;
  image: string;
  badgeKey?: string;
  category: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  country: string;
  rating: number;
  date: string;
  commentKey: string;
  frameTypeKey: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  category: string;
}
