import { useContext } from "react";
import { CountersContext } from "/src/contexts/countersContext";

const OkButton = () => {
  const { increaseOk } = useContext(CountersContext);
  return <button onClick={increaseOk}>Increase Ok</button>;
};

export default OkButton;
