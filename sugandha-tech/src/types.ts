export type Category = string;

export type ProductBadge = 'Editor\'s Choice' | 'Best Value' | 'Top Rated' | 'Trending' | 'Premium Pick';

export interface AuthorInfo {
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
}

export interface Product {
  id: string;
  title: string;
  category: Category;
  brand: string;
  asin: string;
  rating: number;
  reviewsCount: number;
  badge?: ProductBadge;
  image: string;
  gallery?: string[];
  shortSummary: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  whoShouldBuy: string[];
  whoShouldAvoid: string[];
  editorVerdict: string;
  author?: AuthorInfo;
  amazonUrl: string; // Base URL template or full URL
  specifications: Record<string, string>;
  updatedAt: string;
}

export interface FilterState {
  category: Category;
  searchQuery: string;
  selectedBrand: string;
  minRating: number;
  badgeFilter: string;
  sortBy: 'featured' | 'rating' | 'reviews' | 'title';
}

export type ActivePage = 'home' | 'about' | 'privacy' | 'terms' | 'disclosure' | 'cookie' | 'contact';

