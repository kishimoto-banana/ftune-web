import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

const firestore = getFirestore();

export const getUranais = async (date, sign) => {
  const collectionRef = collection(firestore, "uranais", date, sign);
  const q = query(collectionRef, orderBy("created_at", "desc"));
  const querySnapshot = await getDocs(q);

  const uranais = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    sign: sign,
    fetchDate: date,
    ...doc.data(),
  }));

  const uranaisSplitted = uranais.map((uranai) => {
    const media_title = uranai.title.split("-");
    const media = media_title[0].trim();
    const title = media_title[1].trim();
    return { ...uranai, titleWithoutMedia: title, media: media };
  });

  const uranaisExistBody = uranaisSplitted.filter((uranai) => {
    return uranai.body !== "";
  });
  return uranaisExistBody;
};

export const getAnalyzed = async (date, sign) => {
  const ref = doc(firestore, "analyzed_uranais", `${date}_${sign}`);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    return null;
  }
  return snapshot.data();
};

export const registerUser = async (user) => {
  const { id, forceFetch, ...userExId } = user;
  const registerUser = { ...userExId, ...initialUser };
  await setDoc(doc(firestore, "users", id), registerUser);
  return { id: id, forceFetch: forceFetch, ...registerUser };
};

export const updateUser = async (userId, params) => {
  const docRef = doc(firestore, "users", userId);
  await updateDoc(docRef, { ...params, updatedAt: Timestamp.now() });
};

export const getSign = async (date) => {
  const docRef = doc(firestore, "date_to_sign", `${date}`);
  const snapshot = await getDoc(docRef);
  return snapshot.data().sign;
};

const initialUser = {
  name: "",
  updatedAt: Timestamp.now(),
  createdAt: Timestamp.now(),
};
