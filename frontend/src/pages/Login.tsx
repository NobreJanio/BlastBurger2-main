import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import api from '../services/api'
import { useAuth } from '../contexts/AuthContext'
import {
  Container,
  LoginCard,
  Title,
  Form,
  InputGroup,
  InputIcon,
  Input,
  SubmitButton,
  RegisterLink
} from '../styles/pages/Login.styles'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('/sessions', { email, password })
      const { token } = response.data
      login(token) // Use the login function from AuthContext
      navigate('/')
    } catch (error) {
      console.error('Login failed:', error)
      alert('Invalid email or password')
    }
  }

  return (
    <Container>
      <LoginCard>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
        <RegisterLink>
          Don't have an account? <Link to="/register">Register here</Link>
        </RegisterLink>
      </LoginCard>
    </Container>
  )
}

export default Login