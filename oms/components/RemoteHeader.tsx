import getConfig from "next/config";
import Script from "next/script";

function Server_RemoteHeader() {
  const {
    publicRuntimeConfig: { fulfilmentUrl },
  } = getConfig();

  return (
    <>
      <Script
        src={fulfilmentUrl + "/web-components-vite/web-components.umd.js"}
        strategy="afterInteractive"
      />
      <backoffice-header />
    </>
  );
}

export default Server_RemoteHeader;
