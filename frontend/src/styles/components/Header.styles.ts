import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #2d1810 0%, #1a1a1a 50%, #2d1810 100%);
  box-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
  padding: 1rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 3px solid #ffc107;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
  }
`

export const Logo = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-family: 'Fredoka One', cursive;
  font-size: 1.5rem;
  color: #ffc107;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 15px rgba(255, 193, 7, 0.6);
  }
  
  img {
    height: 40px;
    width: auto;

    @media (max-width: 768px) {
      height: 35px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

export const UserName = styled.span`
  font-weight: 500;
  color: #ffc107;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(255, 193, 7, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }
`

export const LogoutButton = styled.button`
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: white;
  border: 2px solid #ffc107;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
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

  @media (max-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
  }
`

export const NavLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #ffc107;
    background-color: rgba(255, 193, 7, 0.2);
    transform: translateY(-2px);
    text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffc107, #ffed4e);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover:before {
    width: 80%;
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }
`

export const CartIcon = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #ffc107;
    background-color: rgba(255, 193, 7, 0.2);
    transform: translateY(-2px);
    text-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }
`

export const CartCount = styled.span`
  background: linear-gradient(135deg, #ffc107 0%, #ffed4e 100%);
  color: #2d1810;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 4px;
  animation: bounce 2s infinite;
  border: 2px solid #2d1810;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.4);

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