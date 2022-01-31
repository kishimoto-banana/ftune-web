import Head from "next/head";
import Navigation from "../../components/Navigation";

export const getServerSideProps = async ({ query }) => {
  return {
    props: { ...query },
  };
};

const Uranai = ({ title, media, url, body, imageUrl }) => {
  console.log(title);
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 text-center">
        <img
          className="rounded-t-lg  object-contain h-48 w-full pt-2"
          src={imageUrl}
          alt=""
        />
        <p>{title}</p>
        <p>{media}</p>
        <p className="px-10">{body}</p>
        <a href={url}>元の占いを読む</a>
      </main>
    </div>
  );
};

export default Uranai;
