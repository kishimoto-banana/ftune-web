import "../styles/globals.css";
import "../firebase/clientApp";
import UserProvider from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
