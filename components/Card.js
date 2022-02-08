import { FREQ_EN_JA, TYPE_EN_JA } from "../lib/constants";

const Card = ({
  id,
  title,
  url,
  media,
  body,
  frequency,
  sign,
  type,
  date,
  fetchDate,
  imageUrl,
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="max-w-uranaiCard bg-white rounded-lg border border-gray-200 shadow-md">
        <img
          className="rounded-t-lg object-cover h-24 md:h-32 w-full"
          src={imageUrl}
          alt=""
        />
        <div className="p-2 md:p-4">
          <h5 className="text-sm md:text-lg font-bold truncate text-gray-900">
            {title}
          </h5>
          <p className="text-xs md:text-sm text-left font-normal text-gray-400">
            {media}
          </p>

          <p className="pt-1 text-sm md:text-md truncate mb-1 font-normal text-gray-700">
            {body}
          </p>

          <p className="pt-2 text-xs md:text-sm text-left font-normal text-gray-700">
            {date}
          </p>
          <div className="pt-1">
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-1">
              #{FREQ_EN_JA[frequency]}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm font-semibold text-gray-700">
              #{TYPE_EN_JA[type]}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
