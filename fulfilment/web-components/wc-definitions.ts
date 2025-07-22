/*import Button from "../shared/Button";
import Card from "../shared/Card";
import Footer from "../shared/Footer";*/
import Header from "./Header";

import r2wc from "@r2wc/react-to-web-component";
//import { exportConfigToWindow } from "../../utils/configBridge";

//console.log("process.env on build", process.env.NEXT_PUBLIC_TEST)

// definir interface para este array
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
  /*{
    element: "my-button",
    component: Button,
    props: { label: "string", onClick: "function" },
  },
  {
    element: "my-card",
    component: Card,
  },
  {
    element: "my-footer",
    component: Footer,
  },
    {
    element: "my-header",
    component: Header,
  },*/
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

// Register immediately if DOM is ready, otherwise wait
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
