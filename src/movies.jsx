import React, { useEffect, useState } from "react";
import Header from "@components/header.jsx";
import "@scss/search-bar.scss";
import "@scss/movies.scss";
import WhereToWatchModal from "./watch-modal";

const Movies = () => {
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=3ebdcea237cba8f1759952fa1674302f&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => setGenres(json.genres));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=3ebdcea237cba8f1759952fa1674302f&sort_by=popularity.desc`
    )
      .then((res) => res.json())
      .then((json) => setDefaultMovies(json.results));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3ebdcea237cba8f1759952fa1674302f&query=${searchTerm}`
      )
        .then((res) => res.json())
        .then((json) => setSearchMovies(json.results));
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getGenreNames = (movie) => {
    return movie.genre_ids
      .map((id) => genres.find((genre) => genre.id === id).name)
      .join(", ");
  };

  return (
    <>
      <Header key={self.crypto.randomUUID()} />
      <div className="all-movies">
        <div className="movies-header">
          <h1>Movies</h1>
          <p>Find your desired movie here!</p>
          <div className="search-container">
            <label>
              <input
                type="text"
                placeholder="Search movie"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </label>
          </div>
        </div>
        <div className="movies-list">
          {searchTerm
            ? searchMovies.map((movie) => (
                <div className="card" key={movie.id}>
                  <img
                    className="posters"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h2>{movie.title}</h2>
                  <p>Release Date: {movie.release_date.replace(/-/g, ".")}</p>
                  <p>Rating : {movie.vote_average}</p>
                  <p>Genres: {getGenreNames(movie)}</p>
                  <WhereToWatchModal movie={movie} />
                </div>
              ))
            : defaultMovies.map((movie) => (
                <div className="card" key={movie.id}>
                  <img
                    className="posters"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h2>{movie.title}</h2>
                  <p>Release Date: {movie.release_date.replace(/-/g, ".")}</p>
                  <p>Rating : {movie.vote_average}</p>
                  <p>Genres: {getGenreNames(movie)}</p>
                  <WhereToWatchModal movie={movie} appendTo="body" />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
