import { useContext } from "react";
import { CountersContext } from "/src/contexts/countersContext";

const GoodButton = () => {
  const { increaseGood } = useContext(CountersContext);
  return <button onClick={increaseGood}>Increase Good</button>;
};

export default GoodButton;
