import React from 'react'
import { useCart } from '../contexts/CartContext'
import { useLocation } from 'react-router-dom'
import {
  SideCartContainer,
  SideCartHeader,
  SideCartTitle,
  SideCartItemCount,
  SideCartItems,
  SideCartItem,
  SideItemInfo,
  SideItemName,
  SideItemPrice,
  SideItemQuantity,
  SideQuantityButton,
  SideQuantityDisplay,
  SideCartTotal,
  SideTotalLabel,
  SideTotalAmount,
  SideCheckoutButton,
  SideEmptyCart,
  SideEmptyCartIcon,
  SideEmptyCartText
} from '../styles/components/Cart.styles'

const Cart: React.FC = () => {
  const { items, updateQuantity, total } = useCart()
  const location = useLocation()
  
  // Only show cart on the menu page and when there are items
  const isMenuPage = location.pathname === '/menu'
  const isCartPage = location.pathname === '/cart'
  const hasItems = items.length > 0
  
  // Don't render the cart if not on menu page, if on cart page, or if cart is empty
  if (!isMenuPage || isCartPage || !hasItems) {
    return null
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <SideCartContainer>
      <SideCartHeader>
        <SideCartTitle>Seu Carrinho</SideCartTitle>
        <SideCartItemCount>{totalItems}</SideCartItemCount>
      </SideCartHeader>
      
      {hasItems ? (
        <>
          <SideCartItems>
            {items.map(item => (
              <SideCartItem key={item.id}>
                <SideItemInfo>
                  <SideItemName>{item.name}</SideItemName>
                  <SideItemPrice>{((item.price * item.quantity) / 100).toFixed(2).replace('.', ',')}</SideItemPrice>
                </SideItemInfo>
                
                <SideItemQuantity>
                  <SideQuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </SideQuantityButton>
                  <SideQuantityDisplay>{item.quantity}</SideQuantityDisplay>
                  <SideQuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </SideQuantityButton>
                </SideItemQuantity>
              </SideCartItem>
            ))}
          </SideCartItems>
          
          <SideCartTotal>
            <SideTotalLabel>
              <span>Total:</span>
              <SideTotalAmount>{(total / 100).toFixed(2).replace('.', ',')}</SideTotalAmount>
            </SideTotalLabel>
            
            <SideCheckoutButton onClick={() => alert('Funcionalidade de checkout em breve!')}>
              Finalizar Pedido
            </SideCheckoutButton>
          </SideCartTotal>
        </>
      ) : (
        <SideEmptyCart>
          <SideEmptyCartIcon>🛒</SideEmptyCartIcon>
          <SideEmptyCartText>Seu carrinho está vazio</SideEmptyCartText>
        </SideEmptyCart>
      )}
    </SideCartContainer>
  )
}

export default Cart