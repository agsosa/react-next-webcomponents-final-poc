import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
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

const Header = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 30px;
  margin-bottom: 20px;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
`;

const OrderId = styled.h2`
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
      case 'pending': return '#fff3cd';
      case 'processing': return '#d1ecf1';
      case 'shipped': return '#d4edda';
      case 'delivered': return '#d1e7dd';
      case 'cancelled': return '#f8d7da';
      default: return '#e9ecef';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'pending': return '#856404';
      case 'processing': return '#0c5460';
      case 'shipped': return '#155724';
      case 'delivered': return '#0f5132';
      case 'cancelled': return '#721c24';
      default: return '#495057';
    }
  }};
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

const ItemsSection = styled.div`
  margin-top: 30px;
`;

const SectionTitle = styled.h3`
  color: #333;
  margin-bottom: 20px;
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid #dee2e6;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #f1f3f4;
`;

const TotalSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #dee2e6;
  text-align: right;
`;

const TotalAmount = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type OrderDetail = {
  id: string;
  customer: string;
  email: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

const mockOrderDetails: Record<string, OrderDetail> = {
  'ORD-001': {
    id: 'ORD-001',
    customer: 'John Smith',
    email: 'john.smith@email.com',
    date: '2024-01-15',
    status: 'delivered',
    shippingAddress: '123 Main St, New York, NY 10001',
    items: [
      { id: '1', name: 'Wireless Headphones', quantity: 1, price: 199.99 },
      { id: '2', name: 'Phone Case', quantity: 2, price: 29.99 },
      { id: '3', name: 'USB Cable', quantity: 1, price: 19.99 }
    ],
    subtotal: 279.97,
    shipping: 10.00,
    tax: 20.02,
    total: 299.99
  },
  'ORD-002': {
    id: 'ORD-002',
    customer: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    date: '2024-01-16',
    status: 'shipped',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210',
    items: [
      { id: '4', name: 'Bluetooth Speaker', quantity: 1, price: 129.99 },
      { id: '5', name: 'Charging Pad', quantity: 1, price: 39.99 }
    ],
    subtotal: 169.98,
    shipping: 8.00,
    tax: 12.48,
    total: 149.50
  }
};

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const order = typeof id === 'string' ? mockOrderDetails[id] : null;

  if (!order) {
    return (
      <Container>
        <Head>
          <title>OMS - Order Not Found</title>
        </Head>
        <BackLink onClick={() => window.location.href = '/'}>← Back to Orders</BackLink>
        <Header>Order Not Found</Header>
        <p>The requested order could not be found.</p>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>OMS - Order {order.id}</title>
        <meta name="description" content={`Order details for ${order.id}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <BackLink onClick={() => window.location.href = '/'}>← Back to Orders</BackLink>
        
        <OrderCard>
          <OrderHeader>
            <OrderId>Order {order.id}</OrderId>
            <StatusBadge status={order.status}>
              {order.status}
            </StatusBadge>
          </OrderHeader>

          <InfoGrid>
            <InfoItem>
              <h3>Customer</h3>
              <p>{order.customer}</p>
            </InfoItem>
            <InfoItem>
              <h3>Email</h3>
              <p>{order.email}</p>
            </InfoItem>
            <InfoItem>
              <h3>Order Date</h3>
              <p>{order.date}</p>
            </InfoItem>
            <InfoItem>
              <h3>Total Items</h3>
              <p>{order.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
            </InfoItem>
          </InfoGrid>

          <InfoItem>
            <h3>Shipping Address</h3>
            <p>{order.shippingAddress}</p>
          </InfoItem>

          <ItemsSection>
            <SectionTitle>Order Items</SectionTitle>
            <ItemsTable>
              <thead>
                <tr>
                  <TableHeader>Item</TableHeader>
                  <TableHeader>Quantity</TableHeader>
                  <TableHeader>Price</TableHeader>
                  <TableHeader>Total</TableHeader>
                </tr>
              </thead>
              <tbody>
                {order.items.map(item => (
                  <tr key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
                  </tr>
                ))}
              </tbody>
            </ItemsTable>

            <TotalSection>
              <div style={{marginBottom: '5px'}}>Subtotal: ${order.subtotal.toFixed(2)}</div>
              <div style={{marginBottom: '5px'}}>Shipping: ${order.shipping.toFixed(2)}</div>
              <div style={{marginBottom: '10px'}}>Tax: ${order.tax.toFixed(2)}</div>
              <TotalAmount>Total: ${order.total.toFixed(2)}</TotalAmount>
            </TotalSection>
          </ItemsSection>
        </OrderCard>
      </Container>
    </>
  );
}