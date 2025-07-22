import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "customer-service-form": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          title?: string;
          subtitle?: string;
          "issue-name"?: string;
          "show-header"?: string;
          "submit-url"?: string;
          "success-redirect"?: string;
          "error-redirect"?: string;
          "initial-values"?: string;
          "require-order-number"?: string;
          "allowed-priorities"?: string;
        },
        HTMLElement
      >;
    }
  }
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  background: #f8f9fa;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: 300;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Badge = styled.span`
  background: #007bff;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Section = styled.section`
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 400;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
`;

const EventLog = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  max-height: 200px;
  overflow-y: auto;
`;

const EventItem = styled.div`
  font-family: monospace;
  font-size: 0.8rem;
  margin-bottom: 3px;
  color: #495057;
`;

const InfoBox = styled.div`
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  
  h3 {
    color: #1976d2;
    margin: 0 0 8px 0;
    font-size: 1rem;
  }
  
  p {
    margin: 0;
    color: #1565c0;
    font-size: 0.9rem;
  }
`;

const TestControls = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const TestButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background: #0056b3;
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

export default function TestCustomerServiceForm() {
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const addEvent = (message: string) => {
      setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    // Check if components are already loaded
    if (typeof window !== 'undefined' && window.customElements.get('customer-service-form')) {
      setComponentsLoaded(true);
      addEvent('Posventa web components already loaded');
      return;
    }

    addEvent('Loading Posventa web components from http://localhost:3001');

    // Load the web components script from posventa app
    const script = document.createElement('script');
    script.src = 'http://localhost:3001/web-components/web-components.umd.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    script.onload = () => {
      addEvent('Posventa web components script loaded successfully');
      // Wait a bit for registration
      setTimeout(() => {
        if (window.customElements.get('customer-service-form')) {
          setComponentsLoaded(true);
          addEvent('customer-service-form component is ready');
        }
      }, 100);
    };
    
    script.onerror = () => {
      addEvent('❌ Error loading Posventa web components script');
      addEvent('Make sure Posventa app is running on port 3001');
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleFormSubmit = (data: any) => {
    setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: 📝 Form submitted: ${JSON.stringify(data)}`]);
  };

  const handleFormSuccess = (data: any, response?: any) => {
    setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: ✅ Form success: ${JSON.stringify(data)}`]);
  };

  const handleFormError = (error: string, data?: any) => {
    setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: ❌ Form error: ${error}`]);
  };

  useEffect(() => {
    if (componentsLoaded) {
      // Configure the web component with callbacks
      const elements = document.querySelectorAll('customer-service-form');
      elements.forEach(element => {
        (element as any).onSubmit = handleFormSubmit;
        (element as any).onSuccess = handleFormSuccess;
        (element as any).onError = handleFormError;
      });
    }
  }, [componentsLoaded]);

  return (
    <>
      <Head>
        <title>OMS - Test Customer Service Form Web Component</title>
        <meta name="description" content="Testing Posventa customer service form web component in OMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container>
        <Header>
          <Title>Customer Service Form Web Component Test</Title>
          <Subtitle>
            OMS consumiendo el formulario de atención al cliente desde Posventa
          </Subtitle>
          <Badge>Cross-App Integration</Badge>
        </Header>

        <InfoBox>
          <h3>📋 Micro-Frontend Customer Service Integration</h3>
          <p>
            Esta página demuestra cómo OMS puede embeber el formulario completo de atención al cliente
            desde Posventa, permitiendo a los operadores gestionar consultas directamente desde su backoffice.
          </p>
        </InfoBox>

        <Section>
          <SectionTitle>🎮 Test Configuration</SectionTitle>
          <TestControls>
            <TestButton 
              disabled={!componentsLoaded}
              onClick={() => {
                const element = document.querySelector('customer-service-form');
                if (element) {
                  (element as any).issueName = 'track-order';
                }
              }}
            >
              Set Issue: Track Order
            </TestButton>
            <TestButton 
              disabled={!componentsLoaded}
              onClick={() => {
                const element = document.querySelector('customer-service-form');
                if (element) {
                  (element as any).issueName = 'return-product';
                  (element as any).requireOrderNumber = 'true';
                }
              }}
            >
              Set Issue: Return Product (Require Order)
            </TestButton>
            <TestButton 
              disabled={!componentsLoaded}
              onClick={() => {
                const element = document.querySelector('customer-service-form');
                if (element) {
                  (element as any).allowedPriorities = JSON.stringify(['medium', 'high']);
                }
              }}
            >
              Restrict Priorities (Medium/High only)
            </TestButton>
          </TestControls>
        </Section>

        <Section>
          <SectionTitle>📝 Customer Service Form</SectionTitle>
          
          {!componentsLoaded ? (
            <LoadingMessage>
              Cargando formulario de atención al cliente desde Posventa...
              <br />
              <small>Asegúrate de que la app Posventa esté corriendo en puerto 3001</small>
            </LoadingMessage>
          ) : (
            <customer-service-form
              title="Formulario de Soporte"
              subtitle="Enviado desde OMS - Operador: Juan Pérez"
              issue-name="track-order"
              show-header="true"
            />
          )}
        </Section>

        {events.length > 0 && (
          <Section>
            <SectionTitle>📊 Event Monitor</SectionTitle>
            <EventLog>
              {events.map((event, index) => (
                <EventItem key={index}>{event}</EventItem>
              ))}
            </EventLog>
          </Section>
        )}
      </Container>
    </>
  );
}