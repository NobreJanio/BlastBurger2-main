import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import { getProducts } from '../services/localData'
import { Product } from '../types/Product'
import {
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  HeroImageContainer,
  HeroImage,
  FeaturesSection,
  FeaturesContainer,
  FeaturesTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from '../styles/pages/Home.styles'

const Home: React.FC = () => {
  const [offerProducts, setOfferProducts] = useState<Product[]>([]);
  const [mostOrderedProducts, setMostOrderedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get products data
    const products = getProducts();
    
    // Filter products on offer
    const offers = products.filter(product => product.offer);
    setOfferProducts(offers);
    
    // For most ordered products, we'll use a subset of products
    // In a real app, this would come from an API with actual order data
    // Here we're simulating by taking products from category 2 (burgers)
    const burgers = products.filter(product => product.category_id === 2);
    setMostOrderedProducts(burgers.slice(0, 6)); // Take first 6 burgers
    
    setLoading(false);
  }, []);

  const features = [
    {
      id: 1,
      icon: '🍔',
      title: 'Burger Supremo',
      description: 'Nosso hambúrguer artesanal com blend especial de carnes nobres, queijo derretido e molho secreto da casa.'
    },
    {
      id: 2,
      icon: '🔥',
      title: 'Grelhado na Brasa',
      description: 'Carnes grelhadas no ponto perfeito, com aquele sabor defumado que só a brasa verdadeira pode dar.'
    },
    {
      id: 3,
      icon: '🧀',
      title: 'Queijos Premium',
      description: 'Seleção especial de queijos artesanais que derretem na medida certa para uma explosão de sabor.'
    },
    {
      id: 4,
      icon: '🍟',
      title: 'Batatas Crocantes',
      description: 'Batatas cortadas na hora e fritas no óleo especial, temperadas com nosso blend de especiarias.'
    },
    {
      id: 5,
      icon: '🥤',
      title: 'Bebidas Geladas',
      description: 'Refrigerantes, sucos naturais e milkshakes cremosos para acompanhar sua refeição perfeita.'
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Entrega Rápida',
      description: 'Delivery super rápido para você saborear nossos hambúrguers quentinhos no conforto da sua casa.'
    }
  ];
  
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroTitle className="fire-effect">🔥 BLASTBURGER 🔥</HeroTitle>
          <HeroSubtitle>
            O sabor que explode na sua boca! Hambúrguers artesanais feitos com ingredientes premium, 
            carnes suculentas e o amor pela gastronomia. Cada mordida é uma experiência única!
          </HeroSubtitle>
          <CTAButton as={Link} to="/menu">🍔 PEÇA JÁ! 🍔</CTAButton>
        </HeroContent>
        <HeroImageContainer>
          <HeroImage src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop" alt="Hambúrguer delicioso" />
        </HeroImageContainer>
      </HeroSection>

      {!loading && (
        <>
          <ProductCarousel title="Ofertas Especiais" products={offerProducts} />
          <ProductCarousel title="Mais Pedidos" products={mostOrderedProducts} />
        </>
      )}

      <FeaturesSection>
        <FeaturesContainer>
          <FeaturesTitle>🍔 NOSSOS DIFERENCIAIS 🍔</FeaturesTitle>
          <FeaturesGrid>
            {features.map(feature => (
              <FeatureCard key={feature.id}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>
    </Container>
  )
}

export default Home