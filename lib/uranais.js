import admin from "../firebase/nodeApp";

export const getUranais = async (date, sign) => {
  const db = admin.firestore();

  const collectionRef = db.collection("uranais").doc(date).collection(sign);
  const snapshot = await collectionRef.orderBy("created_at", "desc").get();

  const uranais = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const uranaisSplitted = uranais.map((uranai) => {
    const media_title = uranai.title.split("-");
    const media = media_title[0].trim();
    const title = media_title[1].trim();

    const createdAt = JSON.parse(JSON.stringify(uranai.created_at.toDate()));
    return {
      ...uranai,
      titleWithoutMedia: title,
      media: media,
      created_at: createdAt,
    };
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

  return uranaisExistBody;
};
