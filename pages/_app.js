import "../firebase/clientApp";
import "../styles/globals.css";
import Layout from "../components/Layout";
import UserProvider from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
