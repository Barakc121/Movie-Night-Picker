import { useMovieStore } from '../store/useMovieStore';

function HomePage({ onNavigate }) {
  const movies = useMovieStore((state) => state.movies);
  const searchQuery = useMovieStore((state) => state.searchQuery);
  const setSearchQuery = useMovieStore((state) => state.setSearchQuery);

  const filtered = (movies || []).filter(m => {
    const title = m?.Title || m?.title || "";
    return title.toLowerCase().includes((searchQuery || "").toLowerCase());
  });

  return (
    <main>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <div>
        {filtered.map((movie, index) => (
          <div key={index} onClick={() => onNavigate('details', movie.Title || movie.title)}>
            <img 
              src={movie.Poster || movie.poster || (movie.Images && movie.Images[0]) || "https://via.placeholder.com/100"} 
              width="100" 
            />
            <h3>{movie.Title || movie.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;