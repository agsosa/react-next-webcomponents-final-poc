import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultCard = styled.div<{ isSuccess: boolean }>`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 50px;
  text-align: center;
  border-top: 4px solid ${props => props.isSuccess ? '#28a745' : '#dc3545'};
`;

const IconContainer = styled.div<{ isSuccess: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.isSuccess ? '#28a745' : '#dc3545'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 30px;
`;

const Title = styled.h1<{ isSuccess: boolean }>`
  color: ${props => props.isSuccess ? '#28a745' : '#dc3545'};
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Message = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Details = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  color: #666;
  font-weight: 500;
`;

const DetailValue = styled.span`
  color: #333;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'primary' ? `
    background: #333;
    color: white;
    
    &:hover {
      background: #000;
    }
  ` : `
    background: transparent;
    color: #333;
    border: 1px solid #333;
    
    &:hover {
      background: #333;
      color: white;
    }
  `}
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #e9ecef;
  border-radius: 50%;
  border-top-color: #333;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #333;
  font-size: 1.1rem;
`;

export default function ResultPage() {
  const router = useRouter();
  const { status } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate processing time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Posventa - Procesando...</title>
        </Head>
        <Container>
          <ResultCard isSuccess={true}>
            <LoadingContainer>
              <Spinner />
              <LoadingText>Procesando tu consulta...</LoadingText>
            </LoadingContainer>
          </ResultCard>
        </Container>
      </>
    );
  }

  const isSuccess = status === 'success';
  const ticketNumber = `TK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <>
      <Head>
        <title>Posventa - {isSuccess ? 'Consulta Enviada' : 'Error en el Envío'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ResultCard isSuccess={isSuccess}>
          <IconContainer isSuccess={isSuccess}>
            {isSuccess ? '✓' : '⚠'}
          </IconContainer>
          
          <Title isSuccess={isSuccess}>
            {isSuccess ? '¡Consulta Enviada!' : 'Error en el Envío'}
          </Title>
          
          <Message>
            {isSuccess 
              ? 'Tu consulta ha sido recibida correctamente. Nuestro equipo de soporte se pondrá en contacto contigo a la brevedad.'
              : 'Hubo un problema al procesar tu consulta. Por favor, intenta nuevamente o contacta a nuestro equipo de soporte directamente.'
            }
          </Message>
          
          {isSuccess && (
            <Details>
              <DetailItem>
                <DetailLabel>Número de Ticket:</DetailLabel>
                <DetailValue>{ticketNumber}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Fecha de Envío:</DetailLabel>
                <DetailValue>{currentDate}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Estado:</DetailLabel>
                <DetailValue>En Proceso</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Tiempo Respuesta:</DetailLabel>
                <DetailValue>24-48 horas</DetailValue>
              </DetailItem>
            </Details>
          )}
          
          <ButtonGroup>
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '/'}
            >
              {isSuccess ? 'Hacer Otra Consulta' : 'Intentar Nuevamente'}
            </Button>
            
            {isSuccess && (
              <Button 
                variant="secondary"
                onClick={() => {
                  // Simulate tracking page
                  alert(`Número de seguimiento: ${ticketNumber}\n\nPodrás consultar el estado de tu ticket en la sección "Mis Consultas" de tu cuenta.`);
                }}
              >
                Seguir mi Consulta
              </Button>
            )}
            
            {!isSuccess && (
              <Button 
                variant="secondary"
                onClick={() => {
                  alert('Puedes contactarnos directamente:\n\n📞 Teléfono: 0800-123-4567\n📧 Email: soporte@empresa.com\n💬 Chat en vivo: disponible 24/7');
                }}
              >
                Contacto Directo
              </Button>
            )}
          </ButtonGroup>
        </ResultCard>
      </Container>
    </>
  );
}