import React from 'react'
import ProductCard from './ProductCard'
import { useCart } from '../contexts/CartContext'
import { Product } from '../types/Product'
import {
  CarouselContainer,
  CarouselTitle,
  ProductsGrid
} from '../styles/components/ProductCarousel.styles'

interface ProductCarouselProps {
  title: string
  products: Product[]
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const { addToCart } = useCart()

  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
      <ProductsGrid>
        {products.slice(0, 4).map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            offer={product.offer}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ProductsGrid>
    </CarouselContainer>
  )
}

export default ProductCarousel