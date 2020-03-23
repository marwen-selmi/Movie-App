import React from "react";
import SearchMovie from "./SearchMovie";
import { moviesData } from "./data";
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";

class MovieApp extends React.Component {
  state = {
    search: "",
    minRating: 1,
    moviesData: moviesData
  };
  handleSearch = valeur => {
    this.setState({
      search: valeur
    });
  };
  starindex = index => {
    this.setState({
      minRating: index
    });
  };
  addMovie = newmovie => {
    this.setState({
      moviesData: [...this.state.moviesData, newmovie]
    });
  };

  render() {
    return (
      <div>
        <SearchMovie
          handleSearch={this.handleSearch}
          minRating={this.state.minRating}
          starindex={this.starindex}
          search={this.search}
        />
        <MoviesList
          moviesData={this.state.moviesData.filter(
            (movie, i) =>
              movie.name
                .toLowerCase()
                .includes(this.state.search.toLowerCase().trim()) &&
              movie.rating >= this.state.minRating
          )}
        />
        <AddMovie addmovie={this.addMovie} />
      </div>
    );
  }
}

export default MovieApp;
