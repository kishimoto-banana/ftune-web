import { FREQ_EN_JA, TYPE_EN_JA } from "../lib/constants";

const Card = ({ title, media, body, frequency, type, date, imageUrl }) => {
  return (
    <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg object-cover h-32 w-96"
          src={imageUrl}
          alt=""
        />
      </a>
      <div class="p-2">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p class="p-1 text-sm text-left font-normal text-gray-400 dark:text-gray-400">
          {media}
        </p>
        <p class="truncate mb-1 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <p class="p-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {date}
        </p>
        <div class="px-6 pt-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{FREQ_EN_JA[frequency]}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{TYPE_EN_JA[type]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
