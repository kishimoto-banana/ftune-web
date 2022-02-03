import format from "date-fns/format";
import ja from "date-fns/locale/ja";
import Starts from "./Stars";

const TodayFortune = ({ keywords, score }) => {
  const formattedToday = format(new Date(), "M月d日", { locale: ja });
  return (
    <div className="flex flex-col justify-center items-center bg-rose-100 rounded-lg border p-5 md:px-10 md:pt-2 md:pb-5 mt-2">
      <h3 className="font-medium pb-4 text-xl">{formattedToday}の運勢</h3>
      <Starts score={score} />
      <div className="flex flex-row pt-2">
        {keywords.map((keyword, index) => (
          <span
            className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={index}
          >
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TodayFortune;
