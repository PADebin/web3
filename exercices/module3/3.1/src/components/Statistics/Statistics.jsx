import StatisticLine from "components/StatisticLine/StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const moyenne =
    total === 0 ? 0 : ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(2);
  const percentPos =
    total === 0 ? "0%" : ((good / total) * 100).toFixed(1) + "%";
  return (
    <table style={{ borderCollapse: "collapse", marginTop: 8 }}>
      <tbody>
        <StatisticLine text="bon" value={good} />
        <StatisticLine text="neutre" value={neutral} />
        <StatisticLine text="mauvais" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="moyenne" value={moyenne} />
        <StatisticLine text="% positifs" value={percentPos} />
      </tbody>
    </table>
  );
};

export default Statistics;
