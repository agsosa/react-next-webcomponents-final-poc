import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "shipment-details": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function RemoteShipmentDetails() {
  //   useEventListener("backoffice-header", "onLoad", (event) => {
  //     console.log("onLoad event triggered", event);
  //     document.body.classList.add("ready");
  //   });

  return <shipment-details shipmentId="SHP-001" />;
}

export default dynamic(() => Promise.resolve(RemoteShipmentDetails), {
  ssr: false,
});
