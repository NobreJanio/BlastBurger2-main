import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Menu from '../pages/Menu'
import Cart from '../pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}