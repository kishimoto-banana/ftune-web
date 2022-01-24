import "../styles/globals.css";
import "../firebase/init";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
