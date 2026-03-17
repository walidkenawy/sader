export type CollectionType = 'Private' | 'Grande' | 'Luxury' | 'Femi';

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: CollectionType;
  image: string;
  video?: string;
  description: string;
  size: string;
  isNew?: boolean;
  isSale?: boolean;
  story?: string;
  mood?: string[];
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
  olfactoryFamily?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
