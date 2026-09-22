export interface Watch {
  id: string;
  name: string;
  brand: 'Rolex' | 'Patek Philippe' | 'Audemars Piguet' | 'Omega' | 'Cartier';
  modelLine: string;
  referenceNumber: string;
  category: 'Professional / Sport' | 'Classic / Dress' | 'Complication' | 'Chronograph';
  price: number;
  marketAveragePrice: number;
  msrp: number;
  year: number;
  condition: 'Unworn (New Old Stock)' | 'Mint (Collector Grade)' | 'Near Mint' | 'Excellent';
  caseSize: string;
  material: string;
  bezel: string;
  dialColor: string;
  bracelet: string;
  movement: string;
  powerReserve: string;
  boxPapers: 'Original Box & Guarantee Card' | 'Complete Collector Set (Double Boxed)' | 'Official Archive Papers';
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  isFeatured?: boolean;
  availability: 'In Stock - Ready to Ship' | 'In Vault' | 'Reserved';
}

export interface FilterState {
  brand: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'year-desc';
  searchQuery: string;
  condition: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  interestType: 'purchase' | 'sell' | 'trade' | 'consultation' | 'source';
  selectedWatchId?: string;
  message: string;
  budget?: string;
  preferredContact: 'phone' | 'email';
}

export interface Testimonial {
  id: string;
  clientName: string;
  title: string;
  location: string;
  watchPurchased: string;
  pricePaid: string;
  estimatedMarketSavings: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface EducationArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  summary: string;
  takeaways: string[];
  content: string;
}
