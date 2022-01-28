import React, { useEffect } from "react";
import useSWR from "swr";
import { useUser } from "../context/userContext";
import { getUranais } from "../firebase/firestore";
import Loading from "./Loading";
import UranaiList from "./UranaiList";

const fetchUranais = async (user) => {
  //　TODO: user情報ないときは全星座取得
  const fetchedUranais = getUranais(
    "20220126",
    user.sign ? user.sign : "aries"
  );
  return fetchedUranais;
};

const UranaiListContainer = () => {
  const { loadingUser, user } = useUser();

  useEffect(() => {
    if (!loadingUser) {
      console.log(user);
    }
  }, [loadingUser, user]);

  const { data } = useSWR(user, fetchUranais);

  return <div>{data ? <UranaiList uranais={data} /> : <Loading />}</div>;
};

export default UranaiListContainer;
