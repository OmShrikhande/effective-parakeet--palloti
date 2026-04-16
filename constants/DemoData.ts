export interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
  category: 'Men' | 'Women' | 'Unisex';
  description: string;
  rating: number;
}

export const Categories = [
  { id: '1', name: 'New Arrivals', icon: 'flash' },
  { id: '2', name: 'Men', icon: 'man' },
  { id: '3', name: 'Women', icon: 'woman' },
  { id: '4', name: 'Accessories', icon: 'watch' },
];

export const Products: Product[] = [
  {
    id: 'p1',
    name: 'Aether Oversized Tee',
    price: 59.99,
    image: require('../assets/product_tee.png'),
    category: 'Unisex',
    description: 'High-density premium cotton with minimalist Zynix branding and cyber-mesh details.',
    rating: 4.8,
  },
  {
    id: 'p2',
    name: 'Cyber-Tactical Joggers',
    price: 119.00,
    image: require('../assets/product_joggers.png'),
    category: 'Men',
    description: 'Water-resistant techwear with reflective piping and precision tactical straps.',
    rating: 4.9,
  },
  {
    id: 'p3',
    name: 'Aurora Iridescent Dress',
    price: 189.99,
    image: require('../assets/product_dress.png'),
    category: 'Women',
    description: 'Luxury shimmering silk fabric that shifts color with light. Precision tailored.',
    rating: 5.0,
  },
  {
    id: 'p4',
    name: 'Neon Flux Windbreaker',
    price: 95.00,
    image: require('../assets/product_windbreaker.png'),
    category: 'Unisex',
    description: 'Ultra-lightweight translucent fabric with holographic Zynix logo and neon accents.',
    rating: 4.7,
  },
];

export const Banners = [
  {
    id: 'b1',
    title: 'COLLECTION 2026',
    subtitle: 'Step into the Future',
    image: require('../assets/hero_banner.png'),
  },
];
