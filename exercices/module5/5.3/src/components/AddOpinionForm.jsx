import { useContext, useState } from "react";
import { OpinionsContext } from "/src/contexts/opinionsContext";
import { ThemeContext } from "/src/contexts/themeContext";

const AddOpinionForm = () => {
  const { addOpinion } = useContext(OpinionsContext);
  const { getCurrentThemeDetails } = useContext(ThemeContext);
  const theme = getCurrentThemeDetails();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addOpinion(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Votre opinion..."
        style={{
          marginRight: 8,
          background: theme.backgroundColor,
          color: theme.primaryTextColor,
          border: `1px solid ${theme.secondaryTextColor}`,
        }}
      />
      <button
        type="submit"
        style={{
          background: theme.linkColor,
          color: theme.backgroundColor,
          border: "none",
          borderRadius: 4,
          padding: "4px 12px",
          cursor: "pointer",
        }}
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddOpinionForm;
