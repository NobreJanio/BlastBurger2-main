export interface Product {
  id: number;
  name: string;
  price: number;
  category_id: number;
  offer?: boolean;
  path?: string;
  image?: string;
  description?: string;
}

export interface Category {
  id: number;
  name: string;
  path?: string;
}