import { useLocalStorage } from '../hooks/useLocalStorage';

function SeatsPage({ movieId, onNavigate }) {
  const [allSeats, setAllSeats] = useLocalStorage('movie_seats', {});
  const currentSeat = allSeats[movieId];
  const chairs = Array.from({ length: 30 }, (_, i) => i + 1);

  const select = (num) => {
    setAllSeats({ ...allSeats, [movieId]: num });
  };

  return (
    <div>
      <button onClick={() => onNavigate('details', movieId)}>Back</button>
      <div>
        {chairs.map(num => (
          <button 
            key={num} 
            onClick={() => select(num)}
            style={{ background: currentSeat === num ? 'red' : 'blue' }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeatsPage;