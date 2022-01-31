import admin from "../firebase/nodeApp";

const db = admin.firestore();
const ImageUrlBase = "https://d173y4sbgdpniu.cloudfront.net";

export const getAnalyzedUranai = async (date) => {
  const docRef = db.collection("analyzed_uranais");
  const snapshot = await docRef.doc(date).get();

  if (snapshot.exists) {
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

export const getUranai = async (date, sign) => {
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
    return uranais;
  }
};

// export const getAllSignUranai = async (date) => {
//   const docRef = db.collection("uranais").doc(date);
//   const snapshot = await docRef.get();
//   const collections = await docRef.listCollections();

//   const uransis = [];

//   collections.forEach(async (c) => {
//     const docs = await c.get();
//     docs.forEach((doc) => {
//       uransis.push({ id: doc.id, ...doc.data() });
//     });
//     // console.log(docs.data());
//   });

//   console.log(uransis);

//   if (snapshot.exists) {
//     return snapshot.data();
//   }
// };
