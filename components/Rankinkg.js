const Ranking = ({ ranking }) => {
  return (
    <div>
      {ranking.map((item) => (
        <p>{item.score}</p>
      ))}
    </div>
  );
};

export default Ranking;
