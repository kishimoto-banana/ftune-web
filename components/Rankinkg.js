import format from "date-fns/format";
import ja from "date-fns/locale/ja";
import Link from "next/link";
import { ASTRO_EN_JA } from "../lib/constants";
import Stars from "./Stars";

const Ranking = ({ ranking }) => {
  const formattedToday = format(new Date(), "M月d日", { locale: ja });
  return (
    <div>
      <h3 className="font-medium pb-2 text-xl">
        {formattedToday}の運勢ランキング
      </h3>
      {ranking.length ? (
        ranking.map((item, index) => (
          <Link href={`/${item.sign}`} key={index}>
            <a className="md:px-5 flex flex-col md:flex-row items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-0.5">
              <div className="flex flex-row justify-center items-center">
                <p className="pr-3 text-2xl font-bold">{index + 1}</p>
                <img
                  className="object-contain h-20 w-20"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {ASTRO_EN_JA[item.sign]}
                  </h5>
                  <Stars score={item.score} size={20} />
                </div>
              </div>

              <div className="flex flex-row gap-0.5">
                {item.keywords.map((keyword, index) => (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={keyword + index.toString()}
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </a>
          </Link>
        ))
      ) : (
        <p>分析中です</p>
      )}
    </div>
  );
};

export default Ranking;
