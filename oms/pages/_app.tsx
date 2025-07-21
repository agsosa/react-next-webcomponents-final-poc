import RemoteHeader from "@/components/RemoteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker for web components caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <Fragment>
      <RemoteHeader />
      <Component {...pageProps} />
    </Fragment>
  );
}
