import { format, parse } from "date-fns";
import isValid from "date-fns/isValid";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { getSign, updateUser } from "../fetchData/clientApp";
import Form from "./Form";

const FormContainer = ({ setShowModal }) => {
  const { user, setUser, loadingUser } = useUser();

  const [birthday, setBirthday] = useState();
  const [inValidBirthDay, setInValidBirthDay] = useState(false);

  useEffect(() => {
    if (!loadingUser && user.birthday) {
      setBirthday(format(user.birthday, "yyyy-MM-dd"));
    }
  }, [loadingUser, user]);

  const handleFormConfirm = async () => {
    setShowModal && setShowModal(false);

    const ParsedBirthday = parse(birthday, "yyyy-MM-dd", new Date());
    const isBirthDayValid = isValid(ParsedBirthday);
    if (!isBirthDayValid) {
      setInValidBirthDay(true);
      return;
    }
    const formatDate = format(ParsedBirthday, "MMdd");
    const sign = await getSign(formatDate);
    const updateParams = {
      birthday: ParsedBirthday,
      sign: sign,
      gender: "無回答",
    };
    await updateUser(user.id, updateParams);
    setUser({ ...user, ...updateParams });
    setInValidBirthDay(false);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  return (
    <Form
      birthday={birthday}
      handleBirthdayChange={handleBirthdayChange}
      handleFormConfirm={handleFormConfirm}
      setInValidBirthDay={setInValidBirthDay}
      inValidBirthDay={inValidBirthDay}
    />
  );
};

export default FormContainer;
