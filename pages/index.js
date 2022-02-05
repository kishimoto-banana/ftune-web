import format from "date-fns/format";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import FormContainer from "../components/FormContainer";
import Modal from "../components/Modal";
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

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-4">
        {loadingUser ? (
          <>
            <RegisteredInfoContainer /> <TodayFortuneContainer />
          </>
        ) : user.birthday ? (
          <>
            <RegisteredInfoContainer birthday={user.birthday} />{" "}
            <button
              onClick={() => setShowModal(true)}
              className="pb-1 text-sm text-blue-500 hover:text-blue-600"
            >
              <div className="flex flex-row justify-center items-center gap-0.5">
                生年月日を変更する
                <FiArrowRight />
              </div>
            </button>
            {showModal && <Modal setShowModal={setShowModal} />}
            <TodayFortuneContainer />
            <div className="my-10">
              <UranaiListContainer />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center pt-4">
              <p className="text-xl">生年月日を入力すると</p>
              <p className="text-xl">あなたへの占いが表示されます</p>

              <FormContainer />
            </div>
            <div className="mt-5 mb-10">
              <RankingList ranking={ranking} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
