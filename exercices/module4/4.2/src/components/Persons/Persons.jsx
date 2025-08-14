const Persons = ({ persons, onDelete }) => (
  <ul>
    {persons.map((person) => (
      <li key={person.name}>
        {person.name} {person.number && `: ${person.number}`}
        <button style={{ marginLeft: 8 }} onClick={() => onDelete(person)}>
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default Persons;
