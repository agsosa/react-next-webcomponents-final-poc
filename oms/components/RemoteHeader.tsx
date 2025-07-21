import getConfig from "next/config";
import Script from "next/script";

export default function RemoteHeader() {
  const { publicRuntimeConfig: { fulfilmentUrl } } = getConfig();

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
