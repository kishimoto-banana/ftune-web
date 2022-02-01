import format from "date-fns/format";
import ja from "date-fns/locale/ja";
import RegisteredInfo from "./RegisteredInfo";

const RegisteredInfoContainer = ({ birthday }) => {
  const formatedBirthday = format(birthday, "yyyy年M月d日", { locale: ja });

  return <RegisteredInfo birthday={formatedBirthday} />;
};

export default RegisteredInfoContainer;
