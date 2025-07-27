import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'
import { useCart } from '../contexts/CartContext'
import { getProducts, getCategories } from '../services/localData'
import { Product, Category } from '../types/Product'
import {
  Container,
  Header,
  Title,
  Subtitle,
  FilterSection,
  FilterTitle,
  CategoryFilters,
  CategoryButton,
  SearchContainer,
  SearchInput,
  ProductsGrid,
  LoadingContainer,
  LoadingSpinner,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubtext
} from '../styles/pages/Menu.styles'

const Menu: React.FC = () => {
  const { addToCart } = useCart()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Use local data instead of API calls
        const localProducts = getProducts()
        const localCategories = getCategories()
        
        setProducts(localProducts)
        setCategories(localCategories)
        setError(null)
      } catch (error) {
        console.error('Error loading local data:', error)
        setError('Falha ao carregar dados do menu. Tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <EmptyState>
          <EmptyStateIcon>⚠️</EmptyStateIcon>
          <EmptyStateText>Erro ao carregar menu</EmptyStateText>
          <EmptyStateSubtext>{error}</EmptyStateSubtext>
        </EmptyState>
      </Container>
    )
  }

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === null || product.category_id === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Container>
      <Header>
        <Title>Nosso Menu</Title>
        <Subtitle>Descubra nossos deliciosos hambúrgueres</Subtitle>
      </Header>

      <FilterSection>
        <FilterTitle>Categorias</FilterTitle>
        <CategoryFilters>
          <CategoryButton
            active={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </CategoryButton>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              active={category.id === selectedCategory}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryFilters>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </FilterSection>

      {filteredProducts.length === 0 ? (
        <EmptyState>
          <EmptyStateIcon>🍔</EmptyStateIcon>
          <EmptyStateText>Nenhum produto encontrado</EmptyStateText>
          <EmptyStateSubtext>Tente ajustar os filtros ou buscar por outro termo</EmptyStateSubtext>
        </EmptyState>
      ) : (
        <ProductsGrid>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              offer={product.offer}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </ProductsGrid>
      )}

      <Cart />
    </Container>
  )
}

export default Menu