"use client";

import getConfig from "next/config";
import dynamic from "next/dynamic";
import Script from "next/script";

function Server_RemoteHeader() {
  const {
    publicRuntimeConfig: { fulfilmentUrl },
  } = getConfig();

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
