const Persons = ({ persons }) => (
  <ul>
    {persons.map((person) => (
      <li key={person.name}>
        {person.name} {person.number && `: ${person.number}`}
      </li>
    ))}
  </ul>
);

export default Persons;
