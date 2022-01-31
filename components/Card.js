import Link from "next/link";
import { FREQ_EN_JA, TYPE_EN_JA } from "../lib/constants";

const Card = ({
  id,
  title,
  url,
  media,
  body,
  frequency,
  type,
  date,
  imageUrl,
}) => {
  return (
    <Link
      href={{
        pathname: `/uranai/${id}`,
        query: {
          title: title,
          media: media,
          url: url,
          body: body,
          imageUrl: imageUrl,
        },
      }}
      as={`/uranai/${id}`}
    >
      <a>
        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg object-cover h-32 w-96"
            src={imageUrl}
            alt=""
          />
          <div className="p-2">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p className="p-1 text-sm text-left font-normal text-gray-400 dark:text-gray-400">
              {media}
            </p>
            <p className="truncate mb-1 font-normal text-gray-700 dark:text-gray-400">
              {body}
            </p>
            <p className="p-1 text-sm font-normal text-gray-700 dark:text-gray-400">
              {date}
            </p>
            <div className="px-6 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{FREQ_EN_JA[frequency]}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{TYPE_EN_JA[type]}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
