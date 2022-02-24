import { Head, Html, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "../lib/gtag";
import { Imobile } from "../lib/imobile";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <GoogleAnalytics />
        <Imobile />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
