import AddOpinionForm from "components/AddOpinionForm";
import OpinionsList from "components/OpinionsList";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Donnez votre opinion !</h1>
      <OpinionsList />
      <AddOpinionForm />
    </div>
  );
}

export default App;
