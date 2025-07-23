import RemoteHeader from "@/components/RemoteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme} from '@fravega-it/bumeran-ds-fvg'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <RemoteHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
