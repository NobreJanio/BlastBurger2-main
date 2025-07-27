import styled from 'styled-components'

export const Card = styled.div`
  background: linear-gradient(145deg, #3a2317 0%, #2d1810 100%);
  border-radius: 1rem;
  border: 2px solid #ffc107;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 193, 7, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(255, 87, 34, 0.4),
      inset 0 1px 0 rgba(255, 193, 7, 0.3);
    border-color: #ffed4e;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff5722, #ffc107, #ff5722);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    border-radius: 50%;
  }

  &:hover:after {
    width: 200px;
    height: 200px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  background: linear-gradient(135deg, #2d1810 0%, #1a0f08 100%);
  border-bottom: 2px solid rgba(255, 193, 7, 0.3);
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`

export const OfferBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`

export const CardContent = styled.div`
  padding: 1.5rem;
`

export const ProductName = styled.h3`
  margin: 0 0 0.75rem;
  color: #f8f9fa;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;

  ${Card}:hover & {
    color: #ffc107;
  }
`

export const ProductPrice = styled.div`
  color: #ffc107;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;

  &:before {
    content: 'R$';
    font-size: 0.9rem;
    font-weight: 500;
    color: #adb5bd;
  }
`

export const AddToCartButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
  color: #2d1810;
  border: 2px solid #ffc107;
  padding: 0.875rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 2;
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

  &:disabled {
    background: #6b7280;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border-color: #6b7280;

    &:hover {
      transform: none;
      box-shadow: none;
      background: #6b7280;
      border-color: #6b7280;
    }
  }
`

export const AddedToCartButton = styled(AddToCartButton)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-color: #10b981;
  color: white;
  
  &:hover {
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
    border-color: #34d399;
  }
`

export const ButtonIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1rem;
`