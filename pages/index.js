import Head from "next/head";
import FormContainer from "../components/FormContainer";
import UranaiListContainer from "../components/UranaiListContainer";
import Navigation from "../components/Navigation";

// export async function getServerSideProps() {
//   const uranais = await getUranais("20220126", "scorpio");
//   return { props: { uranais } };
// }

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 text-center">
        <FormContainer />
        <UranaiListContainer />
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
