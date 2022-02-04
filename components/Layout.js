import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Ftune</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full text-center">
        {children}
      </main>

      <footer className="flex items-center justify-center w-full h-12 mt-4 border-t">
        <p className="flex items-center justify-center">&copy; bootch</p>
      </footer>
    </div>
  );
};

export default Layout;