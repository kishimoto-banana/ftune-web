import format from "date-fns/format";
import Head from "next/head";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import FormContainer from "../components/FormContainer";
import Modal from "../components/Modal";
import Navigation from "../components/Navigation";
import RankingList from "../components/Rankinkg";
import RegisteredInfoContainer from "../components/RegisteredInfoContainer";
import TodayFortuneContainer from "../components/TodayFortuneContainer";
import UranaiListContainer from "../components/UranaiListContainer";
import { useUser } from "../context/userContext";
import { getAnalyzedUranai } from "../fetchData/nodeApp";

export async function getServerSideProps() {
  const today = format(new Date(), "yyyyMMdd");
  const analyzedUranais = await getAnalyzedUranai(today);
  const ranking = analyzedUranais.sort((a, b) => b.score - a.score);
  return { props: { ranking } };
}

export default function Home({ ranking }) {
  const { user, loadingUser } = useUser();
  const [showModal, setShowModal] = useState(false);

  console.log(user);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full text-center">
        {!loadingUser && user.birthday ? (
          <div className="flex flex-col justify-center items-center pt-4">
            <RegisteredInfoContainer birthday={user.birthday} />
            <button
              onClick={() => setShowModal(true)}
              className="pb-1 ml-auto text-sm text-blue-500 hover:text-blue-600"
            >
              <div className="flex flex-row justify-center items-center gap-0.5">
                生年月日を変更する
                <FiArrowRight />
              </div>
            </button>
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center pt-4">
            <p className="text-justify text-xl">生年月日を入力すると</p>
            <p className="text-justify text-xl">あなたへの占いが表示されます</p>

            <FormContainer />
          </div>
        )}

        {loadingUser ? null : user.birthday ? (
          <>
            <TodayFortuneContainer />
            <UranaiListContainer />
          </>
        ) : (
          <div className="pt-5">
            <RankingList ranking={ranking} />
          </div>
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-12 mt-4 border-t">
        <p className="flex items-center justify-center">&copy; bootch</p>
      </footer>
    </div>
  );
}
