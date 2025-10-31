export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface ProductFilters {
  title?: string;
  categoryId?: number;
  price_min?: number;
  price_max?: number;
  limit?: number;
  offset?: number;
}
