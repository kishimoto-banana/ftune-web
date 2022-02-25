import { Head, Html, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "../lib/gtag";
import Nend from "../lib/nend";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <GoogleAnalytics />
        <Nend
          params={{
            media: 70036,
            site: 354848,
            spot: 1053096,
            type: 2,
            oriented: 1,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
