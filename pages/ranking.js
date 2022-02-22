import { formatToTimeZone } from "date-fns-timezone";
import Head from "next/head";
import RankingList from "../components/Rankinkg";
import { getAnalyzedUranai } from "../fetchData/nodeApp";

export async function getServerSideProps() {
  const today = formatToTimeZone(new Date(), "YYYYMMDD", {
    timeZone: "Asia/Tokyo",
  });

  const analyzedUranais = await getAnalyzedUranai(today);
  const ranking = analyzedUranais.sort((a, b) => b.score - a.score);
  return { props: { ranking } };
}

const Ranking = ({ ranking }) => {
  return (
    <div>
      <Head>
        <title>運勢ランキング</title>
      </Head>
      <div className="pt-4">
        <RankingList ranking={ranking} />
      </div>
    </div>
  );
};

export default Ranking;
