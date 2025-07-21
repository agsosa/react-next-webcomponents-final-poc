import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";
import getConfig from "next/config";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const {
      publicRuntimeConfig: { fulfilmentUrl },
    } = getConfig();

    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="preload"
            href={fulfilmentUrl + "/web-components-vite/web-components.umd.js"}
            as="script"
            crossOrigin="anonymous"
          />
          <link rel="dns-prefetch" href={"//" + new URL(fulfilmentUrl).host} />
          <link rel="preconnect" href={fulfilmentUrl} crossOrigin="anonymous" /> */}
                    <script defer async src={fulfilmentUrl + "/web-components-vite/web-components.umd.js"} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
