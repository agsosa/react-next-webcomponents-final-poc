import getConfig from "next/config";
import dynamic from "next/dynamic";
import useEventListener from "./useEventListener";

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

function Server_RemoteHeader() {
  const {
    publicRuntimeConfig: { fulfilmentUrl },
  } = getConfig();

  useEventListener("backoffice-header", "onLoad", (event) => {
    console.log("onLoad event triggered", event);
    document.body.classList.add("ready");
  });

  return (
    <>
      <backoffice-header onClick={() => console.log("pepe")} />
    </>
  );
}

//export default Server_RemoteHeader;

export default dynamic(() => Promise.resolve(Server_RemoteHeader), {
  ssr: false,
});
