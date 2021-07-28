import React, { useState } from "react";
import { movieList } from "../Components/Data";
import MovieCard from "./MovieCard";
import Rating from "./Rating";
import Searchbar from "./Searchbar";

const DataComp = () => {
  const mainStyle = {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const filteredMovieList = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <main style={mainStyle}>
        <Searchbar handleSearch={handleSearch} />
        <Rating />
      </main>
      {filteredMovieList.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </>
  );
};

export default DataComp;
