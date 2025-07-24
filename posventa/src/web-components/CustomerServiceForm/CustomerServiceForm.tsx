import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormData, CustomerServiceFormProps } from "./CustomerServiceForm.types";
import { issueNames } from "./CustomerServiceForm.constants";
import {
  FormContainer,
  Header,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  ErrorMessage,
  SubmitButton,
  LoadingSpinner
} from "./CustomerServiceForm.styles";

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