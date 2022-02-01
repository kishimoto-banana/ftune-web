import format from "date-fns/format";
import Head from "next/head";
import { useState } from "react";
import FormContainer from "../components/FormContainer";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import Navigation from "../components/Navigation";
import RankingList from "../components/Rankinkg";
import RegisteredInfoContainer from "../components/RegisteredInfoContainer";
import UranaiListContainer from "../components/UranaiListContainer";
import { useUser } from "../context/userContext";
import { getAnalyzedUranai } from "../fetchData/nodeApp";
import TodayFortuneContainer from "../components/TodayFortuneContainer";

export async function getServerSideProps() {
  const today = format(new Date(), "yyyyMMdd");
  const analyzedUranais = await getAnalyzedUranai(today);
  const ranking = analyzedUranais.sort((a, b) => b.score - a.score);
  return { props: { ranking } };
}

export default function Home({ ranking }) {
  const { user, loadingUser } = useUser();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 px-10 text-center">
        {!loadingUser && user.birthday ? (
          <div>
            <RegisteredInfoContainer birthday={user.birthday} />
            <button
              className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setShowModal(true)}
            >
              生年月日を変更する
            </button>
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
          </div>
        ) : (
          <div>
            <p>生年月日を入力するとあなたへの占いが表示されます</p>
            <FormContainer />
          </div>
        )}

        <TodayFortuneContainer />

        {loadingUser ? (
          <Loading />
        ) : user.birthday ? (
          <>
            <UranaiListContainer />
          </>
        ) : (
          <RankingList ranking={ranking} />
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="flex items-center justify-center">2022 &copy; bootch</p>
      </footer>
    </div>
  );
}
