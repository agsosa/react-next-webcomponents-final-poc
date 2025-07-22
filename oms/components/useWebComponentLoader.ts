import { createElement, useEffect, useRef, useState } from "react";

// Simple cache to avoid loading the same resources multiple times
const loadedResources = new Set<string>();

interface WebComponentRendererProps {
  elementName: string;
  [key: string]: any;
}

export const useWebComponentRenderer = ({ elementName, ...props }: WebComponentRendererProps) => {
  const registeredFunctions = useRef(new Set<string>());
  const elementRef = useRef<HTMLElement | null>(null);
  
  // Separate functions from other props
  const propsWithoutFunctions = Object.fromEntries(
    Object.entries(props).filter(([key, value]) => typeof value !== "function")
  );

  const propsWithFunctions = Object.fromEntries(
    Object.entries(props).filter(([key, value]) => typeof value === "function")
  );

  useEffect(() => {
    // Wait for element to be available in DOM
    const waitForElement = () => {
      const element = elementRef.current || document.querySelector(elementName);
      
      if (!element) {
        // Element not ready yet, try again
        requestAnimationFrame(waitForElement);
        return;
      }

      // Store reference
      elementRef.current = element as HTMLElement;

      // Register functions and bind to element
      for (const [key, value] of Object.entries(propsWithFunctions)) {
        if (typeof value === "function") {
          const uniqueFunctionName = `__wc_${elementName.replace(/-/g, '_')}_${key}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          
          console.log(`✅ WebComponentLoader: Registering ${key} -> ${uniqueFunctionName}`);
          
          // Register globally for web component access
          (window as any)[uniqueFunctionName] = value;
          registeredFunctions.current.add(uniqueFunctionName);
          
          // Bind to element in multiple ways for maximum compatibility
          element.setAttribute(`on-${key.toLowerCase()}`, uniqueFunctionName);
          (element as any)[key] = value;
          
          // Also try camelCase for React-style props
          const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
          (element as any)[camelCaseKey] = value;
        }
      }

      // Set other props as attributes and properties
      for (const [key, value] of Object.entries(propsWithoutFunctions)) {
        if (value !== undefined && value !== null) {
          element.setAttribute(key.toLowerCase(), String(value));
          (element as any)[key] = value;
        }
      }

      console.log(`🎯 WebComponentLoader: ${elementName} configured with`, Object.keys(props));
    };

    waitForElement();

    // Cleanup function
    return () => {
      registeredFunctions.current.forEach(functionName => {
        console.log(`🧹 WebComponentLoader: Cleaning up ${functionName}`);
        delete (window as any)[functionName];
      });
      registeredFunctions.current.clear();
    };
  }, [elementName, JSON.stringify(props)]);

  // Return the basic element - functions will be bound by useEffect
  return createElement(elementName, propsWithoutFunctions);
};

// Component wrapper for easier usage
export const WebComponentRenderer = ({ elementName, ...props }: WebComponentRendererProps) => {
  return useWebComponentRenderer({ elementName, ...props });
};

// Original hook for loading resources
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
      
      script.onerror = () => {
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
