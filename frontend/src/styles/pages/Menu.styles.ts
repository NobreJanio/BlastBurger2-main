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

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #f8f9fa;
  margin: 0;
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`

export const FilterSection = styled.div`
  background: linear-gradient(135deg, #2d1810 0%, #1a1a1a 100%);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.2);
  border: 2px solid #ffc107;
`

export const FilterTitle = styled.h3`
  margin: 0 0 1.5rem;
  color: #ffc107;
  font-size: 1.25rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`

export const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#ffc107' : '#6c757d'};
  background: ${props => props.active ? 'linear-gradient(135deg, #ffc107 0%, #ffed4e 100%)' : 'transparent'};
  color: ${props => props.active ? '#2d1810' : '#f8f9fa'};
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-shadow: ${props => props.active ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'};

  &:hover {
    border-color: #ffc107;
    background: ${props => props.active ? 'linear-gradient(135deg, #ffed4e 0%, #ffc107 100%)' : 'rgba(255, 193, 7, 0.2)'};
    color: ${props => props.active ? '#2d1810' : '#ffc107'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 1rem 1.5rem;
  border: 2px solid #6c757d;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(45, 24, 16, 0.8);
  color: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #ffc107;
    background: rgba(45, 24, 16, 0.9);
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
  }

  &::placeholder {
    color: #adb5bd;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
  margin-right: 1rem;

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
  margin: 0 0 1rem;
  color: #374151;
`

export const EmptyStateSubtext = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #9ca3af;
`

export const BackToMenuButton = styled.button`
  background: linear-gradient(135deg, #ffc107 0%, #ffed4e 100%);
  color: #2d1810;
  border: 2px solid #ffc107;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-top: 1rem;
  text-shadow: none;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, #ffed4e 0%, #ffc107 100%);
    border-color: #ffed4e;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`