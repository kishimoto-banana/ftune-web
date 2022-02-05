import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const termsUrl = "https://kiyac.app/termsOfService/AaOtl2Wnfps704ZCt1ZK";
  const privacyPolicyUrl =
    "https://kiyac.app/plivacypolicy/Q5nAA3GVlz63FBC0d0Mh";

  return (
    <div>
      <Head>
        <title>Ftune</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Ftune" />
        <meta property="og:title" content="Ftune" />
        <meta
          property="og:description"
          content="複数の占いをまとめて確認できるサービスです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ftune-web.com/" />
        <meta property="og:image" content="https://ftune-web.com/logo512.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://ftune-web.com/" />
        <meta
          name="twitter:image"
          content="https://ftune-web.com/logo512.png"
        />

        <meta
          name="description"
          content="複数の占いをまとめて確認できるサービスです。"
        />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full text-center min-h-screen">
        {children}
      </main>

      <footer className="flex flex-col gap-4 items-center justify-center w-full mt-4 border-t">
        <div className="flex flex-row pt-4 gap-8 flex-wrap">
          <a
            href={termsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            利用規約
          </a>
          <a
            href={privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            プライバシーポリシー
          </a>
        </div>
        <p className="flex items-center justify-center pb-4 text-sm">
          &copy; bootch
        </p>
      </footer>
    </div>
  );
};

export default Layout;
