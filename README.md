# Microfrontends PoC – React to Web Components with Next.js and Vite

This is a early-stage proof of concept demonstrating how to implement Microfrontends using @r2wc/react-to-web-component to expose React components as Web Components, built with Vite and exported/consumed inside Next.js applications.

## 🔗 Deployed Apps

Main Shell App (Consumer)
https://react-next-webcomponents-final-poc.vercel.app/

Posventa App (exports customer-service-form Web Component)
https://web-components-poc-posventa-example-app.vercel.app/

Fulfilment App (exports backoffice-header and shipment-details Web Components)
https://web-components-poc-fulfilment-example-app.vercel.app/

# ⚠️ Not Production Ready

This is an VERY early-stage PoC and has several limitations:

Not compatible with SSR

Web components can't use Next.js useRouter
If routing is required inside a Web Component, use react-router-dom with memory history.

Communication between host (shell) and Web Components should be with events or global functions

Needs better error/loading handling, better Flash of Undefined Custom Elements (FOUCE) and layout shift handling.

Needs better bundle optimizations (peer dependencies, etc)

Still needs some testing for context, styled-components themes and other libraries.

Shadow DOM mode not tested

Improve TypeScript compatibility

Needs next.js polyfils for next/config and next/image

Versioning or cache busting for deployed scripts

And more.

## 🧩 Web Components Architecture

This repository implements a **micro-frontend architecture** using **web components** to enable cross-app component sharing between three independent Next.js applications while maintaining deployment autonomy.

### 📋 Applications Overview

| App | Port | Role | Components |
|-----|------|------|------------|
| **OMS** | 3000 | Consumer | Order management with embedded components from the provider apps |
| **Posventa** | 3001 | Provider | Customer service forms |
| **Fulfilment** | 3002 | Provider | Shipment tracking and headers |

The provider apps can run independently and reuse the exported components as regular React components.

### 🔧 Technology Stack

**Core Technologies:**
- **Next.js 15.4.2** with Pages Router
- **React 19.1.0**
- **@r2wc/react-to-web-component** - React to Web Component conversion
- **Vite 7.0.5** - Web components build system
- **styled-components**
- **TypeScript**


### 🏗️ Web Components Implementation

#### Provider Apps (Component Builders)

Each provider app includes a wc-definitions.ts file to define web components using the react-to-web-components library. Vite bundles the code using this file as the entry point, and the bundled JS file is served from the Next.js /public/ folder for consumption by other apps.

**Fulfilment Exports:**
```html
<!-- Shared backoffice header -->
<backoffice-header label="Fulfilment System" />

<!-- Detailed shipment tracking -->
<shipment-details 
  shipment-id="SHP-001" 
  show-timeline="true" 
  compact-mode="false" />
```

**Posventa Exports:**
```html
<!-- Customer service form with validation -->
<customer-service-form 
  title="Soporte al Cliente"
  initial-values='{"orderNumber":"ORD-001"}'
  require-order-number="true"
  allowed-priorities='["medium","high"]' />
```

#### Consumer App

**OMS App Integration:**
- Loads web components via script tags in `_document.tsx`
- Handles cross-component communication via events

### 🔄 Build Process

#### Development Workflow
```bash
# Provider apps build components in watch mode
cd fulfilment && npm run dev    # Next.js + Web Components watch
cd posventa && npm run dev      # Next.js + Web Components watch

# Consumer app loads remote components
cd oms && npm run dev           # Loads a JS file from localhost:3001 & :3002 to consume the web components exported by each app
```

#### Production Build
```bash
# Build web components first, then Next.js app
npm run build:wc && npm run build
```

### 📡 Cross-App Communication

#### Event-Driven Architecture
```javascript
// Provider: Emits events from web components
// This is handled automatically by the react-to-web-components library

// Consumer: Listen for events in React
useEventListener("customer-service-form", "onSubmit", (event) => {
  console.log("Form submitted:", event.detail);
  handleFormData(event.detail);
});
```

#### Props and Data Flow
```javascript
// Props types such as strings, booleans, arrays, etc. (except functions) can be passed normally
// Objects can be passed as JSON strings
// See https://codesandbox.io/s/all-the-props-n8z5hv
<customer-service-form 
  enableHeader={false}
  initialValues={JSON.stringify({
    fullName: order.customer,
    email: order.email,
    orderNumber: order.id
  })}
  someOtherStringProp="Pepe"
/>
```

# ⚠️ WORK IN PROGRESS ⚠️
