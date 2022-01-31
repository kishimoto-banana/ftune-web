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
