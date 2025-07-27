import styled from 'styled-components'

export const CarouselContainer = styled.div`
  margin: 4rem 0;
  position: relative;
`

export const CarouselTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffc107;
  position: relative;
  font-weight: 700;
  font-family: 'Fredoka One', cursive;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #ffc107, #ffed4e);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 193, 7, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const SliderContainer = styled.div`
  position: relative;
  
  .slick-dots {
    bottom: -50px;
    
    li button:before {
      color: #ffc107;
      font-size: 12px;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    
    li.slick-active button:before {
      opacity: 1;
      transform: scale(1.2);
    }
    
    li button:hover:before {
      opacity: 0.8;
    }
  }
  
  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 2;
    
    &:before {
      font-size: 24px;
      color: #ffc107;
      opacity: 0.8;
      transition: all 0.3s ease;
    }
    
    &:hover:before {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
  .slick-prev {
    left: -60px;
    
    @media (max-width: 768px) {
      left: -30px;
    }
  }
  
  .slick-next {
    right: -60px;
    
    @media (max-width: 768px) {
      right: -30px;
    }
  }
  
  .slick-slide {
    padding: 0 10px;
    
    > div {
      height: 100%;
    }
  }
  
  .slick-track {
    display: flex;
    align-items: stretch;
  }
  
  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
      
      &:before {
        font-size: 20px;
      }
    }
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: #6b7280;
  font-size: 1.125rem;
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 193, 7, 0.2);
  border-top: 4px solid #ffc107;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;
`

export const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`

export const EmptyStateText = styled.p`
  font-size: 1.125rem;
  margin: 0;
`