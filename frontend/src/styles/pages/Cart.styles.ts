import styled from 'styled-components'

export const Container = styled.div`
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%);
`

export const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #ffc107;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  font-family: 'Fredoka One', cursive;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ffc107, #ffed4e);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 193, 7, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const CartItems = styled.div`
  background: linear-gradient(135deg, #2d1810 0%, #1a1a1a 100%);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.2);
  border: 2px solid #ffc107;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 193, 7, 0.1);
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const ItemInfo = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ItemName = styled.h3`
  margin: 0 0 0.5rem;
  color: #f8f9fa;
  font-size: 1.125rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const ItemPrice = styled.div`
  color: #ffc107;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:before {
    content: 'R$';
    font-size: 0.9rem;
    font-weight: 500;
    color: #adb5bd;
  }
`

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const QuantityButton = styled.button`
  background: linear-gradient(135deg, #ffc107 0%, #ffed4e 100%);
  border: 2px solid #2d1810;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  color: #2d1810;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #ffed4e 0%, #ffc107 100%);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(255, 193, 7, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const QuantityDisplay = styled.span`
  font-weight: 600;
  color: #f8f9fa;
  min-width: 2rem;
  text-align: center;
  font-size: 1.125rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const RemoveButton = styled.button`
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: white;
  border: 2px solid #ffc107;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(220, 53, 69, 0.4);
    border-color: #ffed4e;
  }

  &:active {
    transform: translateY(0);
  }
`

export const CartSummary = styled.div`
  background: linear-gradient(135deg, #2d1810 0%, #1a1a1a 100%);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.2);
  border: 2px solid #ffc107;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.125rem;

  &:last-child {
    margin-bottom: 0;
    padding-top: 1rem;
    border-top: 2px solid rgba(255, 193, 7, 0.3);
    font-weight: 700;
    font-size: 1.25rem;
    color: #ffc107;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`

export const SummaryLabel = styled.span`
  color: #adb5bd;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const SummaryValue = styled.span`
  color: #ffc107;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:before {
    content: 'R$';
    font-size: 0.9rem;
    font-weight: 500;
    color: #adb5bd;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ffc107 0%, #ffed4e 100%);
  color: #2d1810;
  border: 2px solid #2d1810;
  padding: 1rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.125rem;
  position: relative;
  overflow: hidden;
  text-shadow: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(45, 24, 16, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 193, 7, 0.6);
    background: linear-gradient(135deg, #ffed4e 0%, #ffc107 100%);
  }

  &:hover:before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #adb5bd;
`

export const EmptyCartIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`

export const EmptyCartText = styled.p`
  font-size: 1.25rem;
  margin: 0 0 1rem;
  color: #f8f9fa;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const EmptyCartSubtext = styled.p`
  font-size: 1rem;
  margin: 0 0 2rem;
  color: #adb5bd;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const BackToMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ffc107 0%, #ffed4e 100%);
  color: #2d1810;
  border: 2px solid #2d1810;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  transition: all 0.3s ease;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 193, 7, 0.6);
    background: linear-gradient(135deg, #ffed4e 0%, #ffc107 100%);
  }

  &:active {
    transform: translateY(0);
  }
`