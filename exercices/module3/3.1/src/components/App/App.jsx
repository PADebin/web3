import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

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

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div
      style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h1>Donnez votre avis</h1>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <Button onClick={() => setGood(good + 1)} text="bon" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutre" />
        <Button onClick={() => setBad(bad + 1)} text="mauvais" />
      </div>
      <h2>Statistiques</h2>
      {good + neutral + bad === 0 ? (
        <div>Aucun commentaire recueilli</div>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;
