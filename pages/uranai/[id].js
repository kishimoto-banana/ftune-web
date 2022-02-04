import Head from "next/head";

export const getServerSideProps = async ({ query }) => {
  return {
    props: { ...query },
  };
};

const Uranai = ({ title, media, url, body, imageUrl }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <img
        className="rounded-t-lg  object-contain h-48 w-full pt-2"
        src={imageUrl}
        alt=""
      />
      <p>{title}</p>
      <p>{media}</p>
      <p className="px-10">{body}</p>
      <a href={url}>元の占いを読む</a>
    </div>
  );
};

export default Uranai;
