import React, { useState } from "react";
import "../styles/main.css";
import MoviesData from "./MoviesData";
import StarRating from "./StarRating";

const Main = () => {
  const [query, setQuery] = useState();
  const FilteredMovies = MoviesData.filter(
    (movie) =>
      movie.Title.toLocaleLowerCase().includes(query) ||
      movie.Category.toLocaleLowerCase().includes(query) ||
      movie.Rating.toLocaleString().includes(query)
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="main">
      <div>
        <input
          type="text"
          placeholder="Enter Movie Name"
          className="search"
          onClick={() => setQuery("")}
          onChange={(e) => setQuery(e.target.value)}
        />
        {FilteredMovies.map((i) => (
          <div className="movie-list">
            <h4 className="title">{i.Title}</h4>
            <div className="rating">
              <StarRating Rating={i.Rating} />
            </div>
            <span className="category">{i.Category}</span>
            <br></br>
          </div>
        ))}
      </div>
      <div className="dropbox">
        <select className="select" onChange={handleChange}>
          <option>Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="dropbox">
        <select className="select" onChange={handleChange}>
          <option>Genre</option>
          <option value="comedy"> Comedy</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
    </div>
  );
};

export default Main;
