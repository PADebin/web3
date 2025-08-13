import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => (
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
