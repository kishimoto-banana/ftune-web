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
      await registerUser({ id: uid });
      setUser({ id: uid });
    } else {
      const signedUser = {
        id: uid,
        ...userDoc.data(),
      };
      if (signedUser.birthday) {
        signedUser.birthday = signedUser.birthday.toDate();
      }
      setUser(signedUser);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid } = user;
          await handleUser(uid);
          setLoadingUser(false);
        } else {
          signInAnonymously(auth);
        }
      } catch (error) {
      } finally {
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
