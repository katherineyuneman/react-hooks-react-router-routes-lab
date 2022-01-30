import React from "react";
import { movies } from "../data";

function Movies() {

  const renderEachMovie = 
    movies.map(movie => {
      return <div key={movie.title}>
        {movie.title}
        {movie.time}
        <ul >{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>

      </div>
      }
      )

  return <div>
    <h1>Movies Page</h1>
    {renderEachMovie}
  </div>;
}

export default Movies;
