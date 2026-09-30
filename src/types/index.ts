export interface Product {
  id: string;
  name: string;
  bengaliName: string;
  category: 'designer' | 'ready-made' | 'party-wear' | 'traditional' | 'wedding' | 'festive' | 'cotton' | 'silk' | 'embroidered';
  categoryLabel: string;
  originalPrice: number;
  offerPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  availableSizes: string[];
  images: {
    front: string;
    back: string;
    side?: string;
  };
  colors: {
    name: string;
    hex: string;
  }[];
  fabric: string;
  pattern: string;
  sleeveType: string;
  neckDesign: string;
  careInstructions: string;
  deliveryInfo: string;
  returnExchangeInfo: string;
  description: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  avatar: string;
  verifiedBuyer: boolean;
}
