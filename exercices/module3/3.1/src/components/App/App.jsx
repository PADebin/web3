import Button from "components/Button/Button";
import Statistics from "components/Statistics/Statistics";
import Loading from "components/Loading/Loading";
import { useState, useEffect } from "react";

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
