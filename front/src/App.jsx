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

  return (
    <main>
      {page === 'home' && <HomePage onNavigate={navigateTo} />}
      {page === 'details' && <DetailsPage movieId={selectedMovieId} onNavigate={navigateTo} />}
      {page === 'seats' && <SeatsPage movieId={selectedMovieId} onNavigate={navigateTo} />}
    </main>
  );
}

export default App;