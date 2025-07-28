import RemoteHeader from "@/components/RemoteHeader";
import StyledThemeProvider from "@/components/StyledThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <RemoteHeader />
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
}
