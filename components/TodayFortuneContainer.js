import { format } from "date-fns";
import React from "react";
import useSWR from "swr";
import { useUser } from "../context/userContext";
import { getAnalyzed } from "../fetchData/clientApp";
import Loading from "./Loading";
import TodayFortune from "./TodayFortune";

const fetchAnalyze = async (key, user) => {
  const today = format(new Date(), "yyyyMMdd");
  const fetchedAnalyze = getAnalyzed(today, user.sign);
  return fetchedAnalyze;
};

const TodayFortuneContainer = () => {
  const { loadingUser, user } = useUser();

  const { data } = useSWR(["/firestore/analyzed_uranais", user], fetchAnalyze);
  console.log(data);
  return (
    <div>
      {data ? (
        <TodayFortune keywords={data.keywords} score={data.score} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TodayFortuneContainer;
