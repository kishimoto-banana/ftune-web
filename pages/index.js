import { format, parse } from "date-fns";
import ja from "date-fns/locale/ja";
import Head from "next/head";
import { useEffect } from "react";
import useSWR from "swr";
import Card from "../components/Card";
import { getUranais } from "../firebase/firestore";

// export async function getServerSideProps() {
//   const uranais = await getUranais("20220126", "scorpio");
//   return { props: { uranais } };
// }

const fetchUranais = async (user) => {
  const fetchedUranais = getUranais("20220126", user.sign);
  return fetchedUranais;
};

export default function Home() {
  const { loadingUser, user } = useUser();

  useEffect(() => {
    if (!loadingUser) {
      console.log(user);
    }
  }, [loadingUser, user]);

  const { data } = useSWR(user, fetchUranais);
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <div class="p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {data.map((uranai, index) => {
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
