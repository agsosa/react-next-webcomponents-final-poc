import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components (self-contained for web component)
const ShipmentContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  width: 100%;
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
  font-size: 1.5rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

const LoadingState = styled.div`
  padding: 20px 0;
  text-align: center;
  color: #666;
  font-style: italic;
`;

const ErrorState = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
`;

// Types
export type ShipmentStatus = 'preparing' | 'packed' | 'shipped' | 'delivered' | 'returned';
export type ShipmentPriority = 'low' | 'normal' | 'high' | 'urgent';

export interface ShipmentDetail {
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
  status: ShipmentStatus;
  priority: ShipmentPriority;
  weight: number;
  dimensions: string;
  items: number;
  packageType: string;
  specialInstructions?: string;
}

export interface ShipmentDetailsProps {
  // Props for web component usage
  shipmentId?: string;
  shipmentData?: string; // JSON string for web component
  apiUrl?: string;
  
  // React component props
  shipment?: ShipmentDetail;
  onTrackingClick?: (trackingNumber: string, carrier: string) => void;
  onError?: (error: string) => void;
  onLoad?: (shipment: ShipmentDetail) => void;
  
  // Display options
  showTimeline?: boolean;
  showTrackingSection?: boolean;
  compactMode?: boolean;
}

// Mock data (could be replaced with API calls)
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

const getTimelineStatus = (status: ShipmentStatus) => {
  const timeline = [
    { step: 'preparing', label: 'Order Preparing', description: 'Items being gathered and prepared' },
    { step: 'packed', label: 'Package Packed', description: 'Items packed and ready for pickup' },
    { step: 'shipped', label: 'Package Shipped', description: 'Package picked up by carrier' },
    { step: 'delivered', label: 'Package Delivered', description: 'Package delivered to destination' }
  ];

  const statusOrder: ShipmentStatus[] = ['preparing', 'packed', 'shipped', 'delivered'];
  const currentIndex = statusOrder.indexOf(status);
  
  return timeline.map((item, index) => ({
    ...item,
    isActive: index <= currentIndex
  }));
};

export default function ShipmentDetails({
  shipmentId,
  shipmentData,
  apiUrl,
  shipment: propShipment,
  onTrackingClick,
  onError,
  onLoad,
  showTimeline = true,
  showTrackingSection = true,
  compactMode = false
}: ShipmentDetailsProps) {
  const [shipment, setShipment] = useState<ShipmentDetail | null>(propShipment || null);
  const [loading, setLoading] = useState(Boolean(shipmentId && !propShipment)); // Only loading if we need to fetch
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If shipment is already provided as prop, use it
    if (propShipment) {
      setShipment(propShipment);
      onLoad?.(propShipment);
      return;
    }

    // If shipmentData is provided as JSON string (for web component usage)
    if (shipmentData) {
      try {
        const parsedShipment = JSON.parse(shipmentData);
        setShipment(parsedShipment);
        onLoad?.(parsedShipment);
        return;
      } catch (err) {
        const errorMsg = "Invalid shipment data format";
        setError(errorMsg);
        onError?.(errorMsg);
        return;
      }
    }

    // If shipmentId is provided, fetch from mock data or API
    if (shipmentId && !propShipment) {
      setLoading(true);
      setError(null);

      // Reduce delay for better UX
      setTimeout(() => {
        if (apiUrl) {
          // If API URL provided, make actual API call
          fetch(`${apiUrl}/shipments/${shipmentId}`)
            .then(response => {
              if (!response.ok) throw new Error('Shipment not found');
              return response.json();
            })
            .then((data: ShipmentDetail) => {
              setShipment(data);
              setLoading(false);
              onLoad?.(data);
            })
            .catch(err => {
              const errorMsg = `Failed to load shipment: ${err.message}`;
              setError(errorMsg);
              setLoading(false);
              onError?.(errorMsg);
            });
        } else {
          // Use mock data - immediate response
          const foundShipment = mockShipmentDetails[shipmentId];
          if (foundShipment) {
            setShipment(foundShipment);
            setLoading(false);
            onLoad?.(foundShipment);
          } else {
            const errorMsg = `Shipment ${shipmentId} not found`;
            setError(errorMsg);
            setLoading(false);
            onError?.(errorMsg);
          }
        }
      }, 100); // Minimal delay to avoid flash
    }
  }, [shipmentId, shipmentData, propShipment, apiUrl, onLoad, onError]);

  const handleTrackingClick = () => {
    if (shipment && onTrackingClick) {
      onTrackingClick(shipment.trackingNumber, shipment.carrier);
    }
  };

  if (loading) {
    return (
      <ShipmentContainer>
        <LoadingState>Loading shipment details...</LoadingState>
      </ShipmentContainer>
    );
  }

  if (error) {
    return (
      <ShipmentContainer>
        <ErrorState>
          <h3>Error</h3>
          <p>{error}</p>
        </ErrorState>
      </ShipmentContainer>
    );
  }

  if (!shipment && !loading) {
    // Only show "No Data" if we're not loading and have no shipment
    if (!shipmentId && !shipmentData && !propShipment) {
      return (
        <ShipmentContainer>
          <ErrorState>
            <h3>No Data</h3>
            <p>No shipment data provided</p>
          </ErrorState>
        </ShipmentContainer>
      );
    }
    
    // If we have an ID but no shipment yet, show loading
    return (
      <ShipmentContainer>
        <LoadingState>Loading shipment details...</LoadingState>
      </ShipmentContainer>
    );
  }

  const timeline = getTimelineStatus(shipment.status);

  return (
    <ShipmentContainer>
      <ShipmentHeader>
        <div>
          <ShipmentId>Shipment {shipment.id}</ShipmentId>
          <div style={{marginTop: '5px', color: '#666', fontSize: compactMode ? '0.9rem' : '1rem'}}>
            Order {shipment.orderId}
          </div>
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
        
        {!compactMode && (
          <>
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
          </>
        )}
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

      {showTrackingSection && (
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
          <TrackingNumber 
            style={{ cursor: onTrackingClick ? 'pointer' : 'default' }}
            onClick={handleTrackingClick}
          >
            {shipment.trackingNumber}
          </TrackingNumber>
        </TrackingSection>
      )}

      {showTimeline && (
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
      )}
    </ShipmentContainer>
  );
}