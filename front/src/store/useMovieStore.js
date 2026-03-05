import { create } from 'zustand';

export const useMovieStore = create((set) => ({
  movies: [],
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  fetchMovies: async () => {
    try {
      const response = await fetch('http://localhost:5000/api/movies');
      const data = await response.json();
      console.log(data)
      set({ movies: data });
    } catch (err) {
      console.error(err);
    }
  }
}));