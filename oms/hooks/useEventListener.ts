import { useEffect } from "react";

const useEventListener = (
  elementName: string,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    let element = document.querySelector(elementName);
    const name = event.replace(/^on/, "").toLowerCase();

    const attachListener = (el: Element) => {
      el.addEventListener(name, handler, options);
    };

    if (element) {
      attachListener(element);
    }

    // Create an observer to watch for the element if it doesn't exist yet
    const observer = new MutationObserver(() => {
      const newElement = document.querySelector(elementName);
      if (newElement && newElement !== element) {
        element = newElement;
        attachListener(element);
        observer.disconnect();
      }
    });

    if (!element) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      if (element) {
        element.removeEventListener(name, handler, options);
      }
      observer.disconnect();
    };
  }, [elementName, event, handler, options]);
};

export default useEventListener;
