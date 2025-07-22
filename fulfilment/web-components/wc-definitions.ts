import Header from "./Header";
import ShipmentDetails from "./ShipmentDetails";

import r2wc from "@r2wc/react-to-web-component";

// Web components configuration
const WebComponents = [
  {
    element: "backoffice-header",
    component: Header,
    props: { 
      label: "string",
      onPepe: "function"
    },
    events: {
      onLoad: { bubbles: true }
    }
  },
  {
    element: "shipment-details",
    component: ShipmentDetails,
    props: {
      // Shipment data props
      shipmentId: "string",
      shipmentData: "string", // JSON string for web component
      apiUrl: "string",
      
      // Display options
      showTimeline: "boolean",
      showTrackingSection: "boolean", 
      compactMode: "boolean",
      
      // Event handlers
      onTrackingClick: "function",
      onError: "function",
      onLoad: "function"
    },
    events: {
      onLoad: { bubbles: true },
      onError: { bubbles: true },
      onTrackingClick: { bubbles: true }
    }
  },
];

// Ensure DOM is ready before registering components
function onConsumerAppLoadedScript() {
  try {
    // Here we can do things on consumer app

    // Export Next.js config to window first
    //exportConfigToWindow();

    for (const wc of WebComponents) {
      if (!customElements.get(wc.element)) {
        console.log(wc)
        customElements.define(
          wc.element,
          r2wc(wc.component, {
            props: wc.props || {},
            events: wc.events || {},
            shadow: wc.shadow || undefined,
          })
        );
        console.log(`${wc.element} component registered`);
      }
    }
  } catch (error) {
    console.error("Error registering web components:", error);
  }
}

if (typeof document !== "undefined" && document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onConsumerAppLoadedScript);
} else {
  onConsumerAppLoadedScript();
}

// Make components available globally for remote usage
/*if (typeof window !== "undefined") {
  (window as any).WebComponents = {
    ButtonWC,
    CardWC,
    FooterWC,
    registerWebComponents,
  };
}
*/
