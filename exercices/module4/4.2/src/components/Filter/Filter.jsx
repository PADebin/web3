const Filter = ({ filter, onChange }) => (
  <div style={{ marginBottom: 16 }}>
    <label htmlFor="filter-input">filter shown with: </label>
    <input
      id="filter-input"
      value={filter}
      onChange={onChange}
      className="phonebook-input"
    />
  </div>
);

export default Filter;
