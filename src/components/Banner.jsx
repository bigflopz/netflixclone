import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Request";
import "./Banner.css";
import ReactPlayer from "react-player";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.requestPopular);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        objectPosition:"0 0"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original}
        </h1>
        <div>
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"/>
    </header>
  );
}

export default Banner;
