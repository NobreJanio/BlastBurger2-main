import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 5rem;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%);
`

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(255, 87, 34, 0.1) 0%, transparent 70%);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 87, 34, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    min-height: 60vh;
  }
`

export const HeroContent = styled.div`
  flex: 1;
  max-width: 500px;
  z-index: 2;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

export const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  position: relative;
  font-family: 'Impact', 'Arial Black', sans-serif;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  letter-spacing: -2px;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 120px;
    height: 8px;
    background: linear-gradient(90deg, #ff5722, #ffc107);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(255, 87, 34, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`

export const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #ff5722 0%, #ff3d00 50%, #d84315 100%);
  color: white;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 25px rgba(255, 87, 34, 0.4);
  border: 3px solid #ffc107;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 87, 34, 0.6);
    border-color: #ffeb3b;
  }

  &:hover:before {
    left: 100%;
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`

export const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: '🔥';
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 3rem;
    animation: pulse 2s infinite;
    z-index: 3;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }
`

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 25px 50px rgba(255, 87, 34, 0.3));
  animation: float 6s ease-in-out infinite;
  border-radius: 20px;
  border: 4px solid #ffc107;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(-2deg);
    }
    50% {
      transform: translateY(-25px) rotate(2deg);
    }
  }
`

export const BannerImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: auto;
  opacity: 0.05;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 150%;
  }
`

export const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2d1810 0%, #1a1a1a 50%, #2d1810 100%);
  position: relative;
  border-top: 4px solid #ffc107;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent 0%, rgba(45, 24, 16, 0.8) 100%);
    pointer-events: none;
  }

  &:after {
    content: '🍔🍟🥤';
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    opacity: 0.3;
    animation: bounce 3s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`

export const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 3rem;
  font-weight: 900;
  position: relative;
  font-family: 'Impact', 'Arial Black', sans-serif;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  letter-spacing: 2px;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 6px;
    background: linear-gradient(90deg, #ff5722, #ffc107);
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(255, 87, 34, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const FeatureCard = styled.div`
  background: linear-gradient(145deg, #3a2317 0%, #2d1810 100%);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 193, 7, 0.2);
  border: 2px solid #ffc107;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #ff5722, #ffc107, #ff5722);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(255, 87, 34, 0.4),
      inset 0 1px 0 rgba(255, 193, 7, 0.3);
    border-color: #ffeb3b;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  &:hover:after {
    width: 200px;
    height: 200px;
  }
`

export const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 6px 12px rgba(255, 193, 7, 0.4));
  }
`

export const FeatureTitle = styled.h3`
  margin: 0 0 1rem;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const FeatureDescription = styled.p`
  margin: 0;
  color: #e0e0e0;
  line-height: 1.6;
  position: relative;
  z-index: 2;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const ProductsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 100%);
`