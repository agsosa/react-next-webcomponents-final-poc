import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";
import { useState } from "react";
import Skeleton from "./Skeleton";

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

export default dynamic(() => Promise.resolve(RemoteHeader), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: "65.18px" }} />,
});
