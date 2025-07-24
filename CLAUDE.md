# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a proof-of-concept simulating 3 separate Next.js applications from different teams, each deployed to different URLs. The POC demonstrates how teams can share components while maintaining independent deployments.

## Architecture

### Multi-App Structure
- **3 Independent Next.js Apps**: Each represents a different team/domain
- **Separate Deployments**: Each app will be deployed to different URLs
- **Web Components Integration**: Apps can share components via web components using @r2wc/react-to-web-component
- **Cross-Origin Component Sharing**: Components built in one app can be consumed remotely by others

### Technology Stack (All Apps)
- Next.js with Pages Router
- TypeScript
- styled-components for styling

### Web Components Technology Stack
- **@r2wc/react-to-web-component**: Converts React components to web components
- **Vite**: Builds web components separately from Next.js apps
- **UMD Format**: Web components are bundled as UMD modules for cross-origin consumption

### Applications

#### 1. OMS App (Order Management System)
- Port: 3000
- Order management backoffice with order listing and detail pages
- Features tabbed order detail view with Order Details and Shipment Info tabs
- Includes placeholder for Posventa web component integration in order details
- Uses basic backoffice header component

#### 2. Posventa App (Post-Sales Service)
- Port: 3001
- Multi-step customer service form system
- Flow: Issues List → Sub-issues → Contact Form → Results
- Built with react-hook-form for form validation
- Compact, list-based interface design
- Includes 8 common customer service scenarios in Spanish

#### 3. Fulfilment App
- Port: 3002
- Shipment management system with listing and detail pages
- Features shipment tracking, progress timeline, and logistics data
- Uses basic backoffice header component
- Priority-based shipment management interface
- **Web Components Provider**: Exports reusable components (Header) as web components for other apps

## Development Commands

### OMS App (Port 3000) - Consumer App
```bash
cd oms && npm run dev              # Solo Next.js (consume web components remotos)
```

### Posventa App (Port 3001) - Provider App
```bash
cd posventa && npm run dev         # Next.js + Web Components build en paralelo
# OR separately:
cd posventa && npm run dev:next    # Solo Next.js development server
cd posventa && npm run dev:wc      # Solo web components build en watch mode
cd posventa && npm run build:wc    # Build web components una vez
```

### Fulfilment App (Port 3002) - Provider App  
```bash
cd fulfilment && npm run dev       # Next.js + Web Components build en paralelo
# OR separately:
cd fulfilment && npm run dev:next  # Solo Next.js development server
cd fulfilment && npm run dev:wc    # Solo web components build en watch mode
cd fulfilment && npm run build:wc  # Build web components una vez
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
│   │   │   ├── _document.tsx     # Carga scripts de web components remotos
│   │   │   └── orders/[id].tsx   # Order detail with integrated web components
│   │   ├── components/           # Web components wrappers
│   │   │   ├── RemoteHeader.tsx  # Wrapper para backoffice-header (fulfilment)
│   │   │   ├── RemoteShipmentDetails.tsx # Wrapper para shipment-details (fulfilment)
│   │   │   ├── RemoteCustomerServiceForm.tsx # Wrapper para customer-service-form (posventa)
│   │   │   └── Skeleton.tsx      # Loading skeleton component
│   │   ├── hooks/
│   │   │   └── useEventListener.ts # Custom hook con CustomEvent typing
│   │   ├── types/
│   │   │   └── web-components.d.ts # Type declarations con React 19 module augmentation
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
│   │       │   ├── CustomerServiceForm.tsx # Componente principal
│   │       │   ├── CustomerServiceForm.types.ts # Tipos e interfaces
│   │       │   ├── CustomerServiceForm.constants.ts # Constantes (nombres de issues)
│   │       │   ├── CustomerServiceForm.styles.ts # Styled components
│   │       │   └── index.ts      # Exportaciones del módulo
│   │       └── wc-definitions.ts # Registro y definición de web components
│   ├── public/web-components/    # Built web components (generated)
│   │   ├── web-components.umd.js # Bundle UMD para consumo remoto
│   │   └── web-components.css    # Estilos para web components
│   ├── vite.wc.config.ts         # Configuración Vite para web components
│   ├── next.config.ts            # Next.js config with CORS headers
│   └── package.json              # Dependencies + build scripts
├── fulfilment/                   # Fulfilment Next.js app (port 3002) - PROVIDER
│   ├── src/
│   │   ├── pages/                # Páginas Next.js standard
│   │   ├── components/           # Internal components
│   │   ├── styles/               # Global styles
│   │   └── web-components/       # Web components source code
│   │       ├── Header/           # Header modularizado
│   │       │   ├── Header.tsx    # Componente principal
│   │       │   ├── Header.types.ts # Tipos e interfaces
│   │       │   ├── Header.styles.ts # Styled components
│   │       │   └── index.ts      # Exportaciones del módulo
│   │       ├── ShipmentDetails/  # ShipmentDetails modularizado
│   │       │   ├── ShipmentDetails.tsx # Componente principal
│   │       │   ├── ShipmentDetails.types.ts # Tipos e interfaces
│   │       │   ├── ShipmentDetails.mockData.ts # Datos de prueba
│   │       │   ├── ShipmentDetails.utils.ts # Funciones utilitarias
│   │       │   ├── ShipmentDetails.styles.ts # Styled components
│   │       │   └── index.ts      # Exportaciones del módulo
│   │       └── wc-definitions.ts # Registro y definición de web components
│   ├── public/web-components/    # Built web components (generated)
│   │   ├── web-components.umd.js # Bundle UMD para consumo remoto
│   │   └── web-components.css    # Estilos para web components
│   ├── vite.wc.config.ts         # Configuración Vite para web components
│   ├── next.config.ts            # Next.js config with CORS headers
│   └── package.json              # Dependencies + build scripts
└── shared/                       # Shared components/utilities (if needed)
```

## Web Components Integration

### Current Implementation
- **Falfilment → OMS**: OMS consumes `backoffice-header` y `shipment-details` web components desde Fulfilment 
- **Posventa → OMS**: OMS consumes `customer-service-form` web component desde Posventa
- **Cross-Origin Loading**: Web components se cargan via Script tags desde:
  - Fulfilment: `http://localhost:3002/web-components/web-components.umd.js`  
  - Posventa: `http://localhost:3001/web-components/web-components.umd.js`
- **Component Registration**: Web components se registran automáticamente usando @r2wc/react-to-web-component

### Provider Apps (Fulfilment & Posventa)
**Fulfilment expone:**
- `<backoffice-header />` - Header básico para backoffice
- `<shipment-details />` - Detalles de envío con tracking

**Posventa expone:**
- `<customer-service-form />` - Formulario completo de atención al cliente con react-hook-form

### Consumer App (OMS)
**OMS consume web components via:**
- `RemoteHeader` - Wrapper para `<backoffice-header />`
- `RemoteShipmentDetails` - Wrapper para `<shipment-details />`  
- `RemoteCustomerServiceForm` - Wrapper tipado para `<customer-service-form />`

### Integración Completa Implementada
- **OMS Order Details**: Integra RemoteCustomerServiceForm de Posventa en sección "Customer Support"
- **OMS Shipment Tab**: Integra RemoteShipmentDetails de Fulfilment en pestaña "Shipment Info"
- **Event Handling**: Sistema completo de eventos customizados entre apps
- **Props Tipadas**: Interfaces TypeScript para pasar propiedades complejas

### Technical Implementation Details
- **Build Process**: Vite construye componentes React como bundles UMD
- **Output Directory**: Web components se generan en `/public/web-components/`
- **Environment Variables**: Variables VITE_ y NEXT_PUBLIC_ se inyectan en build time
- **Style Isolation**: Cada web component incluye sus propios estilos CSS
- **DOM Registration**: Componentes se registran solo si no existen previamente
- **React 19 Support**: Props complejas (objetos, arrays, funciones) funcionan nativamente
- **React 18 Compatibility**: Testing app en puerto 3004 con React 18.3.1 y Next.js 14.2.18
- **TypeScript Integration**: 
  - React 19: Module augmentation con `declare module "react"`
  - React 18: Global declarations con fallback para compatibilidad
  - CustomEvent typing para eventos de web components
- **Modular Architecture**: Cada web component está modularizado con archivos separados:
  - `Component.tsx` - Componente principal
  - `Component.types.ts` - Tipos e interfaces TypeScript
  - `Component.styles.ts` - Styled components CSS-in-JS
  - `Component.utils.ts` - Funciones utilitarias (cuando aplique)
  - `Component.constants.ts` / `Component.mockData.ts` - Datos estáticos
  - `index.ts` - Exportaciones del módulo

## Design System

- **Minimal, Clean Interface**: Sin gradientes, esquema simple gris/blanco
- **Compact Lists**: Espaciado reducido para uso eficiente del espacio
- **Professional Backoffice Style**: Diseño funcional enfocado en negocio
- **Consistent Tab System**: Sistema de pestañas usado en OMS para organizar contenido
- **Form Validation**: Integración con react-hook-form para validación robusta
- **Event-Driven Architecture**: Comunicación via custom events entre micro-frontends

## Important Considerations

- Each app maintains its own dependencies and build process
- Apps should be developed as if they're separate team repositories
- Focus on demonstrating independent deployment while enabling component sharing
- Linting is disabled for this POC to focus on functionality
- React 19 provides native web component support for better micro-frontend architecture
- **Modular Component Structure**: All web components follow consistent modularization patterns for maintainability and scalability
- **Naming Convention**: Files are prefixed with component name (e.g., `Header.types.ts`, `ShipmentDetails.utils.ts`) for better organization
- **Index Exports**: Each component folder includes an `index.ts` for clean imports and API exposure