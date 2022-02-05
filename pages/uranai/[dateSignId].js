import { format, parse } from "date-fns";
import ja from "date-fns/locale/ja";
import Head from "next/head";
import { FiExternalLink } from "react-icons/fi";
import { getUranai } from "../../fetchData/nodeApp";
import { ASTRO_EN_JA } from "../../lib/constants";

export const getServerSideProps = async ({ query }) => {
  if (query.title) {
    return {
      props: { ...query },
    };
  }

  // ルーティング以外でリクエスト（更新や前のページからのブラウザバック）
  const dateSignId = query.dateSignId.split("-");
  const date = dateSignId[0];
  const sign = dateSignId[1];
  const id = dateSignId[2];
  const uranai = await getUranai(date, sign, id);
  const visualDate =
    typeof uranai.from_date === "undefined"
      ? format(parse(uranai.date, "yyyyMMdd", new Date()), "M月d日", {
          locale: ja,
        })
      : `${format(parse(uranai.from_date, "yyyyMMdd", new Date()), "M月d日", {
          locale: ja,
        })} - ${format(
          parse(uranai.to_date, "yyyyMMdd", new Date()),
          "M月d日",
          {
            locale: ja,
          }
        )}`;
  return {
    props: {
      title: uranai.titleWithoutMedia,
      media: uranai.media,
      url: uranai.url,
      body: uranai.body,
      imageUrl: uranai.imageUrl,
      date: visualDate,
      sign: sign,
    },
  };
};

const Uranai = ({ title, media, url, body, imageUrl, date, sign }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="pt-4 px-12 max-w-uranaiArticle">
        <img
          className="rounded-t-lg object-contain h-36 w-full"
          src={imageUrl}
          alt=""
        />
        <h2 className="pt-2 text-lg md:text-xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-sm md:text-md text-left font-normal text-gray-400">
          {media}
        </p>
        <p className="text-sm md:text-md text-left font-normal text-gray-400">
          {date}
        </p>
        <p className="text-sm md:text-md text-left font-normal text-gray-400">
          {ASTRO_EN_JA[sign]}
        </p>
        <p className="pt-3 tracking-normal leading-relaxed text-justify line-clamp-6 md:line-clamp-3">
          {body}
        </p>

        <div className="mt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-pink-500 hover:text-pink-600"
          >
            <div className="flex flex-row justify-center items-center gap-0.5">
              <p>続きを読む</p>
              <FiExternalLink />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Uranai;
