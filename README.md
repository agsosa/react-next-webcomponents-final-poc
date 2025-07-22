# Microfrontends PoC – React to Web Components with Next.js and Vite

This is a proof of concept demonstrating how to implement Microfrontends using @r2wc/react-to-web-component to expose React components as Web Components, built with Vite and exported/consumed inside Next.js applications.

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

Needs better optimizations

Still needs some testing for context, styled-components themes and other libraries.

Shadow DOM mode not tested

Needs next.js polyfils for next/config and next/image

Versioning or cache busting for deployed scripts

And more.

# ⚠️ WORK IN PROGRESS ⚠️
