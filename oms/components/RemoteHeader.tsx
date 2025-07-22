import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";

function RemoteHeader() {
  useEventListener("backoffice-header", "onLoad", (event) => {
    console.log("onLoad event triggered on shell app", event);
    // document.body.classList.add("ready");
  });

  return <backoffice-header />;
}

export default dynamic(() => Promise.resolve(RemoteHeader), {
  ssr: false,
});
