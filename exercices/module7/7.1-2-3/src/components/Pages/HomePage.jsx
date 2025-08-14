import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import PageTitle from "components/PageTitle/PageTitle";

const HomePage = () => {
  const { movies } = useOutletContext();

  return (
    <div>
      <PageTitle title="Mes films favoris" />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
