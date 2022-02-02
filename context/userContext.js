import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { registerUser } from "../fetchData/clientApp";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  const handleUser = async (uid) => {
    const firestore = getFirestore();
    const docRef = doc(firestore, "users", uid);
    const userDoc = await getDoc(docRef);

    if (!userDoc.exists()) {
      console.log("userDoc無し");
      await registerUser({ id: uid });
      setUser({ id: uid });
    } else {
      console.log("userDoc有り");
      const signedUser = {
        id: uid,
        ...userDoc.data(),
      };
      if (signedUser.birthday) {
        signedUser.birthday = signedUser.birthday.toDate();
      }
      console.log("setuser前", signedUser);
      setUser(signedUser);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          console.log("認証済パターン");
          const { uid } = user;
          await handleUser(uid);
        } else {
          console.log("signInAnonymouslyのパターン");
          signInAnonymously(auth)
            .then(async (result) => {
              console.log("signInAnonymouslyの内部", result);
              const { uid } = result.user;
              await handleUser(uid);
            })
            .catch((error) => {
              console.log("signInAnonymouslyのエラー");
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        }
      } catch (error) {
        console.log("err", error);
      } finally {
        setLoadingUser(false);
      }
    });
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
