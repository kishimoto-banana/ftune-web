import Head from "next/head";

// export async function getServerSideProps() {
//   const uranais = await getUranais("20220126", "scorpio");
//   return { props: { uranais } };
// }

const About = () => {
  return (
    <div>
      <Head>
        <title>Ftuneについて</title>
      </Head>
      <div className="pt-4">
        <p>Ftuneとはね…!?!?!?????!??!!!?</p>
      </div>
    </div>
  );
};

export default About;
