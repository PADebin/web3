import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const OpinionsContext = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([
    { id: uuidv4(), text: "Opinion A", votes: 3 },
    { id: uuidv4(), text: "Opinion B", votes: 8 },
    { id: uuidv4(), text: "Opinion C", votes: 1 },
  ]);

  const addOpinion = (text) => {
    if (!text.trim()) return;
    setOpinions([...opinions, { id: uuidv4(), text, votes: 1 }]);
  };

  const voteOpinion = (id) => {
    setOpinions((opinions) =>
      opinions.map((op) => (op.id === id ? { ...op, votes: op.votes + 1 } : op))
    );
  };

  const sortedOpinions = [...opinions].sort((a, b) => b.votes - a.votes);

  const exposedValue = {
    opinions,
    sortedOpinions,
    addOpinion,
    voteOpinion,
  };

  return (
    <OpinionsContext.Provider value={exposedValue}>
      {props.children}
    </OpinionsContext.Provider>
  );
};

export { OpinionsContext, ProviderWrapper };
