import styled from 'styled-components'

export const SideCartContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 5rem;
  background: linear-gradient(145deg, #3a2317 0%, #2d1810 100%);
  border-radius: 1rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 193, 7, 0.2);
  padding: 1.5rem;
  min-width: 320px;
  max-width: 400px;
  z-index: 1000;
  margin-left: auto;
  transform: translateX(0);
  transition: all 0.3s ease;
  border: 2px solid #ffc107;
  backdrop-filter: blur(10px);
  box-sizing: border-box;

  &:hover {
    box-shadow: 
      0 20px 45px rgba(255, 87, 34, 0.3),
      inset 0 1px 0 rgba(255, 193, 7, 0.3);
    border-color: #ffed4e;
  }

  @media (max-width: 768px) {
    right: 1rem;
    left: 1rem;
    min-width: auto;
    max-width: none;
    top: 4.5rem;
  }
`

export const SideCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(255, 193, 7, 0.3);
`

export const SideCartTitle = styled.h3`
  margin: 0;
  color: #f8f9fa;
  font-size: 1.25rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const SideCartItemCount = styled.span`
  background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
  color: #2d1810;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  animation: bounce 0.5s ease;
  border: 1px solid #ffed4e;
  text-shadow: none;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`

export const SideCartItems = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 193, 7, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffc107;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ffed4e;
  }
`

export const SideCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 193, 7, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 193, 7, 0.1);
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  &:last-child {
    border-bottom: none;
  }
`

export const SideItemInfo = styled.div`
  flex: 1;
`

export const SideItemName = styled.div`
  font-weight: 500;
  color: #f8f9fa;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const SideItemPrice = styled.div`
  color: #ffc107;
  font-weight: 600;
  font-size: 0.85rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const SideItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
`

export const SideQuantityButton = styled.button`
  background: rgba(255, 193, 7, 0.2);
  border: 1px solid #ffc107;
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  color: #ffc107;
  transition: all 0.2s ease;

  &:hover {
    background: #ffc107;
    color: #2d1810;
    transform: scale(1.1);
    border-color: #ffed4e;
  }

  &:active {
    transform: scale(0.95);
  }
`

export const SideQuantityDisplay = styled.span`
  font-weight: 600;
  color: #f8f9fa;
  min-width: 1.5rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const SideCartTotal = styled.div`
  border-top: 2px solid rgba(255, 193, 7, 0.3);
  padding-top: 1rem;
  margin-top: 1rem;
`

export const SideTotalLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8f9fa;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const SideTotalAmount = styled.span`
  color: #ffc107;
  font-size: 1.25rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const SideCheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
  color: #2d1810;
  border: 2px solid #ffc107;
  padding: 0.875rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
    background: linear-gradient(135deg, #ffed4e 0%, #ffc107 100%);
    border-color: #ffed4e;
  }

  &:hover:before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
  }
`

export const SideEmptyCart = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  color: #adb5bd;
`

export const SideEmptyCartIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
  color: #ffc107;
`

export const SideEmptyCartText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #adb5bd;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`