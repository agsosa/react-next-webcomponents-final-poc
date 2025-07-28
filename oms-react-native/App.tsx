import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { OrdersListScreen } from './src/screens/OrdersListScreen';
import { OrderDetailScreen } from './src/screens/OrderDetailScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'list' | 'detail'>('list');
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');

  const handleOrderPress = (orderId: string) => {
    setSelectedOrderId(orderId);
    setCurrentScreen('detail');
  };

  const handleBack = () => {
    setCurrentScreen('list');
    setSelectedOrderId('');
  };

  return (
    <>
      {currentScreen === 'list' ? (
        <OrdersListScreen onOrderPress={handleOrderPress} />
      ) : (
        <OrderDetailScreen 
          orderId={selectedOrderId} 
          onBack={handleBack} 
        />
      )}
      <StatusBar style="auto" />
    </>
  );
}
