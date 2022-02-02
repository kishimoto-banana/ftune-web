import { format, parse } from "date-fns";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { getSign, updateUser } from "../fetchData/clientApp";
import Form from "./Form";

const FormContainer = ({ setShowModal }) => {
  const { user, setUser, loadingUser } = useUser();

  const [year, setYear] = useState(1980);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  useEffect(() => {
    if (!loadingUser && user.birthday) {
      const birthYear = user.birthday.getFullYear();
      const birthMonth = user.birthday.getMonth() + 1;
      const birthDate = user.birthday.getDate();

      setYear(birthYear);
      setMonth(birthMonth);
      setDay(birthDate);
    }
  }, [loadingUser, user]);

  const handleFormConfirm = async () => {
    setShowModal && setShowModal(false);

    const birthdayStr =
      year.toString() +
      month.toString().padStart(2, "0") +
      day.toString().padStart(2, "0");
    console.log(birthdayStr);
    const ParsedBirthday = parse(birthdayStr, "yyyyMMdd", new Date());
    console.log(ParsedBirthday);
    const formatDate = format(ParsedBirthday, "MMdd");
    const sign = await getSign(formatDate);
    const updateParams = {
      birthday: ParsedBirthday,
      sign: sign,
      gender: "無回答",
    };
    await updateUser(user.id, updateParams);
    setUser({ ...user, ...updateParams });
  };

  const handleYear = (e) => {
    setYear(e.target.value);
    setMonth(1);
    setDay(1);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
    setDay(1);
  };

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  return (
    <Form
      year={year}
      handleYear={handleYear}
      month={month}
      handleMonth={handleMonth}
      day={day}
      handleDay={handleDay}
      handleFormConfirm={handleFormConfirm}
    />
  );
};

export default FormContainer;
