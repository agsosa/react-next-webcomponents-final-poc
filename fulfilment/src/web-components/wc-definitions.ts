import Header from "./Header";
import ShipmentDetails from "./ShipmentDetails";

import r2wc from "@r2wc/react-to-web-component";

const webComponents = {
  "backoffice-header": r2wc(Header, {
    props: { appTitle: "string", username: "string" },
    events: { onLoad: { bubbles: true } },
  }),
  "shipment-details": r2wc(ShipmentDetails, {
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
  }),
};

// Register our web components on the consumer app
function onConsumerAppLoadedScript() {
  try {
    for (const [name, component] of Object.entries(webComponents)) {
      if (!customElements.get(name)) {
        customElements.define(name, component);
        console.log(`${name} component registered`);
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
