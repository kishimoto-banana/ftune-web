import admin from "../firebase/nodeApp";

const db = admin.firestore();
const ImageUrlBase = "https://d173y4sbgdpniu.cloudfront.net";

export const getAnalyzedUranai = async (date) => {
  const docRef = db.collection("analyzed_uranais");
  const snapshot = await docRef.doc(date).get();

  if (!snapshot.exists) {
    return [];
  }
  const data = snapshot.data();

  const analyzedUranais = data.analyzed.map((analyzed) => {
    const imageUrl = `${ImageUrlBase}/default/${analyzed.sign}.png`;
    return {
      imageUrl: imageUrl,
      ...analyzed,
    };
  });
  return analyzedUranais;
};

export const getUranais = async (date, sign) => {
  const collectionRef = db.collection("uranais").doc(date).collection(sign);
  const snapshot = await collectionRef.orderBy("created_at", "desc").get();

  if (!snapshot.empty) {
    const uranais = snapshot.docs.map((doc) => {
      const uranai = doc.data();
      const createdAt = JSON.parse(JSON.stringify(uranai.created_at.toDate()));
      return {
        id: doc.id,
        ...doc.data(),
        created_at: createdAt,
      };
    });

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
  }
};

export const getUranai = async (date, sign, id) => {
  const docRef = db.collection("uranais").doc(date).collection(sign).doc(id);
  const snapshot = await docRef.get();

  if (!snapshot.empty) {
    const uranai = snapshot.data();
    const createdAt = JSON.parse(JSON.stringify(uranai.created_at.toDate()));

    const media_title = uranai.title.split("-");
    const media = media_title[0].trim();
    const title = media_title[1].trim();

    return {
      id: id,
      ...uranai,
      created_at: createdAt,
      titleWithoutMedia: title,
      media: media,
    };
  }
};
