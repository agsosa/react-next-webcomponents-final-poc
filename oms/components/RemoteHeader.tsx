import useEventListener from "../hooks/useEventListener";
import { useState } from "react";

function RemoteHeader() {
  const [loaded, setLoaded] = useState(false);

  useEventListener("backoffice-header", "onLoad", (event) => {
    console.log("onLoad event triggered on shell app", event);
    setLoaded(true);
  });

  return (
    <div>
      <backoffice-header appTitle="OMS" username="Juan OMS" />
    </div>
  );
}

export default RemoteHeader;
