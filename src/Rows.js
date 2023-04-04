import React from "react";
import { useState } from "react";
import axios from "./axios";
import { useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log("m", movies);
  // console.log(movies.length);

  const handleClick = (movie) => {
    console.log(trailerUrl);
    if (trailerUrl !== "") {
      // video is already playing , then end it hide the youtube link
      console.log("yes!!");
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          console.log("u", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="rows">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* posters */}

        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      <div>
        {" "}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
      </div>
    </div>
  );
}

export default Rows;
