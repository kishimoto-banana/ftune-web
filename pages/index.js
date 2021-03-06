import { formatToTimeZone } from "date-fns-timezone";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import FormContainer from "../components/FormContainer";
import Modal from "../components/Modal";
import RankingList from "../components/Rankinkg";
import TodayFortuneContainer from "../components/TodayFortuneContainer";
import UranaiListContainer from "../components/UranaiListContainer";
import { useUser } from "../context/userContext";
import { getAnalyzedUranai } from "../fetchData/nodeApp";

export async function getServerSideProps() {
  const today = formatToTimeZone(new Date(), "YYYYMMDD", {
    timeZone: "Asia/Tokyo",
  });
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
            <TodayFortuneContainer />
            <div className="mt-5 mb-10">
              <RankingList ranking={ranking} />
            </div>
          </>
        ) : user.birthday ? (
          <>
            <TodayFortuneContainer />
            <button
              onClick={() => setShowModal(true)}
              className="pb-1 text-sm text-pink-500 hover:text-pink-600"
            >
              <div className="flex flex-row justify-center items-center gap-0.5">
                生年月日を変更する
                <FiArrowRight />
              </div>
            </button>
            {showModal && <Modal setShowModal={setShowModal} />}
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
