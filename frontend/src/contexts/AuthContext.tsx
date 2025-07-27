import React, { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

interface User {
  id: number
  name: string
  email: string
  admin: boolean
}

interface DecodedToken {
  id: number
  name: string
  admin: boolean
  iat: number
  exp: number
}

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    // Check if there's a token in localStorage when the app loads
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token)
        // Check if token is expired
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem('token')
          return
        }
        
        // Set user data from token
        setUser({
          id: decoded.id,
          name: decoded.name,
          email: '', // Email is not stored in token
          admin: decoded.admin
        })
      } catch (error) {
        console.error('Invalid token:', error)
        localStorage.removeItem('token')
      }
    }
  }, [])
  
  const login = (token: string) => {
    localStorage.setItem('token', token)
    try {
      const decoded = jwtDecode<DecodedToken>(token)
      setUser({
        id: decoded.id,
        name: decoded.name,
        email: '', // Email is not stored in token
        admin: decoded.admin
      })
    } catch (error) {
      console.error('Invalid token:', error)
    }
  }
  
  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }
  
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}