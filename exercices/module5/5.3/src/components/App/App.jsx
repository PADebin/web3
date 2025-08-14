import { useContext } from "react";
import { ThemeContext } from "/src/contexts/themeContext";
import OpinionsList from "components/OpinionsList";
import AddOpinionForm from "components/AddOpinionForm";
import Footer from "components/Footer";

function App() {
  const { getCurrentThemeDetails } = useContext(ThemeContext);
  const theme = getCurrentThemeDetails();
  return (
    <div
      style={{
        background: theme.backgroundColor,
        color: theme.primaryTextColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: 500,
          margin: "40px auto",
          padding: 24,
          borderRadius: 8,
          boxShadow: "0 2px 8px #0001",
          background: theme.backgroundColor,
          color: theme.primaryTextColor,
        }}
      >
        <h1>Donnez votre opinion !</h1>
        <OpinionsList />
        <AddOpinionForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
