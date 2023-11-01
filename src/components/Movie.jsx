import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from '../axios';

const base_url ="https://image.tmdb.org/t/p/w500"

function Movie({title, fetchUrl, isLargeMovie}) {
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    async function fetchData(){
    const request = await axios.get(fetchUrl);
    setMovieList(request.data.results)
    console.log(request)
    return request;
    }
    fetchData();
    
  }, [fetchUrl]);

  

  return (
    <div>
      <h2>{title}</h2>
      <div className="movies">
        {movieList.map((movie) => (
          <img
          key={movie.id}
            className={`movie ${isLargeMovie && "poster_movie"}`}
            src={`${base_url}${isLargeMovie ? movie.poster_path : movie.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Movie;
