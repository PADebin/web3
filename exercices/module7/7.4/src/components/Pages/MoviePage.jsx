import { useParams, useOutletContext } from "react-router-dom";
import PageTitle from "components/PageTitle/PageTitle";

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useOutletContext();
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) return <p>Film introuvable.</p>;

  return (
    <div>
      <PageTitle title={movie.title} />
      <img src={movie.imageUrl} alt={movie.title} style={{ maxWidth: 200 }} />
      <p>
        <strong>Réalisateur :</strong> {movie.director}
      </p>
      <p>
        <strong>Durée :</strong> {movie.duration} min
      </p>
      <p>
        <strong>Description :</strong> {movie.description}
      </p>
      {movie.budget && (
        <p>
          <strong>Budget :</strong> {movie.budget} M$
        </p>
      )}
    </div>
  );
};

export default MoviePage;
