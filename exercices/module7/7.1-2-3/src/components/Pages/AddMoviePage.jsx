import { useOutletContext, useNavigate } from "react-router-dom";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import PageTitle from "components/PageTitle/PageTitle";

const AddMoviePage = () => {
  const { addMovie } = useOutletContext();
  const navigate = useNavigate();

  const handleMovieAdded = (movie) => {
    addMovie(movie);
    navigate("/movies");
  };

  return (
    <div>
      <PageTitle title="Ajouter un film" />
      <AddMovieForm onMovieAdded={handleMovieAdded} />
    </div>
  );
};

export default AddMoviePage;
