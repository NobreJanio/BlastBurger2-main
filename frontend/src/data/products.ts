import { Product } from '../types/Product'

export const getProducts = (): Product[] => {
  return [
    {
      id: 1,
      name: 'Blast Burger Classic',
      price: 25.90,
      category_id: 1,
      offer: false,
      image: '/assets/burger-classic.jpg',
      description: 'Hambúrguer clássico com carne bovina, alface, tomate e molho especial'
    },
    {
      id: 2,
      name: 'Blast Burger Bacon',
      price: 29.90,
      category_id: 1,
      offer: true,
      image: '/assets/burger-bacon.jpg',
      description: 'Hambúrguer com bacon crocante, queijo cheddar e molho barbecue'
    },
    {
      id: 3,
      name: 'Blast Burger Veggie',
      price: 23.90,
      category_id: 1,
      offer: false,
      image: '/assets/burger-veggie.jpg',
      description: 'Hambúrguer vegetariano com blend de legumes e molho especial'
    },
    {
      id: 4,
      name: 'Batata Frita',
      price: 12.90,
      category_id: 2,
      offer: false,
      image: '/assets/fries.jpg',
      description: 'Batatas fritas crocantes temperadas com sal especial'
    },
    {
      id: 5,
      name: 'Refrigerante',
      price: 6.90,
      category_id: 3,
      offer: false,
      image: '/assets/soda.jpg',
      description: 'Refrigerante gelado 350ml'
    }
  ]
}