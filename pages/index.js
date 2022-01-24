import Head from "next/head";
import Card from "../components/Card";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useEffect, useState } from "react";
import { getUranais } from "../firebase/firestore";
import { format, parse } from "date-fns";
import ja from "date-fns/locale/ja";

export default function Home() {
  const [uranais, setUranais] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    signInAnonymously(auth);
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const fetchedUranais = await getUranais("20220124", "aries");
    setUranais(fetchedUranais);
  };

  console.log(uranais);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {uranais.map((uranai, index) => {
            const visualDate =
              typeof uranai.from_date === "undefined"
                ? format(parse(uranai.date, "yyyyMMdd", new Date()), "M月d日", {
                    locale: ja,
                  })
                : `${format(
                    parse(uranai.from_date, "yyyyMMdd", new Date()),
                    "M月d日",
                    {
                      locale: ja,
                    }
                  )} - ${format(
                    parse(uranai.to_date, "yyyyMMdd", new Date()),
                    "M月d日",
                    {
                      locale: ja,
                    }
                  )}`;
            return (
              <Card
                title={uranai.titleWithoutMedia}
                media={uranai.media}
                body={uranai.body}
                frequency={uranai.frequency}
                date={visualDate}
                imageUrl={uranai.imageUrl}
                key={index}
              />
            );
          })}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
