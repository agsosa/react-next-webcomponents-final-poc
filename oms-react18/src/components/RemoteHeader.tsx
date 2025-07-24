import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";
import { useState } from "react";
import Skeleton from "./Skeleton";

enum Event {
  OnLoad = "onLoad",
}

function RemoteHeader() {
  const [loaded, setLoaded] = useState(false);

  // Setup handlers for custom events
  const handleLoad = (event: CustomEvent) => {
    console.log("onLoad event triggered on shell app", event);
    setLoaded(true);
  };

  // Set up event listeners for header events
  const elementName = "backoffice-header";
  useEventListener(elementName, Event.OnLoad, handleLoad);

  return <backoffice-header app-title="OMS" username="Juan OMS" />;
}

export default dynamic(() => Promise.resolve(RemoteHeader), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: "65.18px" }} />,
});
