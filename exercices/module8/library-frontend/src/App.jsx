import { useState } from "react";
import Authors from "./Authors";
import Books from "./Books";
import "./App.css";

function App() {
  const [page, setPage] = useState("authors");

  return (
    <div>
      <button onClick={() => setPage("authors")}>authors</button>
      <button onClick={() => setPage("books")}>books</button>

      {page === "authors" && <Authors />}
      {page === "books" && <Books />}
    </div>
  );
}

export default App;
