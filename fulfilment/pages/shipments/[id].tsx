import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../../components/Header";

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

const ShipmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
`;

const ShipmentId = styled.h2`
  color: #333;
  margin: 0;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  background: ${props => {
    switch (props.status) {
      case 'preparing': return '#fff3cd';
      case 'packed': return '#d1ecf1';
      case 'shipped': return '#d4edda';
      case 'delivered': return '#d1e7dd';
      case 'returned': return '#f8d7da';
      default: return '#e9ecef';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'preparing': return '#856404';
      case 'packed': return '#0c5460';
      case 'shipped': return '#155724';
      case 'delivered': return '#0f5132';
      case 'returned': return '#721c24';
      default: return '#495057';
    }
  }};
`;

const PriorityBadge = styled.span<{ priority: string }>`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => {
    switch (props.priority) {
      case 'urgent': return '#dc3545';
      case 'high': return '#fd7e14';
      case 'normal': return '#6c757d';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  }};
  color: white;
  margin-left: 10px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  h3 {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  p {
    color: #333;
    font-size: 16px;
    margin: 0;
  }
`;

const TrackingSection = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
`;

const TrackingNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  font-family: monospace;
  letter-spacing: 1px;
`;

const Timeline = styled.div`
  margin-top: 30px;
`;

const TimelineItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  &:before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.isActive ? '#28a745' : '#dee2e6'};
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

const TimelineContent = styled.div<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#333' : '#6c757d'};
  font-weight: ${props => props.isActive ? '600' : 'normal'};
`;

type ShipmentDetail = {
  id: string;
  orderId: string;
  customer: string;
  email: string;
  destination: string;
  fullAddress: string;
  carrier: string;
  trackingNumber: string;
  shipDate: string;
  estimatedDelivery: string;
  actualDelivery?: string;
  status: 'preparing' | 'packed' | 'shipped' | 'delivered' | 'returned';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  weight: number;
  dimensions: string;
  items: number;
  packageType: string;
  specialInstructions?: string;
};

const mockShipmentDetails: Record<string, ShipmentDetail> = {
  'SHP-001': {
    id: 'SHP-001',
    orderId: 'ORD-001',
    customer: 'John Smith',
    email: 'john.smith@email.com',
    destination: 'New York, NY',
    fullAddress: '123 Main St, New York, NY 10001',
    carrier: 'FedEx',
    trackingNumber: '1234567890',
    shipDate: '2024-01-15',
    estimatedDelivery: '2024-01-17',
    actualDelivery: '2024-01-17',
    status: 'delivered',
    priority: 'normal',
    weight: 2.5,
    dimensions: '12" x 8" x 6"',
    items: 3,
    packageType: 'Standard Box',
    specialInstructions: 'Leave at front door'
  },
  'SHP-002': {
    id: 'SHP-002',
    orderId: 'ORD-002',
    customer: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    destination: 'Los Angeles, CA',
    fullAddress: '456 Oak Ave, Los Angeles, CA 90210',
    carrier: 'UPS',
    trackingNumber: '0987654321',
    shipDate: '2024-01-16',
    estimatedDelivery: '2024-01-19',
    status: 'shipped',
    priority: 'high',
    weight: 1.8,
    dimensions: '10" x 6" x 4"',
    items: 2,
    packageType: 'Padded Envelope'
  },
  'SHP-003': {
    id: 'SHP-003',
    orderId: 'ORD-003',
    customer: 'Mike Davis',
    email: 'mike.davis@email.com',
    destination: 'Chicago, IL',
    fullAddress: '789 Pine St, Chicago, IL 60601',
    carrier: 'DHL',
    trackingNumber: '5555666777',
    shipDate: '2024-01-17',
    estimatedDelivery: '2024-01-20',
    status: 'packed',
    priority: 'urgent',
    weight: 0.5,
    dimensions: '8" x 4" x 2"',
    items: 1,
    packageType: 'Small Package',
    specialInstructions: 'Signature required'
  }
};

const getTimelineStatus = (status: string) => {
  const timeline = [
    { step: 'preparing', label: 'Order Preparing', description: 'Items being gathered and prepared' },
    { step: 'packed', label: 'Package Packed', description: 'Items packed and ready for pickup' },
    { step: 'shipped', label: 'Package Shipped', description: 'Package picked up by carrier' },
    { step: 'delivered', label: 'Package Delivered', description: 'Package delivered to destination' }
  ];

  const statusOrder = ['preparing', 'packed', 'shipped', 'delivered'];
  const currentIndex = statusOrder.indexOf(status);
  
  return timeline.map((item, index) => ({
    ...item,
    isActive: index <= currentIndex
  }));
};

export default function ShipmentDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const shipment = typeof id === 'string' ? mockShipmentDetails[id] : null;

  if (!shipment) {
    return (
      <PageContainer>
        <Head>
          <title>Fulfilment - Shipment Not Found</title>
        </Head>
        <Header />
        <MainContent>
          <Container>
            <BackLink onClick={() => window.location.href = '/'}>← Back to Shipments</BackLink>
            <PageHeader>Shipment Not Found</PageHeader>
            <p>The requested shipment could not be found.</p>
          </Container>
        </MainContent>
      </PageContainer>
    );
  }

  const timeline = getTimelineStatus(shipment.status);

  return (
    <>
      <Head>
        <title>Fulfilment - Shipment {shipment.id}</title>
        <meta name="description" content={`Shipment details for ${shipment.id}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Header />
        <MainContent>
          <Container>
            <BackLink onClick={() => window.location.href = '/'}>← Back to Shipments</BackLink>
            
            <ShipmentCard>
              <ShipmentHeader>
                <div>
                  <ShipmentId>Shipment {shipment.id}</ShipmentId>
                  <div style={{marginTop: '5px', color: '#666'}}>Order {shipment.orderId}</div>
                </div>
                <div>
                  <StatusBadge status={shipment.status}>
                    {shipment.status}
                  </StatusBadge>
                  <PriorityBadge priority={shipment.priority}>
                    {shipment.priority}
                  </PriorityBadge>
                </div>
              </ShipmentHeader>

              <InfoGrid>
                <InfoItem>
                  <h3>Customer</h3>
                  <p>{shipment.customer}</p>
                </InfoItem>
                <InfoItem>
                  <h3>Email</h3>
                  <p>{shipment.email}</p>
                </InfoItem>
                <InfoItem>
                  <h3>Ship Date</h3>
                  <p>{shipment.shipDate}</p>
                </InfoItem>
                <InfoItem>
                  <h3>Est. Delivery</h3>
                  <p>{shipment.estimatedDelivery}</p>
                </InfoItem>
                <InfoItem>
                  <h3>Weight</h3>
                  <p>{shipment.weight} lbs</p>
                </InfoItem>
                <InfoItem>
                  <h3>Dimensions</h3>
                  <p>{shipment.dimensions}</p>
                </InfoItem>
                <InfoItem>
                  <h3>Package Type</h3>
                  <p>{shipment.packageType}</p>
                </InfoItem>
                <InfoItem>
                  <h3>Items Count</h3>
                  <p>{shipment.items}</p>
                </InfoItem>
              </InfoGrid>

              <InfoItem style={{marginBottom: '20px'}}>
                <h3>Shipping Address</h3>
                <p>{shipment.fullAddress}</p>
              </InfoItem>

              {shipment.specialInstructions && (
                <InfoItem style={{marginBottom: '20px'}}>
                  <h3>Special Instructions</h3>
                  <p>{shipment.specialInstructions}</p>
                </InfoItem>
              )}

              <TrackingSection>
                <h3 style={{margin: '0 0 10px 0', color: '#666', fontSize: '14px', textTransform: 'uppercase'}}>
                  Tracking Information
                </h3>
                <div style={{marginBottom: '10px'}}>
                  <strong>Carrier:</strong> {shipment.carrier}
                </div>
                <div style={{marginBottom: '15px'}}>
                  <strong>Tracking Number:</strong>
                </div>
                <TrackingNumber>{shipment.trackingNumber}</TrackingNumber>
              </TrackingSection>

              <Timeline>
                <h3 style={{marginBottom: '20px', color: '#333'}}>Shipment Progress</h3>
                {timeline.map((item, index) => (
                  <TimelineItem key={index} isActive={item.isActive}>
                    <TimelineContent isActive={item.isActive}>
                      <div style={{fontWeight: item.isActive ? '600' : 'normal'}}>
                        {item.label}
                      </div>
                      <div style={{fontSize: '14px', color: '#6c757d'}}>
                        {item.description}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </ShipmentCard>
          </Container>
        </MainContent>
      </PageContainer>
    </>
  );
}