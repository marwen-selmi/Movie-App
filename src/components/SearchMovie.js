import React from "react";
import Rating from "./Rating";

function SearchMovie(props) {
  // console.log("myprops is", props);
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Searchmovie"
        onChange={e => {
          props.handleSearch(e.target.value);
        }}
      />
      <Rating minRating={props.minRating} starindex={props.starindex} />
    </div>
  );
}

export default SearchMovie;
