import { Head, Html, Main, NextScript } from "next/document";
import { Adsense } from "../lib/adsense";
import { GoogleAnalytics } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* <Adsense /> */}
        <GoogleAnalytics />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var nend_params = {"media":70036,"site":354848,"spot":1053096,"type":2,"oriented":1};`,
          }}
        ></script>
        <script
          type="text/javascript"
          src="https://js1.nend.net/js/nendAdLoader.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
