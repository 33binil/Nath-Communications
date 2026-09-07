export interface CategoryItem {
  id: string;
  name: string;
  subtitle?: string;
  itemCount?: string;
  imageUrl: string;
  slug: string;
  badge?: string;
}

export interface QuickCategoryIcon {
  id: string;
  name: string;
  iconName: string;
  slug: string;
  active?: boolean;
}

export interface BrandPartner {
  name: string;
  category?: string;
  logoType: 'svg' | 'text' | 'image';
  svgPath?: string;
  svgViewBox?: string;
  color?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  verified?: boolean;
  productPurchased?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  features: string[];
  inStock: boolean;
  warranty: string;
  badge?: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface DealHighlight {
  title: string;
  description: string;
  iconName: string;
}
