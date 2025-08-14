import BadButton from "components/Buttons/BadButton";
import GoodButton from "components/Buttons/GoodButton";
import OkButton from "components/Buttons/OkButton";
import ResetButton from "components/Buttons/ResetButton";
import { CountersContext } from "/src/contexts/countersContext";
import { useContext } from "react";

const App = () => {
  const { good, ok, bad } = useContext(CountersContext);
  return (
    <div style={{ padding: 24 }}>
      <h2>Satisfaction vote</h2>
      <div style={{ marginBottom: 16 }}>
        <span>Good: {good} </span>
        <span>Ok: {ok} </span>
        <span>Bad: {bad}</span>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <GoodButton />
        <OkButton />
        <BadButton />
      </div>
      <ResetButton />
    </div>
  );
};

export default App;
