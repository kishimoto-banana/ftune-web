import { format, parse } from "date-fns";
import ja from "date-fns/locale/ja";
import Card from "../components/Card";

const UranaiList = ({ uranais }) => {
  return (
    <div className="p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      {uranais.map((uranai, index) => {
        const visualDate =
          typeof uranai.from_date === "undefined"
            ? format(parse(uranai.date, "yyyyMMdd", new Date()), "M月d日", {
                locale: ja,
              })
            : `${format(
                parse(uranai.from_date, "yyyyMMdd", new Date()),
                "M月d日",
                {
                  locale: ja,
                }
              )} - ${format(
                parse(uranai.to_date, "yyyyMMdd", new Date()),
                "M月d日",
                {
                  locale: ja,
                }
              )}`;
        return (
          <Card
            id={uranai.id}
            title={uranai.titleWithoutMedia}
            media={uranai.media}
            url={uranai.url}
            body={uranai.body}
            frequency={uranai.frequency}
            type={uranai.type}
            date={visualDate}
            imageUrl={uranai.imageUrl}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default UranaiList;
