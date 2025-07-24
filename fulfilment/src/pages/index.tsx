import Head from "next/head";
import styled from "styled-components";
import Header from "../web-components/Header";

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.h1`
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const ShipmentsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background: #f8f9fa;
  padding: 15px;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid #dee2e6;
`;

const TableRow = styled.tr`
  &:hover {
    background: #f8f9fa;
    cursor: pointer;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #dee2e6;
  }
`;

const TableCell = styled.td`
  padding: 15px;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
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
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
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
`;

type Shipment = {
  id: string;
  orderId: string;
  customer: string;
  destination: string;
  carrier: string;
  trackingNumber: string;
  shipDate: string;
  estimatedDelivery: string;
  status: 'preparing' | 'packed' | 'shipped' | 'delivered' | 'returned';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  weight: number;
  items: number;
};

const mockShipments: Shipment[] = [
  {
    id: 'SHP-001',
    orderId: 'ORD-001',
    customer: 'John Smith',
    destination: 'New York, NY',
    carrier: 'FedEx',
    trackingNumber: '1234567890',
    shipDate: '2024-01-15',
    estimatedDelivery: '2024-01-17',
    status: 'delivered',
    priority: 'normal',
    weight: 2.5,
    items: 3
  },
  {
    id: 'SHP-002',
    orderId: 'ORD-002',
    customer: 'Sarah Johnson',
    destination: 'Los Angeles, CA',
    carrier: 'UPS',
    trackingNumber: '0987654321',
    shipDate: '2024-01-16',
    estimatedDelivery: '2024-01-19',
    status: 'shipped',
    priority: 'high',
    weight: 1.8,
    items: 2
  },
  {
    id: 'SHP-003',
    orderId: 'ORD-003',
    customer: 'Mike Davis',
    destination: 'Chicago, IL',
    carrier: 'DHL',
    trackingNumber: '5555666777',
    shipDate: '2024-01-17',
    estimatedDelivery: '2024-01-20',
    status: 'packed',
    priority: 'urgent',
    weight: 0.5,
    items: 1
  },
  {
    id: 'SHP-004',
    orderId: 'ORD-004',
    customer: 'Emma Wilson',
    destination: 'Miami, FL',
    carrier: 'USPS',
    trackingNumber: '8888999000',
    shipDate: '2024-01-18',
    estimatedDelivery: '2024-01-22',
    status: 'preparing',
    priority: 'normal',
    weight: 3.2,
    items: 4
  },
  {
    id: 'SHP-005',
    orderId: 'ORD-005',
    customer: 'David Brown',
    destination: 'Seattle, WA',
    carrier: 'FedEx',
    trackingNumber: '1111222333',
    shipDate: '2024-01-19',
    estimatedDelivery: '2024-01-23',
    status: 'delivered',
    priority: 'low',
    weight: 4.1,
    items: 5
  }
];

export default function ShipmentsList() {
  return (
    <>
      <Head>
        <title>Fulfilment - Shipments Management</title>
        <meta name="description" content="Order Fulfillment System - Shipments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Header appTitle="Fulfilment" username="Pepito FF" />
        <MainContent>
          <Container>
            <PageHeader>Gestión de Envíos</PageHeader>
            <ShipmentsTable>
              <thead>
                <tr>
                  <TableHeader>Shipment ID</TableHeader>
                  <TableHeader>Order ID</TableHeader>
                  <TableHeader>Customer</TableHeader>
                  <TableHeader>Destination</TableHeader>
                  <TableHeader>Carrier</TableHeader>
                  <TableHeader>Ship Date</TableHeader>
                  <TableHeader>Priority</TableHeader>
                  <TableHeader>Status</TableHeader>
                </tr>
              </thead>
              <tbody>
                {mockShipments.map(shipment => (
                  <TableRow key={shipment.id} onClick={() => window.location.href = `/shipments/${shipment.id}`}>
                    <TableCell>{shipment.id}</TableCell>
                    <TableCell>{shipment.orderId}</TableCell>
                    <TableCell>{shipment.customer}</TableCell>
                    <TableCell>{shipment.destination}</TableCell>
                    <TableCell>{shipment.carrier}</TableCell>
                    <TableCell>{shipment.shipDate}</TableCell>
                    <TableCell>
                      <PriorityBadge priority={shipment.priority}>
                        {shipment.priority}
                      </PriorityBadge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={shipment.status}>
                        {shipment.status}
                      </StatusBadge>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </ShipmentsTable>
          </Container>
        </MainContent>
      </PageContainer>
    </>
  );
}