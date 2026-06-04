// Service and Industry Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
}

// Pricing Types
export interface PricingTier {
  name: string;
  baseCost: number;
}

export interface PricingFeature {
  id: string;
  name: string;
  cost: number;
  description?: string;
}

export interface PricingCalculatorState {
  businessType: string;
  baseCost: number;
  staffTier: 1 | 2 | 3;
  features: string[];
  totalETB: number;
  totalUSD: number;
}

// Form Types
export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  requirements: string;
}

export interface ConsultationRequest extends ContactFormData {
  selectedPricingTier?: string;
  features?: string[];
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'pricing' | 'support';
}

// Portfolio Types
export interface Portfolio {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  link: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system';

// i18n Types
export interface Translations {
  [key: string]: string;
}

export interface I18nConfig {
  languages: {
    code: string;
    name: string;
    flag: string;
  }[];
  defaultLanguage: string;
  supportedLanguages: string[];
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Booking Demo Types
export interface BookingDemoService {
  id: string;
  name: string;
  price: number;
  duration: number;
  icon: string;
  description: string;
}

export interface BookingDemoState {
  currentStep: 1 | 2 | 3 | 4;
  service: BookingDemoService | null;
  staff: string | null;
  time: string | null;
}

// Feature Types
export interface FeatureShowcase {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Development Step Types
export interface DevelopmentStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Hero Badge Type
export interface HeroBadge {
  text: string;
  icon?: string;
}
