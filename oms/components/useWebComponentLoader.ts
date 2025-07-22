import { useEffect, useState } from "react";

// Simple cache to avoid loading the same resources multiple times
const loadedResources = new Set<string>();

const useWebComponentsRenderer = (scriptUrl: string, cssUrl: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let scriptLoaded = false;
    let cssLoaded = false;

    const checkIfBothLoaded = () => {
      if (scriptLoaded && cssLoaded) {
        setLoading(false);
      }
    };

    const loadScript = () => {
      // Check if already loaded globally
      if (loadedResources.has(scriptUrl)) {
        scriptLoaded = true;
        checkIfBothLoaded();
        return;
      }

      // Check if script already exists in DOM
      const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
      if (existingScript) {
        scriptLoaded = true;
        loadedResources.add(scriptUrl);
        checkIfBothLoaded();
        return;
      }

      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.setAttribute("data-web-component", "true");
      
      script.onload = () => {
        scriptLoaded = true;
        loadedResources.add(scriptUrl);
        checkIfBothLoaded();
      };
      
      script.onerror = (asd) => {
        setError(`Failed to load script: ${scriptUrl}`);
        setLoading(false);
      };
      
      document.head.appendChild(script);
    };

    const loadCSS = () => {
      // Check if already loaded globally  
      if (loadedResources.has(cssUrl)) {
        cssLoaded = true;
        checkIfBothLoaded();
        return;
      }

      // Check if CSS already exists in DOM
      const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
      if (existingLink) {
        cssLoaded = true;
        loadedResources.add(cssUrl);
        checkIfBothLoaded();
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      link.setAttribute("data-web-component", "true");
      
      link.onload = () => {
        cssLoaded = true;
        loadedResources.add(cssUrl);
        checkIfBothLoaded();
      };
      
      link.onerror = () => {
        setError(`Failed to load CSS: ${cssUrl}`);
        setLoading(false);
      };
      
      document.head.appendChild(link);
    };

    // Reset states
    setLoading(true);
    setError(null);

    // Start loading both resources
    loadScript();
    loadCSS();

  }, [scriptUrl, cssUrl]);

  return { loading, error };
};

export default useWebComponentsRenderer;
