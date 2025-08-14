import { useContext } from "react";
import { OpinionsContext } from "/src/contexts/opinionsContext";
import { ThemeContext } from "/src/contexts/themeContext";

const OpinionsList = () => {
  const { sortedOpinions, voteOpinion } = useContext(OpinionsContext);
  const { getCurrentThemeDetails } = useContext(ThemeContext);
  const theme = getCurrentThemeDetails();
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
            background: theme.backgroundColor,
            color: theme.primaryTextColor,
            borderBottom: `1px solid ${theme.secondaryTextColor}22`,
          }}
        >
          <span style={{ marginRight: 12 }}>{opinion.text}</span>
          <span
            style={{
              minWidth: 24,
              textAlign: "center",
              fontWeight: 600,
              marginRight: 10,
              color: theme.secondaryTextColor,
            }}
          >
            {opinion.votes}
          </span>
          <button
            style={{
              background: theme.linkColor,
              color: theme.backgroundColor,
              border: "none",
              borderRadius: 4,
              padding: "4px 12px",
              cursor: "pointer",
            }}
            onClick={() => voteOpinion(opinion.id)}
          >
            Vote
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OpinionsList;
