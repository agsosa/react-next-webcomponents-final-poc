# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a proof-of-concept simulating 4 separate Next.js applications from different teams, each deployed to different URLs. The POC demonstrates how teams can share components while maintaining independent deployments and React version compatibility.

## Architecture

### Multi-App Structure
- **4 Independent Next.js Apps**: 3 production apps + 1 React 18 compatibility test app
- **Separate Deployments**: Each app runs on different ports and can be deployed independently
- **Web Components Integration**: Apps can share components via web components using @r2wc/react-to-web-component
- **Cross-Origin Component Sharing**: Components built in one app can be consumed remotely by others
- **React Version Compatibility**: Testing both React 19 and React 18 web component integration

### Technology Stack (All Apps)
- Next.js with Pages Router
- TypeScript
- styled-components for styling

### Web Components Technology Stack
- **@r2wc/react-to-web-component**: Converts React components to web components
- **Vite**: Builds web components separately from Next.js apps
- **UMD Format**: Web components are bundled as UMD modules for cross-origin consumption

### Applications

#### 1. OMS App (Order Management System) - React 19
- Port: 3000
- React 19.1.0 + Next.js 15.4.2
- **Consumer App**: Integrates web components from both Fulfilment and Posventa
- Order management backoffice with order listing and detail pages
- Features tabbed order detail view with Order Details, Shipment Info, and Customer Support tabs
- Complete web component integration in order details:
  - Uses RemoteHeader from Fulfilment
  - Uses RemoteShipmentDetails from Fulfilment in Shipment Info tab
  - Uses RemoteCustomerServiceForm from Posventa in Customer Support tab
- Modern React 19 web component support with native prop handling

#### 2. OMS React 18 (Compatibility Test)
- Port: 3004
- React 18.3.1 + Next.js 14.2.18
- **Consumer App Clone**: Identical functionality to main OMS but with React 18
- Tests backward compatibility of web components with older React versions
- Same web component integrations as main OMS app
- Validates that the web component architecture works across React versions

#### 3. Posventa App (Post-Sales Service)
- Port: 3001
- **Provider App**: Exports customer service web components
- Multi-step customer service form system
- Flow: Issues List → Sub-issues → Contact Form → Results
- Built with react-hook-form for form validation
- Compact, list-based interface design
- Includes 8 common customer service scenarios in Spanish
- **Web Components Provider**: Exports `customer-service-form` component with complete form functionality

#### 4. Fulfilment App
- Port: 3002
- **Provider App**: Exports backoffice and shipment web components
- Shipment management system with listing and detail pages
- Features shipment tracking, progress timeline, and logistics data
- Priority-based shipment management interface
- **Web Components Provider**: Exports reusable components:
  - `backoffice-header` - Basic backoffice header component
  - `shipment-details` - Complete shipment tracking with timeline and logistics data

## Development Commands

### OMS App (Port 3000) - Consumer App - React 19
```bash
cd oms && npm run dev              # Next.js only (consumes remote web components)
```

### OMS React 18 (Port 3004) - Consumer App - React 18 Compatibility Test
```bash
cd oms-react18 && npm run dev      # Next.js only (identical to OMS but React 18)
```

### Posventa App (Port 3001) - Provider App
```bash
cd posventa && npm run dev         # Next.js + Web Components build in parallel
# OR separately:
cd posventa && npm run dev:next    # Next.js development server only
cd posventa && npm run dev:wc      # Web components build in watch mode only
cd posventa && npm run build:wc    # Build web components once
```

### Fulfilment App (Port 3002) - Provider App  
```bash
cd fulfilment && npm run dev       # Next.js + Web Components build in parallel
# OR separately:
cd fulfilment && npm run dev:next  # Next.js development server only
cd fulfilment && npm run dev:wc    # Web components build in watch mode only
cd fulfilment && npm run build:wc  # Build web components once
```

### Other Commands (for any app)
```bash
npm run build    # Build for production
npm start        # Start production server
# Note: Linting is ignored for this POC
```

## Project Structure

```
/
├── oms/                           # OMS Next.js app (port 3000) - CONSUMER React 19
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.tsx         # Orders list page
│   │   │   ├── _app.tsx          # App wrapper
│   │   │   ├── _document.tsx     # Loads remote web component scripts
│   │   │   └── orders/[id].tsx   # Order detail with integrated web components
│   │   ├── components/           # Web components wrappers
│   │   │   ├── RemoteHeader.tsx  # Wrapper for backoffice-header (fulfilment)
│   │   │   ├── RemoteShipmentDetails.tsx # Wrapper for shipment-details (fulfilment)
│   │   │   ├── RemoteCustomerServiceForm.tsx # Wrapper for customer-service-form (posventa)
│   │   │   └── Skeleton.tsx      # Loading skeleton component
│   │   ├── hooks/
│   │   │   └── useEventListener.ts # Custom hook with CustomEvent typing
│   │   ├── types/
│   │   │   └── web-components.d.ts # Type declarations with React 19 module augmentation
│   │   └── styles/               # Global styles
│   ├── next.config.ts            # Next.js 15.4.2 config with src support
│   └── package.json              # React 19.1.0 dependencies
├── oms-react18/                  # OMS Next.js app (port 3004) - CONSUMER React 18 Test
│   ├── src/
│   │   ├── pages/                # Identical pages to oms/
│   │   ├── components/           # Identical web components wrappers
│   │   ├── hooks/
│   │   │   └── useEventListener.ts # Same CustomEvent typing as React 19 version
│   │   ├── types/
│   │   │   └── web-components.d.ts # Same type declarations
│   │   └── styles/               # Global styles
│   ├── next.config.js            # Next.js 14.2.18 config (JS format for compatibility)
│   └── package.json              # React 18.3.1 downgraded dependencies
├── posventa/                     # Posventa Next.js app (port 3001) - PROVIDER
│   ├── src/
│   │   ├── pages/                # Páginas Next.js standard
│   │   ├── styles/               # Global styles
│   │   └── web-components/       # Web components source code
│   │       ├── CustomerServiceForm/ # Formulario modularizado
│   │       │   ├── CustomerServiceForm.tsx # Main component
│   │       │   ├── CustomerServiceForm.types.ts # Types and interfaces
│   │       │   ├── CustomerServiceForm.constants.ts # Constants (issue names)
│   │       │   ├── CustomerServiceForm.styles.ts # Styled components
│   │       │   └── index.ts      # Module exports
│   │       └── wc-definitions.ts # Web component registration and definitions
│   ├── public/web-components/    # Built web components (generated)
│   │   ├── web-components.umd.js # UMD bundle for remote consumption
│   │   └── web-components.css    # Styles for web components
│   ├── vite.wc.config.ts         # Vite configuration for web components
│   ├── next.config.ts            # Next.js config with CORS headers
│   └── package.json              # Dependencies + build scripts
├── fulfilment/                   # Fulfilment Next.js app (port 3002) - PROVIDER
│   ├── src/
│   │   ├── pages/                # Páginas Next.js standard
│   │   ├── components/           # Internal components
│   │   ├── styles/               # Global styles
│   │   └── web-components/       # Web components source code
│   │       ├── Header/           # Header modularizado
│   │       │   ├── Header.tsx    # Main component
│   │       │   ├── Header.types.ts # Types and interfaces
│   │       │   ├── Header.styles.ts # Styled components
│   │       │   └── index.ts      # Module exports
│   │       ├── ShipmentDetails/  # ShipmentDetails modularizado
│   │       │   ├── ShipmentDetails.tsx # Main component
│   │       │   ├── ShipmentDetails.types.ts # Types and interfaces
│   │       │   ├── ShipmentDetails.mockData.ts # Test data
│   │       │   ├── ShipmentDetails.utils.ts # Utility functions
│   │       │   ├── ShipmentDetails.styles.ts # Styled components
│   │       │   └── index.ts      # Module exports
│   │       └── wc-definitions.ts # Web component registration and definitions
│   ├── public/web-components/    # Built web components (generated)
│   │   ├── web-components.umd.js # UMD bundle for remote consumption
│   │   └── web-components.css    # Styles for web components
│   ├── vite.wc.config.ts         # Vite configuration for web components
│   ├── next.config.ts            # Next.js config with CORS headers
│   └── package.json              # Dependencies + build scripts
└── shared/                       # Shared components/utilities (if needed)
```

## Web Components Integration

### Current Implementation
- **Fulfilment → OMS**: OMS consumes `backoffice-header` and `shipment-details` web components from Fulfilment 
- **Posventa → OMS**: OMS consumes `customer-service-form` web component from Posventa
- **Cross-Origin Loading**: Web components are loaded via Script tags from:
  - Fulfilment: `http://localhost:3002/web-components/web-components.umd.js`  
  - Posventa: `http://localhost:3001/web-components/web-components.umd.js`
- **Component Registration**: Web components are automatically registered using @r2wc/react-to-web-component

### Provider Apps (Fulfilment & Posventa)
**Fulfilment exports:**
- `<backoffice-header />` - Basic backoffice header
- `<shipment-details />` - Shipment details with tracking

**Posventa exports:**
- `<customer-service-form />` - Complete customer service form with react-hook-form

### Consumer App (OMS)
**OMS consumes web components via:**
- `RemoteHeader` - Wrapper for `<backoffice-header />`
- `RemoteShipmentDetails` - Wrapper for `<shipment-details />`  
- `RemoteCustomerServiceForm` - Typed wrapper for `<customer-service-form />`

### Complete Integration Implemented
- **OMS Header**: Integrates RemoteHeader (backoffice-header) from Fulfilment across all OMS pages
- **OMS Order Details**: Integrates RemoteCustomerServiceForm from Posventa in "Customer Support" section
- **OMS Shipment Tab**: Integrates RemoteShipmentDetails from Fulfilment in "Shipment Info" tab
- **Event Handling**: Complete custom event system between apps
- **Typed Props**: TypeScript interfaces for passing complex properties

### Technical Implementation Details
- **Build Process**: Vite builds React components as UMD bundles
- **Output Directory**: Web components are generated in `/public/web-components/`
- **Environment Variables**: VITE_ and NEXT_PUBLIC_ variables are injected at build time
- **Style Isolation**: Each web component includes its own CSS styles
- **DOM Registration**: Components register only if not already defined previously
- **React 19 Support**: Complex props (objects, arrays, functions) work natively
- **React 18 Compatibility**: Testing app on port 3004 with React 18.3.1 and Next.js 14.2.18
- **TypeScript Integration**: 
  - React 19: Module augmentation with `declare module "react"`
  - React 18: Global declarations with fallback for compatibility
  - CustomEvent typing for web component events
- **Modular Architecture**: Each web component is modularized with separate files:
  - `Component.tsx` - Main component
  - `Component.types.ts` - TypeScript types and interfaces
  - `Component.styles.ts` - Styled components CSS-in-JS
  - `Component.utils.ts` - Utility functions (when applicable)
  - `Component.constants.ts` / `Component.mockData.ts` - Static data
  - `index.ts` - Module exports

## Design System

- **Minimal, Clean Interface**: No gradients, simple gray/white color scheme
- **Compact Lists**: Reduced spacing for efficient space usage
- **Professional Backoffice Style**: Business-focused, functional design
- **Consistent Tab System**: Tab system used in OMS to organize content
- **Form Validation**: Integration with react-hook-form for robust validation
- **Event-Driven Architecture**: Communication via custom events between micro-frontends

## Important Considerations

- Each app maintains its own dependencies and build process
- Apps should be developed as if they're separate team repositories
- Focus on demonstrating independent deployment while enabling component sharing
- Linting is disabled for this POC to focus on functionality
- React 19 provides native web component support for better micro-frontend architecture
- **Modular Component Structure**: All web components follow consistent modularization patterns for maintainability and scalability
- **Naming Convention**: Files are prefixed with component name (e.g., `Header.types.ts`, `ShipmentDetails.utils.ts`) for better organization
- **Index Exports**: Each component folder includes an `index.ts` for clean imports and API exposure