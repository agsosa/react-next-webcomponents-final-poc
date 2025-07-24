# OMS React 18 Test App

OMS app clone running React 18 for web components compatibility testing.

## Key Differences
- **React**: 18.3.1 (instead of 19.1.0)  
- **Next.js**: 14.2.18 (instead of 15.4.2)
- **Port**: 3004 (instead of 3000)
- **TypeScript types**: @types/react@18, @types/react-dom@18

## Purpose
Test that web components from Fulfilment and Posventa apps work correctly with React 18, since React 19 added native web component support.

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) with your browser.

## Testing
- Navigate to orders (same functionality as main OMS)  
- Verify web components load and function correctly
- Compare behavior with React 19 version on port 3000