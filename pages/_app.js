import "../firebase/clientApp";
import "../styles/globals.css";
import Layout from "../components/Layout";
import UserProvider from "../context/userContext";
import { GoogleAnalytics, usePageView } from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  usePageView();

  return (
    <UserProvider>
      <Layout>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
