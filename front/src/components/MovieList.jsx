// import { useState, useEffect } from "react";
// import { useStore } from "zustand";
// import React from "react";

// function MovieList({ onSelectMovie }) {
//   const [movies, setMovies] = useStore();
//   const [search, setsearch] = useState("");

//   const filterMovies = movies.filter((movie) =>
//     movie.Title.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div>
//       {/* input בשביל לחפש  */}
//       <input
//         type="text"
//         placeholder="איזה סרט בא לך לראות"
//         value={search}
//         onChange={(e) => setsearch(e.target.value)}
//       />
//       {/*  */}
//       <div>
//         {filterMovies.map(movie => ())}
//       </div>
//     </div>
//   );
// }

// export default MovieList;
