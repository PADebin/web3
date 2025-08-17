import { useState } from "react";
import Authors from "../Authors/Authors";
import Books from "../Books/Books";
import AddBook from "../AddBook/AddBook";
import "./App.css";

function App() {
  const [page, setPage] = useState("authors");

  return (
    <div>
      <button onClick={() => setPage("authors")}>authors</button>
      <button onClick={() => setPage("books")}>books</button>
      <button onClick={() => setPage("add")}>add book</button>

      {page === "authors" && <Authors />}
      {page === "books" && <Books />}
      {page === "add" && <AddBook />}
    </div>
  );
}

export default App;
