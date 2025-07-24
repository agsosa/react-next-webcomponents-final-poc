import CustomerServiceForm from "./CustomerServiceForm";
import r2wc from "@r2wc/react-to-web-component";

const webComponents = {
  "customer-service-form": r2wc(CustomerServiceForm, {
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
