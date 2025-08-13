import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName.trim() === "") return;
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "24px" }}>
      <h2>Phonebook</h2>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="filter-input">filter shown with: </label>
        <input
          id="filter-input"
          value={filter}
          onChange={handleFilterChange}
          className="phonebook-input"
        />
      </div>
      <h3>Add a new number</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="name-input">name: </label>
          <input
            id="name-input"
            value={newName}
            onChange={handleNameChange}
            className="phonebook-input"
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="number-input">number: </label>
          <input
            id="number-input"
            value={newNumber}
            onChange={handleNumberChange}
            className="phonebook-input"
          />
        </div>
        <div>
          <button type="submit" className="phonebook-add-btn">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number && `: ${person.number}`}
          </li>
        ))}
      </ul>
      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
