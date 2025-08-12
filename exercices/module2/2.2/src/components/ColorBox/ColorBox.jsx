import { useState } from "react";

const COLORS = [
  { name: "rouge", value: "red" },
  { name: "vert", value: "green" },
  { name: "bleu", value: "blue" },
  { name: "jaune", value: "yellow" },
  { name: "violet", value: "purple" },
];

function ColorBox() {
  const [colorIndex, setColorIndex] = useState(0);
  const nextIndex = (colorIndex + 1) % COLORS.length;

  return (
    <div
      style={{
        backgroundColor: COLORS[colorIndex].value,
        width: 200,
        height: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        margin: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ marginTop: 10, fontWeight: "bold" }}>
        {COLORS[colorIndex].name}
      </div>
      <button onClick={() => setColorIndex(nextIndex)}>
        {COLORS[nextIndex].name}
      </button>
    </div>
  );
}

export default ColorBox;
