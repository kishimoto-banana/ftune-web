import { format, parse } from "date-fns";
import ja from "date-fns/locale/ja";
import { getAuth, signInAnonymously } from "firebase/auth";
import Head from "next/head";
import { useEffect } from "react";
import Card from "../components/Card";
import { getUranais } from "../lib/uranais";

export async function getStaticProps() {
  const uranais = await getUranais("20220125", "aries");
  return { props: { uranais } };
}

export default function Home({ uranais }) {
  // useEffect(() => {
  //   const auth = getAuth();
  //   signInAnonymously(auth);
  // }, []);

  console.log("uranais");
  console.log(uranais);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div class="p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3">
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
                type={uranai.type}
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
