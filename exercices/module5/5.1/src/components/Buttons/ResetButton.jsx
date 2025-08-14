import { useContext } from "react";
import { CountersContext } from "/src/contexts/countersContext";

const ResetButton = () => {
  const { resetAll } = useContext(CountersContext);
  return <button onClick={resetAll}>Reset Counters</button>;
};

export default ResetButton;
