import { useContext } from "react";
import { CountersContext } from "/src/contexts/countersContext";

const BadButton = () => {
  const { increaseBad } = useContext(CountersContext);
  return <button onClick={increaseBad}>Increase Bad</button>;
};

export default BadButton;
