import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Header } from '../components/Header';

interface Order {
  id: string;
  customerName: string;
  status: string;
  total: string;
  date: string;
}

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Juan Pérez',
    status: 'Pending',
    total: '$299.99',
    date: '2024-01-15',
  },
  {
    id: 'ORD-002',
    customerName: 'María García',
    status: 'Shipped',
    total: '$159.50',
    date: '2024-01-14',
  },
  {
    id: 'ORD-003',
    customerName: 'Carlos López',
    status: 'Delivered',
    total: '$89.99',
    date: '2024-01-13',
  },
];

interface OrdersListScreenProps {
  onOrderPress: (orderId: string) => void;
}

export const OrdersListScreen: React.FC<OrdersListScreenProps> = ({ onOrderPress }) => {
  const renderOrderItem = ({ item }: { item: Order }) => (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() => onOrderPress(item.id)}
    >
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>{item.id}</Text>
        <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.customerName}>{item.customerName}</Text>
      <View style={styles.orderFooter}>
        <Text style={styles.total}>{item.total}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return '#f39c12';
      case 'Shipped':
        return '#3498db';
      case 'Delivered':
        return '#27ae60';
      default:
        return '#7f8c8d';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="OMS React Native"
        username="Mobile User"
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Orders</Text>
        <FlatList
          data={mockOrders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
  },
  list: {
    flex: 1,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  customerName: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  date: {
    fontSize: 12,
    color: '#95a5a6',
  },
});