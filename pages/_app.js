import "../styles/globals.css";
import "../firebase/clientApp";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
