import styled from "styled-components";

// Styled components (self-contained for web component)
export const FormContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 300;
`;

export const Subtitle = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #333;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 12px;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#e1e5e9'};
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#333'};
  }
`;

export const Select = styled.select<{ hasError?: boolean }>`
  padding: 12px;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#e1e5e9'};
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#333'};
  }
`;

export const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 12px;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#e1e5e9'};
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#333'};
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background: #333;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;
  
  &:hover:not(:disabled) {
    background: #000;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;