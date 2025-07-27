import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import {
  HeaderContainer,
  Logo,
  Nav,
  UserSection,
  UserName,
  LogoutButton,
  NavLink,
  CartIcon,
  CartCount
} from '../styles/components/Header.styles'

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const { items } = useCart()
  
  // Calculate total items in cart
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  
  return (
    <HeaderContainer>
      <Logo as={Link} to="/">
        🍔 BlastBurger 🔥
      </Logo>
      <Nav>
        <NavLink to="/menu">Menu</NavLink>
        <CartIcon to="/cart">
          <FaShoppingCart />
          <span>Cart</span>
          {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
        </CartIcon>
        
        {isAuthenticated ? (
          <UserSection>
            <UserName>
              <FaUser />
              {user?.name}
            </UserName>
            <LogoutButton onClick={logout}>
              <FaSignOutAlt />
              Logout
            </LogoutButton>
          </UserSection>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </Nav>
    </HeaderContainer>
  )
}

export default Header