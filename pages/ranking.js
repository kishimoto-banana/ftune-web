import format from "date-fns/format";
import Head from "next/head";
import Navigation from "../components/Navigation";
import RankingList from "../components/Rankinkg";
import { getAnalyzedUranai } from "../fetchData/nodeApp";

export async function getServerSideProps() {
  const today = format(new Date(), "yyyyMMdd");
  const analyzedUranais = await getAnalyzedUranai(today);
  const ranking = analyzedUranais.sort((a, b) => b.score - a.score);
  return { props: { ranking } };
}

const Ranking = ({ ranking }) => {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 text-center">
        <RankingList ranking={ranking} />
      </main>
    </div>
  );
};

export default Ranking;
