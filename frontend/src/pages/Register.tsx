import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import {
  Container,
  FormCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  LoginLink,
  ErrorMessage,
  LoadingSpinner
} from '../styles/pages/Register.styles'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      return
    }
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
      return
    }
    
    setLoading(true)
    
    try {
      await api.post('/users', { name, email, password })
      alert('Cadastro realizado com sucesso!')
      navigate('/login')
    } catch (error: unknown) {
      console.error('Registration failed:', error)
      const errorMessage = error instanceof Error && 'response' in error 
        ? (error as { response?: { data?: { message?: string } } }).response?.data?.message 
        : 'Falha no cadastro. Tente novamente.'
      setError(errorMessage || 'Falha no cadastro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <FormCard>
        <Title>Criar Conta</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </FormGroup>
          <Button type="submit" disabled={loading}>
            {loading && <LoadingSpinner />}
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </Button>
        </Form>
        <LoginLink>
          Já tem uma conta? <Link to="/login">Faça login aqui</Link>
        </LoginLink>
      </FormCard>
    </Container>
  )
}

export default Register