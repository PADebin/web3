import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK, ALL_BOOKS, ALL_AUTHORS } from "../queries";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
    onError: (error) => {
      alert(
        error.graphQLErrors[0]?.message || "Erreur lors de l'ajout du livre"
      );
    },
  });

  const submit = async (event) => {
    event.preventDefault();
    await addBook({
      variables: {
        title,
        author,
        published: Number(published),
        genres,
      },
    });
    setTitle("");
    setAuthor("");
    setPublished("");
    setGenres([]);
    setGenre("");
  };

  const addGenre = () => {
    if (genre && !genres.includes(genre)) {
      setGenres(genres.concat(genre));
      setGenre("");
    }
  };

  return (
    <div>
      <h2>Add book</h2>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            required
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
            required
          />
        </div>
        <div>
          published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(target.value)}
            required
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
            placeholder="add genre"
          />
          <button type="button" onClick={addGenre}>
            add genre
          </button>
        </div>
        <div>genres: {genres.join(", ")}</div>
        <button type="submit">create book</button>
      </form>
    </div>
  );
};

export default AddBook;
