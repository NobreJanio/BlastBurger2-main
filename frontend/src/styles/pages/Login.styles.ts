import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #2d1810 0%, #1a0f08 100%);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
`

export const LoginCard = styled.div`
  background: linear-gradient(135deg, rgba(45, 24, 16, 0.95) 0%, rgba(26, 15, 8, 0.95) 100%);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid #ffc107;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #ffc107;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Fredoka One', cursive;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ffc107, #ffed4e);
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(255, 193, 7, 0.5);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputGroup = styled.div`
  position: relative;
`

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ffc107;
  font-size: 1.125rem;
  transition: color 0.3s ease;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #ffc107;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(45, 24, 16, 0.8);
  color: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #ffed4e;
    background: rgba(45, 24, 16, 0.9);
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.3);
  }

  &:focus + ${InputIcon} {
    color: #ffed4e;
  }

  &::placeholder {
    color: #adb5bd;
  }
`

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ffc107 0%, #ffed4e 100%);
  color: #2d1810;
  padding: 1rem;
  border: 2px solid #2d1810;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 193, 7, 0.6);
    background: linear-gradient(135deg, #ffed4e 0%, #ffc107 100%);
  }

  &:hover:before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border-color: #6c757d;

    &:hover {
      transform: none;
      box-shadow: none;
      background: #6c757d;
    }
  }
`

export const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #adb5bd;

  a {
    color: #ffc107;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #ffed4e;
      text-decoration: underline;
    }
  }
`

export const ErrorMessage = styled.div`
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid #dc2626;
  color: #ffc107;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '⚠️';
  }
`

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`