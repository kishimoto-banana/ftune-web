import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const TodayFortune = ({ keywords, score }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
        {score >= 10 ? (
          <FaStar color="#ffca28" />
        ) : score >= 0 ? (
          <FaStarHalfAlt color="#ffca28" />
        ) : (
          <FaRegStar color="#ffca28" />
        )}
        {score >= 30 ? (
          <FaStar color="#ffca28" />
        ) : score >= 20 ? (
          <FaStarHalfAlt color="#ffca28" />
        ) : (
          <FaRegStar color="#ffca28" />
        )}
        {score >= 50 ? (
          <FaStar color="#ffca28" />
        ) : score >= 40 ? (
          <FaStarHalfAlt color="#ffca28" />
        ) : (
          <FaRegStar color="#ffca28" />
        )}
        {score >= 70 ? (
          <FaStar color="#ffca28" />
        ) : score >= 60 ? (
          <FaStarHalfAlt color="#ffca28" />
        ) : (
          <FaRegStar color="#ffca28" />
        )}
        {score >= 90 ? (
          <FaStar color="#ffca28" />
        ) : score >= 80 ? (
          <FaStarHalfAlt color="#ffca28" />
        ) : (
          <FaRegStar color="#ffca28" />
        )}
      </div>

      <div className="flex flex-row">
        {keywords.map((keyword, index) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
