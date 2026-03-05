import { useMovieStore } from "../store/useMovieStore";

function DetailsPage({ movieId, onNavigate }) {
  const { movies } = useMovieStore();
  const movie = movies.find((m) => m.imdbID === movieId);
  console.log(movieId);
  console.log(movies);
  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => onNavigate("home")}>Back</button>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} width="200" />
      <p>{movie.overview}</p>
      <button onClick={() => onNavigate("seats", movieId)}>Choose Seat</button>
    </div>
  );
}

export default DetailsPage;
