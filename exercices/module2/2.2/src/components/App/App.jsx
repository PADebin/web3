import ColorBox from "components/ColorBox/ColorBox";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        marginTop: 40,
      }}
    >
      <ColorBox />
      <ColorBox />
      <ColorBox />
    </div>
  );
}

export default App;
