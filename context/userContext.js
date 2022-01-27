import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { registerUser } from "../firebase/firestore";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    const auth = getAuth();
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid } = user;
          const firestore = getFirestore();
          const docRef = doc(firestore, "users", uid);
          const userDoc = await getDoc(docRef);

          if (!userDoc.exists()) {
            registerUser({ id: uid });
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
        } else {
          setUser(null);
        }
      } catch (error) {
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
