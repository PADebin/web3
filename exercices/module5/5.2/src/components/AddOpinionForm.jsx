import { useContext, useState } from "react";
import { OpinionsContext } from "/src/contexts/opinionsContext";

const AddOpinionForm = () => {
  const { addOpinion } = useContext(OpinionsContext);
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
        style={{ marginRight: 8 }}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddOpinionForm;
