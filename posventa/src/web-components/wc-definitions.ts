import CustomerServiceForm from "./CustomerServiceForm";
import r2wc from "@r2wc/react-to-web-component";

// Web components configuration
const WebComponents = [
  {
    element: "customer-service-form",
    component: CustomerServiceForm,
    props: {
      // Display props
      title: "string",
      subtitle: "string", 
      issueName: "string",
      showHeader: "boolean",
      
      // Configuration props
      submitUrl: "string",
      successRedirect: "string",
      errorRedirect: "string",
      
      // Initial values (JSON string)
      initialValues: "json",
      
      // Validation options
      requireOrderNumber: "boolean",
      allowedPriorities: "string", // JSON array string
      
      // Event handlers
      onSubmit: "function",
      onSuccess: "function", 
      onError: "function"
    },
    events: {
      onSubmit: { bubbles: true },
      onSuccess: { bubbles: true },
      onError: { bubbles: true }
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
