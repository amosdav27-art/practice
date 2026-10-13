export interface ServiceItem {
  id: string;
  title: string;
  category: 'screen' | 'paint' | 'wash' | 'construction';
  tagline: string;
  description: string;
  bulletPoints: string[];
  startingPrice: string;
  popularFor: string;
  image: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  badge: string;
  bestFor: string;
  features: string[];
  durability: string;
  visibility: string;
  airflow: string;
  petResistance: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceArea {
  city: string;
  county: string;
  zipCodes: string[];
  distanceTier: 'Local (Same Day)' | 'Standard (24-48h)' | 'Extended';
}
