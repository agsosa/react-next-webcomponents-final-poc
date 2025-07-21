import Script from "next/script";

export default function RemoteHeader() {
  return (
    <>
      <Script type="module"  src="http://localhost:3002/web-components-vite/web-components.umd.js"  />

      <backoffice-header  />
    </>
  );
}
