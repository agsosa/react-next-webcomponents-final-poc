import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

export default function TestShipmentWebComponent() {
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const addEvent = (message: string) => {
      setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    // Check if components are already loaded
    if (typeof window !== 'undefined' && window.customElements.get('shipment-details')) {
      setComponentsLoaded(true);
      addEvent('Fulfilment web components already loaded');
      return;
    }

    addEvent('Loading Fulfilment web components from http://localhost:3002');

    // Load the web components script from fulfilment app
    const script = document.createElement('script');
    script.src = 'http://localhost:3002/web-components-vite/web-components.umd.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    script.onload = () => {
      addEvent('Fulfilment web components script loaded successfully');
      // Wait a bit for registration
      setTimeout(() => {
        if (window.customElements.get('shipment-details')) {
          setComponentsLoaded(true);
          addEvent('shipment-details component is ready');
        }
      }, 100);
    };
    
    script.onerror = () => {
      addEvent('❌ Error loading Fulfilment web components script');
      addEvent('Make sure Fulfilment app is running on port 3002');
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  const loadShipment = (shipmentId: string) => {
    const elements = document.querySelectorAll('shipment-details');
    elements.forEach(element => {
      (element as any).shipmentId = shipmentId;
    });
  };

  const handleTrackingClick = (trackingNumber: string, carrier: string) => {
    setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: 📦 Tracking clicked: ${carrier} - ${trackingNumber}`]);
  };

  const handleShipmentLoad = (shipment: any) => {
    setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: 🚚 Shipment loaded: ${shipment.id}`]);
  };

  const handleError = (error: string) => {
    setEvents(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()}: ❌ Error: ${error}`]);
  };

  useEffect(() => {
    if (componentsLoaded) {
      // Configure the web component with callbacks
      const elements = document.querySelectorAll('shipment-details');
      elements.forEach(element => {
        (element as any).onTrackingClick = handleTrackingClick;
        (element as any).onLoad = handleShipmentLoad;
        (element as any).onError = handleError;
      });
    }
  }, [componentsLoaded]);

  return (
    <>
      <Head>
        <title>OMS - Test Shipment Details Web Component</title>
        <meta name="description" content="Testing Fulfilment shipment details web component in OMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container>
        <Header>
          <Title>Shipment Details Web Component Test</Title>
          <Subtitle>
            OMS consumiendo el componente de detalles de shipment desde Fulfilment
          </Subtitle>
          <Badge>Cross-App Integration</Badge>
        </Header>

        <InfoBox>
          <h3>🚚 Micro-Frontend Shipment Integration</h3>
          <p>
            Esta página demuestra cómo OMS puede mostrar detalles completos de shipment
            usando un web component creado en Fulfilment, manteniendo la separación entre aplicaciones.
          </p>
        </InfoBox>

        <Section>
          <SectionTitle>🎮 Test Controls</SectionTitle>
          <TestControls>
            <TestButton 
              disabled={!componentsLoaded} 
              onClick={() => loadShipment('SHP-001')}
            >
              Load SHP-001 (Delivered)
            </TestButton>
            <TestButton 
              disabled={!componentsLoaded} 
              onClick={() => loadShipment('SHP-002')}
            >
              Load SHP-002 (Shipped)
            </TestButton>
            <TestButton 
              disabled={!componentsLoaded} 
              onClick={() => loadShipment('SHP-003')}
            >
              Load SHP-003 (Packed)
            </TestButton>
            <TestButton 
              disabled={!componentsLoaded} 
              onClick={() => loadShipment('SHP-404')}
            >
              Load Invalid ID (Error Test)
            </TestButton>
          </TestControls>
        </Section>

        <Section>
          <SectionTitle>📦 Shipment Details (Full Mode)</SectionTitle>
          
          {!componentsLoaded ? (
            <LoadingMessage>
              Cargando web component desde Fulfilment...
              <br />
              <small>Asegúrate de que la app Fulfilment esté corriendo en puerto 3002</small>
            </LoadingMessage>
          ) : (
            <shipment-details
              shipment-id="SHP-001"
              show-timeline="true"
              show-tracking-section="true"
              compact-mode="false"
            />
          )}
        </Section>

        <Section>
          <SectionTitle>📋 Shipment Details (Compact Mode)</SectionTitle>
          
          {!componentsLoaded ? (
            <LoadingMessage>Loading...</LoadingMessage>
          ) : (
            <shipment-details
              shipment-id="SHP-002"
              show-timeline="false"
              show-tracking-section="true"
              compact-mode="true"
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