import Head from "next/head";
import Navigation from "../components/Navigation";

// export async function getServerSideProps() {
//   const uranais = await getUranais("20220126", "scorpio");
//   return { props: { uranais } };
// }

const About = () => {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 pt-4 text-center">
        <p>Ftuneとはね…!?!?!?????!??!!!?</p>
      </main>
    </div>
  );
};

export default About;
