import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from '../axios';

const base_url ="https://image.tmdb.org/t/p/w500"

function Movie({title, fetchUrl}) {
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

  console.log(movieList)

  return (
    <div>
      <h2>{title}</h2>
      <div className="movies">
        {movieList.map((movie) => (
          <img
          key={movie.id}
            className="movie"
            src={`${base_url}${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Movie;
