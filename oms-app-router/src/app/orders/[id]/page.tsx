'use client'

import RemoteShipmentDetails from "../../../components/RemoteShipmentDetails";
import RemoteCustomerServiceForm from "../../../components/RemoteCustomerServiceForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

const TabsContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  overflow: hidden;
`;

const TabsList = styled.div`
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 15px 20px;
  border: none;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#007bff' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  border-bottom: ${props => props.active ? '2px solid #007bff' : '2px solid transparent'};
  
  &:hover {
    background: ${props => props.active ? 'white' : '#e9ecef'};
  }
`;

const TabContent = styled.div`
  padding: 20px;
`;

const OrderInfo = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const InfoItem = styled.div`
  h4 {
    margin: 0 0 5px 0;
    color: #666;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  p {
    margin: 0;
    color: #333;
    font-weight: 500;
  }
`;

const ItemsList = styled.div`
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  overflow: hidden;
`;

const ItemHeader = styled.div`
  background: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 1px solid #dee2e6;
  font-weight: 600;
  color: #333;
`;

const Item = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #f1f3f4;
  display: flex;
  justify-content: between;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  h5 {
    margin: 0 0 5px 0;
    color: #333;
  }
  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }
`;

const ItemPrice = styled.div`
  font-weight: 600;
  color: #333;
`;

type Order = {
  id: string;
  customer: string;
  email: string;
  date: string;
  total: number;
  status: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
  }>;
};

const mockOrder: Order = {
  id: 'ORD-001',
  customer: 'John Smith',
  email: 'john.smith@email.com',
  date: '2024-01-15',
  total: 299.99,
  status: 'delivered',
  items: [
    {
      id: 'ITEM-001',
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      quantity: 1,
      price: 199.99
    },
    {
      id: 'ITEM-002',
      name: 'USB-C Cable',
      description: '3ft USB-C to USB-A cable',
      quantity: 2,
      price: 50.00
    }
  ]
};

type TabType = 'details' | 'shipment' | 'support';

export default function OrderDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('details');
  const { id } = params;

  const handleGoBack = () => {
    router.push('/');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div>
            <OrderInfo>
              <InfoGrid>
                <InfoItem>
                  <h4>Customer</h4>
                  <p>{mockOrder.customer}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Email</h4>
                  <p>{mockOrder.email}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Order Date</h4>
                  <p>{mockOrder.date}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Status</h4>
                  <p>{mockOrder.status}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Total</h4>
                  <p>${mockOrder.total.toFixed(2)}</p>
                </InfoItem>
              </InfoGrid>
            </OrderInfo>
            
            <ItemsList>
              <ItemHeader>Order Items</ItemHeader>
              {mockOrder.items.map(item => (
                <Item key={item.id}>
                  <ItemInfo>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                  </ItemInfo>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </Item>
              ))}
            </ItemsList>
          </div>
        );
      
      case 'shipment':
        return (
          <div>
            <RemoteShipmentDetails shipmentId={`SH-${id}`} />
          </div>
        );
      
      case 'support':
        return (
          <div>
            <RemoteCustomerServiceForm orderId={id} />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container>
      <BackLink onClick={handleGoBack}>← Back to Orders</BackLink>
      <Header>Order {id}</Header>
      
      <TabsContainer>
        <TabsList>
          <Tab
            active={activeTab === 'details'}
            onClick={() => setActiveTab('details')}
          >
            Order Details
          </Tab>
          <Tab
            active={activeTab === 'shipment'}
            onClick={() => setActiveTab('shipment')}
          >
            Shipment Info
          </Tab>
          <Tab
            active={activeTab === 'support'}
            onClick={() => setActiveTab('support')}
          >
            Customer Support
          </Tab>
        </TabsList>
        
        <TabContent>
          {renderTabContent()}
        </TabContent>
      </TabsContainer>
    </Container>
  );
}