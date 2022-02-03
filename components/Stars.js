import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ score, color, size }) => {
  return (
    <div className="flex flex-row">
      {score >= 10 ? (
        <FaStar color={color} size={size} />
      ) : score >= 0 ? (
        <FaStarHalfAlt color={color} size={size} />
      ) : (
        <FaRegStar color={color} size={size} />
      )}
      {score >= 30 ? (
        <FaStar color={color} size={size} />
      ) : score >= 20 ? (
        <FaStarHalfAlt color={color} size={size} />
      ) : (
        <FaRegStar color={color} size={size} />
      )}
      {score >= 50 ? (
        <FaStar color={color} size={size} />
      ) : score >= 40 ? (
        <FaStarHalfAlt color={color} size={size} />
      ) : (
        <FaRegStar color={color} size={size} />
      )}
      {score >= 70 ? (
        <FaStar color={color} size={size} />
      ) : score >= 60 ? (
        <FaStarHalfAlt color={color} size={size} />
      ) : (
        <FaRegStar color={color} size={size} />
      )}
      {score >= 90 ? (
        <FaStar color={color} size={size} />
      ) : score >= 80 ? (
        <FaStarHalfAlt color={color} size={size} />
      ) : (
        <FaRegStar color={color} size={size} />
      )}
    </div>
  );
};

Stars.defaultProps = {
  color: "#ffca28",
  size: 24,
};

export default Stars;
