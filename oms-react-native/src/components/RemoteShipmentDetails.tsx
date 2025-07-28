import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface RemoteShipmentDetailsProps {
  shipmentId?: string;
  height?: number;
}

export const RemoteShipmentDetails: React.FC<RemoteShipmentDetailsProps> = ({ 
  shipmentId = "SH-12345",
  height = 400
}) => {
  // Create HTML content with the web component
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #f5f5f5;
        }
        shipment-details {
          display: block;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <div id="root">
        <shipment-details shipment-id="${shipmentId}"></shipment-details>
      </div>
      
      <script>
        // Handle web component events and send to React Native
        document.addEventListener('DOMContentLoaded', function() {
          console.log('ShipmentDetails web component loading...');
          
          const component = document.querySelector('shipment-details');
          if (component) {
            // Listen for any custom events from the component
            component.addEventListener('shipmentUpdate', function(event) {
              if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'shipmentUpdate',
                  data: event.detail
                }));
              }
            });
          }
        });
      </script>
      
      <!-- Load the Fulfilment web component -->
      <script src="http://localhost:3002/web-components/web-components.umd.js"></script>
    </body>
    </html>
  `;

  const handleWebViewMessage = (event: any) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      console.log('Received from web component:', message);
      
      // Handle different message types
      switch (message.type) {
        case 'shipmentUpdate':
          console.log('Shipment updated:', message.data);
          break;
        default:
          console.log('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Error parsing web component message:', error);
    }
  };

  return (
    <View style={[styles.container, { height }]}>
      <WebView
        source={{ html }}
        style={styles.webview}
        onMessage={handleWebViewMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onLoadEnd={() => console.log('ShipmentDetails WebView loaded')}
        onError={(error) => console.error('WebView error:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});