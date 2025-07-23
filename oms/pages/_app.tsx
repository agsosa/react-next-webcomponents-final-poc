import RemoteHeader from "@/components/RemoteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <RemoteHeader />
      <Component {...pageProps} />
    </>
  );
}
