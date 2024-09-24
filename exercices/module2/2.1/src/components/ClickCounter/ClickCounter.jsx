/* eslint-disable react/prop-types */
import '../App/App.css'
import { useState } from "react";

const ClickCounter = ({
    title,
    on10ClickMessage,
    onMouseOverMessage,
  }) => {
    const storedCount = JSON.parse(localStorage.getItem("count"));
    const [count, setCount] = useState(storedCount ?? 0);
    const [isHovered, setIsHovered] = useState(false); 

return (
    <div className="card">
      <h4>{title}</h4>
      {isHovered ? <p>{onMouseOverMessage}</p> : null}
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          localStorage.setItem("count", JSON.stringify(newCount));
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      > 
        count is {count}
      </button>
      {count >= 10 ? <p>{on10ClickMessage}</p> : null}
    </div>
  );
};

export default ClickCounter;