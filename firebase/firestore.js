import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import {
  addDoc,
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
  enableMultiTabIndexedDbPersistence,
} from "firebase/firestore";

const firestore = getFirestore();
enableMultiTabIndexedDbPersistence(firestore);

const ImageUrlBase = "https://d173y4sbgdpniu.cloudfront.net";

const _getUranais = async (date, sign, previousFetchedAt) => {
  const collectionRef = collection(firestore, "uranais", date, sign);
  const q = query(collectionRef, orderBy("created_at", "desc"));
  const querySnapshot = await getDocs(q);

  const uranais = querySnapshot.docs.map((doc) => ({
    id: doc.id,
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
  //   if ("title" in uranai) {
  //     return uranai;
  //   } else {
  //     return { ...uranai, title: "仮メディア - 仮タイトル" };
  //   }
  // });

  if (previousFetchedAt) {
    const uranais_with_new_label = uranaisExistBody.map((uranai) => {
      if (uranai.created_at.toDate() > previousFetchedAt) {
        return { ...uranai, isNew: true };
      } else {
        return uranai;
      }
    });
    return uranais_with_new_label;
  }

  return uranaisExistBody;
};

export const getUranais = async (date, sign, previousFetchedAt, forceFetch) => {
  if (forceFetch) {
    // 強制取得（初回、都度起動時、プロフィール変更時）
    // 都度起動のみ previousFetchedAt が効く想定
    return _getUranais(date, sign, previousFetchedAt);
  }

  if (previousFetchedAt) {
    // リフレッシュ時
    const infoRef = doc(firestore, "uranais", "info");
    const infoSnapshot = await getDoc(infoRef);
    const lastUranaiUpdatedAt = infoSnapshot.data().lastUpdatedAt;

    if (lastUranaiUpdatedAt.toDate() > previousFetchedAt) {
      // 前回の記事取得時より新しい記事があった場合のみ記事取得
      return _getUranais(date, sign, previousFetchedAt);
    }
    // リフレッシュしたけど新しい記事がない場合は空（呼び出し元で isNew ラベルを外す）
    return;
  }
  // 各星座の初回アクセス
  return _getUranais(date, sign);
};

export const getAnalyzed = async (date, sign) => {
  const ref = doc(firestore, "analyzed_uranais", `${date}_${sign}`);
  const snapshot = await getDoc(ref);
  if (snapshot.exists()) {
    return snapshot.data();
  }
};

export const getAnalyzedAllSign = async (date) => {
  const docRef = doc(firestore, "analyzed_uranais", `${date}`);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    const data = snapshot.data();

    const analyzedUranais = data.analyzed.map((analyzed) => {
      const imageUrl = `${ImageUrlBase}/default/${analyzed.sign}.png`;
      return {
        imageUrl: imageUrl,
        ...analyzed,
      };
    });

    return analyzedUranais;
  }
};

export const signIn = async (setUser) => {
  const auth = getAuth();
};

export const getUser = async (userId) => {
  const docRef = doc(firestore, "users", userId);
  const userDoc = await getDoc(docRef);

  if (!userDoc.exists()) {
    return null;
  }
  return {
    id: userId,
    ...userDoc.data(),
  };
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

export const createRequest = async (userId, body) => {
  await addDoc(collection(firestore, "requests"), {
    userId: userId,
    body: body,
    createdAt: Timestamp.now(),
  });
};

export const getGoodDay = async () => {
  const docRef = doc(firestore, "gooddays", "p938qX4dCq4laKvkMzcA");
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

const initialUser = {
  name: "",
  updatedAt: Timestamp.now(),
  createdAt: Timestamp.now(),
};
