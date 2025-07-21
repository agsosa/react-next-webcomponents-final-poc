"use client";

import getConfig from "next/config";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect } from "react";

function Server_RemoteHeader() {
  const {
    publicRuntimeConfig: { fulfilmentUrl },
  } = getConfig();

      useEffect(() => {
    document.body.classList.add("ready");
  }, [])

  return (
    <>
      {/* <Script
        src={fulfilmentUrl + "/web-components-vite/web-components.umd.js"}
        strategy="afterInteractive"
      /> */}
      <backoffice-header />
    </>
  );
}

export default dynamic(() => Promise.resolve(Server_RemoteHeader), {
  ssr: false,
});
