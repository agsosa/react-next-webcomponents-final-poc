import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

// Styled components (self-contained for web component)
const FormContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 300;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #333;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const Input = styled.input<{ hasError?: boolean }>`
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

const Select = styled.select<{ hasError?: boolean }>`
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

const TextArea = styled.textarea<{ hasError?: boolean }>`
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

const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
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

const LoadingSpinner = styled.div`
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

// Types
export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  orderNumber?: string;
  priority: 'low' | 'medium' | 'high';
  message: string;
};

export interface CustomerServiceFormProps {
  // Display props
  title?: string;
  subtitle?: string;
  issueName?: string;
  showHeader?: boolean;
  
  // Configuration props
  submitUrl?: string;
  successRedirect?: string;
  errorRedirect?: string;
  
  // Event handlers
  onSubmit?: (data: FormData) => void;
  onSuccess?: (data: FormData, response?: any) => void;
  onError?: (error: string, data?: FormData) => void;
  
  // Initial values
  initialValues?: Partial<FormData>;
  
  // Validation options
  requireOrderNumber?: boolean;
  allowedPriorities?: Array<'low' | 'medium' | 'high'>;
}

const issueNames: Record<string, string> = {
  'track-order': '¿Dónde está mi pedido?',
  'change-address': 'Modificar domicilio de entrega',
  'return-product': 'Devolver un producto',
  'cancel-order': 'Cancelar mi pedido',
  'payment-issues': 'Problemas con el pago',
  'product-defective': 'Producto defectuoso o dañado',
  'invoice-billing': 'Facturación y comprobantes',
  'other-issues': 'Otro motivo'
};

export default function CustomerServiceForm({
  title = "Formulario de Contacto",
  subtitle,
  issueName,
  showHeader = true,
  submitUrl,
  successRedirect,
  errorRedirect,
  onSubmit,
  onSuccess,
  onError,
  initialValues,
  requireOrderNumber = false,
  allowedPriorities = ['low', 'medium', 'high']
}: CustomerServiceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: initialValues
  });

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Call custom onSubmit handler if provided
      if (onSubmit) {
        onSubmit(data);
      }
      
      // Submit to URL if provided
      if (submitUrl) {
        const response = await fetch(submitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Call success handler
        if (onSuccess) {
          onSuccess(data, result);
        }
        
        // Redirect on success if specified
        if (successRedirect) {
          window.location.href = successRedirect;
        }
      } else {
        // Simulate API call for demo
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate random success/error (80% success rate)
        const isSuccess = Math.random() > 0.2;
        
        if (isSuccess) {
          if (onSuccess) {
            onSuccess(data);
          }
          if (successRedirect) {
            window.location.href = successRedirect;
          }
        } else {
          throw new Error('Submission failed (simulated error)');
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      if (onError) {
        onError(errorMessage, data);
      }
      
      if (errorRedirect) {
        window.location.href = errorRedirect;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayIssueName = issueName && issueNames[issueName] ? issueNames[issueName] : issueName;

  return (
    <FormContainer>
      {showHeader && (
        <Header>
          <Title>{title}</Title>
          {(subtitle || displayIssueName) && (
            <Subtitle>
              {subtitle}
              {displayIssueName && (
                <>Motivo: <strong>{displayIssueName}</strong></>
              )}
            </Subtitle>
          )}
        </Header>
      )}
      
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormGroup>
          <Label>Nombre completo *</Label>
          <Input
            {...register("fullName", { 
              required: "El nombre es requerido",
              minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" }
            })}
            hasError={!!errors.fullName}
            placeholder="Tu nombre completo"
          />
          {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Correo electrónico *</Label>
          <Input
            type="email"
            {...register("email", { 
              required: "El correo es requerido",
              pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido"
              }
            })}
            hasError={!!errors.email}
            placeholder="tu@email.com"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Teléfono *</Label>
          <Input
            type="tel"
            {...register("phone", { 
              required: "El teléfono es requerido",
              pattern: { 
                value: /^[\+]?[\d\s\-\(\)]{8,15}$/,
                message: "Número de teléfono inválido"
              }
            })}
            hasError={!!errors.phone}
            placeholder="+54 11 1234-5678"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Número de pedido {requireOrderNumber && '*'}</Label>
          <Input
            {...register("orderNumber", requireOrderNumber ? { 
              required: "El número de pedido es requerido" 
            } : {})}
            hasError={!!errors.orderNumber}
            placeholder="ORD-123456 (opcional)"
          />
          {errors.orderNumber && <ErrorMessage>{errors.orderNumber.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Prioridad *</Label>
          <Select
            {...register("priority", { required: "Selecciona una prioridad" })}
            hasError={!!errors.priority}
          >
            <option value="">Seleccionar prioridad</option>
            {allowedPriorities.includes('low') && (
              <option value="low">Baja - No es urgente</option>
            )}
            {allowedPriorities.includes('medium') && (
              <option value="medium">Media - Necesito ayuda pronto</option>
            )}
            {allowedPriorities.includes('high') && (
              <option value="high">Alta - Es urgente</option>
            )}
          </Select>
          {errors.priority && <ErrorMessage>{errors.priority.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Describe tu consulta *</Label>
          <TextArea
            {...register("message", { 
              required: "La descripción es requerida",
              minLength: { value: 10, message: "Describe tu consulta con más detalle (mín. 10 caracteres)" }
            })}
            hasError={!!errors.message}
            placeholder="Describe en detalle tu consulta o problema..."
          />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting && <LoadingSpinner />}
          {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}