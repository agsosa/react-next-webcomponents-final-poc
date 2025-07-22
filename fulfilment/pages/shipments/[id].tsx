import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../../web-components/Header";
import ShipmentDetails from "../../web-components/ShipmentDetails";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const BackLink = styled.button`
  color: #007bff;
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PageHeader = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const ShipmentCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 30px;
  margin-bottom: 20px;
`;

// All shipment logic has been moved to ShipmentDetails component

export default function ShipmentDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const handleTrackingClick = (trackingNumber: string, carrier: string) => {
    console.log(`Opening tracking for ${carrier}: ${trackingNumber}`);
    // Could open external tracking URL
    alert(`Track your package with ${carrier}: ${trackingNumber}`);
  };

  const handleError = (error: string) => {
    console.error('Shipment error:', error);
  };

  const handleLoad = (shipment: any) => {
    console.log('Shipment loaded:', shipment);
  };

  return (
    <>
      <Head>
        <title>Fulfilment - Shipment Details</title>
        <meta name="description" content="Shipment tracking and details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Header />
        <MainContent>
          <Container>
            <BackLink onClick={() => window.location.href = '/'}>← Back to Shipments</BackLink>
            <PageHeader>Shipment Details</PageHeader>
            
            <ShipmentCard>
              <ShipmentDetails 
                shipmentId={typeof id === 'string' ? id : undefined}
                onTrackingClick={handleTrackingClick}
                onError={handleError}
                onLoad={handleLoad}
                showTimeline={true}
                showTrackingSection={true}
                compactMode={false}
              />
            </ShipmentCard>
          </Container>
        </MainContent>
      </PageContainer>
    </>
  );
}