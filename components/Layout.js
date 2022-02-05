import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
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
        <meta property="og:image" content="/logo512.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="logo512.png" />

        <meta
          name="description"
          content="複数の占いをまとめて確認できるサービスです。"
        />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full text-center min-h-screen">
        {children}
      </main>

      <footer className="flex items-center justify-center w-full h-12 mt-4 border-t">
        <p className="flex items-center justify-center">&copy; bootch</p>
      </footer>
    </div>
  );
};

export default Layout;
