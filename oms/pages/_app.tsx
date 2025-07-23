import RemoteHeader from "@/components/RemoteHeader";
import Skeleton from "@/components/Skeleton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const RemoteHeader_NOSSR = dynamic(() => Promise.resolve(RemoteHeader), {
  ssr: false,
  loading: () => <Skeleton style={{ width: "100%", height: "65.18px" }} />,
});


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <RemoteHeader_NOSSR />
      <Component {...pageProps} />
    </>
  );
}
