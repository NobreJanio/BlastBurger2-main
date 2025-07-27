import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaTrash } from 'react-icons/fa'
import { useCart } from '../contexts/CartContext'
import {
  Container,
  Header,
  Title,
  CartItems,
  CartItem,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemActions,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  RemoveButton,
  CartSummary,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  CheckoutButton,
  EmptyCart,
  EmptyCartIcon,
  EmptyCartText,
  EmptyCartSubtext,
  BackToMenuButton
} from '../styles/pages/Cart.styles'

const Cart: React.FC = () => {
  const navigate = useNavigate()
  const { items, removeFromCart, updateQuantity, total } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Container>
      <Header>
        <BackToMenuButton onClick={() => navigate('/menu')}>
          <FaArrowLeft /> Voltar ao Menu
        </BackToMenuButton>
        <Title>Seu Carrinho ({totalItems} itens)</Title>
      </Header>

      {items.length === 0 ? (
        <EmptyCart>
          <EmptyCartIcon>🛒</EmptyCartIcon>
          <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
          <EmptyCartSubtext>Adicione alguns deliciosos hambúrgueres ao seu carrinho!</EmptyCartSubtext>
          <BackToMenuButton onClick={() => navigate('/menu')}>
            Explorar Menu
          </BackToMenuButton>
        </EmptyCart>
      ) : (
        <>
          <CartItems>
            {items.map(item => (
              <CartItem key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>R$ {((item.price * item.quantity) / 100).toFixed(2).replace('.', ',')}</ItemPrice>
                </ItemInfo>
                
                <ItemActions>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </QuantityButton>
                    <QuantityDisplay>{item.quantity}</QuantityDisplay>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </QuantityButton>
                  </QuantityControls>
                  
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    <FaTrash />
                  </RemoveButton>
                </ItemActions>
              </CartItem>
            ))}
          </CartItems>

          <CartSummary>
            <SummaryRow>
              <SummaryLabel>Subtotal ({totalItems} itens):</SummaryLabel>
              <SummaryValue>R$ {(total / 100).toFixed(2).replace('.', ',')}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>Taxa de entrega:</SummaryLabel>
              <SummaryValue>R$ 5,00</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>Total:</SummaryLabel>
              <SummaryValue>R$ {((total + 500) / 100).toFixed(2).replace('.', ',')}</SummaryValue>
            </SummaryRow>
            
            <CheckoutButton onClick={() => alert('Funcionalidade de checkout em breve!')}>
              Finalizar Pedido - R$ {((total + 500) / 100).toFixed(2).replace('.', ',')}
            </CheckoutButton>
          </CartSummary>
        </>
      )}
    </Container>
  )
}

export default Cart