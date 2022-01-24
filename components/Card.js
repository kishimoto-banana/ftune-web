import { FREQ_EN_JA } from "../lib/constants";

const Card = ({ title, media, body, frequency, date, imageUrl }) => {
  return (
    <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg object-cover h-40 w-80"
          src={imageUrl}
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p class="p-1 text-sm text-left font-normal text-gray-400 dark:text-gray-400">
          {media}
        </p>
        <p class="truncate mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <p class="p-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {FREQ_EN_JA[frequency]}
        </p>
        <p class="p-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {date}
        </p>
      </div>
    </div>
  );
};

export default Card;
