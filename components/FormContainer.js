import { format, parse } from "date-fns";
import isValid from "date-fns/isValid";
import { useState } from "react";
import { useUser } from "../context/userContext";
import { getSign, updateUser } from "../firebase/firestore";
import Form from "./Form";

const initialGender = "女性";

const FormContainer = () => {
  const { user, setUser } = useUser();

  const [birthday, setBirthday] = useState(
    user.birthday ? format(user.birthday, "yyyy-MM-dd") : null
  );
  const [gender, setGender] = useState(
    user.gender ? user.gender : initialGender
  );

  const [inValidBirthDay, setInValidBirthDay] = useState(false);

  const handleFormConfirm = async () => {
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
      gender: gender,
      sign: sign,
    };
    await updateUser(user.id, updateParams);
    setUser({ ...user, ...updateParams });
    setInValidBirthDay(false);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <Form
      birthday={birthday}
      handleBirthdayChange={handleBirthdayChange}
      gender={gender}
      handleGenderChange={handleGenderChange}
      handleFormConfirm={handleFormConfirm}
      setInValidBirthDay={setInValidBirthDay}
      inValidBirthDay={inValidBirthDay}
    />
  );
};

export default FormContainer;
