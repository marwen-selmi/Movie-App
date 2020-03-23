import React from "react";
import MovieCard from "./MovieCard";

function MoviesList(props) {
  return (
    <div className="MoviesList">
      {props.moviesData.map((movie, i) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
