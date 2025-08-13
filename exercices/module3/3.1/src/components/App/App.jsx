import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const moyenne =
    total === 0 ? 0 : ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(2);
  const percentPos =
    total === 0 ? "0%" : ((good / total) * 100).toFixed(1) + "%";
  return (
    <div>
      <div>bon : {good}</div>
      <div>neutre : {neutral}</div>
      <div>mauvais : {bad}</div>
      <hr style={{ margin: "16px 0" }} />
      <div>total : {total}</div>
      <div>moyenne : {moyenne}</div>
      <div>% positifs : {percentPos}</div>
    </div>
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
        <button onClick={() => setGood(good + 1)}>bon</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutre</button>
        <button onClick={() => setBad(bad + 1)}>mauvais</button>
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
