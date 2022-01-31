import Head from "next/head";
import Navigation from "../components/Navigation";
import { getUranai } from "../fetchData/nodeApp";
import UranaiList from "../components/UranaiList";

export const getServerSideProps = async ({ params }) => {
  const { sign } = params;
  const uranais = await getUranai("20220126", sign);
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
