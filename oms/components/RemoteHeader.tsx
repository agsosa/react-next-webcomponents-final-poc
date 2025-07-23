import dynamic from "next/dynamic";
import useEventListener from "../hooks/useEventListener";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const Skeleton = styled.div`
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

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
