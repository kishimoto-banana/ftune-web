import format from "date-fns/format";
import Head from "next/head";
import Navigation from "../components/Navigation";
import UranaiList from "../components/UranaiList";
import { getUranai } from "../fetchData/nodeApp";

export const getServerSideProps = async ({ params }) => {
  const { sign } = params;
  const today = format(new Date(), "yyyyMMdd");
  const uranais = await getUranai(today, sign);
  return {
    props: { uranais: uranais },
  };
};

const signSpecificUranai = ({ uranais }) => {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 text-center">
        <UranaiList uranais={uranais} />
      </main>
    </div>
  );
};

export default signSpecificUranai;
