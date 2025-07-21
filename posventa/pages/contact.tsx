import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: #f8f9fa;
`;

const BackButton = styled.button`
  background: white;
  border: 1px solid #e9ecef;
  color: #333;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #333;
  }
`;

const FormCard = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 40px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
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

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  orderNumber?: string;
  priority: 'low' | 'medium' | 'high';
  message: string;
};

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

export default function ContactForm() {
  const router = useRouter();
  const { issue, subissue } = router.query;
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate random success/error (80% success rate)
    const isSuccess = Math.random() > 0.2;
    
    if (isSuccess) {
      window.location.href = '/result?status=success';
    } else {
      window.location.href = '/result?status=error';
    }
  };

  const goBack = () => {
    if (issue) {
      window.location.href = `/issues/${issue}`;
    } else {
      window.location.href = '/';
    }
  };

  const issueName = typeof issue === 'string' ? issueNames[issue] : 'Consulta';

  return (
    <>
      <Head>
        <title>Posventa - Formulario de Contacto</title>
        <meta name="description" content="Formulario de contacto para soporte posventa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <BackButton onClick={goBack}>
          ← Volver
        </BackButton>
        
        <FormCard>
          <Header>
            <Title>Formulario de Contacto</Title>
            <Subtitle>
              Motivo: <strong>{issueName}</strong>
            </Subtitle>
          </Header>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Label>Número de pedido</Label>
              <Input
                {...register("orderNumber")}
                placeholder="ORD-123456 (opcional)"
              />
            </FormGroup>

            <FormGroup>
              <Label>Prioridad *</Label>
              <Select
                {...register("priority", { required: "Selecciona una prioridad" })}
                hasError={!!errors.priority}
              >
                <option value="">Seleccionar prioridad</option>
                <option value="low">Baja - No es urgente</option>
                <option value="medium">Media - Necesito ayuda pronto</option>
                <option value="high">Alta - Es urgente</option>
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
        </FormCard>
      </Container>
    </>
  );
}