# OMS React Native

This is a React Native application that provides a simple Order Management System interface. It serves as a mobile companion to the web-based OMS applications and is ready for future web component integration.

## Overview

The app provides a native mobile OMS interface with:
- **Native Header**: Simple header component with app title and user info
- **Orders List**: List of orders with basic information and status
- **Order Details**: Detailed view with tabs for order info, shipment, and support
- **Clean UI**: Mobile-optimized interface with card-based layout

## Technology Stack

- **React Native**: 0.79.5
- **React**: 19.0.0
- **Expo**: ~53.0.20
- **TypeScript**: 5.8.3
- **Native Components**: Pure React Native UI without external dependencies

## Prerequisites

Before running this app, make sure you have:

1. **Expo CLI** installed globally:
   ```bash
   npm install -g @expo/cli
   ```

2. **Node.js** version 16 or higher installed

## Development Commands

### Start the app
```bash
npm run dev
# or
npm start
```

### Run on specific platforms
```bash
npm run android    # Android device/emulator
npm run ios        # iOS device/simulator (macOS only)
npm run web        # Web browser
```

## Project Structure

```
oms-react-native/
├── src/
│   ├── components/         # Native React Native components
│   │   └── Header.tsx      # Native header component
│   ├── screens/           # App screens
│   │   ├── OrdersListScreen.tsx # Orders list with native UI
│   │   └── OrderDetailScreen.tsx # Order detail with native tabs
│   └── styles/            # Style definitions (if needed)
├── App.tsx               # Main app component
├── package.json         # Dependencies and scripts
└── README.md           # Documentation
```

## App Features

### Orders List Screen
- Displays a list of orders with basic information
- Shows order ID, customer name, status, total, and date
- Color-coded status indicators
- Touch to navigate to order details

### Order Detail Screen
- Tabbed interface with three sections:
  - **Order Details**: Customer information and item list
  - **Shipment Info**: Tracking and delivery information
  - **Customer Support**: Support options and contact methods
- Native navigation with back button
- Responsive card-based layout

### Native Components
- **Header**: Clean header with app title and user info
- **Cards**: Consistent card design for information display
- **Buttons**: Touch-friendly interactive elements
- **Typography**: Readable font sizes and hierarchy

## Usage Notes

1. **Platform Testing**: Can be tested on iOS, Android, and web platforms
2. **Native Performance**: Pure React Native components for optimal performance
3. **Responsive Design**: Adapts to different screen sizes and orientations
4. **TypeScript**: Full TypeScript support for type safety

## Features Demonstrated

- ✅ React Native mobile application structure
- ✅ Cross-platform compatibility (iOS/Android/Web)
- ✅ Native component architecture
- ✅ Tab-based navigation system
- ✅ Card-based UI design
- ✅ TypeScript integration
- ✅ Responsive mobile layout
- ✅ Touch-optimized interactions

## Future Enhancements

This app is structured to easily accommodate future web component integration:
- Component structure allows for easy replacement with WebView wrappers
- TypeScript interfaces can be reused for web component props
- Event handling patterns are ready for postMessage communication
- Styling can be adapted for hybrid native/web component rendering

## Getting Started

1. Clone the repository
2. Navigate to the `oms-react-native` directory
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Use the Expo CLI to run on your preferred platform

This React Native app demonstrates a clean, native mobile OMS interface that's ready for micro-frontend integration when needed.