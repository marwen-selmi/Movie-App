import React from "react";
import Rating from "./Rating";

function MovieCard(props) {
  return (
    <div className="MovieCard">
      <Rating minRating={props.movie.rating} />
      <img src={props.movie.image} alt={props.movie.name} />
      <h1>{props.movie.name} </h1>
      <h1>{props.movie.date} </h1>
    </div>
  );
}

export default MovieCard;
