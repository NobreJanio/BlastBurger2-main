import { categories as seedCategories } from '../data/categories';
import { Product } from '../types/Product';

interface Category {
  id: number;
  name: string;
  path: string;
}

// Define types for the seed data structure
interface SeedProduct {
  name: string;
  price: number;
  category_id: number;
  offer: boolean;
  file: string;
}

interface SeedCategory {
  name: string;
  file: string;
}

// Complete products data from the original seed file
const sampleProducts: SeedProduct[] = [
  {
    name: "Saladas",
    price: 2590,
    category_id: 1,
    offer: true,
    file: 'appe_1.png',
  },
  {
    name: "Bruschettas",
    price: 3590,
    category_id: 1,
    offer: false,
    file: 'appe_2.png',
  },
  {
    name: "Carpaccios",
    price: 3990,
    category_id: 1,
    offer: true,
    file: 'appe_3.png',
  },
  {
    name: "Ceviches",
    price: 4500,
    category_id: 1,
    offer: false,
    file: 'appe_4.png',
  },
  {
    name: "Tábua de Queijos e Frios",
    price: 6990,
    category_id: 1,
    offer: true,
    file: 'appe_5.png',
  },
  {
    name: "Croquetes",
    price: 2390,
    category_id: 1,
    offer: false,
    file: 'appe_6.png',
  },
  {
    name: "Pastéis",
    price: 3590,
    category_id: 1,
    offer: true,
    file: 'appe_7.png',
  },
  {
    name: "Tartines",
    price: 2590,
    category_id: 1,
    offer: false,
    file: 'appe_8.png',
  },
  {
    name: "Bolinhos de Bacalhau",
    price: 4590,
    category_id: 1,
    offer: false,
    file: 'appe_9.png',
  },
  {
    name: "X-Tudo Duplo Frango",
    price: 2990,
    category_id: 2,
    offer: true,
    file: 'burger_1.png',
  },
  {
    name: "X-Bacon com Ovo",
    price: 3590,
    category_id: 2,
    offer: false,
    file: 'burger_2.png',
  },
  {
    name: "Duplo X-Salada Picante",
    price: 3490,
    category_id: 2,
    offer: true,
    file: 'burger_3.png',
  },
  {
    name: "X-Salada",
    price: 3190,
    category_id: 2,
    offer: false,
    file: 'burger_4.png',
  },
  {
    name: "X-Especial da casa com Nuggets",
    price: 3690,
    category_id: 2,
    offer: true,
    file: 'burger_5.png',
  },
  {
    name: "Duplo X-salada com molho especial",
    price: 3890,
    category_id: 2,
    offer: false,
    file: 'burger_6.png',
  },
  {
    name: "X-Tudo Duplo Frango",
    price: 3490,
    category_id: 2,
    offer: true,
    file: 'burger_7.png',
  },
  {
    name: "X- Bacon com molho da casa",
    price: 3690,
    category_id: 2,
    offer: false,
    file: 'burger_8.png',
  },
  {
    name: "Duplo X-Salada Picante",
    price: 3690,
    category_id: 2,
    offer: false,
    file: 'burger_9.png',
  },
  {
    name: "Refrigerantes",
    price: 590,
    category_id: 3,
    offer: true,
    file: 'drink_1.png',
  },
  {
    name: "Água com Gás",
    price: 490,
    category_id: 3,
    offer: false,
    file: 'drink_2.png',
  },
  {
    name: "Sucos Naturais",
    price: 1190,
    category_id: 3,
    offer: true,
    file: 'drink_3.png',
  },
  {
    name: "Café Espresso",
    price: 790,
    category_id: 3,
    offer: false,
    file: 'drink_4.png',
  },
  {
    name: "Chás",
    price: 590,
    category_id: 3,
    offer: true,
    file: 'drink_5.png',
  },
  {
    name: "Bebidas Lácteas",
    price: 1590,
    category_id: 3,
    offer: false,
    file: 'drink_6.png',
  },
  {
    name: "Coquetéis",
    price: 2390,
    category_id: 3,
    offer: true,
    file: 'drink_7.png',
  },
  {
    name: "Bebidas Alcoólicas",
    price: 2690,
    category_id: 3,
    offer: false,
    file: 'drink_8.png',
  },
  {
    name: "Energéticos",
    price: 1390,
    category_id: 3,
    offer: false,
    file: 'drink_9.png',
  },
  {
    name: "Bolos",
    price: 1590,
    category_id: 4,
    offer: true,
    file: 'dessert_1.png',
  },
  {
    name: "Sorvetes",
    price: 1690,
    category_id: 4,
    offer: false,
    file: 'dessert_2.png',
  },
  {
    name: "Tortas",
    price: 2190,
    category_id: 4,
    offer: true,
    file: 'dessert_3.png',
  },
  {
    name: "Pudins",
    price: 1290,
    category_id: 4,
    offer: false,
    file: 'dessert_4.png',
  },
  {
    name: "Mousses",
    price: 1490,
    category_id: 4,
    offer: true,
    file: 'dessert_5.png',
  },
  {
    name: "Petit Fours",
    price: 1990,
    category_id: 4,
    offer: false,
    file: 'dessert_6.png',
  },
  {
    name: "Doces Tradicionais",
    price: 890,
    category_id: 4,
    offer: true,
    file: 'dessert_7.png',
  },
  {
    name: "Pavês",
    price: 1790,
    category_id: 4,
    offer: false,
    file: 'dessert_8.png',
  },
  {
    name: "Cheesecakes",
    price: 2490,
    category_id: 4,
    offer: false,
    file: 'dessert_9.png',
  }
];

// Map the seed products to the format expected by the frontend
export const getProducts = (): Product[] => {
  try {
    return sampleProducts.map((product: SeedProduct, index: number) => ({
      id: index + 1, // Generate sequential IDs
      name: product.name,
      price: product.price,
      category_id: product.category_id,
      offer: Boolean(product.offer),
      path: product.file, // Just the filename
      image: `/assets/${product.file}` // Full path for the image
    }));
  } catch (error) {
    console.error('Error mapping products:', error);
    return [];
  }
};

// Map the seed categories to the format expected by the frontend
export const getCategories = (): Category[] => {
  try {
    return (seedCategories as SeedCategory[]).map((category: SeedCategory, index: number) => ({
      id: index + 1, // Generate sequential IDs
      name: category.name,
      path: category.file.replace('./src/data/assets/', '') // Extract just the filename
    }));
  } catch (error) {
    console.error('Error mapping categories:', error);
    return [];
  }
};