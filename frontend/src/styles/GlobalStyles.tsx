import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;