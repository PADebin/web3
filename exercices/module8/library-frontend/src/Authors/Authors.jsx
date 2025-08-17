import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../queries";

const Authors = () => {
  const { loading, data } = useQuery(ALL_AUTHORS);
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      alert(error.graphQLErrors[0]?.message || "Erreur lors de la mise à jour");
    },
  });

  const submit = async (e) => {
    e.preventDefault();
    await editAuthor({ variables: { name, setBornTo: Number(born) } });
    setName("");
    setBorn("");
  };

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>born</th>
            <th>books</th>
          </tr>
        </thead>
        <tbody>
          {data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born || ""}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>set birthyear</h3>
      <form onSubmit={submit}>
        <div>
          name
          <select
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          >
            <option value="" disabled>
              select author
            </option>
            {data.allAuthors.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          born
          <input
            type="number"
            value={born}
            onChange={(e) => setBorn(e.target.value)}
            required
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default Authors;
