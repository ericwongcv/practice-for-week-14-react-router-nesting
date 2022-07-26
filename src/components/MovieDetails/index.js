import { useParams } from "react-router-dom";

function MovieDetails(prop) {
  const { movieId } = useParams();

  const movieChoice = prop.movies.find((movie) => {
    return `${movie.id}` === movieId;
  });

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
