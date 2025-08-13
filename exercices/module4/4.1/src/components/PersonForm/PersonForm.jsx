const PersonForm = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => (
  <form onSubmit={onSubmit}>
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
);

export default PersonForm;
