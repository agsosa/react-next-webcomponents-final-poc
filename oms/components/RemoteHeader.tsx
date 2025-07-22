import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "backoffice-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function RemoteHeader() {
  useEventListener("backoffice-header", "onLoad", (event) => {
    console.log("onLoad event triggered on shell app", event);
    // document.body.classList.add("ready");
  });

  return <backoffice-header onClick={() => console.log("pepe")} />;
}

export default dynamic(() => Promise.resolve(RemoteHeader), {
  ssr: false,
});
