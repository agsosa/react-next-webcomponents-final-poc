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
      onLoad: 'function'
    },
    events: {
      onLoad: { bubbles: true },
    },
  },
  {
    element: "shipment-details",
    component: ShipmentDetails,
    props: {
      shipmentId: "string",
      shipmentData: "string",
      apiUrl: "string",
      showTimeline: "boolean",
      showTrackingSection: "boolean",
      compactMode: "boolean",
    },
    events: {
      onLoad: { bubbles: true },
      onError: { bubbles: true },
      onTrackingClick: { bubbles: true },
    },
  },
];

function onConsumerAppLoadedScript() {
  try {
    // Register our web components on the consumer app

    for (const wc of WebComponents) {
      if (!customElements.get(wc.element)) {
        console.log(wc);
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
