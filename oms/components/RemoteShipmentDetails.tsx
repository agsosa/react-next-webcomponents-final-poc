import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";
import Skeleton from "./Skeleton";

function RemoteShipmentDetails() {
  //   useEventListener("backoffice-header", "onLoad", (event) => {
  //     console.log("onLoad event triggered", event);
  //     document.body.classList.add("ready");
  //   });

  return <shipment-details shipmentId="SHP-001" />;
}

export default dynamic(() => Promise.resolve(RemoteShipmentDetails), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: "1062px" }} />,
});
