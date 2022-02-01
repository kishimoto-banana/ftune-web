import format from "date-fns/format";
import Head from "next/head";
import FormContainer from "../components/FormContainer";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import RankingList from "../components/Rankinkg";
import UranaiListContainer from "../components/UranaiListContainer";
import { useUser } from "../context/userContext";
import { getAnalyzedUranai } from "../fetchData/nodeApp";

export async function getServerSideProps() {
  const today = format(new Date(), "yyyyMMdd");
  const analyzedUranais = await getAnalyzedUranai(today);
  const ranking = analyzedUranais.sort((a, b) => b.score - a.score);
  return { props: { ranking } };
}

export default function Home({ ranking }) {
  const { user, loadingUser } = useUser();

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 text-center">
        <FormContainer />
        {loadingUser ? (
          <Loading />
        ) : user.birthday && user.gender ? (
          <UranaiListContainer />
        ) : (
          <RankingList ranking={ranking} />
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="flex items-center justify-center">2022 &copy; bootch</p>
      </footer>
    </div>
  );
}
