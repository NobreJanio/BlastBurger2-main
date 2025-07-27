import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <GlobalStyles />
          <Header />
          <Router />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
