import RemoteHeader from "@/components/RemoteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: 'red'
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RemoteHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
