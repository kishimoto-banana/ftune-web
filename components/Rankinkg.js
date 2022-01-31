import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ranking = ({ ranking }) => {
  return (
    <div>
      {ranking.map((item) => (
        <a
          href="#"
          className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={item.imageUrl}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.sign}
            </h5>
            <div className="flex flex-row">
              {item.score >= 10 ? (
                <FaStar color="#ffca28" />
              ) : item.score >= 0 ? (
                <FaStarHalfAlt color="#ffca28" />
              ) : (
                <FaRegStar color="#ffca28" />
              )}
              {item.score >= 30 ? (
                <FaStar color="#ffca28" />
              ) : item.score >= 20 ? (
                <FaStarHalfAlt color="#ffca28" />
              ) : (
                <FaRegStar color="#ffca28" />
              )}
              {item.score >= 50 ? (
                <FaStar color="#ffca28" />
              ) : item.score >= 40 ? (
                <FaStarHalfAlt color="#ffca28" />
              ) : (
                <FaRegStar color="#ffca28" />
              )}
              {item.score >= 70 ? (
                <FaStar color="#ffca28" />
              ) : item.score >= 60 ? (
                <FaStarHalfAlt color="#ffca28" />
              ) : (
                <FaRegStar color="#ffca28" />
              )}
              {item.score >= 90 ? (
                <FaStar color="#ffca28" />
              ) : item.score >= 80 ? (
                <FaStarHalfAlt color="#ffca28" />
              ) : (
                <FaRegStar color="#ffca28" />
              )}
            </div>

            {item.keywords.map((keyword) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{keyword}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Ranking;
