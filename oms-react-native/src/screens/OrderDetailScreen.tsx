import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Header } from '../components/Header';
import { RemoteShipmentDetails } from '../components/RemoteShipmentDetails';

interface OrderDetailScreenProps {
  orderId: string;
  onBack: () => void;
}

export const OrderDetailScreen: React.FC<OrderDetailScreenProps> = ({ 
  orderId, 
  onBack 
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'shipment' | 'support'>('details');

  const orderData = {
    id: orderId,
    customerName: 'Juan Pérez',
    email: 'juan.perez@email.com',
    status: 'Shipped',
    total: '$299.99',
    date: '2024-01-15',
    items: [
      { name: 'Product A', quantity: 2, price: '$149.99' },
      { name: 'Product B', quantity: 1, price: '$149.99' },
    ],
  };

  const renderTabButton = (
    tabKey: 'details' | 'shipment' | 'support',
    title: string
  ) => (
    <TouchableOpacity
      style={[styles.tabButton, activeTab === tabKey && styles.activeTab]}
      onPress={() => setActiveTab(tabKey)}
    >
      <Text
        style={[styles.tabText, activeTab === tabKey && styles.activeTabText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Order Details</Text>
            <View style={styles.infoCard}>
              <Text style={styles.label}>Customer:</Text>
              <Text style={styles.value}>{orderData.customerName}</Text>
              
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{orderData.email}</Text>
              
              <Text style={styles.label}>Status:</Text>
              <Text style={styles.value}>{orderData.status}</Text>
              
              <Text style={styles.label}>Total:</Text>
              <Text style={styles.value}>{orderData.total}</Text>
              
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.value}>{orderData.date}</Text>
            </View>
            
            <Text style={styles.sectionTitle}>Items</Text>
            {orderData.items.map((item, index) => (
              <View key={index} style={styles.itemCard}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetails}>
                  Qty: {item.quantity} - {item.price}
                </Text>
              </View>
            ))}
          </View>
        );
      
      case 'shipment':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Shipment Information</Text>
            <RemoteShipmentDetails
              shipmentId={`SH-${orderId}`}
              height={400}
            />
          </View>
        );
      
      case 'support':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Customer Support</Text>
            <View style={styles.infoCard}>
              <Text style={styles.label}>Support Options:</Text>
              <TouchableOpacity style={styles.supportButton}>
                <Text style={styles.supportButtonText}>📞 Call Customer Service</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.supportButton}>
                <Text style={styles.supportButtonText}>✉️ Send Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.supportButton}>
                <Text style={styles.supportButtonText}>💬 Start Live Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.supportButton}>
                <Text style={styles.supportButtonText}>📝 Submit Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="OMS React Native"
        username="Mobile User"
      />
      
      <View style={styles.content}>
        <View style={styles.headerSection}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Order {orderId}</Text>
        </View>

        <View style={styles.tabBar}>
          {renderTabButton('details', 'Order Details')}
          {renderTabButton('shipment', 'Shipment Info')}
          {renderTabButton('support', 'Customer Support')}
        </View>

        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {renderTabContent()}
        </ScrollView>
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
  },
  headerSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
  },
  tabText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#3498db',
  },
  scrollContent: {
    flex: 1,
  },
  tabContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2c3e50',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 4,
  },
  itemCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  itemDetails: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  supportButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  supportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});