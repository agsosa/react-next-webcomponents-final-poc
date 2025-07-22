import { useEffect } from "react";

const useEventListener = (
  elementName: string,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    const element = document.querySelector(elementName);
    if (!element) return;

    const name = event.replace(/^on/, "").toLowerCase(); // https://github.com/bitovi/react-to-web-component/blob/b1372bfd7bc67fe49920db840f1ed9cf736b2724/packages/core/src/core.ts#L117

    element.addEventListener(name, handler, options);

    return () => {
      element.removeEventListener(name, handler, options);
    };
  }, [elementName, event, handler]);
};

export default useEventListener;
