import React from "react";
import { movieList } from "./Data";
import { useParams } from "react-router-dom";

const Another = () => {
  const { id } = useParams();
  const pageMovie = movieList.find((movie) => movie.id === +id);
  const trailerUrl = pageMovie.url.split('=')[1]
  return (
    <div  style={{marginLeft:"500px", marginTop:"100px"}}>
      <h1>{pageMovie.title}</h1>
      <iframe className="another"
        title={pageMovie.title}
        src={`https://www.youtube.com/embed/${trailerUrl}`}
        style={{
          width: "500px", height:"400px", }}
       ></iframe>
    </div>
  );
};

export default Another;
