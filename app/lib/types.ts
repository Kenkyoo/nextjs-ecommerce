export interface BaseProduct {
  id: number | string;
  title: string;
  description?: string;
  price: number;
  thumbnail: string;
  images: string[];
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface BaseDetails {
  id: number | string;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  category: string;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  discountPercentage: number;
  returnPolicy: string;
}
