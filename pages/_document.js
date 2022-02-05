import { Head, Html, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
