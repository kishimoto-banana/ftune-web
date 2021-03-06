import format from "date-fns/format";
import Head from "next/head";
import UranaiList from "../components/UranaiList";
import { getUranais } from "../fetchData/nodeApp";
import { ASTRO_EN_JA } from "../lib/constants";

export const getServerSideProps = async ({ params }) => {
  const { sign } = params;
  if (!(sign in ASTRO_EN_JA)) {
    return {
      notFound: true,
    };
  }
  const today = format(new Date(), "yyyyMMdd");
  const uranais = await getUranais(today, sign);
  return {
    props: { sign: sign, uranais: uranais },
  };
};

const signSpecificUranai = ({ sign, uranais }) => {
  return (
    <div>
      <Head>
        <title>{ASTRO_EN_JA[sign]}の占い</title>
      </Head>

      <h2 className="text-xl pt-4">{ASTRO_EN_JA[sign]}の占い</h2>
      <div className="mt-4 mb-10">
        <UranaiList uranais={uranais} />
      </div>
    </div>
  );
};

export default signSpecificUranai;
