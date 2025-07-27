import React from 'react'
import {
  Card,
  ImageContainer,
  ProductImage,
  OfferBadge,
  CardContent,
  ProductName,
  ProductPrice,
  AddToCartButton
} from '../styles/components/ProductCard.styles'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image?: string
  offer?: boolean
  onAddToCart?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, offer, onAddToCart }) => {
  const imageUrl = image || '/assets/default-product.jpg'
  
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={imageUrl} alt={name} />
        {offer && <OfferBadge>Oferta</OfferBadge>}
      </ImageContainer>
      
      <CardContent>
        <ProductName>{name}</ProductName>
        <ProductPrice>R$ {(price / 100).toFixed(2).replace('.', ',')}</ProductPrice>
        <AddToCartButton onClick={onAddToCart}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </CardContent>
    </Card>
  )
}

export default ProductCard