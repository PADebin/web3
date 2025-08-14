import { useContext } from "react";
import { OpinionsContext } from "/src/contexts/opinionsContext";

const OpinionsList = () => {
  const { sortedOpinions, voteOpinion } = useContext(OpinionsContext);
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {sortedOpinions.map((opinion) => (
        <li
          key={opinion.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 8,
            gap: 8,
          }}
        >
          <span style={{ marginRight: 12 }}>{opinion.text}</span>
          <span
            style={{
              minWidth: 24,
              textAlign: "center",
              fontWeight: 600,
              marginRight: 10,
            }}
          >
            {opinion.votes}
          </span>
          <button onClick={() => voteOpinion(opinion.id)}>Vote</button>
        </li>
      ))}
    </ul>
  );
};

export default OpinionsList;
