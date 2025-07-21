import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const OrdersTable = styled.table`
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

type Order = {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: number;
};

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Smith',
    date: '2024-01-15',
    total: 299.99,
    status: 'delivered',
    items: 3
  },
  {
    id: 'ORD-002',
    customer: 'Sarah Johnson',
    date: '2024-01-16',
    total: 149.50,
    status: 'shipped',
    items: 2
  },
  {
    id: 'ORD-003',
    customer: 'Mike Davis',
    date: '2024-01-17',
    total: 89.99,
    status: 'processing',
    items: 1
  },
  {
    id: 'ORD-004',
    customer: 'Emma Wilson',
    date: '2024-01-18',
    total: 199.99,
    status: 'pending',
    items: 4
  },
  {
    id: 'ORD-005',
    customer: 'David Brown',
    date: '2024-01-19',
    total: 399.99,
    status: 'delivered',
    items: 5
  }
];

export default function OrdersList() {
  return (
    <>
      <Head>
        <title>OMS - Orders List</title>
        <meta name="description" content="Order Management System - Orders List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>Order Management System</Header>
        <OrdersTable>
          <thead>
            <tr>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Items</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map(order => (
              <TableRow key={order.id} onClick={() => window.location.href = `/orders/${order.id}`}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusBadge status={order.status}>
                    {order.status}
                  </StatusBadge>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </OrdersTable>
      </Container>
    </>
  );
}
