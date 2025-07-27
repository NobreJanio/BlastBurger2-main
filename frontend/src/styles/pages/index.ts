// Re-exports with explicit aliases to resolve naming conflicts

// Home styles
export {
  Container as HomeContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  HeroImageContainer,
  HeroImage,
  BannerImage,
  FeaturesSection,
  FeaturesContainer,
  FeaturesTitle
} from './Home.styles'

// Login styles
export {
  Container as LoginContainer,
  LoginCard,
  Title as LoginTitle,
  Form as LoginForm,
  InputGroup,
  InputIcon,
  Input as LoginInput,
  SubmitButton,
  RegisterLink,
  ErrorMessage as LoginErrorMessage,
  LoadingSpinner as LoginLoadingSpinner
} from './Login.styles'

// Cart styles
export {
  Container as CartContainer,
  Header as CartHeader,
  Title as CartTitle,
  CartItems,
  CartItem,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemActions,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  RemoveButton,
  CartSummary,
  SummaryRow,
  BackToMenuButton as CartBackToMenuButton
} from './Cart.styles'

// Menu styles
export {
  Container as MenuContainer,
  Header as MenuHeader,
  Title as MenuTitle,
  Subtitle,
  FilterSection,
  FilterTitle,
  CategoryFilters,
  CategoryButton,
  SearchInput,
  ProductsGrid,
  LoadingContainer,
  LoadingSpinner as MenuLoadingSpinner,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubtext,
  BackToMenuButton as MenuBackToMenuButton
} from './Menu.styles'

// Register styles
export {
  Container as RegisterContainer,
  FormCard,
  Title as RegisterTitle,
  Form as RegisterForm,
  FormGroup,
  Label,
  Input as RegisterInput,
  Button,
  LoginLink,
  ErrorMessage as RegisterErrorMessage,
  LoadingSpinner as RegisterLoadingSpinner
} from './Register.styles'