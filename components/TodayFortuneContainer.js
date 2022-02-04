import { format } from "date-fns";
import React from "react";
import useSWR from "swr";
import { useUser } from "../context/userContext";
import { getAnalyzed } from "../fetchData/clientApp";
import TodayFortune from "./TodayFortune";

const fetchAnalyze = async (key, user) => {
  const today = format(new Date(), "yyyyMMdd");
  const fetchedAnalyze = getAnalyzed(today, user.sign);
  return fetchedAnalyze;
};

const TodayFortuneContainer = () => {
  const { user } = useUser();

  const { data } = useSWR(["/firestore/analyzed_uranais", user], fetchAnalyze);
  return (
    <div>
      <TodayFortune
        keywords={data ? data.keywords : null}
        score={data ? data.score : null}
        loading={typeof data === "undefined" ? true : false}
      />
    </div>
  );
};

export default TodayFortuneContainer;
