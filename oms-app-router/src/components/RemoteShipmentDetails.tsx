"use client";
import dynamic from "next/dynamic";
import Skeleton from "./Skeleton";

function RemoteShipmentDetails() {
  return <shipment-details shipment-id="SHP-001" />;
}

export default dynamic(() => Promise.resolve(RemoteShipmentDetails), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: "1062px" }} />,
});
