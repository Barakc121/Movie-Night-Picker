import { useState, useEffect } from 'react';
import { useMovieStore } from './store/useMovieStore';
import HomePage from './pages/HomePages';
import DetailsPage from './pages/DetailsPage';
import SeatsPage from './pages/SeatsPage';


function App() {
  const { fetchMovies } = useMovieStore();
  const [page, setPage] = useState('home');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const navigateTo = (pageName, id = null) => {
    setPage(pageName);
    setSelectedMovieId(id);
  };

  return (<div><nav>
    <h1>Movie Night</h1>
    <h3>

    Search a movie and pick your seats
    </h3>


  </nav>
    <main>
      {page === 'home' && <HomePage onNavigate={navigateTo} />}
      {page === 'details' && <DetailsPage movieId={selectedMovieId} onNavigate={navigateTo} />}
      {page === 'seats' && <SeatsPage movieId={selectedMovieId} onNavigate={navigateTo} />}
    </main></div>
  );
}

export default App;