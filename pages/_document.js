import { Head, Html, Main, NextScript } from "next/document";
import { Adsense } from "../lib/adsense";
import { GoogleAnalytics } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Adsense />
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
